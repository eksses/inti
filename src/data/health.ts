export interface HealthCareItem {
  id: string;
  title: string;
  badge?: string;
  severity?: "critical" | "important" | "gentle";
  primaryText: string;
  careSteps: string[];
  note: string;
}

export const HEALTH_DATA = {
  disclaimer: "Medical information should always be confirmed with a qualified medical professional. This little note exists purely out of personal care.",
  criticalAllergy: {
    title: "CRITICAL MEDICAL NOTE",
    condition: "Severe allergy: anesthesia",
    directive: "In any emergency or clinical procedure, anesthesia allergy must be explicitly stated to attending physicians immediately.",
  },
  items: [
    {
      id: "migraines",
      title: "When a migraine takes over",
      severity: "important" as const,
      primaryText: "Sensory overload shuts her down. Light and sound become physical needles.",
      careSteps: [
        "Dim every light in the room immediately.",
        "A cool, damp cloth over the forehead or eyes.",
        "Absolute quiet — no questions requiring complex decisions.",
        "A cool glass of water within reaching distance.",
      ],
      note: "Do not ask 'are you okay?' repeatedly. Just soften the room and stay nearby.",
    },
    {
      id: "stomach-pain",
      title: "When her stomach hurts",
      severity: "gentle" as const,
      primaryText: "Frequent abdominal cramps and pain can drain all her physical stamina.",
      careSteps: [
        "Offer a warm heating compress or hot water bottle.",
        "Small warm sips of water or mild herbal tea.",
        "Curl up without pressure to sit up or walk around.",
        "Gently comfort her if the frustration or pain brings tears.",
      ],
      note: "Pain can make her cry; treat tears as natural relief, not as something embarrassing.",
    },
    {
      id: "hydration",
      title: "The hydration deficit",
      severity: "gentle" as const,
      primaryText: "She will spend seven continuous hours researching a topic and completely forget water exists.",
      careSteps: [
        "Don't ask 'do you want water?' (the answer will be no).",
        "Just place a clean, cold glass on her desk within hand's reach.",
        "Watch it magically disappear in sips while she reads.",
      ],
      note: "No nagging. Just gentle, visible presence of water.",
    },
    {
      id: "cycle-care",
      title: "Tender days & cycle care",
      severity: "gentle" as const,
      primaryText: "Those monthly days (like October 4 evening) when her body feels heavy and emotionally frayed.",
      careSteps: [
        "Soft blankets, extra warmth, zero guilt about resting all day.",
        "Comfort food without hesitation.",
        "Patience with sudden mood shifts or vulnerability.",
      ],
      note: "Her vulnerability is a privilege to protect.",
    },
  ],
};
