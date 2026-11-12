import { Eyebrow } from '@/components/Eyebrow';
import { GridToggle } from '@/components/GridToggle';
import { Section } from '@/components/Section';

const POINTS = [
  ['Finer as you zoom', 'Grid zones, then 100 km, 10 km, 1 km and 100 m squares.'],
  ['Labelled lines', 'Numbers on every line, and the zone and 100 km square names when you zoom out.'],
  ['Made to stand out', 'Seven colors and three line strengths, so the grid reads over forest, snow, sand or city.'],
] as const;

export function MgrsGrid() {
  return (
    <Section id="grid">
      <Eyebrow>MGRS grid</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">MGRS grid lines, on or off.</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
        Turn the grid on to read a grid straight off the map, or off for a clean view of the ground. It&apos;s one switch in
        Settings. Try it here.
      </p>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <GridToggle />
        <ul className="grid gap-6 lg:pt-4">
          {POINTS.map(([title, body]) => (
            <li key={title} className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
