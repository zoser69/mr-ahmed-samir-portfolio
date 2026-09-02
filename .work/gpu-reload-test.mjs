// Attach-mode reload stress test against a VISIBLE Edge (real GPU compositor).
// Usage: node gpu-reload-test.mjs <urlSubstring> <rounds>
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MATCH = process.argv[2] || 'mr-ahmed-samir-portfolio';
const ROUNDS = Number(process.argv[3] || 10);
const OUT_DIR = join(process.cwd(), '.work', 'gpu-shots');
mkdirSync(OUT_DIR, { recursive: true });

const targets = await (await fetch('http://127.0.0.1:9222/json')).json();
const page = targets.find(t => t.type === 'page' && t.url.includes(MATCH));
if (!page) { console.error('No page target matching', MATCH, targets.map(t => t.url)); process.exit(1); }

const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let msgId = 0;
const pending = new Map();
const exceptions = [];
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++msgId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    return;
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    const d = msg.params.exceptionDetails;
    exceptions.push(d.exception?.description || d.text);
  }
};

await send('Page.enable');
await send('Runtime.enable');

const results = [];
for (let i = 1; i <= ROUNDS; i++) {
  const hard = i % 3 === 0;
  await send('Page.reload', { ignoreCache: hard });
  // 1600ms: worst-case curtain lift (~1400ms) already passed
  await new Promise(r => setTimeout(r, 1600));
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const file = join(OUT_DIR, `gpu-${String(i).padStart(2, '0')}${hard ? '-hard' : ''}.png`);
  writeFileSync(file, Buffer.from(shot.data, 'base64'));
  const state = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => ({
      curtain: !!document.getElementById('site-curtain'),
      containerOpacity: getComputedStyle(document.getElementById('three-canvas-container')).opacity,
      canvasW: document.getElementById('three-canvas')?.width,
      ready: document.readyState,
    }))()`,
  });
  results.push({ i, hard, ...state.result.value });
  console.log(`round ${i}${hard ? ' (hard)' : ''}:`, JSON.stringify(state.result.value));
}
console.log('EXCEPTIONS:', exceptions.length);
exceptions.slice(0, 3).forEach(e => console.log(e));
ws.close();
process.exit(0);
