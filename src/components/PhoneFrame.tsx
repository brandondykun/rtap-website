import Image from 'next/image';
import type { Screenshot } from '@/content/screenshots';

/** A CSS phone around a whole, uncropped screenshot. */
export function PhoneFrame({
  shot,
  sizes,
  priority = false,
  className = '',
}: {
  shot: Screenshot;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border-[6px] border-surface bg-black shadow-[0_0_0_1px_var(--color-border),0_30px_70px_rgba(0,0,0,0.65)] ${className}`}
    >
      <Image src={shot.src} alt={shot.alt} sizes={sizes} priority={priority} placeholder="blur" className="block h-auto w-full" />
    </div>
  );
}
