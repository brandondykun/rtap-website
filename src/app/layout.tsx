import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { site, siteUrl } from '@/config/site';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'], weight: ['500', '700'] });

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { type: 'website', siteName: site.name, title: `${site.name}: ${site.tagline}`, description: site.description },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-full bg-bg font-sans text-text">{children}</body>
    </html>
  );
}
