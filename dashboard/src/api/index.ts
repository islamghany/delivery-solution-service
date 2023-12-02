import { BASE_URL } from "@/constants";
import { BikersApi, OrdersApi, SendersApi } from "@/types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const getToken = () => {
  return localStorage.getItem("token");
};
const axiosInstance = axios.create({
  headers: {
    Authorization: getToken() ? "Bearer " + getToken() : undefined,
  },
});

export const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
  };
};

const apis = {
  ordersAPI: new OrdersApi(undefined, BASE_URL, axiosInstance),
  bikersAPI: new BikersApi(undefined, BASE_URL, axiosInstance),
  sendersAPI: new SendersApi(undefined, BASE_URL, axiosInstance),
};

export default apis;
