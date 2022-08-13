import React from "react";

const ListItem = ({children}: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

interface ListContainerProps {
  title: string;
  children: React.ReactNode;
}

const ListContainer = ({title, children}: ListContainerProps) => {
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
