import { api } from "./api";

export async function getAvailableSlots(
  date: string,
  barberId: string,
): Promise<string[]> {
  const response = await api.get("/public/appointments/available", {
    params: {
      date,
      barberId,
    },
  });

  return response.data.data;
}
