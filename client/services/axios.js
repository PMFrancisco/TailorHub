import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Allow-Control-Allow-Origin": "*",
    "Allow-Control-Allow-Credentials": true,
  },
});

export default api;