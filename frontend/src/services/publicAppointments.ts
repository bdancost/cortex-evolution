import { api } from "./api";

type CreateBookingPayload = {
  guestName: string;
  guestPhone: string;
  barberId: string;
  date: string;
};

export async function createPublicAppointment(payload: CreateBookingPayload) {
  const response = await api.post("/public/appointments", payload);

  return response.data.data;
}
