import { expect, test } from '@playwright/test';

const PAGES = ['/', '/privacy', '/terms', '/support'];

for (const path of PAGES)
  for (const width of [360, 390, 1280])
    test(`${path} at ${width}px: loads and has no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });

test('every image on / loads', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
  });
  // networkidle has already fired by now, so poll: lazy images the scroll started can still be on their way.
  await expect
    .poll(
      () =>
        page.evaluate(() =>
          [...document.images].filter((i) => i.checkVisibility() && !(i.complete && i.naturalWidth > 0)).map((i) => i.alt || i.src),
        ),
      { timeout: 15_000 },
    )
    .toEqual([]);
});

test('no console errors on /', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(errors).toEqual([]);
});

test('nav anchors scroll to their sections', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Roadmap' }).click();
  await expect(page.locator('#roadmap')).toBeInViewport();
});

test('the OG image, sitemap and robots are served', async ({ request }) => {
  expect((await request.get('/opengraph-image')).headers()['content-type']).toBe('image/png');
  expect(await (await request.get('/sitemap.xml')).text()).toContain('/privacy');
  expect(await (await request.get('/robots.txt')).text()).toContain('Sitemap:');
});
