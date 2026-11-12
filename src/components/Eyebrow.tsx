/** The app's section label: "◆ LABEL" in mono bold amber with wide tracking. */
export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent ${className}`}>
      <span aria-hidden>◆ </span>
      {children}
    </p>
  );
}
