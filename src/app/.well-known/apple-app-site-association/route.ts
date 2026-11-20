import { APPLE_BUNDLE_IDS, APPLE_TEAM_ID } from '@/config/apple';

/**
 * Apple's app-site association file: tells iOS that the RTAP apps may use this site's passwords (password AutoFill,
 * saving and strong-password suggestions). Each app lists `webcredentials:www.rtap.app` in its associated domains.
 * Prerendered at build time (it reads nothing at request time).
 */
export function GET() {
  return Response.json({ webcredentials: { apps: APPLE_BUNDLE_IDS.map((id) => `${APPLE_TEAM_ID}.${id}`) } });
}
