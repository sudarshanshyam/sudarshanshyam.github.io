type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">{eyebrow}</p>
      <div className="space-y-1">
        <h2 className="font-serif text-3xl text-[var(--ink)]">{title}</h2>
        <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>
    </div>
  );
}
