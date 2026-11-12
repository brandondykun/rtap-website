import { Logo } from '@/components/Logo';
import { PhoneFrame } from '@/components/PhoneFrame';
import { StoreBadge } from '@/components/StoreBadge';
import { Eyebrow } from '@/components/Eyebrow';
import { screenshots } from '@/content/screenshots';
import { Tagline } from './Tagline';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-12 sm:px-8 md:pt-20">
      {/* Faint map grid, fading out toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(250,250,249,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(250,250,249,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(245,158,11,0.13),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-end md:gap-10">
        <div className="w-full flex-1 pb-4 md:pb-24">
          <Eyebrow>Tactical mapping</Eyebrow>
          <h1 className="mt-4">
            <Logo size="lg" />
          </h1>
          <p className="mt-3 font-mono text-xs tracking-wide text-text-muted">Realtime Team Awareness Platform</p>
          <Tagline className="mt-7 text-xl sm:text-2xl lg:text-[28px]" />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            An offline-first tactical map for plotting units, routes and objectives on real terrain, in 2D, 3D, or from the
            ground. Built by military and geospatial professionals.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StoreBadge />
            <a
              href="#features"
              className="rounded-lg border border-border px-4 py-3 text-sm text-text transition-colors hover:border-text-muted"
            >
              See features ↓
            </a>
          </div>
        </div>

        <div className="relative h-[440px] w-[260px] flex-none sm:h-[560px] sm:w-[400px]">
          <PhoneFrame
            shot={screenshots.threeD}
            sizes="230px"
            className="absolute left-0 top-14 hidden w-[230px] -rotate-[5deg] opacity-80 sm:block"
          />
          <PhoneFrame
            shot={screenshots.map}
            sizes="(min-width: 640px) 260px, 230px"
            priority
            className="absolute right-0 top-0 w-[230px] sm:w-[260px] max-sm:left-1/2 max-sm:-translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}
