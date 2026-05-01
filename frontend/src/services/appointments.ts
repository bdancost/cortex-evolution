import { api } from "./api";

export async function getAvailableSlots(date: string, barberId: string) {
  const response = await api.get("/appointments/available", {
    params: { date, barberId },
  });

  return response.data;
}
