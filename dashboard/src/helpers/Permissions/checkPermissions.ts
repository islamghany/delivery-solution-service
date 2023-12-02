import { GetCurrentUser201Response } from "@/types";
import { CheckPermissionConfig, Roles } from "./permissions.types";

const permissionCheckTypeMethods = {
  "one-of": (roles: Roles) => roles.some,
  "all-of": (roles: Roles) => roles.every,
};

export const checkPermission = (
  user: GetCurrentUser201Response | undefined,
  roles: Roles
) => {
  const userRoles = user?.user?.id ? ["logged-in", user?.type] : ["logged-out"];

  const hasAccess = roles.every((role) => {
    return userRoles.includes(role);
  });

  return hasAccess;
};
