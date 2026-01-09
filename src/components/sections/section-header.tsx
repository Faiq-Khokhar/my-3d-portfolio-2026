import { cn } from "@/lib/utils";
import { BoxReveal } from "../reveal-animations";
import { ReactNode } from "react";

export const SectionHeader = ({
  id,
  title,
  desc,
  className,
}: {
  id: string;
  title: string | ReactNode;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className={cn("top-[70px] sticky mb-96", className)}>
      <BoxReveal width="100%">
        <h2
          className={cn(
            "text-4xl text-center md:text-7xl font-bold",
            "text-foreground"
          )}
        >
          {title}
        </h2>
      </BoxReveal>
      <p className="mx-auto pt-2 line-clamp-4 max-w-3xl font-normal text-base text-center text-muted-foreground">
        {desc}
      </p>
    </div>
  );
};
