import { Eyebrow } from '@/components/Eyebrow';
import { FeatureSwitcher } from '@/components/FeatureSwitcher';
import { Section } from '@/components/Section';
import { features } from '@/content/features';

export function Capabilities() {
  return (
    <Section id="features">
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Built for the way units plan and move.</h2>
      <div className="mt-10">
        <FeatureSwitcher features={features} />
      </div>
      <p className="mt-8 text-sm text-text-muted">Plus GPS averaging, satellite, hybrid and topo maps, and labels on or off.</p>
    </Section>
  );
}
