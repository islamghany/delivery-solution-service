import Spinner, { OverlaySpinner } from "@/components/Spinner";
import {
  QueryKeys,
  useClaimOrder,
  useDeliverOrder,
  useGetIDleOrders,
  useGetToDoOrders,
} from "@/hooks/orders";
import { Alert } from "@/components/Alert";
import { Order } from "@/types";
import { Col, Row, Table } from "@/components/Table";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import client from "@/hooks";

const DeliverButton = ({ id }: { id: number }) => {
  const { mutate, isLoading } = useDeliverOrder();

  const handleClick = async () => {
    await mutate(
      {
        id,
        delivered_at: new Date().toString(),
      },
      {
        onError: (err: any) => {
          toast.error(err.message);
        },
        onSuccess: () => {
          toast.success("Order has been Delivered Successfully!");
          client.setQueryData(
            QueryKeys.TODOORDERS,
            (data: Order[] | undefined): Order[] =>
              data ? data.filter((order) => order.id !== id) : []
          );
        },
      }
    );
  };
  return (
    <Button onClick={handleClick} loading={isLoading}>
      Deliver
    </Button>
  );
};
const RenderIdleOrder = ({ orders }: { orders: Order[] }) => {
  return (
    <Table
      title="To-do Orders"
      description="if You deliver the order click on delivered button"
      cols={["Title", "Pick-up Address", "Delivery Address", "Created At"]}
    >
      {orders.map((order) => {
        return (
          <Row key={order.id}>
            <Col>{order.title}</Col>
            <Col>{order.pick_up_address}</Col>
            <Col>{order.delivery_address}</Col>
            <Col>
              {" "}
              {order.created_at
                ? new Date(order.created_at).toLocaleDateString() +
                  " " +
                  new Date(order.created_at).toLocaleTimeString()
                : order.created_at}
            </Col>
            <Col>
              <DeliverButton id={order.id} />
            </Col>
          </Row>
        );
      })}
    </Table>
  );
};
export function ToDoOrders() {
  const { data, error, isError, isLoading } = useGetToDoOrders();

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
