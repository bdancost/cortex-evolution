import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-secondary/80 backdrop-blur-md">
        <div className="px-4 sm:px-6 md:px-16 py-5 flex items-center justify-between">
          {/* LOGO */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-black italic"
          >
            CORTEX<span className="text-accent">EVO</span>
          </motion.h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm text-muted hover:text-white transition"
            >
              Início
            </a>

            <a
              href="#services"
              className="text-sm text-muted hover:text-white transition"
            >
              Serviços
            </a>

            <a
              href="#team"
              className="text-sm text-muted hover:text-white transition"
            >
              Equipe
            </a>

            <a
              href="#testimonials"
              className="text-sm text-muted hover:text-white transition"
            >
              Depoimentos
            </a>

            <Button variant="outline">Agendar</Button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="
              md:hidden
              flex flex-col gap-1.5
              p-2 rounded-xl
              active:scale-95
              transition
              "
            aria-label="Abrir menu"
          >
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
            />

            {/* PANEL */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="
                fixed top-0 right-0 z-50
                h-screen w-[85%]
                bg-secondary
                border-l border-white/10
                p-8
                md:hidden
              "
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-black italic">MENU</h2>

                <button onClick={toggleMenu} className="text-3xl leading-none">
                  ×
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg">
                <a href="#home" onClick={toggleMenu}>
                  Início
                </a>

                <a href="#services" onClick={toggleMenu}>
                  Serviços
                </a>

                <a href="#team" onClick={toggleMenu}>
                  Equipe
                </a>

                <a href="#testimonials" onClick={toggleMenu}>
                  Depoimentos
                </a>
              </nav>

              <div className="mt-10">
                <Button variant="primary" className="w-full">
                  Agendar Agora
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
