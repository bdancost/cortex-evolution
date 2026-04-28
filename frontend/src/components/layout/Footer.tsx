import { motion } from "framer-motion";
import { useBrazilClock } from "../../hooks/useBrazilClock";

export function Footer() {
  const time = useBrazilClock();

  return (
    <footer className="px-6 md:px-16 py-20 border-t border-white/10 bg-black">
      <div className="grid md:grid-cols-3 gap-12">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black italic">
            CORTEX<span className="text-accent">EVO</span>
          </h2>

          <p className="text-muted mt-4 leading-relaxed">
            Agendamento premium para quem valoriza tempo, presença e estilo.
          </p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold uppercase mb-5">Navegação</h3>

          <ul className="space-y-3 text-muted">
            <li>Início</li>
            <li>Serviços</li>
            <li>Equipe</li>
            <li>Contato</li>
          </ul>
        </motion.div>

        {/* LIVE INFO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold uppercase mb-5">Agora no Brasil</h3>

          <p className="text-accent text-3xl font-black">{time}</p>

          <p className="text-muted mt-3">São Paulo (GMT-3)</p>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted">
        <span>© 2026 Cortex Evolution. Todos os direitos reservados.</span>

        <span>Desenvolvido com padrão premium.</span>
      </div>
    </footer>
  );
}
