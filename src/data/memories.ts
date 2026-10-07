export interface MemoryArtifact {
  id: string;
  type: "note" | "flower" | "ticket" | "sketch" | "date" | "empty";
  title: string;
  subtitle?: string;
  dateStr?: string;
  content: string;
  texture: string;
  accentColor: string;
  isUnlockedDefault: boolean;
}

export const TIMELINE_EVENTS = [
  {
    id: "anniversary-genesis",
    date: "September 29, 2026",
    title: "Where the story opened its first page",
    category: "anniversary",
    description: "The moment the unspoken clicked into place. Not a grand cinematic spectacle, but a quiet certainty that something very real had begun.",
    isLocked: false,
    symbol: "feather",
  },
  {
    id: "october-five",
    date: "October 5, 2026",
    title: "A quiet mark in time",
    category: "special-memory",
    description: "A gentle evening kept between two minds. The kind of memory that doesn't need to explain itself to anyone else in the world.",
    isLocked: false,
    symbol: "moon",
  },
  {
    id: "future-one",
    date: "A quiet tomorrow",
    title: "Something we’ll remember later",
    category: "future",
    description: "An unwritten evening waiting for tea, a warm walk, or another 2 AM conversation about nothing and everything.",
    isLocked: true,
    symbol: "stars",
  },
  {
    id: "future-two",
    date: "Someday soon",
    title: "Waiting for the right moment",
    category: "future",
    description: "A blank page in this little book, ready to be filled with laughter that makes your stomach hurt.",
    isLocked: true,
    symbol: "compass",
  },
];

export const MEMORY_ARTIFACTS: MemoryArtifact[] = [
  {
    id: "shapla-pressed",
    type: "flower",
    title: "Pressed Shapla Petal",
    subtitle: "From calm water",
    content: "White water lily petal, dried between the heavy pages of an encyclopedia. Soft, quiet, patient.",
    texture: "paper",
    accentColor: "#FAF8F5",
    isUnlockedDefault: true,
  },
  {
    id: "padma-pressed",
    type: "flower",
    title: "Rose Padma Specimen",
    subtitle: "Lotus bloom",
    content: "A lotus petal carrying the softest flush of pink. Untouched by mud, resilient through monsoon rain.",
    texture: "paper",
    accentColor: "#E8A2A8",
    isUnlockedDefault: true,
  },
  {
    id: "midnight-rabbit-hole",
    type: "note",
    title: "3:14 AM Margin Scribble",
    subtitle: "Found in her notebook",
    dateStr: "Late evening",
    content: "“Why do bioluminescent squids only flash when the water temperature drops two degrees?” (She had an exam at 9 AM the next morning).",
    texture: "ruled",
    accentColor: "#B89B72",
    isUnlockedDefault: true,
  },
  {
    id: "bus-ticket",
    type: "ticket",
    title: "Rider’s Stub",
    subtitle: "Evening commute",
    dateStr: "Bashabo to Home",
    content: "A crumpled paper stub folded twice into a pocket. The sound of rain on bus windows and headphones playing a quiet song.",
    texture: "kraft",
    accentColor: "#D5CABB",
    isUnlockedDefault: true,
  },
  {
    id: "tea-ring",
    type: "sketch",
    title: "A Circular Ring of Tea",
    subtitle: "Left on an open book",
    content: "The accidental mark left when the teacup cooled down while she got lost in chapter four. Never wipe it away.",
    texture: "paper",
    accentColor: "#B89B72",
    isUnlockedDefault: true,
  },
  {
    id: "empty-slot-1",
    type: "empty",
    title: "An Empty Slot",
    subtitle: "Reserved for tomorrow",
    content: "This page is waiting for something worth remembering.",
    texture: "dashed",
    accentColor: "#6F8067",
    isUnlockedDefault: false,
  },
  {
    id: "empty-slot-2",
    type: "empty",
    title: "Another Unwritten Page",
    subtitle: "In the quiet corner",
    content: "Not every day needs to be historic to belong in this box. A quiet Tuesday is enough.",
    texture: "dashed",
    accentColor: "#7D9EA1",
    isUnlockedDefault: false,
  },
];
