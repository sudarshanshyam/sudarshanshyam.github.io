export type TextStatus = "ACTIVE" | "PARKED" | "FINISHED";

export type Session = {
  id: string;
  startedAt: string;
  minutes: number;
  startLocation: string;
  endLocation: string;
  energy: 1 | 2 | 3 | 4 | 5;
  note?: string;
};

export type RecallNote = {
  id: string;
  prompt: string;
  response: string;
  sourceHint: string;
  createdAt: string;
};

export type Text = {
  id: string;
  slug: string;
  title: string;
  author: string;
  progressPercent: number;
  progressTone: string;
  format: string;
  status: TextStatus;
  currentLocation: string;
  nextEntryPoint: string;
  focusNote?: string;
  backlogReason?: string;
  targetCadenceLabel: string;
  lastReadAt?: string;
  sessions: Session[];
  recallNotes: RecallNote[];
};
