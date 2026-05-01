import { motion } from "framer-motion";

export function BookingSection() {
  return (
    <section
      id="reserve"
      className="relative px-4 md:px-16 py-28 bg-zinc-950 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden min-h-[520px]"
        >
          <img
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1600"
            alt="Barber Premium"
            className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8">
            <p className="text-white text-3xl font-black uppercase italic">
              Seu novo visual começa hoje.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent uppercase tracking-[0.4em] text-sm mb-4">
            Últimos horários
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
            Agende sua <span className="text-accent">experiência premium</span>
          </h2>

          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Atendimento no Morumbi com técnica de alto nível, pontualidade e
            experiência pensada para elevar sua presença.
          </p>

          {/* BENEFITS */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Sem fila",
              "Atendimento premium",
              "Pontualidade real",
              "Ambiente exclusivo",
            ].map((item) => (
              <div
                key={item}
                className="p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                {item}
              </div>
            ))}
          </div>

          {/* TIMES */}
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Hoje restam:
            </p>

            <div className="flex flex-wrap gap-3">
              {["14:00", "15:30", "17:00"].map((time) => (
                <span
                  key={time}
                  className="px-5 py-3 rounded-full bg-accent text-black font-black"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* CTAS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="flex-1 text-center bg-accent text-black font-black py-4 rounded-2xl hover:scale-[1.02] transition"
            >
              Reservar WhatsApp
            </a>

            <button className="flex-1 border border-white/15 py-4 rounded-2xl hover:bg-white/5 transition">
              Reserva Online
            </button>
          </div>

          <p className="text-zinc-500 text-sm mt-6">
            ★★★★★ +300 clientes satisfeitos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
