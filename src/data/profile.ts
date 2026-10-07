export interface ProfileData {
  name: string;
  affectionateNames: string[];
  birthday: {
    month: string;
    day: number;
    year: number;
    formatted: string;
  };
  anniversary: {
    month: string;
    day: number;
    year: number;
    label: string;
  };
  specialDate: {
    month: string;
    day: number;
    year: number;
    note: string;
  };
  cycleNoteDate: {
    month: string;
    day: number;
    timeOfDay: string;
  };
  favoriteFlowers: {
    name: string;
    bengaliName: string;
    description: string;
  }[];
  classes: {
    days: string[];
    locationTag: string;
    note: string;
  };
}

export const PROFILE_DATA: ProfileData = {
  name: "Inti",
  affectionateNames: ["Inti", "my Inti", "my girl", "the person this little place belongs to"],
  birthday: {
    month: "September",
    day: 26,
    year: 2007,
    formatted: "September 26",
  },
  anniversary: {
    month: "September",
    day: 29,
    year: 2026,
    label: "Where the story began",
  },
  specialDate: {
    month: "October",
    day: 5,
    year: 2026,
    note: "A quiet personal memory kept between two minds",
  },
  cycleNoteDate: {
    month: "October",
    day: 4,
    timeOfDay: "evening",
  },
  favoriteFlowers: [
    {
      name: "Shapla",
      bengaliName: "শাপলা",
      description: "White water lily drifting gently over calm dark water. Pure, tranquil, still.",
    },
    {
      name: "Padma",
      bengaliName: "পদ্ম",
      description: "Sacred lotus with soft rose petals rising above the murky depths. Elegant and resilient.",
    },
  ],
  classes: {
    days: ["Sunday", "Tuesday", "Thursday"],
    locationTag: "Udvash (Bashabo)",
    note: "Routine study days. A bag packed, books stacked, stepping out into the day.",
  },
};
