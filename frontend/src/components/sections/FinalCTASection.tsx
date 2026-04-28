import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function FinalCTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* BACKGROUND PREMIUM */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-emerald-400 to-lime-300" />

      {/* GLOW SHAPES */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 blur-[140px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16 text-center max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-xs font-bold text-black/70 block mb-6"
        >
          Último Passo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black uppercase italic leading-tight text-black"
        >
          Seu próximo visual
          <br />
          começa agora.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-black/70 max-w-2xl mx-auto"
        >
          Reserve seu horário em segundos e experimente um novo padrão de
          atendimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Button variant="dark" className="px-12 py-5 text-lg shadow-2xl">
            Agendar Agora
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
