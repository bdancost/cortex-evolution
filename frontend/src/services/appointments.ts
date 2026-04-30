import { api } from "./api";

export async function getAvailableTimes(date: string, barberId: string) {
  const response = await api.get("/appointments/available", {
    params: { date, barberId },
  });

  return response.data;
}
