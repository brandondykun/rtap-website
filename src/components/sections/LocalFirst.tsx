import { Eyebrow } from '@/components/Eyebrow';
import { Section } from '@/components/Section';

const POINTS = [
  ['No servers to set up', 'Nothing to host, install or maintain.'],
  ['No networking', 'No radios to pair, no IP addresses, no IT team.'],
  ["Just your phone's service", 'When sync arrives in V2, it rides the cell signal you already have.'],
] as const;

export function LocalFirst() {
  return (
    <Section>
      <Eyebrow>Local-first</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Works with no signal. Your data stays on your phone.</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
        Everything you plot is saved on your phone the moment you do it, so the map never waits on a connection. No servers to
        set up, no networking, no IT team.
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
