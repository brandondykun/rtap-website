import { Capabilities } from '@/components/sections/Capabilities';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { Hero } from '@/components/sections/Hero';
import { Landscape } from '@/components/sections/Landscape';
import { LocalFirst } from '@/components/sections/LocalFirst';
import { RangeRings } from '@/components/sections/RangeRings';
import { Roadmap } from '@/components/sections/Roadmap';
import { SeeTheGround } from '@/components/sections/SeeTheGround';
import { WhoBuiltIt } from '@/components/sections/WhoBuiltIt';

export default function Home() {
  return (
    <>
      <Hero />
      <SeeTheGround />
      <Capabilities />
      <RangeRings />
      <Landscape />
      <LocalFirst />
      <WhoBuiltIt />
      <Roadmap />
      <ClosingCta />
    </>
  );
}
