import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={"border border-black p-2 hover:ring ring-black whitespace-nowrap"}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={"p-2 hover:ring ring-black whitespace-nowrap"}>
      {children}
    </button>
  );
};
