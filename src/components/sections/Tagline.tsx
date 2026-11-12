/** "Locate. Communicate. Dominate." with Dominate. in amber, as on the app's landing screen. */
export function Tagline({ className = '' }: { className?: string }) {
  return (
    <p className={`font-mono font-bold text-text ${className}`}>
      Locate. Communicate. <span className="text-accent">Dominate.</span>
    </p>
  );
}
