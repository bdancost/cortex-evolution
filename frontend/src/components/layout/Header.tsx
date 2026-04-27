import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

export function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formatted = now.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(formatted);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-secondary/70">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-10"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold italic tracking-tight">
            CORTEX<span className="text-accent">EVO</span>
          </h1>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider text-muted">
            <a href="#" className="hover:text-accent transition">
              Início
            </a>
            <a href="#" className="hover:text-accent transition">
              Serviços
            </a>
            <a href="#" className="hover:text-accent transition">
              Barbeiros
            </a>
            <a href="#" className="hover:text-accent transition">
              Agenda
            </a>
          </nav>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          {/* CLOCK */}
          <div className="hidden md:flex flex-col text-right leading-none">
            <span className="text-[10px] uppercase tracking-widest text-muted">
              São Paulo - BR
            </span>

            <span className="font-mono text-accent text-sm font-bold">
              {time}
            </span>
          </div>

          <Button variant="outline">Agendar</Button>
        </motion.div>
      </div>
    </header>
  );
}
