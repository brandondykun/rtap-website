import { Eyebrow } from '@/components/Eyebrow';
import { PhoneFrame } from '@/components/PhoneFrame';
import { Section } from '@/components/Section';
import { screenshots } from '@/content/screenshots';

const POINTS = [
  ['The whole toolbar', 'Every tool sits across the top of the screen, one tap away.'],
  ['Cards beside the map', 'Layers, units and grids open in a panel at the side, so the map stays in view.'],
  ['More ground on screen', 'A wider view of the terrain, in 2D or 3D.'],
] as const;

export function Landscape() {
  return (
    <Section id="landscape" className="overflow-hidden">
      <Eyebrow>Landscape</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Turn it sideways. See more ground.</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
        RTAP works in portrait, and it&apos;s even better in landscape. Turn your phone and the map fills the screen.
      </p>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,3fr)]">
        <PhoneFrame
          shot={screenshots.landscape3d}
          sizes="(min-width: 1152px) 700px, (min-width: 1024px) 60vw, 100vw"
          className="w-full rounded-[1.5rem]"
        />
        <ul className="grid gap-6">
          {POINTS.map(([title, body]) => (
            <li key={title} className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <PhoneFrame shot={screenshots.landscapeMap} sizes="(min-width: 1152px) 564px, (min-width: 640px) 50vw, 100vw" className="w-full rounded-[1.25rem]" />
        <PhoneFrame shot={screenshots.landscapeLayers} sizes="(min-width: 1152px) 564px, (min-width: 640px) 50vw, 100vw" className="w-full rounded-[1.25rem]" />
      </div>
    </Section>
  );
}
