import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://v2nportal.com/fortressServerMiddleWare",
});

export const baseURL = "https://v2nportal.com/fortressServerMiddleWare";
