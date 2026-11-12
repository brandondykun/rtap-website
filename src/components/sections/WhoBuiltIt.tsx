import { Eyebrow } from '@/components/Eyebrow';
import { Section } from '@/components/Section';

const STATS = [
  ['MGRS', 'grids to 1 m'],
  ['2525C', 'symbology'],
  ['MILS', 'or degrees'],
  ['ALT', 'on every height'],
] as const;

export function WhoBuiltIt() {
  return (
    <Section innerClassName="flex flex-col gap-10 md:flex-row md:items-center">
      <div className="flex-1">
        <Eyebrow>Who built it</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Built by military and geospatial professionals.</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          The details work the way people trained on them expect: ten-digit MGRS grids to 1 m, MIL-STD-2525C unit symbols,
          directions in mils or degrees from grid, true or magnetic north, and every height marked ALT.
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-3 md:w-[340px]">
        {STATS.map(([value, label]) => (
          <div key={value} className="flex flex-col-reverse rounded-xl border border-border bg-surface p-4">
            <dt className="mt-1 text-sm text-text-muted">{label}</dt>
            <dd className="font-mono text-2xl font-bold text-accent">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
