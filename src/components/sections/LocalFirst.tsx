import { Eyebrow } from '@/components/Eyebrow';
import { Section } from '@/components/Section';

const POINTS = [
  ['Saved the moment you plot', 'Every unit, line and area is written to your phone straight away. Nothing waits on a connection.'],
  ['No sign-up', 'Open the app and start plotting. No account, no login.'],
  ['Your data stays on your phone', 'V1 keeps every mission on your device. Nothing you plot is uploaded.'],
] as const;

export function LocalFirst() {
  return (
    <Section>
      <Eyebrow>Local-first</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Your plots keep working with no signal.</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
        With no signal, your units, lines, grids, measurements and GPS position all keep working, and the map imagery
        you&apos;ve already viewed stays on screen. New areas need a connection to load.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {POINTS.map(([title, body]) => (
          <li key={title} className="border-l-2 border-accent pl-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
