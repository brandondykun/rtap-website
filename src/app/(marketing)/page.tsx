import { Capabilities } from '@/components/sections/Capabilities';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { Hero } from '@/components/sections/Hero';
import { LocalFirst } from '@/components/sections/LocalFirst';
import { Roadmap } from '@/components/sections/Roadmap';
import { SeeTheGround } from '@/components/sections/SeeTheGround';
import { WhoBuiltIt } from '@/components/sections/WhoBuiltIt';

export default function Home() {
  return (
    <>
      <Hero />
      <SeeTheGround />
      <Capabilities />
      <WhoBuiltIt />
      <LocalFirst />
      <Roadmap />
      <ClosingCta />
    </>
  );
}
