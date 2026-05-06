import axios from "axios";

export const api = axios.create({
  baseURL: "https://perfect-respect-production-8333.up.railway.app",
});
