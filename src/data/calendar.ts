export interface CalendarDay {
  dayName: string;
  shortName: string;
  isClassDay: boolean;
  timeNote?: string;
  subjectNote?: string;
  gentleReminder?: string;
}

export const CALENDAR_DATA = {
  headline: "Her Weekly Rhythm",
  subhead: "The days when she packs her bag, ties her hair, and steps out into the city.",
  location: "Udvash, Bashabo",
  days: [
    {
      dayName: "Sunday",
      shortName: "Sun",
      isClassDay: true,
      timeNote: "Afternoon lecture & revision",
      subjectNote: "Deep focus, lecture notes, racing through formulas",
      gentleReminder: "Take your water bottle. Don't skip breakfast beforehand.",
    },
    {
      dayName: "Monday",
      shortName: "Mon",
      isClassDay: false,
      timeNote: "Quiet study & breathing room",
      subjectNote: "Self-paced reading, random research spirals",
      gentleReminder: "A day to rest your shoulders and catch up on sleep.",
    },
    {
      dayName: "Tuesday",
      shortName: "Tue",
      isClassDay: true,
      timeNote: "Class routine & problem sets",
      subjectNote: "Intense practice exams, questions that require deep thinking",
      gentleReminder: "You are sharper than your doubts. Remember to stretch your neck.",
    },
    {
      dayName: "Wednesday",
      shortName: "Wed",
      isClassDay: false,
      timeNote: "Mid-week reset",
      subjectNote: "Reviewing concepts, quiet evening notes",
      gentleReminder: "A warm cup of something comforting tonight.",
    },
    {
      dayName: "Thursday",
      shortName: "Thu",
      isClassDay: true,
      timeNote: "Weekly wrap-up sessions",
      subjectNote: "Finishing the weekly syllabus, stepping out into the evening breeze",
      gentleReminder: "Almost to the weekend. You made it through.",
    },
    {
      dayName: "Friday",
      shortName: "Fri",
      isClassDay: false,
      timeNote: "Slow morning",
      subjectNote: "No alarms, long deep breaths, reading whatever she wants",
      gentleReminder: "Sleep in. The world can wait until afternoon.",
    },
    {
      dayName: "Saturday",
      shortName: "Sat",
      isClassDay: false,
      timeNote: "Prep & quiet contemplation",
      subjectNote: "Organizing the desk, putting books in order",
      gentleReminder: "Quiet desk, lamp on, getting ready for tomorrow.",
    },
  ] as CalendarDay[],
};
