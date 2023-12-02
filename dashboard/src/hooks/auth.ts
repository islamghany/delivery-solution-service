import { QueryKeys } from "./orders";
import { useMutation, useQuery } from "react-query";
import {
  AuthenticateUser,
  AuthenticateUserResponseTypeEnum,
  GetCurrentUser201Response,
} from "@/types";
import apis from "@/api";
import { configOptions } from "./config";

interface loginProps {
  credentials: AuthenticateUser;
  type: AuthenticateUserResponseTypeEnum;
}
async function login({ credentials, type }: loginProps) {
  // const api =
  //   type === "biker"
  //     ? apis.bikersAPI.signinBiker
  //     : apis.sendersAPI.signinSinder;

  // console.log(type, api);

  try {
    const res = await (type === "biker"
      ? apis.bikersAPI.signinBiker(credentials)
      : apis.sendersAPI.signinSinder(credentials));

    return res.data;
  } catch (err: any) {
    console.log(err, err.response);
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}

async function getCurrentUser() {
  try {
    const res = await apis.sendersAPI.getCurrentUser();
    return res.data;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
}
export const useLogin = () =>
  useMutation({
    mutationFn: (data: loginProps) => login(data),
  });

export const useAuth = (enabled = true) => {
  return useQuery(QueryKeys.AUTH, () => getCurrentUser(), {
    ...configOptions,
    enabled,
  });
};
