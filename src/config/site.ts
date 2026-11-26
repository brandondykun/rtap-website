export const site = {
  name: 'RTAP',
  fullName: 'Realtime Team Awareness Platform',
  tagline: 'Locate. Communicate. Dominate.',
  description:
    'An offline-first tactical map for plotting points, units, lines and areas on real terrain. Built by military and geospatial professionals.',
  company: 'Eratas Software LLC',
  supportEmail: 'support@eratas.dev',
  /** The App Store listing (no country, so Apple opens each visitor's own store). null shows the Coming soon badge instead. */
  appStoreUrl: 'https://apps.apple.com/app/id6834856833' as string | null,
  /** The Google Play listing (no hl, so Play shows each visitor's own language). null leaves out the Google Play badge. */
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.eratas.rtap' as string | null,
};

type Env = Record<string, string | undefined>;

/** The site's absolute URL: NEXT_PUBLIC_SITE_URL, else Vercel's production URL, else localhost. */
export function siteUrl(env: Env = process.env): URL {
  if (env.NEXT_PUBLIC_SITE_URL) return new URL(env.NEXT_PUBLIC_SITE_URL);
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return new URL(`https://${env.VERCEL_PROJECT_PRODUCTION_URL}`);
  return new URL('http://localhost:3000');
}
