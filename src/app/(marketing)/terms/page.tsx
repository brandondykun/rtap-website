import type { Metadata } from 'next';
import { Prose } from '@/components/legal/Prose';
import { site } from '@/config/site';

export const metadata: Metadata = { title: 'Terms', description: 'Terms of use for RTAP.' };

// Draft. Owner review before launch.
export default function Terms() {
  return (
    <Prose eyebrow="Terms" title="Terms of use" updated="2026-11-11" review>
      <p>
        These terms cover your use of the RTAP app and this website, operated by {site.company}. By using RTAP you agree to
        them.
      </p>

      <h2>Training and simulation only</h2>
      <p>
        RTAP is a planning and visualization tool for training and simulation. Not for real-world military use or targeting.
        Do not rely on it for navigation, safety, or any decision where an error could cause harm.
      </p>

      <h2>Accuracy</h2>
      <p>
        Positions, grids, distances, directions, altitudes and terrain depend on your device&apos;s GPS and on third-party map
        data, and can be wrong. Always check against an authoritative source.
      </p>

      <h2>Your content</h2>
      <p>What you create in RTAP is yours. It is stored on your device; you are responsible for keeping copies you need.</p>

      <h2>Provided as is</h2>
      <p>
        RTAP is provided &quot;as is&quot;, without warranties of any kind. To the extent the law allows, {site.company} is not
        liable for any loss or damage arising from your use of the app.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date above shows when they last changed.</p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </p>
    </Prose>
  );
}
