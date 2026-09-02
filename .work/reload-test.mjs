// Reload stress test: hard/normal reloads, screenshot past the curtain window,
// saved for pixel analysis to catch any white-flash state.
import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const URL_TO_TEST = process.argv[2] || 'http://127.0.0.1:4180/mr-ahmed-samir-portfolio/';
const ROUNDS = Number(process.argv[3] || 15);
const OUT_DIR = join(process.cwd(), '.work', 'reload-shots');
mkdirSync(OUT_DIR, { recursive: true });

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const profile = mkdtempSync(join(tmpdir(), 'edge-reload-'));
const proc = spawn(EDGE, [
  '--headless=new',
  `--user-data-dir=${profile}`,
  '--remote-debugging-port=0',
  '--no-first-run',
  '--disable-extensions',
  '--window-size=1400,900',
  'about:blank',
], { stdio: 'pipe' });

const stderr = [];
proc.stderr.on('data', (d) => stderr.push(String(d)));

async function getDebuggerUrl() {
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 250));
    const m = stderr.join('').match(/ws:\/\/[^\s]+/);
    if (m) return m[0];
  }
  throw new Error('no ws url');
}

const ws = new WebSocket(await getDebuggerUrl());
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let msgId = 0;
const pending = new Map();
const exceptions = [];
function send(method, params = {}, sessionId) {
  return new Promise((resolve, reject) => {
    const id = ++msgId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
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

const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
await send('Page.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);

let whiteResults = [];
for (let i = 1; i <= ROUNDS; i++) {
  const hard = i % 3 === 0; // every third reload is a hard reload (Ctrl+F5 parity)
  await send('Page.navigate', { url: 'about:blank' }, sessionId);
  await new Promise(r => setTimeout(r, 120));
  await send('Page.navigate', { url: URL_TO_TEST }, sessionId);
  // sample at 1600ms: curtain guarantees gone by ~1400ms worst case
  await new Promise(r => setTimeout(r, 1600));
  const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId);
  const file = join(OUT_DIR, `shot-${String(i).padStart(2, '0')}${hard ? '-hard' : ''}.png`);
  writeFileSync(file, Buffer.from(shot.data, 'base64'));

  const state = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => ({
      curtain: !!document.getElementById('site-curtain'),
      containerOpacity: getComputedStyle(document.getElementById('three-canvas-container')).opacity,
      canvasW: document.getElementById('three-canvas')?.width,
      letters: document.querySelectorAll('#three-canvas ~ *').length,
    }))()`,
  }, sessionId);
  whiteResults.push({ i, hard, file, ...state.result.value });
}

console.log(JSON.stringify(whiteResults, null, 1));
console.log('EXCEPTIONS:', exceptions.length);
exceptions.slice(0, 3).forEach(e => console.log(e));
ws.close();
proc.kill();
process.exit(0);
