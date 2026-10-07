export interface FearItem {
  id: string;
  category: "physical" | "emotional";
  name: string;
  symbol: string;
  symbolicScene: {
    visualDescription: string;
    ambientTone: string;
  };
  reassurance: string;
  samirNote: string;
}

export const FEARS_DATA: FearItem[] = [
  {
    id: "heights",
    category: "physical",
    name: "Heights",
    symbol: "A quiet high balcony looking down onto soft city embers",
    symbolicScene: {
      visualDescription: "Looking out from a safe terrace railing into distant quiet evening lights below.",
      ambientTone: "Deep midnight blue, grounding solid wooden floor underfoot.",
    },
    reassurance: "Solid ground is right here. Keep your feet planted; you never have to lean over the edge alone.",
    samirNote: "Whenever the world feels like it's tilting off a cliff, hold onto something real.",
  },
  {
    id: "deep-water",
    category: "physical",
    name: "Deep Water",
    symbol: "Dark water fading into calm, quiet depth",
    symbolicScene: {
      visualDescription: "Still, silent water where moonlight floats peacefully upon the surface.",
      ambientTone: "Muted teal and dark indigo. Serene, slow ripples.",
    },
    reassurance: "The surface holds you. There are no sudden drops, only gentle stillness.",
    samirNote: "You don't have to swim across the ocean tonight. Stay by the edge where the waterlilies bloom.",
  },
  {
    id: "ghosts",
    category: "physical",
    name: "The Dark & Shadows",
    symbol: "A quiet hallway, a soft warm light left on at the end",
    symbolicScene: {
      visualDescription: "An ambiguous shadow in the corner that turns out to be just a jacket on a chair under the lamp.",
      ambientTone: "Warm amber lamplight dispelling cold corners.",
    },
    reassurance: "The house is quiet. The shadows are harmless. The lock is on and the light stays lit.",
    samirNote: "If the 3 AM quiet feels unsettling, remember you can always turn the lamp back on.",
  },
  {
    id: "being-loved",
    category: "emotional",
    name: "Being Loved Too Much",
    symbol: "A door left slightly ajar with warm light spilling through",
    symbolicScene: {
      visualDescription: "A door neither forced shut nor locked, with soft light spilling across the wooden threshold.",
      ambientTone: "Warm paper cream and gentle gold.",
    },
    reassurance: "Love isn't a debt you have to pay back. It doesn't demand performance or collateral.",
    samirNote: "You are allowed to be cherished without having to earn it every single hour.",
  },
  {
    id: "losing-control",
    category: "emotional",
    name: "Losing Emotional Control",
    symbol: "Two hands almost touching across a quiet space",
    symbolicScene: {
      visualDescription: "A golden thread spanning gently between two quiet points, flexible and unbreakable.",
      ambientTone: "Soft graphite and quiet rose.",
    },
    reassurance: "If you break down, the world doesn't end. You don't have to be composed all the time.",
    samirNote: "Spiraling doesn't scare me. You don't have to apologize for feeling things deeply.",
  },
  {
    id: "feeling-dismissed",
    category: "emotional",
    name: "Being Ignored or Dismissed",
    symbol: "A small flame that someone carefully protects with cupped hands",
    symbolicScene: {
      visualDescription: "A glowing candle flame shielded from drafty wind.",
      ambientTone: "Warm gold, steady flame.",
    },
    reassurance: "Your words matter. Your thoughts are not 'too much' or annoying.",
    samirNote: "I'm listening. Even to the tiny random things you think nobody noticed.",
  },
];
