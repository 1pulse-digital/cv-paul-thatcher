import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={
        "border border-black p-2 hover:ring ring-black whitespace-nowrap"
      }
    >
      {props.children}
    </button>
  );
};

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={"p-2 hover:ring ring-black whitespace-nowrap"}
    >
      {props.children}
    </button>
  );
};
