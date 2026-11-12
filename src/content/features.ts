import type { ScreenshotKey } from './screenshots';

export type Feature = { id: string; tag: string; title: string; description: string; shot: ScreenshotKey };

export const features: Feature[] = [
  {
    id: 'units',
    tag: 'Units',
    title: 'Units in MIL-STD-2525C',
    description: 'Friendly, hostile, neutral and unknown units with real symbology. Tap one for its grid, distance, direction and ALT.',
    shot: 'unit',
  },
  {
    id: 'quick-plot',
    tag: 'Quick plot',
    title: 'Quick plot a grid',
    description:
      'Type in a grid to drop it on the map and check where it is, with its distance and direction from you. Save it as a unit or point, or clear it.',
    shot: 'quickPlot',
  },
  {
    id: 'measure',
    tag: 'Measure',
    title: 'Range and direction',
    description: 'Distance and direction between any two places, in mils or degrees. Tap either end to move it.',
    shot: 'measure',
  },
  {
    id: 'lines-areas',
    tag: 'Lines & areas',
    title: 'Lines and areas',
    description: 'Phase lines, routes, engagement areas and boundaries, with perimeter and area.',
    shot: 'polygon',
  },
  {
    id: 'overlays',
    tag: 'Overlays',
    title: 'Overlays and layers',
    description: 'Group items by phase or element, like Enemy, Fires and Friendly, and show only what matters right now.',
    shot: 'overlays',
  },
  {
    id: 'missions',
    tag: 'Missions',
    title: 'Missions',
    description: 'Keep every operation separate and pick up right where you left off.',
    shot: 'missions',
  },
];
