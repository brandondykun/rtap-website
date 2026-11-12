import type { Metadata } from 'next';
import { Prose } from '@/components/legal/Prose';
import { site } from '@/config/site';

export const metadata: Metadata = { title: 'Privacy', description: 'How RTAP handles your data.' };

// Drafted from what the app does (map/src/lib/monitoring/sentry.ts, local-only storage). Owner review before launch.
export default function Privacy() {
  return (
    <Prose eyebrow="Privacy" title="Privacy policy" updated="2026-11-11" review>
      <p>
        RTAP is built local-first. What you plot stays on your phone. This page explains the little that does leave it, and
        why.
      </p>

      <h2>What stays on your phone</h2>
      <ul>
        <li>Your missions, units, points, lines, polygons, overlays and notes.</li>
        <li>Your settings and profile (such as your callsign).</li>
        <li>
          Your location. RTAP uses it to show your position (ME) and measure from it. RTAP does not send it to us (see Maps
          below for Mapbox).
        </li>
      </ul>
      <p>The current version of RTAP has no accounts and no cloud sync. We have no copy of your data.</p>

      <h2>Crash and performance reports</h2>
      <p>
        To find and fix bugs, release builds send crash reports and a sample of performance data to Sentry, our error
        monitoring provider. These reports describe what went wrong in the app (for example, an error message and the code
        involved, plus your device model and app version). They are set up to leave out anything that identifies you or says
        where you are: no personal information is attached, and grids and coordinates in error messages are removed before
        they are sent.
      </p>

      <h2>Maps</h2>
      <p>
        Map imagery and terrain are loaded from Mapbox. When the map loads tiles, your phone requests them from Mapbox, which
        handles those requests under{' '}
        <a href="https://www.mapbox.com/legal/privacy" rel="noreferrer">
          Mapbox&apos;s privacy policy
        </a>
        . The Mapbox map software in the app may also send Mapbox anonymous usage data, which can include your device&apos;s
        location, to help Mapbox improve its maps.
      </p>

      <h2>App updates</h2>
      <p>
        The app checks Expo&apos;s update service for small updates to the app itself. These checks don&apos;t include your
        data.
      </p>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>No advertising and no ad tracking.</li>
        <li>No selling or sharing of your data.</li>
        <li>No analytics on this website.</li>
      </ul>

      <h2>When sync arrives</h2>
      <p>
        Cloud sync and team sharing are in development. When they ship, they will be optional and this policy will be updated
        to explain them before you can turn them on.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. RTAP is operated by{' '}
        {site.company}.
      </p>
    </Prose>
  );
}
