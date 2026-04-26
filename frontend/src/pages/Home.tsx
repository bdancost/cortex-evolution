import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="bg-secondary text-text-soft min-h-screen selection:bg-accent selection:text-primary overflow-x-hidden">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-16 py-8 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold tracking-tighter italic"
        >
          CORTEX<span className="text-accent">EVO</span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="border-2 border-accent text-accent px-6 py-2 rounded-full font-bold hover:bg-accent hover:text-primary transition-all duration-300 uppercase text-xs tracking-widest"
        >
          Agendar
        </motion.button>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh]">
        {/* TEXTO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex-1 px-6 md:pl-16 md:pr-0 z-10 py-12 text-center md:text-left"
        >
          {/* Badge */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            The Next Level
          </motion.span>

          {/* Título */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 uppercase italic"
          >
            Cortes que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              impactam.
            </span>
          </motion.h2>

          {/* Texto */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-muted text-lg md:text-xl mb-10 max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            A técnica encontra o estilo. Onde cada detalhe é projetado para
            elevar sua presença.
          </motion.p>

          {/* Botão */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 60px rgba(34,197,94,0.5)",
            }}
            className="bg-accent text-primary px-12 py-5 rounded-full font-black uppercase tracking-tighter transition-all"
          >
            Agendar agora
          </motion.button>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 relative w-full h-full min-h-[500px] md:min-h-[90vh]"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-secondary" />

          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700 ease-in-out"
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070"
            alt="Barber Shop"
          />

          <div className="absolute inset-0 z-20 bg-gradient-to-tr from-secondary/40 via-transparent to-accent/5 pointer-events-none" />
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Experiência Premium
          </h3>
          <p className="text-muted max-w-xl mx-auto">
            Mais do que um corte. Um ritual de estilo e presença.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 p-8 rounded-xl backdrop-blur-md border border-white/10"
          >
            <h4 className="text-xl font-bold mb-3">Corte Premium</h4>
            <p className="text-muted">
              Técnicas avançadas com acabamento impecável.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 p-8 rounded-xl backdrop-blur-md border border-white/10"
          >
            <h4 className="text-xl font-bold mb-3">Barba & Estilo</h4>
            <p className="text-muted">
              Design de barba alinhado com seu estilo.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 p-8 rounded-xl backdrop-blur-md border border-white/10"
          >
            <h4 className="text-xl font-bold mb-3">Experiência VIP</h4>
            <p className="text-muted">
              Atendimento exclusivo com conforto máximo.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
