import Link from 'next/link';
import { site } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-border-subtle px-4 py-6 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.company} · Training &amp; simulation only.
        </p>
        <ul className="flex gap-5">
          {[['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/support', 'Support']].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="transition-colors hover:text-text">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
