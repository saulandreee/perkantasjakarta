import React from "react";
import { buttonVariants, Button as ShadButton } from "./ui/button";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}
const loadingVariant = cva("w-4 h-4", {
  variants: {
    size: {
      default: "",
      sm: "w-3 h-3",
      lg: "w-[18px] h-[18px]",
      icon: "w-4 h-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <ShadButton
      className={cn(className, "relative group overflow-hidden")}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    >
      {isLoading ? (
        <Loader className={cn(loadingVariant({ size }), "animate-spin")} />
      ) : (
        children
      )}
      {/* {variant === "link" && <span className="absolute bottom-0 left-0 h-0.5 transition-all bg-cinnabar-600 w-0 group-hover:w-full"></span>} */}
    </ShadButton>
  );
}
