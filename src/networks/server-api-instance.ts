"use server";
import axios from "axios";

const serverApiInstance = axios.create({
  baseURL: process.env.SERVER_BASE_URL,
});

export { serverApiInstance };
