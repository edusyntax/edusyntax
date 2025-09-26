import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// 1. Core CVA Variants
const badgeVariants = cva(
  "inline-flex items-center rounded-full font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-gray-300 text-gray-800",
      },
      size: {
        sm: "text-xs px-3 py-0.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

// 2. Extra gradient styles
const gradientClasses: Record<string, string> = {
  blueGreen: "bg-gradient-to-r from-trust-blue to-success-green text-white shadow-lg",
  orangePink: "bg-gradient-to-r from-primary-orange to-pink-500 text-white shadow-lg",
  trust: "bg-gradient-to-r from-indigo-500 to-sky-400 text-white shadow-lg",
};

// 3. Optional effects
const effectClasses: Record<string, string> = {
  shine: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-[shine_1.5s_infinite]",
  pulse: "animate-pulse",
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  gradient?: keyof typeof gradientClasses;
  icon?: React.ReactNode;
  effect?: keyof typeof effectClasses; // <-- optional shine/pulse/etc.
}

function Badge({ className, variant, size, gradient, icon, effect, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        badgeVariants({ variant, size }),
        gradient ? gradientClasses[gradient] : "",
        effect ? effectClasses[effect] : "",
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
