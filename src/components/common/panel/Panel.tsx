import React, { ReactNode } from "react";

type PanelProps = {
    wflex: number[];
    children: ReactNode;
  };

  export default function Panel({ wflex, children }: PanelProps) {
    const totalFlex = wflex.reduce((sum: number, flex: number) => sum + flex, 0);
  
    return (
      <div className="flex w-full h-full">
        {React.Children.map(children, (child, index) => (
          <div
            className="flex items-center justify-center border bg-muted"
            style={{ flex: wflex[index] / totalFlex }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }