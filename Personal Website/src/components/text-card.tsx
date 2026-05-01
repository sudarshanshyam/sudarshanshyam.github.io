import Link from "next/link";

import { formatRelativeDays } from "@/lib/format";
import { Text } from "@/lib/types";

type TextCardProps = {
  text: Text;
};

export function TextCard({ text }: TextCardProps) {
  const ringStyle = {
    background: `conic-gradient(${text.progressTone} 0 ${text.progressPercent}%, rgba(33,29,23,0.08) ${text.progressPercent}% 100%)`,
  };

  return (
    <article className="flex h-full flex-col justify-between rounded-[2rem] border border-black/5 bg-[var(--paper)] p-7 shadow-[0_12px_36px_rgba(46,44,39,0.06)]">
      <div className="space-y-8">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{text.author}</p>
            <h3 className="font-serif text-3xl text-[var(--ink)]">{text.title}</h3>
            <p className="text-sm text-[var(--muted)]">Last updated {formatRelativeDays(text.lastReadAt)}</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="grid h-24 w-24 place-items-center rounded-full" style={ringStyle}>
              <div className="grid h-[4.65rem] w-[4.65rem] place-items-center rounded-full bg-[var(--paper)]">
                <span className="text-xl font-semibold text-[var(--ink)]">{text.progressPercent}%</span>
              </div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">Completed</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-3 overflow-hidden rounded-full bg-black/6">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${text.progressPercent}%`, backgroundColor: text.progressTone }}
            />
          </div>
          <div className="flex items-center justify-between text-sm text-[var(--muted)]">
            <span>{text.currentLocation}</span>
            <span>{100 - text.progressPercent}% left</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/6 pt-5">
        <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">{text.nextEntryPoint}</p>
        <Link
          href={`/texts/${text.slug}`}
          className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:border-black/20 hover:bg-[var(--panel)]"
        >
          View book
        </Link>
      </div>
    </article>
  );
}
