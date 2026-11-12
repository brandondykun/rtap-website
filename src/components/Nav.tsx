'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';

const LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#3d-op', label: '3D & OP' },
  { href: '/#roadmap', label: 'Roadmap' },
  { href: '/support', label: 'Support' },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-8">
        <Link href="/" aria-label="RTAP home" className="rounded-md focus-visible:outline-2 focus-visible:outline-accent">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-text">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Coming soon</span>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg aria-hidden width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-border-subtle px-4 py-2 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base text-text">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
