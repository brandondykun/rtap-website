import type { StaticImageData } from 'next/image';
import landing from '@/assets/screenshots/landing.png';
import map from '@/assets/screenshots/map.png';
import measure from '@/assets/screenshots/measure.png';
import missions from '@/assets/screenshots/missions.png';
import op from '@/assets/screenshots/op.png';
import overlays from '@/assets/screenshots/overlays.png';
import polygon from '@/assets/screenshots/polygon.png';
import quickPlot from '@/assets/screenshots/quick-plot.png';
import threeD from '@/assets/screenshots/3d.png';
import unit from '@/assets/screenshots/unit.png';

export type ScreenshotKey =
  | 'map' | 'threeD' | 'op' | 'unit' | 'quickPlot' | 'measure' | 'polygon' | 'overlays' | 'missions' | 'landing';
export type Screenshot = { src: StaticImageData; alt: string };

/** Real iPhone screenshots of the app, shown whole. */
export const screenshots: Record<ScreenshotKey, Screenshot> = {
  map: { src: map, alt: 'RTAP map on satellite imagery: friendly and hostile units, two phase lines and an engagement area, with the CTR and ME grid readouts' },
  threeD: { src: threeD, alt: 'RTAP 3D view: the map tilted over desert hills, with hostile units on the slope and a friendly unit in the foreground' },
  op: { src: op, alt: 'RTAP OP mode: the terrain seen from an observation post, with hostile units on the hillside, the crosshair on the ground and the eye height slider' },
  unit: { src: unit, alt: 'RTAP unit card for HOS-6, a hostile reconnaissance platoon, showing its MGRS grid, distance, direction and altitude' },
  quickPlot: { src: quickPlot, alt: 'RTAP quick plot: a typed MGRS grid checked as valid, with its distance and direction from you, ready to plot' },
  measure: { src: measure, alt: 'RTAP measure tool: a line from a hostile unit to a friendly unit labelled 1.44 km and 5668 mils grid' },
  polygon: { src: polygon, alt: 'RTAP polygon card for engagement area EA-1, with its center grid, distance, perimeter and area' },
  overlays: { src: overlays, alt: 'RTAP layers panel: Base, Enemy, Fires and Friendly overlays switched on over the map' },
  missions: { src: missions, alt: 'RTAP missions list: the last opened mission with its map preview and counts of units, points, lines and polygons' },
  landing: { src: landing, alt: 'RTAP welcome screen: the RTAP logo, "Locate. Communicate. Dominate." and two friendly units ranging a hostile' },
};
