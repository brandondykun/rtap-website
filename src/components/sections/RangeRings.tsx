import { Eyebrow } from '@/components/Eyebrow';
import { PhoneFrame } from '@/components/PhoneFrame';
import { Section } from '@/components/Section';
import { screenshots } from '@/content/screenshots';

const KINDS = [
  {
    tag: 'Indirect fire',
    title: 'Mortars and artillery',
    body: 'Give the unit its range in meters and RTAP draws the ring around it, so you can see what falls inside it.',
    range: '3200 m',
    ceiling: null,
  },
  {
    tag: 'Air defense',
    title: 'Range and ceiling',
    body: 'Set how far it reaches across the ground, drawn as the ring, and how high it reaches, shown on the unit card.',
    range: '↔ 8000 m',
    ceiling: '↕ 10000 ft',
  },
] as const;

export function RangeRings() {
  return (
    <Section id="range-rings">
      <Eyebrow>Range rings</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">See what each weapon can reach.</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
        Add range rings to indirect fire and air defense units, friendly or hostile. Turn a ring on for one unit, or show them all
        at once from the layers panel.
      </p>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <PhoneFrame shot={screenshots.rangeRing} sizes="(min-width: 1024px) 680px, 100vw" className="w-full rounded-[1.5rem]" />
        <ul className="grid gap-5">
          {KINDS.map((k) => (
            <li key={k.tag} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{k.tag}</p>
              <h3 className="mt-2 text-lg font-bold">{k.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{k.body}</p>
              {/* Value colors from map/AGENTS.md: distance amber, ceiling (an altitude) white. */}
              <p className="mt-3 font-mono text-sm">
                <span className="text-value-distance">{k.range}</span>
                {k.ceiling && <span className="text-text"> · {k.ceiling}</span>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
