import { Eyebrow } from '@/components/Eyebrow';
import { Section } from '@/components/Section';

const CARDS = [
  {
    tag: 'V1 · At launch',
    title: 'Local-first',
    items: ['Everything above, saved on your phone', 'Works fully offline', 'No account needed'],
    style: 'border-accent',
  },
  {
    tag: 'V2 · In development',
    title: 'Sync and sharing',
    items: ['Cloud sync when you have service', 'Shared maps: plan once, the whole team sees it', "See your team's positions live"],
    style: 'border-dashed border-border',
  },
] as const;

export function Roadmap() {
  return (
    <Section id="roadmap" className="bg-gradient-to-b from-accent/[0.05] to-transparent">
      <Eyebrow>Roadmap</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Your team, on the same map.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {CARDS.map((c) => (
          <div key={c.tag} className={`rounded-xl border bg-surface p-6 ${c.style}`}>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{c.tag}</p>
            <h3 className="mt-2 text-lg font-bold">{c.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-muted">
              {c.items.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 flex-none rotate-45 bg-text-muted" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
