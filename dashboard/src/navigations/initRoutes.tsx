import Permission from "@/helpers/Permissions";
import { AuthLayout } from "@/layout/AuthLayout";
import HomeLayout from "@/layout/HomeLayout";
import BikerDashboard, {
  IdleOrders,
  ToDoOrders,
} from "@/pages/biker-dashboard";
import Login from "@/pages/login";
import NotFound from "@/pages/NotFound";
import SenderDashboard, {
  AddOrderForm,
  SenderOrders,
} from "@/pages/sender-dashboard";
import {
  AuthenticateUserResponseTypeEnum,
  GetCurrentUser201Response,
} from "@/types";

import { Navigate, RouteObject } from "react-router-dom";

export const Roles = {
  ["LOGGED_IN"]: "logged-in",
  ["LOGGED_OUT"]: "logged-out",
  ["BIKER"]: AuthenticateUserResponseTypeEnum.Biker.toLowerCase(),
  ["SENDER"]: AuthenticateUserResponseTypeEnum.Sender.toLowerCase(),
};

type RoutesReturn = {
  roles: string[];
  fallback: (user: GetCurrentUser201Response) => React.ReactNode;
};
const routes = (
  userRoles: string[],
  userType: string | undefined
): RouteObject[] => [
  {
    element: <BikerDashboard />,
    children: [
      {
        path: "/dashboard/biker",
        element: (
          <Permission
            noAccess={() => (
              <Navigate
                to={`${
                  userRoles.includes(Roles.SENDER)
                    ? "/dashboard/sender"
                    : "/login"
                }`}
              />
            )}
            roles={[Roles.LOGGED_IN, Roles.BIKER]}
            userRoles={userRoles}
          >
            <IdleOrders />
          </Permission>
        ),
      },
      {
        path: "/dashboard/biker/to-do",
        element: (
          <Permission
            noAccess={() => (
              <Navigate
                to={`${
                  userRoles.includes(Roles.SENDER)
                    ? "/dashboard/sender"
                    : "/login"
                }`}
              />
            )}
            roles={[Roles.LOGGED_IN, Roles.BIKER]}
            userRoles={userRoles}
          >
            <ToDoOrders />
          </Permission>
        ),
      },
    ],
  },
  {
    element: <SenderDashboard />,

    children: [
      {
        path: "/dashboard/sender",
        element: (
          <Permission
            noAccess={() => (
              <Navigate
                to={`${
                  userRoles.includes(Roles.BIKER)
                    ? "/dashboard/biker"
                    : "/login"
                }`}
              />
            )}
            roles={[Roles.LOGGED_IN, Roles.SENDER]}
            userRoles={userRoles}
          >
            <SenderOrders />
          </Permission>
        ),
      },
      {
        path: "/dashboard/sender/new",
        element: (
          <Permission
            noAccess={() => (
              <Navigate
                to={`${
                  userRoles.includes(Roles.BIKER)
                    ? "/dashboard/biker"
                    : "/login"
                }`}
              />
            )}
            roles={[Roles.LOGGED_IN, Roles.SENDER]}
            userRoles={userRoles}
          >
            <AddOrderForm />
          </Permission>
        ),
      },
    ],
  },

  {
    element: <AuthLayout />,

    children: [
      {
        path: "login",
        element: (
          <Permission
            noAccess={() => <Navigate to={`/dashboard/${userType}`} />}
            roles={[Roles.LOGGED_OUT]}
            userRoles={userRoles}
          >
            <Login />
          </Permission>
        ),
      },
    ],
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
];

export default routes;
