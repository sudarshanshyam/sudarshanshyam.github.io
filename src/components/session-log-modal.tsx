"use client";

import { useState } from "react";

type SessionLogModalProps = {
  textTitle?: string;
};

export function SessionLogModal({ textTitle }: SessionLogModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--ink-soft)]"
      >
        Quick log
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/35 px-4 py-6 sm:items-center">
          <div className="w-full max-w-xl rounded-[2rem] border border-black/5 bg-[var(--paper)] p-6 shadow-[0_20px_80px_rgba(24,24,20,0.18)]">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">Quick session log</p>
                <h3 className="font-serif text-2xl text-[var(--ink)]">
                  {textTitle ? `Capture just enough to restart ${textTitle}` : "Capture a reading checkpoint"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/10 px-3 py-1 text-sm text-[var(--muted)]"
              >
                Close
              </button>
            </div>

            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--muted)]">
                Text
                <input
                  defaultValue={textTitle}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-0"
                  placeholder="Which text did you read?"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--muted)]">
                Minutes
                <input
                  defaultValue="25"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-0"
                  placeholder="25"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--muted)]">
                Ended at
                <input
                  defaultValue="p. 88"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-0"
                  placeholder="p. 88"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--muted)]">
                Energy
                <select className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-0">
                  <option>5 - Clear</option>
                  <option>4 - Good</option>
                  <option>3 - Fine</option>
                  <option>2 - Foggy</option>
                  <option>1 - Spent</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-[var(--muted)] sm:col-span-2">
                Restart note
                <textarea
                  rows={4}
                  defaultValue="Leave a one-line reminder for the next session."
                  className="w-full rounded-[1.5rem] border border-black/10 bg-white px-4 py-3 text-[var(--ink)] outline-none ring-0"
                />
              </label>
              <div className="sm:col-span-2 flex items-center justify-between gap-4 rounded-[1.5rem] bg-[var(--panel)] px-4 py-3">
                <p className="text-sm text-[var(--muted)]">Prototype mode: this modal is wired for the dashboard flow and ready for a future server action.</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]"
                >
                  Save checkpoint
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
