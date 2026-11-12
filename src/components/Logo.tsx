import Image from 'next/image';
import logoMark from '@/assets/logo-mark.png';

/** The logo mark + RTAP wordmark, as in the app. */
export function Logo({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const lg = size === 'lg';
  return (
    <span className={`inline-flex items-center ${lg ? 'gap-3 sm:gap-4' : 'gap-2.5'}`}>
      <Image src={logoMark} alt="" className={lg ? 'h-10 w-auto sm:h-[52px]' : 'h-[22px] w-auto'} priority={lg} />
      <span
        className={`font-mono font-bold text-text ${lg ? 'text-5xl leading-none tracking-[0.12em] sm:text-7xl' : 'text-base tracking-[0.25em]'}`}
      >
        RTAP
      </span>
    </span>
  );
}
