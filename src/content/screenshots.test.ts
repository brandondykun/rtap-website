import { screenshots } from './screenshots';

it('has a screenshot with descriptive alt text for every key', () => {
  expect(Object.keys(screenshots).sort()).toEqual(
    ['landing', 'map', 'measure', 'missions', 'op', 'overlays', 'polygon', 'quickPlot', 'threeD', 'unit'].sort(),
  );
  for (const [key, s] of Object.entries(screenshots)) {
    expect(s.src, key).toBeTruthy();
    expect(s.alt.length, key).toBeGreaterThan(20);
  }
});
