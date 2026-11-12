import type { ScreenshotKey } from './screenshots';

export type Feature = { id: string; tag: string; title: string; description: string; shot: ScreenshotKey };

export const features: Feature[] = [
  {
    id: 'units',
    tag: 'Units',
    title: 'Units in MIL-STD-2525C',
    description: 'Friendly, hostile, neutral and unknown units in the symbology people are trained on, so anyone can read the picture at a glance. Every unit carries its exact grid, distance, direction and ALT.',
    shot: 'unit',
  },
  {
    id: 'quick-plot',
    tag: 'Quick plot',
    title: 'Quick plot a grid',
    description: 'Got a grid over the radio or on paper? See exactly where it lands in seconds, and how far and which way it is from you, before it goes on the map.',
    shot: 'quickPlot',
  },
  {
    id: 'measure',
    tag: 'Measure',
    title: 'Range and direction',
    description: 'Exact distance and direction between any two points on the ground, in mils or degrees. No guesswork, no protractor, no map math.',
    shot: 'measure',
  },
  {
    id: 'lines-areas',
    tag: 'Lines & areas',
    title: 'Lines and areas',
    description: 'Phase lines, routes, engagement areas and boundaries drawn on real terrain, with exact lengths, perimeters and areas, so the plan is built on real measurements.',
    shot: 'polygon',
  },
  {
    id: 'overlays',
    tag: 'Overlays',
    title: 'Overlays and layers',
    description: 'Keep a busy plan readable. Group items by element or phase, like Enemy, Fires and Friendly, and show only what matters right now.',
    shot: 'overlays',
  },
  {
    id: 'missions',
    tag: 'Missions',
    title: 'Missions',
    description: 'Every operation stays separate and saved, so you can plan the next one without losing the last, and every one reopens exactly as you left it.',
    shot: 'missions',
  },
];
