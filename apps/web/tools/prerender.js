#!/usr/bin/env node
// Prerenders every route to static HTML after `vite build`, so crawlers (and
// visitors before JS loads) get real content, headings, links and per-page meta tags.
//
// Output (served by Vercel with "cleanUrls": true):
//   /           -> index.html
//   /portfolio  -> portfolio.html, etc.
//   unknown URL -> 404.html (served with HTTP 404)

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(process.cwd(), '../..');
const clientDir = path.join(root, 'dist', 'apps', 'web');
const ssrDir = path.join(root, 'dist', 'ssr');

// The SSR bundle is ESM; tell Node so without a warning
fs.writeFileSync(path.join(ssrDir, 'package.json'), '{"type":"module"}');

const { render, PRERENDER_ROUTES } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf8');

const getAttr = (tags, pattern) => {
  const match = tags.match(pattern);
  return match ? match[1] : null;
};

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function buildPage(url, { html, head }) {
  let page = template;

  // Replace the generic tags from index.html with the page's own Helmet tags
  page = page.replace(/\s*<title>[\s\S]*?<\/title>/, '');
  page = page.replace(/\s*<meta name="description"[^>]*>/, '');
  page = page.replace('</head>', `\t${head.title}${head.meta}${head.link}\n\t</head>`);

  // Keep Open Graph tags in sync with the page
  const title = getAttr(head.title, />([^<]*)<\/title>/);
  const description = getAttr(head.meta, /name="description" content="([^"]*)"/);
  const canonical = getAttr(head.link, /rel="canonical" href="([^"]*)"/);
  if (title) page = page.replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`);
  if (description) page = page.replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`);
  if (canonical) page = page.replace(/(<meta property="og:url" content=")[^"]*/, `$1${escapeAttr(canonical)}`);

  if (!page.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in index.html');
  }
  return page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

const outputs = [
  ...PRERENDER_ROUTES.map((url) => [url, url === '/' ? 'index.html' : `${url.slice(1)}.html`]),
  ['/__not-found__', '404.html'],
];

for (const [url, file] of outputs) {
  const result = await render(url);
  if (!result.html.includes('<h1')) {
    console.warn(`⚠️  ${url}: prerendered HTML has no <h1>`);
  }
  fs.writeFileSync(path.join(clientDir, file), buildPage(url, result), 'utf8');
  console.log(`✅ Prerendered ${url} -> ${file}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
