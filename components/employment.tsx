import React from "react";
import { EmploymentHistoryEntry } from "../data/employmentHistory";
import { ClockIcon, GlobeIcon } from "./icons";

interface EmploymentSectionProps {
  history: EmploymentHistoryEntry[];
}

export const EmploymentSection = (props: EmploymentSectionProps) => {
  return (
    <div>
      <h3 className={"text-2xl font-light"}>Employment</h3>
      <hr className={"w-[50px] border-2 border-secondary mb-8"} />
      <div className={"grid gap-8"}>
        {props.history.map((entry, idx) => (
          <EmploymentEntry key={idx} data={entry} />
        ))}
      </div>
    </div>
  );
};

const EmploymentEntry = ({ data: props }: { data: EmploymentHistoryEntry }) => {
  return (
    <div className={"border-l-4 pl-4 border-primary"}>
      <h4 className={"font-bold mb-2"}>{props.title}</h4>
      <div className={"text-primary text-sm flex gap-2"}>
        <GlobeIcon />
        <span className={"text-custom1"}>{props.company}</span>
        <div />
        <ClockIcon />
        <span className={"text-custom1"}>{props.duration}</span>
      </div>
      <div className={"text-secondary"}>
        <span>Duties:</span>
        <ul className={"list-['-'] ml-2"}>
          {props.duties.map((duty, idx) => (
            <li key={idx} className={"pl-1"}>
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
