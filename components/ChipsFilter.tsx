"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Button from "./Button";
import { useWindowSize } from "@uidotdev/usehooks";

export default function ChipsFilter({
  options,
  onChange,
  className,
}: {
  options: {
    value: string;
    label: string;
    defaultActive?: boolean;
  }[];
  onChange: (option: string) => void;
  className?: string;
}) {
  const [active, setActive] = useState(options.find((item) => item.defaultActive)?.value || options[0].value);
  const window = useWindowSize();
  const handleClick = (option: string) => {
    setActive(option);
    onChange(option);
  };

  return (
    <div className={cn("flex flex-wrap gap-1.5 md:gap-1.5 lg:gap-2 items-center", className)}>
      {options.map((option) => (
        <Button
          key={option.value}
          className={"shrink-0 grow-0"}
          variant={active === option.value ? "default" : "outline"}
          size={window.width && window.width < 600 ? "sm" : "default"}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </Button>
      ))}

      {/* <Button
        size={"sm"}
        onClick={() => setCount((count) => count + 1)}
      >
        Testing
      </Button> */}
    </div>
  );
}
