import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Matheus Lima",
    feedback:
      "Nunca mais esperei em salão. Atendimento impecável e corte absurdo.",
  },
  {
    name: "Carlos Mendes",
    feedback: "Ambiente premium e agendamento fácil. Parece outro nível.",
  },
  {
    name: "Rafael Souza",
    feedback: "Pontualidade real. Cheguei no horário e fui atendido na hora.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 md:px-16 py-28 bg-white/[0.02]">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold block mb-4">
          Clientes Reais
        </span>

        <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">
          Quem viveu
          <br />
          recomenda.
        </h2>

        <p className="text-muted mt-6 text-lg">Resultados que falam por si.</p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
            className="
              p-8 rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
            "
          >
            {/* Stars */}
            <div className="text-accent text-xl mb-5">★★★★★</div>

            {/* Feedback */}
            <p className="text-muted leading-relaxed mb-8">"{item.feedback}"</p>

            {/* User */}
            <div>
              <h3 className="font-bold text-lg uppercase italic">
                {item.name}
              </h3>

              <span className="text-sm text-muted">
                Cliente Cortex Evolution
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
