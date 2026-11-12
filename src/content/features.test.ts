import { features } from './features';

it('sells what each feature does for you, not how to tap through it', () => {
  for (const f of features) expect(f.description, f.id).not.toMatch(/\b(tap|type in|pick|press)\b/i);
});

it('promises no guesswork on measurements', () => {
  expect(features.find((f) => f.id === 'measure')!.description).toMatch(/no guesswork/i);
});
