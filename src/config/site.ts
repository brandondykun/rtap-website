export const site = {
  name: 'RTAP',
  fullName: 'Realtime Team Awareness Platform',
  tagline: 'Locate. Communicate. Dominate.',
  description:
    'An offline-first tactical map for plotting units, routes and objectives on real terrain. Built by military and geospatial professionals.',
  company: 'Eratas Software LLC',
  supportEmail: 'support@eratas.dev',
  /** The App Store listing. null until launch; set it to switch every badge to Apple's official Download badge. */
  appStoreUrl: null as string | null,
};

type Env = Record<string, string | undefined>;

/** The site's absolute URL: NEXT_PUBLIC_SITE_URL, else Vercel's production URL, else localhost. */
export function siteUrl(env: Env = process.env): URL {
  if (env.NEXT_PUBLIC_SITE_URL) return new URL(env.NEXT_PUBLIC_SITE_URL);
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return new URL(`https://${env.VERCEL_PROJECT_PRODUCTION_URL}`);
  return new URL('http://localhost:3000');
}
