export interface EmploymentHistoryEntry {
  title: string; // Co-Director
  company: string; // 1Pulse Digital
  duration: string; // 2010 - current
  duties: string[]; // ["Project management", "Other"]
}

export const employmentHistory: EmploymentHistoryEntry[] = [
  {
    title: "Co-Director",
    company: "Jerusalema",
    duration: "2022 - current",
    duties: [
      "Logistics",
      "Lorem ipsum",
      "dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore",
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    title: "Director",
    company: "EPGT, trading as NoH₂O",
    duration: "2010 - current",
    duties: [
      "Logistics",
      "Lorem ipsum",
      "dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore",
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    title: "Business Manager",
    company: "Gritzman & Thatcher Inc",
    duration: "2004 - 2010",
    duties: [
      "Logistics",
      "Lorem ipsum",
      "dolor sit amet, consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore",
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];
