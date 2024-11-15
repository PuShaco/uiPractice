import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  height: number;
  children: ReactNode;
};

export default function SkeletonContainer({ height, children }: Props) {
  return (
    <div
      className={classNames(
        "w-full flex items-stretch justify-start gap-6"
      )}
      style={{ minHeight: `${height}px` }}
    >
      {children}
    </div>
  );
}
