import React from "react";

interface NavItemProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const NavItem = (props: NavItemProps) => {
  return (
    <button
      onClick={props.onClick}
      className={"hover:border-x box-border border-black p-2"}
    >
      {props.title}
    </button>
  );
};
