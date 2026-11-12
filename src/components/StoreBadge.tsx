import { site } from '@/config/site';

/**
 * The site's one call to action. Before launch it is our own "Coming soon on iOS & Android" pill (no Apple logo or App Store
 * mark: Apple doesn't allow home-made badges). Once site.appStoreUrl is set it becomes Apple's official badge.
 */
export function StoreBadge({ className = '' }: { className?: string }) {
  if (site.appStoreUrl) {
    return (
      <a href={site.appStoreUrl} className={`inline-block ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Apple's badge SVG must be used as supplied */}
        <img src="/badges/app-store.svg" alt="Download on the App Store" className="h-12 w-auto" />
      </a>
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
