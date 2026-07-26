type MediaPlaceholderProps = {
  label: "GIF" | "LOOM";
  hero?: boolean;
  children: React.ReactNode;
};

export function MediaPlaceholder({
  label,
  hero,
  children,
}: MediaPlaceholderProps) {
  return (
    <div
      className={`mt-6 flex w-full flex-col gap-3 rounded-lg border border-border bg-surface ${
        hero ? "p-10" : "p-6"
      }`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
        {label}
        {hero ? " · HERO" : ""}
      </span>
      <span className="font-mono text-sm leading-relaxed text-muted">
        {children}
      </span>
    </div>
  );
}
