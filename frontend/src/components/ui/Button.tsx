import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "dark";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles =
      "rounded-full font-black uppercase tracking-tighter transition-all duration-300";

    const variants = {
      primary: "bg-accent text-primary px-12 py-5",
      outline:
        "border-2 border-accent text-accent px-6 py-2 text-xs tracking-widest font-bold hover:bg-accent hover:text-primary",
      dark: "bg-secondary border border-white/10 text-white px-8 py-3 hover:bg-white/5",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
