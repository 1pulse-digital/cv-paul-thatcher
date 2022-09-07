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
      "Strategy Oversight",
      "Finance",
      "Budgeting",
      "Supplier sourcing and Liason",
      "Imports",
      "Marketing and IT management",
    ],
  },
  {
    title: "Director",
    company: "EPGT, trading as NoH₂O",
    duration: "2010 - current",
    duties: [
      "Inititial idea and setup business planning",
      "Strategy Oversight",
      "Finance",
      "Logistics",
      "Budgeting",
      "Supplier sourcing and Liason",
      "Imports",
      "Marketing and IT management",
      "Stock control",
    ],
  },
  {
    title: "Business Manager",
    company: "Gritzman & Thatcher Inc",
    duration: "2004 - 2010",
    duties: [
      "Key Holder",
      "Budgeting",
      "Stock control",
      "Supplier Liasion",
      "Diagnostic Processing Machine controller",
      "Disciplinary Hearings",
      "Accredition Oversight",
      "Staff Management (formal and Informal)",
      "Specimen Dissection team Management",
    ],
  },
];
