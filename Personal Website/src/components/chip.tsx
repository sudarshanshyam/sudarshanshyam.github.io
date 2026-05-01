import { ReactNode } from "react";

type ChipProps = {
  tone?: "default" | "warm" | "muted";
  children: ReactNode;
};

const toneClasses: Record<NonNullable<ChipProps["tone"]>, string> = {
  default: "bg-[var(--panel-strong)] text-[var(--ink)]",
  warm: "bg-[var(--accent-soft)] text-[var(--accent-strong)]",
  muted: "bg-[var(--panel)] text-[var(--muted)]",
};

export function Chip({ tone = "default", children }: ChipProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
