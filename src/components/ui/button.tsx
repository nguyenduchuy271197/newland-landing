import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md body1 font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-700 text-neutral-50 hover:bg-primary-700/90",
        outline:
          "border border-primary-500 text-primary-500 shadow-sm hover:bg-primary-500 hover:text-neutral-50",
        secondary:
          "bg-primary-500 text-neutral-50 shadow-sm hover:bg-primary-500/80",
        link: "text-primary-500 underline-offset-4 underline decoration-primary-500",
      },
      size: {
        sm: "body2 h-[20px] px-[8px] py-[4px] lg:h-[34px] lg:px-[16px] lg:py-[8px]",
        default:
          "h-[28px] px-[12px] py-[6px] lg:h-[40px] lg:px-[20px] lg:py-[10px]",
        lg: "h-[36px] px-[20px] py-[10px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
