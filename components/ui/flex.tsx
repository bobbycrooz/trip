import  * as React from "react";
import { cn } from "@/lib/utils";

interface IFlex extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number;
  between?: boolean;
}

export const Flex = React.forwardRef<HTMLDivElement, IFlex>(
  ({ className, gap, between, ...props }, ref) => (
    <div ref={ref} className={cn(className, `flex items-center ${between ? "justify-between" : ""}`, gap ? `gap-${gap}` : "gap-1")}>
      {props.children}
    </div>
  )
);

Flex.displayName = "flex";
