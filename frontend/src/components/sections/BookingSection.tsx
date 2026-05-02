import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAvailableSlots } from "../../services/appointments";
import { createPublicAppointment } from "../../services/publicAppointments";

type Barber = {
  id: string;
  name: string;
  role: string;
  image: string;
};

const barbers: Barber[] = [
  {
    id: "1",
    name: "Rafael Costa",
    role: "Fade Expert",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    id: "2",
    name: "Lucas Mendes",
    role: "Beard Master",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
  {
    id: "3",
    name: "Victor Alves",
    role: "Premium Stylist",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400",
  },
];

export function BookingSection() {
  const [selectedBarber, setSelectedBarber] = useState<string>("1");
  const [date, setDate] = useState<string>("");
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [guestName, setGuestName] = useState<string>("");
  const [guestPhone, setGuestPhone] = useState<string>("");

  useEffect(() => {
    if (!date) return;

    async function loadSlots() {
      try {
        setLoading(true);
        setError("");

        const data = await getAvailableSlots(date, selectedBarber);

        setSlots(data);
      } catch {
        setError("Não foi possível carregar horários.");
        setSlots([]);
      } finally {
        setLoading(false);
      }
    }

    loadSlots();
  }, [date, selectedBarber]);

  async function handleBooking() {
    try {
      if (!date || !selectedSlot) return;

      setSubmitting(true);
      setError("");
      setSuccess("");

      const isoDate = new Date(`${date}T${selectedSlot}:00`).toISOString();

      await createPublicAppointment({
        guestName,
        guestPhone,
        barberId: selectedBarber,
        date: isoDate,
      });

      setSuccess("Reserva confirmada com sucesso!");

      setGuestName("");
      setGuestPhone("");
      setSelectedSlot("");

      const refreshedSlots = await getAvailableSlots(date, selectedBarber);

      setSlots(refreshedSlots);
    } catch {
      setError("Não foi possível reservar.");
    } finally {
      setSubmitting(false);
    }
  }

  const barber = barbers.find((item) => item.id === selectedBarber);

  return (
    <section
      id="reserve"
      className="relative bg-zinc-950 px-4 md:px-16 py-28 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[620px] rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1600"
            alt="Premium Barber"
            className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-accent uppercase tracking-[0.4em] text-sm mb-3">
              Premium Experience
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-black uppercase italic leading-tight">
              Seu próximo nível começa hoje.
            </h2>
          </div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <p className="text-accent uppercase tracking-[0.4em] text-sm mb-4">
            Reserva Inteligente
          </p>

          <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-6">
            Agende sua <span className="text-accent">experiência premium</span>
          </h3>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Escolha o profissional ideal, visualize horários reais e garanta seu
            atendimento exclusivo no Morumbi.
          </p>

          {/* BARBERS */}
          <div className="mb-10">
            <p className="font-bold mb-4 text-lg">Escolha seu barbeiro</p>

            <div className="grid gap-4">
              {barbers.map((item) => {
                const active = selectedBarber === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedBarber(item.id);
                      setSelectedSlot("");
                    }}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                      active
                        ? "border-accent bg-accent/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div className="text-left">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-zinc-400">{item.role}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DATE */}
          <div className="mb-10">
            <p className="font-bold mb-4 text-lg">Escolha a data</p>

            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setSelectedSlot("");
              }}
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent"
            />
          </div>

          {/* SLOTS */}
          <div className="mb-10">
            <p className="font-bold mb-4 text-lg">Horários disponíveis</p>

            {loading && (
              <div className="text-zinc-400 mb-4">Buscando horários...</div>
            )}

            {error && <div className="text-red-400 mb-4">{error}</div>}

            {!loading && !error && date && slots.length === 0 && (
              <div className="text-zinc-500 mb-4">
                Nenhum horário disponível nessa data.
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {slots.map((slot) => {
                const active = selectedSlot === slot;

                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-4 rounded-xl font-bold transition-all ${
                      active
                        ? "bg-accent text-black"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* NEW STATES ONLY */}
          <div className="mb-8 grid gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent"
            />

            <input
              type="text"
              placeholder="WhatsApp"
              value={guestPhone}
              onChange={(e) => setGuestPhone(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-accent"
            />
          </div>

          {/* SUMMARY */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 mb-8">
            <p className="text-xl font-bold mb-5">Resumo da Reserva</p>

            <div className="space-y-3 text-zinc-300">
              <p>
                <strong>Profissional:</strong>{" "}
                {barber ? barber.name : "Selecione"}
              </p>

              <p>
                <strong>Data:</strong>{" "}
                {date ? date.split("-").reverse().join("/") : "Selecione"}
              </p>

              <p>
                <strong>Horário:</strong> {selectedSlot || "Selecione"}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="text-center bg-accent text-black font-black py-4 rounded-2xl hover:scale-[1.02] transition-all"
            >
              Reservar WhatsApp
            </a>

            <button
              onClick={handleBooking}
              disabled={
                !date ||
                !selectedSlot ||
                !guestName ||
                !guestPhone ||
                submitting
              }
              className="border border-white/10 rounded-2xl py-4 font-bold hover:bg-white/5 transition-all disabled:opacity-50"
            >
              {submitting ? "Reservando..." : "Reserva Online"}
            </button>
          </div>

          {success && <p className="text-green-400 mt-5">{success}</p>}

          {/* SOCIAL PROOF */}
          <p className="text-zinc-500 text-sm mt-6">
            ★★★★★ +300 clientes satisfeitos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
