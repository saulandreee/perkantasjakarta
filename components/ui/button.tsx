import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-colors active:shadow-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-cinnabar-600 text-cinnabar-50 hover:bg-cinnabar-600/90 shadow-[#c70e15]",
        secondary:
          "bg-cinnabar-100 text-cinnabar-600 hover:bg-cinnabar-100 shadow-[#ffc5c7]",
        outline:
          "border border-cinnabar-600 text-cinnabar-600 hover:bg-cinnabar-50 shadow-[#c70e15]",
        ghost:
          "text-cinnabar-600 hover:bg-cinnabar-600 hover:text-cinnabar-50 border-b-transparent shadow-[#c70e15]",
        link: "text-cinnabar-600 hover:underline hover:underline-offset-2 hover:underline-cinnabar-600 !shadow-none !p-0 !rounded-none",
      },
      size: {
        default: "px-4 py-2 gap-2.5 shadow-[0_3px_0] active:translate-y-[3px]",
        sm: "rounded-lg px-3 py-2 text-xs gap-1.5 shadow-[0_1.5px_0] active:translate-y-[1.5px]",
        lg: "px-6 py-4 rounded-2xl text-lg gap-3 leading-[100%] shadow-[0_5px_0] active:translate-y-[5px]",
        icon: "h-8 w-8 shadow-[0_2px_0] active:translate-y-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
