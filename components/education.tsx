import React from "react";
import { EducationHistoryEntry } from "../data/educationHistory";
import {ClockIcon, GlobeIcon, PinIcon} from "./icons";

interface EducationSectionProps {
  history: EducationHistoryEntry[];
}

export const EducationSection = (props: EducationSectionProps) => {
  return (
    <div>
      <h3 className={"text-2xl font-light"}>Education</h3>
      <hr className={"w-[50px] border-2 border-secondary mb-8"} />
      <div className={"grid gap-8"}>
        {props.history.map((entry, idx) => (
          <EducationEntry key={idx} data={entry} />
        ))}
      </div>
    </div>
  );
};

const EducationEntry = ({ data: props }: { data: EducationHistoryEntry }) => {
  return (
    <div className={"border-l-4 pl-4 border-primary"}>
      <h4 className={"font-bold mb-2"}>{props.title}</h4>
      <div className={"text-primary text-sm flex gap-2"}>
        <PinIcon />
        <span className={"text-accent"}>{props.institution}</span>
        <div />
        <ClockIcon />
        <span className={"text-accent"}>{props.duration}</span>
      </div>
      <div className={"text-secondary"}>
        <ul className={"list-['+'] ml-2"}>
          {props.items.map((item, idx) => (
            <li key={idx} className={"pl-1"}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface EducationProps {
  title: string; // Co-Director
  company: string; // 1Pulse Digital
  duration: string; // 2010 - current
  duties: string[]; // ["Project management", "Other"]
}

export const Education = (props: EducationProps) => {
  return (
    <div className={"border-l-4 pl-4 border-primary"}>
      <h4 className={"font-bold mb-2"}>{props.title}</h4>
      <div className={"text-primary text-sm flex gap-2"}>
        <GlobeIcon />
        <span className={"text-accent"}>{props.company}</span>
        <div />
        <ClockIcon />
        <span className={"text-accent"}>{props.duration}</span>
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

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

interface ListContainerProps {
  title: string;
  children: React.ReactNode;
}

const ListContainer = ({ title, children }: ListContainerProps) => {
  return (
    <div className={"grid gap-2"}>
      <h3 className={"text-2xl font-light"}>{title}</h3>
      <ul className={"ml-6 pl-2 border-l-4 border-primary text-secondary"}>
        {children}
      </ul>
    </div>
  );
};

export const List = {
  Item: ListItem,
  Container: ListContainer,
};
