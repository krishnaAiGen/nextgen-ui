// There is nothing to compile — public/ is the deployable artifact as-is.
// This step just sanity-checks it so a broken reference fails the Vercel build
// instead of turning into a blank page in production.

import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../public/', import.meta.url));
const errors = [];

const exists = (p) =>
  access(join(ROOT, p)).then(
    () => true,
    () => false
  );

const entries = await readdir(ROOT).catch(() => {
  console.error('✗ public/ is missing — nothing to deploy.');
  process.exit(1);
});

const pages = entries.filter((f) => f.endsWith('.dc.html'));
if (!pages.includes('Home.dc.html')) {
  errors.push('Home.dc.html is missing — it is the site entry point.');
}

for (const page of pages) {
  const html = await readFile(join(ROOT, page), 'utf8');

  // Components the runtime will fetch as ./<name>.dc.html
  for (const [, name] of html.matchAll(/<(?:dc|x)-import\s[^>]*name="([^"]+)"/g)) {
    if (!(await exists(`${name}.dc.html`))) {
      errors.push(`${page}: imports <${name}> but ${name}.dc.html does not exist.`);
    }
  }

  // Local scripts pulled in from <helmet> / <head>
  for (const [, src] of html.matchAll(/<script\s[^>]*src="\.?\/?([^":]+\.js)"/g)) {
    if (!(await exists(src))) {
      errors.push(`${page}: references ${src} which does not exist.`);
    }
  }
}

if (errors.length) {
  console.error('✗ Build check failed:\n');
  for (const e of errors) console.error(`  • ${e}`);
  process.exit(1);
}

console.log(`✓ ${pages.length} pages checked, all references resolve. Serving public/.`);
