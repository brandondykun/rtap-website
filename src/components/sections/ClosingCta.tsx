import { PhoneFrame } from '@/components/PhoneFrame';
import { Section } from '@/components/Section';
import { StoreBadge } from '@/components/StoreBadge';
import { screenshots } from '@/content/screenshots';
import { Tagline } from './Tagline';

export function ClosingCta() {
  return (
    <Section innerClassName="flex flex-col items-center justify-center gap-10 text-center sm:flex-row sm:text-left">
      <PhoneFrame shot={screenshots.landing} sizes="180px" className="w-[180px] flex-none" />
      <div>
        <Tagline className="text-2xl sm:text-3xl" />
        <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">
          Free on iPhone at launch. V1 is an early release, with sync and team sharing in development.
        </p>
        <div className="mt-6">
          <StoreBadge />
        </div>
      </div>
    </Section>
  );
}
