/** A page section: standard padding, a 16 px gutter on phones, a max width, and a faint rule above. */
export function Section({
  id,
  className = '',
  innerClassName = '',
  children,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-16 border-t border-border-subtle px-4 py-12 sm:px-8 md:py-16 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl ${innerClassName}`}>{children}</div>
    </section>
  );
}
