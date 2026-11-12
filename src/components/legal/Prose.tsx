import { Eyebrow } from '@/components/Eyebrow';

/** A readable text page: title, last-updated date, then sections. `review` marks a draft the owner must approve. */
export function Prose({
  eyebrow,
  title,
  updated,
  review = false,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  review?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article
      data-review={review ? 'owner' : undefined}
      className="mx-auto w-full max-w-[68ch] px-4 py-12 sm:px-8 md:py-20 [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-10 [&_h2]:font-mono [&_h2]:text-xs [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-[0.2em] [&_h2]:text-text [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
      {updated && (
        <p className="!mt-3 font-mono text-xs text-text-muted">
          Last updated <time dateTime={updated}>{updated}</time>
        </p>
      )}
      <div className="mt-8 text-[15px] leading-relaxed text-text-muted">{children}</div>
    </article>
  );
}
