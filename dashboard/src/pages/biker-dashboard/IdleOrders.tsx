import React from "react";
import Spinner, { OverlaySpinner } from "@/components/Spinner";
import { QueryKeys, useClaimOrder, useGetIDleOrders } from "@/hooks/orders";
import { Alert } from "@/components/Alert";
import { Order } from "@/types";
import { Col, Row, Table } from "@/components/Table";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import client from "@/hooks";

const CliamButton = ({ id }: { id: number }) => {
  const { mutate, isLoading } = useClaimOrder();

  const handleClick = async () => {
    await mutate(
      {
        id,
        picked_up_at: new Date().toString(),
      },
      {
        onError: (err: any) => {
          toast.error(err.message);
        },
        onSuccess: () => {
          toast.success("Order has been Assigned to you Successfully!");
          client.setQueryData(
            QueryKeys.IDLEORDERS,
            (data: Order[] | undefined): Order[] =>
              data ? data.filter((order) => order.id !== id) : []
          );

          client.invalidateQueries({
            queryKey: QueryKeys.TODOORDERS,
          });
        },
      }
    );
  };
  return (
    <Button onClick={handleClick} loading={isLoading}>
      Claim
    </Button>
  );
};
const RenderIdleOrder = ({ orders }: { orders: Order[] }) => {
  return (
    <Table
      title="Idle Orders"
      description="You can Select any order to deliver"
      cols={["Title", "Pick-up Address", "Delivery Address", "Created At"]}
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
              <CliamButton id={order.id} />
            </Col>
          </Row>
        );
      })}
    </Table>
  );
};
export function IdleOrders() {
  const { data, error, isError, isLoading } = useGetIDleOrders();

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
  if (data) return <RenderIdleOrder orders={data} />;
  return null;
}
