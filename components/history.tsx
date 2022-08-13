import React from "react";
import { EmploymentHistoryEntry } from "../data/employmentHistory";
import { EducationHistoryEntry } from "../data/educationHistory";
import { EmploymentSection } from "./employment";
import { EducationSection } from "./education";

interface HistorySectionProps {
  employmentHistory: EmploymentHistoryEntry[];
  educationHistory: EducationHistoryEntry[];
}

export const HistorySection = (props: HistorySectionProps) => {
  return (
    <div className={"p-10 col-span-3 lg:col-span-2 flex flex-col gap-10 "}>
      <EmploymentSection history={props.employmentHistory} />
      <EducationSection history={props.educationHistory} />
    </div>
  );
};
