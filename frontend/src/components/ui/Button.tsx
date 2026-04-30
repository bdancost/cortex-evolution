import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "dark";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    // 1. Movemos as classes utilitárias para o baseStyles
    const baseStyles =
      "flex items-center justify-center gap-2 rounded-full font-black uppercase tracking-tighter transition-all duration-300 select-none touch-manipulation";

    // 2. Tipamos o objeto para evitar erros de indexação no TS
    const variants: Record<"primary" | "outline" | "dark", string> = {
      primary:
        "bg-accent text-primary px-12 py-5 shadow-lg shadow-accent/20 hover:brightness-110",
      outline:
        "border-2 border-accent text-accent px-6 py-2 text-xs tracking-widest font-bold hover:bg-accent hover:text-primary",
      dark: "bg-zinc-900 border border-white/10 text-white px-8 py-3 hover:bg-white/5",
    };

    return (
      <motion.button
        ref={ref}
        // Juntamos todas as classes aqui dentro do cn
        className={cn(baseStyles, variants[variant], className)}
        // Substituindo o active:scale pelo whileTap do Framer Motion
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
