export interface EducationHistoryEntry {
  title: string; // Co-Director
  institution: string; // 1Pulse Digital
  duration: string; // 2010 - current
  items: string[]; // ["Project management", "Other"]
}

export const educationHistory: EducationHistoryEntry[] = [
  {
    title: "PDM Postgraduate Diploma in Management",
    institution: "Wits Business School",
    duration: "2003 - 2004",
    items: [
      "Completed a SABS Food Health Safety Management Course and an Advanced Excel Course",
    ],
  },
  {
    title: "B.Sc (Physiology)",
    institution: "Wits University",
    duration: "2000 - 2002",
    items: [],
  },
  {
    title: "MB.Bch.",
    institution: "Wits Medical School",
    duration: "1997 - 1999",
    items: ["Completed 3 years of the MB.Bch. *Incomplete"],
  },
  {
    title: "Matric",
    institution: "St. Stithians College",
    duration: "1993 - 1997",
    items: ["Completed matric with academic honours and distinctions."],
  },
];
