import Link from "next/link";

import { Chip } from "@/components/chip";
import { getTexts } from "@/lib/data";
import { formatLongDate, formatRelativeDays } from "@/lib/format";

export function ReviewBoard() {
  const texts = getTexts();
  const reviewTexts = texts.filter((text) => text.status === "PARKED" || formatRelativeDays(text.lastReadAt).includes("ago"));

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <Link href="/" className="inline-flex text-sm font-semibold text-[var(--accent-strong)]">
            Back to dashboard
          </Link>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">Review and backlog</p>
            <h1 className="font-serif text-4xl text-[var(--ink)]">Texts that need a nudge, a note, or a healthy pause.</h1>
            <p className="max-w-3xl text-sm leading-6 text-[var(--muted)]">
              The review page keeps neglected texts visible without moral pressure. The goal is to decide what to resume, what to refresh,
              and what to park intentionally.
            </p>
          </div>
        </div>

        <section className="grid gap-5">
          {reviewTexts.map((text) => (
            <article
              key={text.id}
              className="grid gap-5 rounded-[2rem] border border-black/5 bg-[var(--paper)] p-6 shadow-[0_10px_40px_rgba(46,44,39,0.08)] lg:grid-cols-[1fr_0.9fr]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{text.author}</p>
                    <h2 className="mt-1 font-serif text-3xl text-[var(--ink)]">{text.title}</h2>
                  </div>
                  <Chip tone={text.status === "PARKED" ? "warm" : "muted"}>{text.status}</Chip>
                </div>
                <div className="rounded-[1.5rem] bg-[var(--panel)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">Next entry point</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink)]">{text.nextEntryPoint}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/5 p-4">
                  <p className="text-sm text-[var(--muted)]">Last read</p>
                  <p className="mt-1 text-lg font-semibold text-[var(--ink)]">{formatLongDate(text.lastReadAt)}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{formatRelativeDays(text.lastReadAt)}</p>
                </div>
                <div className="rounded-[1.5rem] border border-black/5 p-4">
                  <p className="text-sm text-[var(--muted)]">Suggested move</p>
                  <p className="mt-1 text-lg font-semibold text-[var(--ink)]">
                    {text.status === "PARKED" ? "Keep parked until the right reading window returns" : "Add a recall note before resuming"}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-black/5 p-4 sm:col-span-2">
                  <p className="text-sm text-[var(--muted)]">Reason / focus</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--ink)]">{text.backlogReason ?? text.focusNote ?? "No note yet."}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
