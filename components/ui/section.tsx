"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { Children } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sectionVariant> {}

const sectionVariant = cva("w-full px-2", {
  variants: {
    variant: {
      default: "max-w-[1280px] mx-auto lg:px-10",
      full: "lg:px-0",
      fullWithMaxContent: "",
    },
    backgroundColor: {
      default: "bg-white",
      elephant: "bg-elephant-100/50",
      cinnabar: "bg-cinnabar-100",
    },
  },
  defaultVariants: {
    variant: "default",
    backgroundColor: "default",
  },
});

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ variant, backgroundColor, className, children, ...props }, ref) => {
    return (
      <div
        className={cn(sectionVariant({ variant, backgroundColor }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Section.displayName = "Section";

const SectionTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h1
      className={cn(
        "text-[42px] leading-[130%] font-dm text-elephant-950 mb-4 lg:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const SectionSubtitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "text-xl px-8 text-elephant-700/80 mb-8 lg:px-0 lg:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

const SectionHeader = ({
  justify,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { justify?: "left" | "center" }) => {
  return (
    <div
      className={cn(
        "",
        justify === "left" ? "text-left" : "text-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Section, SectionTitle, SectionSubtitle, SectionHeader };
