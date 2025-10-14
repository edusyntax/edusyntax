'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm sm:text-base',
        sm: 'h-9 px-3 text-xs sm:text-sm',
        lg: 'h-11 px-6 sm:px-8 text-base sm:text-lg',
        xl: 'h-12 px-8 sm:px-10 text-lg sm:text-xl',
        '2xl': 'h-14 px-10 sm:px-12 text-xl sm:text-2xl',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text?: string;            // dynamic button text
  icon?: React.ReactNode;    // optional icon
  animateIcon?: boolean;     // rotate icon
  shine?: boolean;           // shine effect
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, text, icon, animateIcon = false, shine = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Render Icon with optional rotation animation
    const renderedIcon = icon ? (
      animateIcon ? (
        <motion.span
          className="flex-shrink-0"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          {icon}
        </motion.span>
      ) : (
        <span className="flex-shrink-0">{icon}</span>
      )
    ) : null;

    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props}>
        {shine && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/40 pointer-events-none"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
        )}
        {renderedIcon}
        {text || children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
