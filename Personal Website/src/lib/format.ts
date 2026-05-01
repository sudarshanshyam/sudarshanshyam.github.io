const relativeFormatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

export function formatSessionDate(iso: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatLongDate(iso?: string): string {
  if (!iso) return "Not started";

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatRelativeDays(iso?: string): string {
  if (!iso) return "New";

  const dayMs = 1000 * 60 * 60 * 24;
  const diffDays = Math.round((new Date(iso).getTime() - Date.now()) / dayMs);

  return relativeFormatter.format(diffDays, "day");
}

export function totalMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;

  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;

  return remainder === 0 ? `${hours}h` : `${hours}h ${remainder}m`;
}
