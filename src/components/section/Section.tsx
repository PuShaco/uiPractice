import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <div className="p-4 border bg-muted rounded-lg">{children}</div>;
}
