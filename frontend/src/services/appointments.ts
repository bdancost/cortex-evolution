import { api } from "./api";

export async function getAvailableTimes(date: string) {
  const response = await api.get("/appointments/available", {
    params: { date },
  });

  return response.data;
}
