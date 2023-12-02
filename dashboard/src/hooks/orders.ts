import { useMutation, useQuery } from "react-query";
import { Order } from "@/types";
import apis from "@/api";
import { configOptions } from "./config";

interface ClaimOrderProps {
  id: number;
  picked_up_at: string;
}

interface DeliverOrderProps {
  id: number;
  delivered_at: string;
}

interface AddOrderProps {
  id: number;
  order: Order;
}
async function getIdleOrders() {
  try {
    const res = await apis.ordersAPI.getIdleOrders();

    return res.data;
  } catch (err: any) {
    console.log(err?.response, err?.response?.data?.message);
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}

async function getToDoOrders() {
  try {
    const res = await apis.ordersAPI.getToDoOrdersForBiker();

    return res.data;
  } catch (err: any) {
    console.log(err?.response, err?.response?.data?.message);
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}

async function claimOrder(props: ClaimOrderProps) {
  try {
    const res = await apis.ordersAPI.claimOrder(props.id, {
      picked_up_at: props.picked_up_at,
    });

    return res.data;
  } catch (err: any) {
    console.log(err?.response, err?.response?.data?.message);
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}

async function deliverOrder(props: DeliverOrderProps) {
  try {
    const res = await apis.ordersAPI.deliverOrder(props.id, {
      delivered_at: props.delivered_at,
    });

    return res.data;
  } catch (err: any) {
    console.log(err?.response, err?.response?.data?.message);
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}
async function addOrder(order: Order) {
  try {
    const res = await apis.ordersAPI.createOrder(order);

    return res.data;
  } catch (err: any) {
    console.log(err?.response, err?.response?.data?.message);
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}
async function senderOrders() {
  try {
    const res = await apis.ordersAPI.getOrdersForSender();

    return res.data;
  } catch (err: any) {
    console.log(err?.response, err?.response?.data?.message);
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}
export const QueryKeys = {
  IDLEORDERS: "idle-orders",
  TODOORDERS: "to-do-orders",
  SENDERORDER: "sender-orders",
  AUTH: "auth",
};
export const useGetIDleOrders = () =>
  useQuery(QueryKeys.IDLEORDERS, () => getIdleOrders(), {
    ...configOptions,
  });

export const useGetToDoOrders = () =>
  useQuery(QueryKeys.TODOORDERS, () => getToDoOrders(), {
    ...configOptions,
  });

export const useClaimOrder = () =>
  useMutation({
    mutationFn: (data: ClaimOrderProps) => claimOrder(data),
  });

export const useDeliverOrder = () =>
  useMutation({
    mutationFn: (data: DeliverOrderProps) => deliverOrder(data),
  });

export const useAddOrder = () =>
  useMutation({
    mutationFn: (data: Order) => addOrder(data),
  });

export const useGetSenderOrders = () =>
  useQuery(QueryKeys.SENDERORDER, () => senderOrders(), {
    ...configOptions,
  });
