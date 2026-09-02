// Static server simulating GitHub Pages project-site layout:
// serves ./dist under the /mr-ahmed-samir-portfolio/ prefix.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const BASE = '/mr-ahmed-samir-portfolio/';
const ROOT = join(process.cwd(), 'dist');
const PORT = 4180;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);

    if (!pathname.startsWith(BASE)) {
      // GitHub Pages redirects bare project root to the base path
      res.writeHead(302, { Location: BASE });
      res.end();
      return;
    }

    let rel = pathname.slice(BASE.length);
    if (rel === '' || rel.endsWith('/')) rel += 'index.html';
    const filePath = normalize(join(ROOT, rel));
    if (!filePath.startsWith(normalize(ROOT))) {
      res.writeHead(403); res.end(); return;
    }

    let body;
    try {
      body = await readFile(filePath);
    } catch {
      // unknown paths fall back to index.html like a static host would
      body = await readFile(join(ROOT, 'index.html'));
      res.writeHead(200, { 'Content-Type': MIME['.html'], 'Cache-Control': 'no-cache' });
      res.end(body);
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME[extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(body);
  } catch (err) {
    res.writeHead(500);
    res.end(String(err));
  }
}).listen(PORT, '127.0.0.1', () => console.log(`GH-Pages sim serving dist at http://127.0.0.1:${PORT}${BASE}`));
