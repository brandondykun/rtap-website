'use client';

import Image from 'next/image';
import { useState } from 'react';
import { screenshots } from '@/content/screenshots';

const SHOTS = [
  { on: true, shot: screenshots.landscapeGrid },
  { on: false, shot: screenshots.landscapeMap },
] as const;

/** The same map with the MGRS grid on and off, behind a real switch. Both images stay mounted so the swap cross-fades. */
export function GridToggle() {
  const [on, setOn] = useState(true);
  return (
    <div>
      <div className="grid overflow-hidden rounded-[1.5rem] border-[6px] border-surface bg-black shadow-[0_0_0_1px_var(--color-border),0_30px_70px_rgba(0,0,0,0.65)]">
        {SHOTS.map(({ on: shotOn, shot }) => {
          const shown = shotOn === on;
          return (
            <Image
              key={String(shotOn)}
              src={shot.src}
              alt={shown ? shot.alt : ''}
              aria-hidden={!shown}
              sizes="(min-width: 1152px) 680px, (min-width: 1024px) 60vw, 100vw"
              placeholder="blur"
              className={`col-start-1 row-start-1 block h-auto w-full transition-opacity duration-500 motion-reduce:transition-none ${shown ? 'opacity-100' : 'opacity-0'}`}
            />
          );
        })}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className="mt-5 inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-text transition-colors hover:border-text-muted focus-visible:outline-2 focus-visible:outline-accent"
      >
        Show MGRS grid
        <span
          aria-hidden
          className={`relative h-6 w-11 flex-none rounded-full transition-colors motion-reduce:transition-none ${on ? 'bg-accent' : 'bg-surface-raised'}`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-text transition-[left] motion-reduce:transition-none ${on ? 'left-[22px]' : 'left-0.5'}`}
          />
        </span>
      </button>
    </div>
  );
}
