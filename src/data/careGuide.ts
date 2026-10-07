export interface CareGuideEntry {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  advice: string[];
  fieldNote: string;
}

export const CARE_GUIDE_DATA: CareGuideEntry[] = [
  {
    id: "when-quiet",
    title: "When she goes quiet",
    tagline: "Do not pry the door open.",
    iconName: "moon",
    advice: [
      "Give her a little space.",
      "She’ll talk when she’s ready.",
      "When she does, just listen without rushing to fix.",
    ],
    fieldNote: "Her silence is usually processing, not anger. Stay warm in the vicinity so she knows the tether hasn't snapped.",
  },
  {
    id: "mind-runs-ahead",
    title: "When her mind runs ahead",
    tagline: "Anchor the room.",
    iconName: "wind",
    advice: [
      "Don’t race it.",
      "Bring the conversation back to one thing at a time.",
      "Calm facts beat matching the panic.",
    ],
    fieldNote: "When thoughts are spiraling into catastrophic chess matches, simple gentle questions bring her back to her body.",
  },
  {
    id: "when-hurting",
    title: "When she’s hurting",
    tagline: "Softness without theater.",
    iconName: "shield",
    advice: [
      "Keep things quiet and gentle.",
      "Dim the room lights.",
      "Stay close without demanding answers.",
      "Offer water.",
      "Let her cry without making her feel embarrassed for it.",
    ],
    fieldNote: "She hates feeling weak or exposed. Protecting her dignity while she cries is how trust is built.",
  },
  {
    id: "quiet-care",
    title: "Quiet care",
    tagline: "Action over announcement.",
    iconName: "coffee",
    advice: [
      "Don’t make a ceremony out of caring.",
      "Just hand her the water.",
      "Order actual food instead of asking if she's hungry.",
      "Remember the little things she casually mentioned weeks ago.",
    ],
    fieldNote: "Big declarations make her defensive. Quiet, steady, practical actions make her feel looked after.",
  },
  {
    id: "people-around",
    title: "The people around her",
    tagline: "Patience and protection.",
    iconName: "compass",
    advice: [
      "Be steady while she learns who deserves access to her.",
      "Do not lecture her on who to cut off.",
      "Remind her of her worth when people take advantage of her loyalty.",
    ],
    fieldNote: "She holds onto draining people longer than she should out of genuine kindness. Don't judge her; just be the safe benchmark.",
  },
];
