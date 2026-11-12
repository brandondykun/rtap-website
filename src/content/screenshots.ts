import type { StaticImageData } from 'next/image';
import landing from '@/assets/screenshots/landing.png';
import landscape3d from '@/assets/screenshots/landscape-3d.png';
import landscapeGrid from '@/assets/screenshots/landscape-grid.png';
import landscapeLayers from '@/assets/screenshots/landscape-layers.png';
import landscapeMap from '@/assets/screenshots/landscape-map.png';
import map from '@/assets/screenshots/map.png';
import measure from '@/assets/screenshots/measure.png';
import missions from '@/assets/screenshots/missions.png';
import op from '@/assets/screenshots/op.png';
import overlays from '@/assets/screenshots/overlays.png';
import polygon from '@/assets/screenshots/polygon.png';
import quickPlot from '@/assets/screenshots/quick-plot.png';
import rangeRing from '@/assets/screenshots/range-ring.png';
import threeD from '@/assets/screenshots/3d.png';
import unit from '@/assets/screenshots/unit.png';

export type ScreenshotKey =
  | 'map' | 'threeD' | 'op' | 'unit' | 'quickPlot' | 'measure' | 'polygon' | 'overlays' | 'missions' | 'landing'
  | 'landscapeMap' | 'landscapeGrid' | 'landscape3d' | 'landscapeLayers' | 'rangeRing';
export type Screenshot = { src: StaticImageData; alt: string };

/** Real iPhone screenshots of the app, shown whole. The landscape ones are 2556 × 1179. */
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
  landscapeMap: { src: landscapeMap, alt: 'RTAP in landscape: the full toolbar across the top, friendly and hostile units, phase lines PL-1 and PL-2 and engagement area EA-1 on satellite imagery' },
  landscapeGrid: { src: landscapeGrid, alt: 'RTAP in landscape with the MGRS grid on: labelled 1 km grid lines over the satellite map, with units, phase lines and engagement area EA-1' },
  landscape3d: { src: landscape3d, alt: 'RTAP in landscape and 3D: hostile units on the slopes of a desert valley, a friendly unit in the foreground and the CTR and ME grid readouts' },
  landscapeLayers: { src: landscapeLayers, alt: 'RTAP in landscape with the layers panel open beside the map, listing 12 units with their grids while the map stays visible' },
  rangeRing: { src: rangeRing, alt: 'RTAP range ring: the unit card for HOS-7, a hostile mortar section with a 3200 m range ring, beside the map showing the ring around it' },
};
