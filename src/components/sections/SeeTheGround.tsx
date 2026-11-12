import { Eyebrow } from '@/components/Eyebrow';
import { PhoneFrame } from '@/components/PhoneFrame';
import { Section } from '@/components/Section';
import { screenshots, type ScreenshotKey } from '@/content/screenshots';

const ITEMS: { tag: string; title: string; body: string; shot: ScreenshotKey }[] = [
  {
    tag: '3D',
    title: 'Explore the terrain',
    body: 'Tilt and turn the map to see ridgelines, draws and dead ground, with every unit and control measure still in place.',
    shot: 'threeD',
  },
  {
    tag: 'OP mode',
    title: 'See it from the ground',
    body: "Pick an observation post and set your eye height. Look out over the terrain as you'd see it, line up the crosshair on a target, and plot it with its grid, range and direction from the OP.",
    shot: 'op',
  },
];

export function SeeTheGround() {
  return (
    <Section id="3d-op" className="bg-gradient-to-b from-bg to-[#14110f]">
      <Eyebrow>See the ground</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Explore in 3D. Plot from where you stand.</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
        A flat map only tells you half the story. Tilt into real terrain to read the hills and valleys, or drop into OP mode
        and see what you&apos;d see from the ground.
      </p>
      <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-10">
        {ITEMS.map((it) => (
          <div key={it.tag} className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <PhoneFrame shot={screenshots[it.shot]} sizes="210px" className="w-[210px] flex-none" />
            <div className="sm:pt-6">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{it.tag}</p>
              <h3 className="mt-2 text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
