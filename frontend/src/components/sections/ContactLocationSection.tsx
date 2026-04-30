import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock3 } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export function ContactLocationSection() {
  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 md:px-16 py-24 md:py-28 overflow-hidden bg-zinc-950"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[0.35em] text-accent text-xs font-semibold block mb-4">
            Localização & Contato
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic leading-tight">
            Venha viver a
            <br />
            experiência premium.
          </h2>

          <p className="text-muted mt-6 text-lg">
            Fácil acesso, atendimento exclusivo e contato imediato.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20 items-start">
          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe
              title="Mapa Morumbi"
              src="https://www.google.com/maps?q=Av.%20Giovanni%20Gronchi%204521%20Morumbi%20Sao%20Paulo&output=embed"
              className="w-full h-[520px]"
              loading="lazy"
            />
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* ENDEREÇO */}
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-xl mb-2 uppercase italic">
                    Endereço
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Av. Giovanni Gronchi, 4521 <br />
                    Morumbi - São Paulo/SP <br />
                    CEP 05724-003
                  </p>
                </div>
              </div>
            </div>

            {/* HORÁRIOS */}
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <Clock3 className="text-accent mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-xl mb-3 uppercase italic">
                    Horários
                  </h3>

                  <ul className="text-muted space-y-2">
                    <li>Segunda a Sexta: 09h às 21h</li>
                    <li>Sábado: 09h às 20h</li>
                    <li>Domingo: 10h às 16h</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CONTATOS */}
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="font-bold text-xl mb-5 uppercase italic">
                Contato Direto
              </h3>

              <div className="space-y-4 text-muted">
                <div className="flex items-center gap-3">
                  <Phone className="text-accent" size={20} />
                  <span>(11) 3745-9210</span>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="text-accent" size={20} />
                  <span>(11) 99821-4407</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-accent" size={20} />
                  <span>contato@cortexevolution.com.br</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaInstagram className="text-accent" size={20} />
                  <span>@cortexevolution</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaFacebook className="text-accent" size={20} />
                  <span>/cortexevolution</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
