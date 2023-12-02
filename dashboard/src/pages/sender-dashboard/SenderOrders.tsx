import React from "react";
import Spinner from "@/components/Spinner";
import { useGetSenderOrders } from "@/hooks/orders";
import { Alert } from "@/components/Alert";
import { Order, OrderStatusEnum } from "@/types";
import { Col, Row, Table } from "@/components/Table";

const Status: Record<OrderStatusEnum, React.ReactNode> = {
  delivered: (
    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
      Delivered
    </span>
  ),
  idle: (
    <span className="inline-flex rounded-full bg-slate-400 px-2 text-xs font-semibold leading-5 text-slate-800">
      Idle
    </span>
  ),
  in_process: (
    <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
      In-Process
    </span>
  ),
};

const RenderSenderOrders = ({ orders }: { orders: Order[] }) => {
  return (
    <Table
      title="You Orders"
      description="These are your orders status"
      cols={[
        "Title",
        "Pick-up Address",
        "Delivery Address",
        "Created At",
        "Status",
      ]}
    >
      {orders.map((order) => {
        return (
          <Row key={order.id}>
            <Col>{order.title}</Col>
            <Col>{order.pick_up_address}</Col>
            <Col>{order.delivery_address}</Col>
            <Col>
              {order.created_at
                ? new Date(order.created_at).toLocaleDateString() +
                  " " +
                  new Date(order.created_at).toLocaleTimeString()
                : order.created_at}
            </Col>
            <Col>
              <div className="flex justify-center">
                {order.status ? Status[order.status] : null}
              </div>
            </Col>
          </Row>
        );
      })}
    </Table>
  );
};
export function SenderOrders() {
  const { data, error, isError, isLoading } = useGetSenderOrders();

  if (isLoading) {
    return <Spinner center size="lg" className="mt-10" />;
  }
  if (isError && error) {
    const err: any = error;
    return (
      <Alert title="Error" type="error">
        {err.message}
      </Alert>
    );
  }
  if (data) return <RenderSenderOrders orders={data} />;
  return null;
}
