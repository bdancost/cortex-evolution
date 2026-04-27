import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex-1 px-6 md:px-16 py-20 z-20 text-center md:text-left">
        {/* TAG */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-xs text-accent font-semibold block mb-6"
        >
          Cortex Evolution
        </motion.span>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight uppercase"
        >
          Seu estilo
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
            redefinido.
          </span>
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-muted max-w-xl mx-auto md:mx-0 leading-relaxed"
        >
          Uma experiência premium criada para homens que valorizam presença,
          imagem e precisão em cada detalhe.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Button variant="primary">Agendar agora</Button>

          <Button variant="outline">Conhecer espaço</Button>
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08, x: 80 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.1 }}
        className="flex-1 relative w-full min-h-[520px] md:min-h-[92vh]"
      >
        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070"
          alt="Barber Premium"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK FADE */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-secondary md:to-secondary" />

        {/* LIGHT EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/10" />
      </motion.div>
    </section>
  );
}
