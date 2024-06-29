import { ReactNode } from "react";

export default function GroupContainer({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <div className="group-container">
      <h2>{name}</h2>
      <div className="buttons-container">{children}</div>
    </div>
  );
}
