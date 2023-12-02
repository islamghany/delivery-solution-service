import routes, { Roles } from "./initRoutes";
import { useRoutes } from "react-router-dom";
import { GetCurrentUser201Response } from "@/types";

export const Navigations = ({
  user,
}: {
  user: GetCurrentUser201Response | undefined;
}) => {
  const userRoles = user?.user?.id
    ? [Roles.LOGGED_IN, user?.type?.toLowerCase()]
    : [Roles.LOGGED_OUT];
  const nav = useRoutes(
    routes(userRoles as string[], user?.type?.toLowerCase())
  );
  return nav;
};
