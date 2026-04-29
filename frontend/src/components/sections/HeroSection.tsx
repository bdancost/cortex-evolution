import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "../ui/Button";

export function HeroSection() {
  const { scrollY } = useScroll();

  // imagem move mais devagar
  const imageY = useTransform(scrollY, [0, 500], [0, -120]);

  // texto move levemente
  const textY = useTransform(scrollY, [0, 500], [0, -60]);

  // fade suave
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* TEXT */}
      <motion.div
        style={{ y: textY, opacity }}
        className="flex-1 px-6 md:px-16 py-20 z-20 text-center md:text-left"
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-xs text-accent font-semibold block mb-6"
        >
          Cortex Evolution
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] uppercase"
        >
          Seu estilo
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
            redefinido.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-muted max-w-xl mx-auto md:mx-0 leading-relaxed"
        >
          Uma experiência premium criada para homens que valorizam presença,
          imagem e precisão em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Button variant="primary">Agendar agora</Button>

          <Button variant="outline">Conhecer espaço</Button>
        </motion.div>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        style={{ y: imageY }}
        className="flex-1 relative w-full min-h-[520px] md:min-h-screen"
      >
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070"
          alt="Barber Premium"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-secondary" />

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/10" />
      </motion.div>
    </section>
  );
}
