import { motion, useScroll, useTransform } from "framer-motion";

const team = [
  {
    name: "Rafael Costa",
    role: "Fade Specialist",
  },
  {
    name: "Lucas Mendes",
    role: "Beard Designer",
  },
  {
    name: "Thiago Alves",
    role: "Premium Stylist",
  },
];

export function TeamSection() {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [1200, 2200], [0, -120]);
  return (
    <section className="relative py-28 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80"
          alt="Barber Team"
          className="w-full h-full object-cover"
        />

        {/* Overlay escuro suave */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Glow premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[0.3em] text-accent text-xs font-semibold block mb-4">
            Nossa Equipe
          </span>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">
            Especialistas em
            <br />
            transformar estilos.
          </h2>

          <p className="text-muted mt-6 text-lg">
            Profissionais preparados para entregar presença e excelência.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                text-center
              "
            >
              <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-accent">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold uppercase italic">
                {member.name}
              </h3>

              <p className="text-muted mt-3">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
