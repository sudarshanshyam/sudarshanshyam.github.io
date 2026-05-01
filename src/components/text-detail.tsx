import Link from "next/link";
import { notFound } from "next/navigation";

import { Chip } from "@/components/chip";
import { SessionLogModal } from "@/components/session-log-modal";
import { getTextBySlug } from "@/lib/data";
import { formatLongDate, formatSessionDate, totalMinutes } from "@/lib/format";

type TextDetailProps = {
  slug: string;
};

export function TextDetail({ slug }: TextDetailProps) {
  const text = getTextBySlug(slug);

  if (!text) {
    notFound();
  }

  const totalLoggedMinutes = text.sessions.reduce((sum, session) => sum + session.minutes, 0);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <Link href="/" className="inline-flex text-sm font-semibold text-[var(--accent-strong)]">
          Back to dashboard
        </Link>

        <section className="rounded-[2.5rem] bg-[linear-gradient(160deg,_rgba(246,239,225,0.96),_rgba(229,216,193,0.94))] p-6 shadow-[0_24px_80px_rgba(59,47,28,0.12)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Chip tone={text.status === "PARKED" ? "warm" : "default"}>{text.status}</Chip>
                <p className="text-sm text-[var(--muted)]">{text.format}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">{text.author}</p>
                <h1 className="mt-2 font-serif text-4xl text-[var(--ink)] sm:text-5xl">{text.title}</h1>
              </div>
              <p className="max-w-3xl text-base leading-7 text-[var(--ink)]">{text.nextEntryPoint}</p>
            </div>
            <div className="flex gap-3">
              <SessionLogModal textTitle={text.title} />
              <Link
                href="/review"
                className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--paper)]"
              >
                Review backlog
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-black/5 bg-[var(--paper)] p-6 shadow-[0_10px_40px_rgba(46,44,39,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">Restart context</p>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[var(--panel)] p-4">
                  <dt className="text-sm text-[var(--muted)]">Current location</dt>
                  <dd className="mt-1 text-lg font-semibold text-[var(--ink)]">{text.currentLocation}</dd>
                </div>
                <div className="rounded-[1.5rem] bg-[var(--panel)] p-4">
                  <dt className="text-sm text-[var(--muted)]">Last read</dt>
                  <dd className="mt-1 text-lg font-semibold text-[var(--ink)]">{formatLongDate(text.lastReadAt)}</dd>
                </div>
                <div className="rounded-[1.5rem] bg-[var(--panel)] p-4">
                  <dt className="text-sm text-[var(--muted)]">Cadence</dt>
                  <dd className="mt-1 text-lg font-semibold text-[var(--ink)]">{text.targetCadenceLabel}</dd>
                </div>
                <div className="rounded-[1.5rem] bg-[var(--panel)] p-4">
                  <dt className="text-sm text-[var(--muted)]">Logged time</dt>
                  <dd className="mt-1 text-lg font-semibold text-[var(--ink)]">{totalMinutes(totalLoggedMinutes)}</dd>
                </div>
              </dl>
              {text.focusNote ? (
                <div className="mt-4 rounded-[1.5rem] border border-dashed border-black/10 p-4">
                  <p className="text-sm font-semibold text-[var(--ink)]">Reading focus</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text.focusNote}</p>
                </div>
              ) : null}
              {text.backlogReason ? (
                <div className="mt-4 rounded-[1.5rem] border border-dashed border-black/10 p-4">
                  <p className="text-sm font-semibold text-[var(--ink)]">Why this is parked</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text.backlogReason}</p>
                </div>
              ) : null}
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-[var(--paper)] p-6 shadow-[0_10px_40px_rgba(46,44,39,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">Recall notes</p>
              <div className="mt-4 space-y-4">
                {text.recallNotes.length > 0 ? (
                  text.recallNotes.map((note) => (
                    <article key={note.id} className="rounded-[1.5rem] bg-[var(--panel)] p-4">
                      <p className="text-sm font-semibold text-[var(--ink)]">{note.prompt}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--ink)]">{note.response}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{note.sourceHint}</p>
                    </article>
                  ))
                ) : (
                  <p className="rounded-[1.5rem] bg-[var(--panel)] p-4 text-sm leading-6 text-[var(--muted)]">
                    No recall note yet. The quick log modal is ready to become the capture point for restart context.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-[var(--paper)] p-6 shadow-[0_10px_40px_rgba(46,44,39,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">Session history</p>
            <div className="mt-4 space-y-4">
              {text.sessions.map((session) => (
                <article key={session.id} className="rounded-[1.5rem] border border-black/5 bg-[var(--panel)] p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-semibold text-[var(--ink)]">{formatSessionDate(session.startedAt)}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {session.startLocation} to {session.endLocation}
                      </p>
                    </div>
                    <div className="text-sm text-[var(--muted)]">
                      {session.minutes} min • energy {session.energy}/5
                    </div>
                  </div>
                  {session.note ? <p className="mt-3 text-sm leading-6 text-[var(--ink)]">{session.note}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
