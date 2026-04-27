import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Sem filas",
    description:
      "Seu horário reservado com pontualidade e atendimento organizado.",
  },
  {
    number: "02",
    title: "Escolha o barbeiro",
    description:
      "Agende com o profissional ideal para seu estilo e preferência.",
  },
  {
    number: "03",
    title: "Reserva instantânea",
    description: "Escolha dia e horário em poucos cliques, direto pelo site.",
  },
  {
    number: "04",
    title: "Experiência premium",
    description: "Ambiente moderno, conforto e atenção em cada detalhe.",
  },
];

export function BenefitsSection() {
  return (
    <section className="px-6 md:px-16 py-28">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold block mb-4">
          Benefícios
        </span>

        <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">
          O jeito inteligente
          <br />
          de cuidar do visual.
        </h2>

        <p className="text-muted mt-6 text-lg leading-relaxed">
          Tecnologia, organização e experiência premium reunidas em um só lugar.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
            "
          >
            <span className="text-accent text-sm font-bold tracking-widest">
              {item.number}
            </span>

            <h3 className="text-2xl font-bold uppercase italic mt-4 mb-4">
              {item.title}
            </h3>

            <p className="text-muted leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
