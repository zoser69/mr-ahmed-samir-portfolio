// CDP diagnostic: launch Edge headless against the preview build, capture
// console errors, exceptions, and the live DOM state of the curtain/canvas.
import { spawn } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const URL_TO_TEST = process.argv[2] || 'http://localhost:4173/';
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const profile = mkdtempSync(join(tmpdir(), 'edge-cdp-'));
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
    const match = stderr.join('').match(/ws:\/\/[^\s]+/);
    if (match) return match[0];
  }
  throw new Error('No devtools ws url found in stderr:\n' + stderr.join(''));
}

const wsBase = await getDebuggerUrl();
// The browser-level websocket: create a fresh target session via Target.
const ws = new WebSocket(wsBase);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let msgId = 0;
const pending = new Map();
const consoleLogs = [];
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
  if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type !== 'debug') {
    const text = msg.params.args.map(a => a.value ?? a.description ?? '').join(' ');
    consoleLogs.push(`[${msg.params.type}] ${text}`);
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    exceptions.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
  }
};

// Create our own page target
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

await send('Page.enable', {}, sessionId);
await send('Runtime.enable', {}, sessionId);
await send('Log.enable', {}, sessionId);

await send('Page.navigate', { url: URL_TO_TEST }, sessionId);
await new Promise(r => setTimeout(r, 5000)); // let the app fully initialize

const evalJs = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true }, sessionId);
  return r.result.value;
};

const diag = await evalJs(`(() => {
  const curtain = document.getElementById('site-curtain');
  const container = document.getElementById('three-canvas-container');
  const canvas = document.getElementById('three-canvas');
  const header = document.querySelector('header');
  const h1 = document.querySelector('h1');
  const cs = (el) => el ? getComputedStyle(el) : null;
  const curtainCs = cs(curtain);
  const containerCs = cs(container);
  const headerCs = cs(header);
  return {
    readyState: document.readyState,
    curtain: curtain ? { inDom: true, opacity: curtain.style.opacity, computedOpacity: curtainCs.opacity, bg: curtainCs.backgroundColor, zIndex: curtainCs.zIndex } : { inDom: false },
    container: container ? { computedOpacity: containerCs.opacity, inlineOpacity: container.style.opacity, bg: containerCs.backgroundColor, zIndex: containerCs.zIndex, display: containerCs.display } : null,
    canvas: canvas ? { display: cs(canvas).display, w: canvas.width, h: canvas.height } : null,
    header: header ? { computedOpacity: headerCs.opacity, visibility: headerCs.visibility, display: headerCs.display, rectTop: header.getBoundingClientRect().top, bg: headerCs.backgroundColor } : null,
    h1: h1 ? { computedOpacity: cs(h1).opacity, rectTop: h1.getBoundingClientRect().top, color: cs(h1).color } : null,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    htmlBg: getComputedStyle(document.documentElement).backgroundColor,
  };
})()`);

const shot = await send('Page.captureScreenshot', { format: 'png' }, sessionId);
const { writeFileSync } = await import('node:fs');
writeFileSync('.work/cdp-shot.png', Buffer.from(shot.data, 'base64'));

console.log('=== DIAGNOSTICS ===');
console.log(JSON.stringify(diag, null, 2));
console.log('=== CONSOLE LOGS ===');
consoleLogs.forEach(l => console.log(l));
console.log('=== EXCEPTIONS ===');
exceptions.forEach(e => console.log(e));

await send('Target.closeTarget', { targetId });
ws.close();
proc.kill();
process.exit(0);
