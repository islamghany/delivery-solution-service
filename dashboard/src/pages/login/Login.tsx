import { Alert } from "@/components/Alert";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { Input } from "@/components/Form";
import { Title } from "@/components/Typeo";
import { validateEmail, validatePassword } from "@/helpers/validation";
import { useLogin } from "@/hooks";
import { AuthenticateUser } from "@/types";
import { useForm } from "react-hook-form";
import { Switch } from "@headlessui/react";
import { useRef, useState } from "react";
import clsx from "clsx";
export function Login() {
  const [enabled, setEnabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateUser>();
  const { mutate, isLoading, error, isError } = useLogin();

  const err: any = error;
  const onSubmit = handleSubmit(async (e) => {
    if (isLoading) return;

    mutate(
      {
        credentials: e,
        type: enabled ? "biker" : "sender",
      },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          window.location.reload();
        },
      }
    );
  });
  return (
    <Container className="">
      <Title as="h1" className="mt-10  flex  justify-center">
        Login
      </Title>

      <div className="flex justify-center py-12 sm:px-6 lg:px-8">
        <form onSubmit={onSubmit} className="space-y-6 w-full max-w-md">
          {isError && err ? (
            <Alert title="Error" type="error">
              {err.message}
            </Alert>
          ) : null}
          <Switch.Group as="div" className="flex items-center justify-between">
            <span className="flex-grow flex flex-col">
              <Switch.Label
                as="span"
                className="text-sm font-medium text-gray-900"
                passive
              >
                Login as a Biker
              </Switch.Label>
              <Switch.Description as="span" className="text-sm text-gray-500">
                if you are a biker turn on that switch, and if you are a sender
                leave it turned off
              </Switch.Description>
            </span>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={clsx(
                enabled ? "bg-blue-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  enabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
          </Switch.Group>
          <Input
            label="Email address"
            type="text"
            autoComplete="email"
            name="email"
            register={register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
            })}
            error={validateEmail(errors)}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            register={register("password", {
              required: true,
              minLength: 4,
              maxLength: 50,
            })}
            required
            error={validatePassword(errors)}
          />

          <Button
            type="submit"
            loading={isLoading}
            className="flex w-full justify-center"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
