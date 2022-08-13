import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={"border border-black p-1 hover:ring ring-black whitespace-nowrap"}>
      {children}
    </button>
  );
};
