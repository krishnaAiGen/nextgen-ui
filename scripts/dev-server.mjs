// Zero-dependency static dev server for the Design Canvas mockups.
//
// The .dc.html pages are rendered entirely in the browser by public/support.js,
// which fetch()es sibling components (e.g. Header.dc.html) over HTTP. That means
// opening the files via file:// fails on CORS — they have to be served.
//
// Behaviour here mirrors vercel.json so local and deployed look the same:
//   /  ->  302 /Home.dc.html   (the runtime derives the root component name from
//                               the URL path, so it must end in .dc.html)

import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../public/', import.meta.url));
const ENTRY = '/Home.dc.html';
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

/** Resolve a URL pathname to an on-disk path, refusing anything outside public/. */
function resolveSafe(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const target = normalize(join(ROOT, decoded));
  if (target !== ROOT.slice(0, -1) && !target.startsWith(ROOT)) return null;
  return target;
}

const server = createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname === '/' || pathname === '/index.html') {
    res.writeHead(302, { Location: ENTRY });
    res.end();
    return;
  }

  const filePath = resolveSafe(pathname);
  if (!filePath) {
    res.writeHead(400, { 'Content-Type': MIME['.txt'] });
    res.end('Bad request');
    return;
  }

  try {
    const info = await stat(filePath);
    if (info.isDirectory()) throw new Error('is a directory');

    res.writeHead(200, {
      'Content-Type': MIME[extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Content-Length': info.size,
      'Cache-Control': 'no-cache',
    });
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(404, { 'Content-Type': MIME['.html'] });
    res.end(
      `<!doctype html><meta charset="utf-8"><title>404</title>` +
        `<body style="font:16px/1.5 system-ui;padding:40px">` +
        `<h1>404 — not found</h1><p><code>${pathname}</code></p>` +
        `<p><a href="${ENTRY}">Go to Home</a></p>`
    );
  }
});

server.listen(PORT, HOST, () => {
  console.log(`\n  NextGenIQ Press mockups`);
  console.log(`  serving ${ROOT.replace(process.cwd() + sep, '')}`);
  console.log(`\n  ➜  http://${HOST}:${PORT}${ENTRY}\n`);
});
