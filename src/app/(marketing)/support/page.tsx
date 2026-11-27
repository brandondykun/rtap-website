import type { Metadata } from 'next';
import { Prose } from '@/components/legal/Prose';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with RTAP: offline use, servers, where your data is stored, which phones it runs on, and how to reach us.',
  alternates: { canonical: '/support' },
};

const FAQ = [
  [
    'Does RTAP work without signal?',
    'Yes. Everything you plot is saved on your phone, so missions, units and measurements all work offline. Map imagery is downloaded from Mapbox as you browse, so new areas need a connection.',
  ],
  [
    'Do I need a server?',
    'No. RTAP runs entirely on your phone, with no server to set up or host. Sync and sharing, now in development, will also work without a server of your own.',
  ],
  ['Where is my data stored?', 'On your phone. The current version has no accounts and no cloud copy.'],
  [
    'Can my team see my map?',
    'Not yet. Cloud sync, shared maps and live team positions are in development for V2.',
  ],
  ['Which phones does RTAP run on?', 'iPhone and Android.'],
] as const;

export default function Support() {
  return (
    <Prose eyebrow="Support" title="Support">
      <p>
        Questions, bugs or ideas? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> and we&apos;ll get back
        to you. If something went wrong, tell us what you were doing and your app version (Menu → About).
      </p>
      <h2>Common questions</h2>
      <dl>
        {FAQ.map(([q, a]) => (
          <div key={q} className="mt-6">
            <dt className="font-semibold text-text">{q}</dt>
            <dd className="mt-1.5">{a}</dd>
          </div>
        ))}
      </dl>
    </Prose>
  );
}
