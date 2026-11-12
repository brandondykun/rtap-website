'use client';

import { useEffect, useRef, useState } from 'react';
import type { Feature } from '@/content/features';
import { screenshots } from '@/content/screenshots';
import { PhoneFrame } from './PhoneFrame';

/**
 * Desktop: a vertical tab list of features beside one phone whose screenshot cross-fades to the selected feature.
 * It auto-advances until the user interacts, and never with reduced motion. Phones: a swipeable row of cards.
 */
export function FeatureSwitcher({ features, intervalMs = 6000 }: { features: Feature[]; intervalMs?: number }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % features.length), intervalMs);
    return () => window.clearInterval(id);
  }, [auto, intervalMs, features.length]);

  const select = (i: number, focus = false) => {
    setAuto(false);
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const n = features.length;
    const next = { ArrowDown: (i + 1) % n, ArrowRight: (i + 1) % n, ArrowUp: (i - 1 + n) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[
      e.key
    ];
    if (next === undefined) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden items-center gap-12 md:flex">
        <div role="tablist" aria-orientation="vertical" aria-label="Capabilities" className="flex flex-1 flex-col gap-1">
          {features.map((f, i) => {
            const on = i === active;
            return (
              <button
                key={f.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`feature-tab-${f.id}`}
                aria-selected={on}
                aria-controls="feature-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`group border-l-2 px-5 py-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  on ? 'border-accent bg-gradient-to-r from-accent/10 to-transparent' : 'border-border-subtle hover:border-border'
                }`}
              >
                <span className={`block font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${on ? 'text-accent' : 'text-text-faint'}`}>
                  {f.tag}
                </span>
                <span className={`mt-1 block text-base font-semibold ${on ? 'text-text' : 'text-text-muted group-hover:text-text'}`}>
                  {f.title}
                </span>
                <span className={on ? 'mt-1.5 block text-sm leading-relaxed text-text-muted' : 'hidden'}>{f.description}</span>
              </button>
            );
          })}
        </div>
        <div
          role="tabpanel"
          id="feature-panel"
          aria-labelledby={`feature-tab-${features[active].id}`}
          className="grid w-[260px] flex-none"
        >
          {features.map((f, i) => (
            <div
              key={f.id}
              aria-hidden={i !== active}
              className={`col-start-1 row-start-1 transition-opacity duration-500 motion-reduce:transition-none ${i === active ? 'opacity-100' : 'opacity-0'}`}
            >
              <PhoneFrame shot={screenshots[f.shot]} sizes="260px" decorative={i !== active} />
            </div>
          ))}
        </div>
      </div>

      {/* Phones */}
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:hidden">
        {features.map((f) => (
          <li key={f.id} className="w-[78%] max-w-[300px] flex-none snap-center">
            <PhoneFrame shot={screenshots[f.shot]} sizes="78vw" />
            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{f.tag}</p>
            <p className="mt-1 text-base font-semibold">{f.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">{f.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
