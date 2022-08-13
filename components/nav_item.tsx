export const NavItem = ({ title }: { title: string }) => {
  return (
    <button
      className={"hover:border-x box-border border-black p-2"}
    >
      {title}
    </button>
  );
};
