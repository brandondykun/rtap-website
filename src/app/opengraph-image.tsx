import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/config/site';

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Read at module load (not per request) so the image is prerendered at build time.
const [mono, logo] = await Promise.all([
  readFile(join(process.cwd(), 'src/assets/fonts/JetBrainsMono-Bold.woff')),
  readFile(join(process.cwd(), 'src/assets/logo-mark.png')),
]);

export default async function Image() {
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 96px',
          background: '#0c0a09',
          backgroundImage:
            'radial-gradient(ellipse at 85% 40%, rgba(245,158,11,0.18), transparent 55%), linear-gradient(rgba(250,250,249,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,249,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          fontFamily: 'JetBrains Mono',
          color: '#fafaf9',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 22, letterSpacing: 8, color: '#f59e0b' }}>
          <div style={{ width: 11, height: 11, background: '#f59e0b', transform: 'rotate(45deg)' }} />
          TACTICAL MAPPING
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginTop: 24 }}>
          <img src={logoSrc} height={110} width={98} alt="" />
          <div style={{ fontSize: 150, letterSpacing: 18, lineHeight: 1 }}>RTAP</div>
        </div>
        <div style={{ fontSize: 26, color: '#a8a29e', marginTop: 14 }}>{site.fullName}</div>
        <div style={{ display: 'flex', fontSize: 46, marginTop: 48 }}>
          Locate. Communicate.&nbsp;<span style={{ color: '#f59e0b' }}>Dominate.</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'JetBrains Mono', data: mono, weight: 700, style: 'normal' }] },
  );
}
