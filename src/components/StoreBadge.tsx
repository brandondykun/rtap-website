import { site } from '@/config/site';

/**
 * The site's one call to action: the official App Store and Google Play badges for whichever store listings exist. With
 * neither listing it is our own "Coming soon on iOS & Android" pill (no Apple or Google marks: neither allows home-made
 * badges).
 */
export function StoreBadge({ className = '' }: { className?: string }) {
  if (site.appStoreUrl || site.playStoreUrl) {
    return (
      <span className={`inline-flex flex-wrap items-center gap-3 ${className}`}>
        {site.appStoreUrl && (
          <a href={site.appStoreUrl} className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element -- Apple's badge SVG must be used as supplied */}
            <img src="/badges/app-store.svg" alt="Download on the App Store" className="h-12 w-auto" />
          </a>
        )}
        {site.playStoreUrl && (
          // The PNG carries 1/6 of its height as clear space top and bottom; the negative margin trims that from the layout
          // so the visible badge is 48 px tall, matching Apple's.
          <a href={site.playStoreUrl} className="-m-3 inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element -- Google's badge must be used as supplied */}
            <img src="/badges/google-play.png" alt="Get it on Google Play" width={646} height={250} className="h-[72px] w-auto" />
          </a>
        )}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-lg border border-border bg-surface/60 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-text ${className}`}
    >
      <span aria-hidden className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
      Coming soon on iOS &amp; Android
    </span>
  );
}
