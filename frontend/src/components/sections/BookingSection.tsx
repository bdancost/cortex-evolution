import { useEffect, useState } from "react";
import { getAvailableTimes } from "../../services/appointments";

export function BookingSection() {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!date) return;

    async function loadSlots() {
      try {
        setLoading(true);

        const data = await getAvailableTimes(date, "barber-id-1");

        setSlots(data);
      } finally {
        setLoading(false);
      }
    }

    loadSlots();
  }, [date]);

  return (
    <section className="px-4 md:px-16 py-24">
      <h2 className="text-4xl font-bold mb-8">Agende seu horário</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-8 p-3 rounded-xl bg-white/10"
      />

      {loading && <p>Carregando horários...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slots.map((slot) => (
          <button
            key={slot}
            className="p-4 rounded-xl bg-accent text-primary font-bold"
          >
            {slot}
          </button>
        ))}
      </div>
    </section>
  );
}
