import { ReactNode } from "react";

// type ContainerProps = {
//     hflex?: number[];
//     children: ReactNode;
//   };

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex items-flex justify-start gap-6">{children}</div>
  );
}
