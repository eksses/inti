export interface BookEntry {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  spineColor: string;
  pageContent: string;
  quote: string;
  detail: string;
}

export const BOOKS_DATA: BookEntry[] = [
  {
    id: "rabbit-hole",
    title: "The Rabbit Hole",
    subtitle: "A field guide to unprompted research",
    color: "#2D3B36",
    spineColor: "#1E2A26",
    pageContent: "She starts with one innocent curiosity at 11:30 PM. By 1:45 AM, she has read three archived articles, four Wikipedia subsections, and formed a working hypothesis on deep ocean ecosystems.",
    quote: "“Wait, did you know that…”",
    detail: "Information omnivore. She doesn't just read facts; she collects them like stray stones.",
  },
  {
    id: "one-more-question",
    title: "One More Question",
    subtitle: "Just before sleep",
    color: "#4A4036",
    spineColor: "#332B24",
    pageContent: "The moment the room goes completely dark and you think her brain is finally powering down, she turns over to ask an existential question about human memory or medieval architecture.",
    quote: "“Wait, one last thing.”",
    detail: "Her mind never walks when it can sprint ahead three conversations into the future.",
  },
  {
    id: "things-she-knows",
    title: "Things She Somehow Knows",
    subtitle: "An unauthorized archive",
    color: "#3D384D",
    spineColor: "#2A2636",
    pageContent: "She remembers the exact cadence of something said two months ago, the tiny contradiction in someone's story, and obscure trivia that would save your life on a desert island.",
    quote: "“I just remembered it.”",
    detail: "She pays far more attention than she lets on. Her quiet observation is sharp.",
  },
  {
    id: "2am-brain",
    title: "The 2AM Brain",
    subtitle: "Racing through possibilities",
    color: "#283438",
    spineColor: "#1B2427",
    pageContent: "Calculating eight branching outcomes of a scenario that hasn't happened and probably never will. Solving problems that don't exist yet, just in case.",
    quote: "“Okay, but what if…”",
    detail: "Overthinking is her brain's default defense mechanism. It needs gentle grounding, not logic lectures.",
  },
  {
    id: "sarcasm-dept",
    title: "Sarcasm Department",
    subtitle: "The armor she puts on",
    color: "#473030",
    spineColor: "#312020",
    pageContent: "A dry remark delivered with a straight face. Dark humor deployed with surgical precision the second things feel too sincere or too exposed.",
    quote: "“I'm totally fine, obviously.”",
    detail: "Her sarcasm isn't hostility; it's a small iron gate guarding a very soft garden.",
  },
  {
    id: "soft-things",
    title: "Soft Things She Won't Ask For",
    subtitle: "The unsaid list",
    color: "#3B4237",
    spineColor: "#272C24",
    pageContent: "A glass of water placed nearby without asking. A dim room when her head throbs. Someone remembering what she said she liked three weeks ago. Quiet reassurance that she is allowed to just exist.",
    quote: "“I don't need anything.”",
    detail: "She refuses to ask for softness, but her shoulders drop the second she feels safe.",
  },
];
