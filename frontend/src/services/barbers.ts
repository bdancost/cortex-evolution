import { api } from "./api";

export type Barber = {
  id: string;
  name: string;
};

export async function getBarbers(): Promise<Barber[]> {
  const response = await api.get("/barbers");
  return response.data;
}
