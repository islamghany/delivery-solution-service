import { Alert } from "@/components/Alert";
import Button from "@/components/Button";
import { Input } from "@/components/Form";
import { Title } from "@/components/Typeo";
import client from "@/hooks";
import { QueryKeys, useAddOrder } from "@/hooks/orders";
import { Order } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddForm = () => {
  const { register, handleSubmit, reset } = useForm<Order>();

  const { mutate, isLoading, isError, error } = useAddOrder();
  const err: any = error;

  const onSubmit = handleSubmit(async (e) => {
    if (isLoading) return;

    await mutate(e, {
      onSuccess: () => {
        toast.success("The order has been successfully added!");
        client.invalidateQueries(QueryKeys.SENDERORDER);
        reset();
      },
    });
  });
  return (
    <form className="space-y-3 mt-5 max-w-md w-full" onSubmit={onSubmit}>
      {isError && err ? (
        <Alert title="Error" type="error">
          {err.message}
        </Alert>
      ) : null}
      <Input
        label="Title"
        type="text"
        autoComplete="off"
        name="title"
        register={register("title", {
          required: true,
        })}
      />
      <Input
        label="Pick-up Address"
        type="text"
        autoComplete="off"
        name="pick_up_address"
        register={register("pick_up_address", {
          required: true,
        })}
      />
      <Input
        label="Delivery Address"
        type="text"
        autoComplete="off"
        name="delivery_address"
        register={register("delivery_address", {
          required: true,
        })}
      />
      <Button loading={isLoading} className="w-full justify-center">
        Submit
      </Button>
    </form>
  );
};
export function AddOrderForm() {
  return (
    <div className="flex flex-col mt-8 items-center">
      <Title as="h2">Add Order</Title>
      <AddForm />
    </div>
  );
}
