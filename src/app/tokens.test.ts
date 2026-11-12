import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const css = readFileSync(join(__dirname, 'globals.css'), 'utf8');
const token = (name: string) => css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-f]{6})`, 'i'))?.[1];

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

it('every text color token meets AA (4.5:1) on every background the site uses', () => {
  const texts = [...css.matchAll(/--color-(text[\w-]*):/g)].map((m) => m[1]);
  expect(texts.length).toBeGreaterThan(0);
  // bg, surface, surface-raised, and the darker end of the 3D/OP section gradient.
  const backgrounds = [token('bg')!, token('surface')!, token('surface-raised')!, '#14110f'];
  for (const t of texts) for (const bg of backgrounds) expect(contrast(token(t)!, bg), `${t} on ${bg}`).toBeGreaterThanOrEqual(4.5);
});
