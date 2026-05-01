import { Text } from "@/lib/types";

type LinkItem = {
  label: string;
  href: string;
};

type ResearchItem = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links: LinkItem[];
  summary?: string;
};

type NoteEntry = {
  title: string;
  description: string;
};

type SectionGroup = {
  title: string;
  entries: NoteEntry[];
};

const demoNow = new Date("2026-04-14T12:00:00.000Z");

const texts: Text[] = [
  {
    id: "text-ginzburg",
    slug: "family-lexicon",
    title: "Family Lexicon",
    author: "Natalia Ginzburg",
    progressPercent: 46,
    progressTone: "#c87d36",
    format: "Paperback",
    status: "ACTIVE",
    currentLocation: "p. 88",
    nextEntryPoint: "Resume at the kitchen-table scene; skim the last paragraph on p. 87 for names before continuing.",
    focusNote: "Track repeated family phrases and who uses them.",
    targetCadenceLabel: "Every 3 days",
    lastReadAt: "2026-04-13T19:10:00.000Z",
    sessions: [
      {
        id: "session-1",
        startedAt: "2026-04-13T18:40:00.000Z",
        minutes: 30,
        startLocation: "p. 72",
        endLocation: "p. 88",
        energy: 4,
        note: "Momentum was good once the family nicknames clicked again.",
      },
      {
        id: "session-2",
        startedAt: "2026-04-09T20:15:00.000Z",
        minutes: 20,
        startLocation: "p. 60",
        endLocation: "p. 72",
        energy: 3,
      },
    ],
    recallNotes: [
      {
        id: "recall-1",
        prompt: "What thread should be in mind before restarting?",
        response: "Language is the family archive. The repeated sayings are carrying history more than plot beats are.",
        sourceHint: "Sessions from pages 60-88",
        createdAt: "2026-04-13T19:15:00.000Z",
      },
    ],
  },
  {
    id: "text-morrison",
    slug: "playing-in-the-dark",
    title: "Playing in the Dark",
    author: "Toni Morrison",
    progressPercent: 68,
    progressTone: "#3b6d73",
    format: "EPUB",
    status: "ACTIVE",
    currentLocation: "Location 642",
    nextEntryPoint: "Restart from the paragraph beginning 'American Africanism becomes...' and keep an eye on how Morrison shifts from description to argument.",
    focusNote: "Capture one sentence about the method, not just the examples.",
    targetCadenceLabel: "Twice weekly",
    lastReadAt: "2026-04-06T06:50:00.000Z",
    sessions: [
      {
        id: "session-3",
        startedAt: "2026-04-06T06:25:00.000Z",
        minutes: 25,
        startLocation: "Location 588",
        endLocation: "Location 642",
        energy: 5,
        note: "Dense but very live; worth restarting a few lines back next time.",
      },
    ],
    recallNotes: [
      {
        id: "recall-2",
        prompt: "What makes this feel easy to lose after a break?",
        response: "The examples are memorable, but the interpretive frame is what needs preserving.",
        sourceHint: "Morning session on Apr 6",
        createdAt: "2026-04-06T06:55:00.000Z",
      },
    ],
  },
];

export const siteData = {
  profile: {
    name: "Your Name",
    bio: "I work on problems in mathematics and theoretical computer science. This site is a small record of research, notes, and a few interests that sit nearby.",
    affiliation: "Department / Institute, University",
    interests: ["Algorithms", "Probability", "Combinatorics", "Learning theory"],
    contactLinks: [
      { label: "Email", href: "mailto:you@example.edu" },
      { label: "Google Scholar", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  recent: [
    {
      kind: "Note",
      title: "A short note on concentration inequalities",
      description: "A working summary of three standard estimates and where I keep mixing them up.",
      date: "April 2026",
    },
    {
      kind: "Misc",
      title: "Books worth rereading slowly",
      description: "A short list of books whose style is doing some of the thinking.",
      date: "March 2026",
    },
  ],
  research: {
    intro:
      "Papers and preprints. The emphasis here is on keeping the record readable rather than decorative.",
    publications: [
      {
        title: "Title of Paper",
        authors: "Your Name, Collaborator Name",
        venue: "Conference or Journal",
        year: "2026",
        summary: "A one-line informal summary can go here when useful.",
        links: [
          { label: "Paper", href: "#" },
          { label: "arXiv", href: "#" },
        ],
      },
      {
        title: "Title of Preprint",
        authors: "Your Name, Collaborator Name",
        venue: "Preprint",
        year: "2025",
        links: [{ label: "PDF", href: "#" }],
      },
    ],
  },
  notes: {
    intro:
      "These are notes from papers, talks, and topics I am trying to understand. Some are polished; many are rough. I use this page as a public notebook rather than as a finished exposition archive.",
    sections: [
      {
        title: "Paper Notes",
        entries: [
          {
            title: "Placeholder: note on a recent paper",
            description: "A short note, reading log, or reconstruction of a proof will live here.",
          },
        ],
      },
      {
        title: "Topic Notes",
        entries: [
          {
            title: "Placeholder: topic note",
            description: "For background notes, definitions, and examples that do not belong to a single paper.",
          },
        ],
      },
      {
        title: "Proof Sketches",
        entries: [
          {
            title: "Placeholder: proof sketch",
            description: "A place for compressed arguments, lemmas I want to remember, and outlines of standard proofs.",
          },
        ],
      },
      {
        title: "Examples",
        entries: [
          {
            title: "Placeholder: worked example",
            description: "Small examples, counterexamples, and sanity checks.",
          },
        ],
      },
    ],
  },
  misc: {
    intro:
      "A small corner for things outside research: books, music, singing, stand-up comedy, and other attempts at understanding how people say things well.",
    sections: [
      {
        title: "Books",
        entries: [
          {
            title: "Books I return to",
            description: "A modest list of books that reward rereading for style, structure, or voice.",
          },
        ],
      },
      {
        title: "Music and Singing",
        entries: [
          {
            title: "Listening and practice notes",
            description: "Fragments on songs, phrasing, and what changes when something is spoken versus sung.",
          },
        ],
      },
      {
        title: "Stand-up and Performance",
        entries: [
          {
            title: "On timing and delivery",
            description: "A small set of observations about rhythm, pauses, and how jokes survive on the page.",
          },
        ],
      },
      {
        title: "Small Lists",
        entries: [
          {
            title: "Things worth recommending carefully",
            description: "Short, curated lists rather than a running stream of links.",
          },
        ],
      },
    ],
  },
} satisfies {
  profile: {
    name: string;
    bio: string;
    affiliation: string;
    interests: string[];
    contactLinks: LinkItem[];
  };
  recent: {
    kind: string;
    title: string;
    description?: string;
    date: string;
  }[];
  research: {
    intro: string;
    publications: ResearchItem[];
  };
  notes: {
    intro: string;
    sections: SectionGroup[];
  };
  misc: {
    intro: string;
    sections: SectionGroup[];
  };
};

function compareDates(left?: string, right?: string) {
  if (!left && !right) return 0;
  if (!left) return 1;
  if (!right) return -1;
  return new Date(right).getTime() - new Date(left).getTime();
}

export function getTexts(): Text[] {
  return texts.toSorted((a, b) => compareDates(a.lastReadAt, b.lastReadAt));
}

export function getTextSlugs(): string[] {
  return texts.map((text) => text.slug);
}

export function getTextBySlug(slug: string): Text | undefined {
  return texts.find((text) => text.slug === slug);
}

export function isNeglectedText(text: Text): boolean {
  if (!text.lastReadAt) return true;

  const daysSince = (demoNow.getTime() - new Date(text.lastReadAt).getTime()) / (1000 * 60 * 60 * 24);

  return daysSince >= 7;
}
