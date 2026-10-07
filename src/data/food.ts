export interface FoodItem {
  id: string;
  name: string;
  category: "staple" | "passion" | "refusal" | "indifference";
  iconType: "ramen" | "chili" | "fish" | "sweet" | "water";
  dialogue: string;
  subtext: string;
}

export const FOOD_DATA: FoodItem[] = [
  {
    id: "ramen",
    name: "A Bowl of Instant Ramen",
    category: "staple",
    iconType: "ramen",
    dialogue: "“Ramen is beloved. Ramen is not a complete personality.”",
    subtext: "Her go-to survival food when cooking is too much friction. Steaming broth, noodles, consumed while watching a video at 1 AM.",
  },
  {
    id: "extreme-spice",
    name: "Extremely Spicy Food",
    category: "passion",
    iconType: "chili",
    dialogue: "“If it doesn’t bring a tear of fire to the eye, is it even seasoned?”",
    subtext: "Her spice tolerance could intimidate a dragon. Raw green chilies, extra chili oil, maximum heat. Endorphins on demand.",
  },
  {
    id: "small-fish",
    name: "Small Fish (Choto Mach)",
    category: "refusal",
    iconType: "fish",
    dialogue: "“Absolutely not. Take it away.”",
    subtext: "A non-negotiable household veto. Too many bones, wrong texture, zero interest. We simply do not serve this, ever.",
  },
  {
    id: "sweets",
    name: "Desserts & Sweets",
    category: "indifference",
    iconType: "sweet",
    dialogue: "“One bite is enough. Actually, half a bite.”",
    subtext: "She doesn't have a big sweet tooth. Savory and spicy win every contest. A tiny taste satisfies her curiosity.",
  },
  {
    id: "proper-meal",
    name: "Actual Real Food",
    category: "staple",
    iconType: "water",
    dialogue: "“Someone has to put actual nutrition into this body.”",
    subtext: "Her appetite is naturally small. If left to her own devices, she'll forget lunch until 6 PM. Order real food, put the bowl in front of her.",
  },
];
