import { motion, useScroll, useTransform } from "framer-motion";

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
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [2200, 3200], [0, -120]);

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* BACKGROUND */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury Barber Interior"
          className="w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16">
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

          <p className="text-muted mt-6 text-lg">
            A experiência premium gera resultados reais.
          </p>
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
                scale: 1.02,
              }}
              className="
                p-8 rounded-2xl
                border border-white/10
                bg-white/10
                backdrop-blur-md
              "
            >
              <div className="text-accent text-xl mb-5">★★★★★</div>

              <p className="text-text-soft leading-relaxed mb-8">
                "{item.feedback}"
              </p>

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
      </div>
    </section>
  );
}
