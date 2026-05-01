import Link from "next/link";

import { TextCard } from "@/components/text-card";
import { getTexts } from "@/lib/data";

export function DashboardShell() {
  const texts = getTexts();
  const averageProgress = Math.round(texts.reduce((sum, text) => sum + text.progressPercent, 0) / texts.length);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="rounded-[2.5rem] border border-black/5 bg-[linear-gradient(180deg,_rgba(255,250,242,0.96),_rgba(245,236,219,0.92))] p-8 shadow-[0_18px_55px_rgba(46,44,39,0.08)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-strong)]">Reading dashboard</p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
              A cleaner view of the books you are currently reading.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
              Just two books, their progress, and a simple visual cue for how far along each one is.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[var(--paper)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Overview</p>
            <div className="mt-4 flex items-end justify-between gap-4">
              <div>
                <p className="font-serif text-5xl text-[var(--ink)]">{texts.length}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Books in progress</p>
              </div>
              <div className="text-right">
                <p className="font-serif text-5xl text-[var(--ink)]">{averageProgress}%</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Average completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">Current books</p>
            <h2 className="mt-2 font-serif text-3xl text-[var(--ink)]">Progress at a glance</h2>
          </div>
          <Link href="/review" className="text-sm font-semibold text-[var(--accent-strong)]">
            Review page
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {texts.map((text) => (
            <TextCard key={text.id} text={text} />
          ))}
        </div>
      </section>
    </main>
  );
}
