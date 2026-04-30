import { motion } from "framer-motion";

const services = [
  {
    title: "Corte Premium",
    description:
      "Técnicas avançadas com acabamento impecável e visual de alto impacto.",
  },
  {
    title: "Barba & Estilo",
    description:
      "Design preciso para alinhar sua barba com sua identidade visual.",
  },
  {
    title: "Experiência VIP",
    description:
      "Atendimento exclusivo com conforto, atenção e excelência total.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-4 sm:px-6 md:px-16 py-24 md:py-28">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold block mb-4">
          Premium Experience
        </span>

        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic leading-tight">
          Serviços criados
          <br />
          para impactar.
        </h3>

        <p className="text-muted max-w-2xl mx-auto mt-6 text-lg">
          Mais que estética. Uma experiência criada para elevar sua presença.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
              p-8 rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-md
              transition-all
              duration-300
            "
          >
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-6 text-accent font-bold text-lg">
              0{index + 1}
            </div>

            <h4 className="text-2xl font-bold uppercase italic mb-4">
              {service.title}
            </h4>

            <p className="text-muted leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
