import { useEffect, useState } from "react";

export function useBrazilClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const formatted = new Date().toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(formatted);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
