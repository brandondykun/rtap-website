import type { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';
import { Capabilities } from '@/components/sections/Capabilities';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { Hero } from '@/components/sections/Hero';
import { Landscape } from '@/components/sections/Landscape';
import { MgrsGrid } from '@/components/sections/MgrsGrid';
import { LocalFirst } from '@/components/sections/LocalFirst';
import { RangeRings } from '@/components/sections/RangeRings';
import { Roadmap } from '@/components/sections/Roadmap';
import { SeeTheGround } from '@/components/sections/SeeTheGround';
import { WhoBuiltIt } from '@/components/sections/WhoBuiltIt';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <SeeTheGround />
      <Capabilities />
      <MgrsGrid />
      <RangeRings />
      <Landscape />
      <LocalFirst />
      <WhoBuiltIt />
      <Roadmap />
      <ClosingCta />
    </>
  );
}
