import { motion } from "framer-motion";

const problems = [
  "Esperar muito para ser atendido",
  "Chegar e o salão estar lotado",
  "Barbeiro indisponível no horário",
  "Atendimento corrido e sem atenção",
];

export function ProblemSection() {
  return (
    <section className="px-6 md:px-16 py-28 bg-black/20">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="uppercase tracking-[0.3em] text-red-400 text-xs font-semibold block mb-4">
          Problema Real
        </span>

        <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">
          Chega de perder
          <br />
          tempo esperando.
        </h2>

        <p className="text-muted mt-6 text-lg leading-relaxed">
          Seu tempo vale muito. Atendimento premium começa com organização.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
        {problems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              p-6 rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
            "
          >
            <div className="flex items-start gap-4">
              <span className="text-red-400 text-xl">✕</span>

              <p className="text-lg text-text-soft leading-relaxed">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER MESSAGE */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-2xl md:text-4xl font-bold">
          No <span className="text-accent">Cortex Evolution</span>, seu horário
          é prioridade.
        </p>
      </motion.div>
    </section>
  );
}
