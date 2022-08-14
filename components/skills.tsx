import React, { ForwardedRef } from "react";
import { List } from "./list";

interface SkillsSectionProps {
  technicalSkills: string[];
  personalSkills: string[];
}

const SkillsSection = React.forwardRef(
  (props: SkillsSectionProps, ref: ForwardedRef<HTMLDivElement | null>) => {
    return (
      <div
        ref={ref}
        className={
          "p-10 col-span-3 lg:col-span-1 flex flex-col gap-10 bg-light"
        }
      >
        <List.Container title={"Technical Skills"}>
          {props.technicalSkills.map((s, idx) => (
            <List.Item key={idx}>{s}</List.Item>
          ))}
        </List.Container>

        <List.Container title={"Personal Skills"}>
          {props.personalSkills.map((s, idx) => (
            <List.Item key={idx}>{s}</List.Item>
          ))}
        </List.Container>
      </div>
    );
  }
);

SkillsSection.displayName = "SkillsSection";
export { SkillsSection };
