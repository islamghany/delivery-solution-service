import { useAuth } from "@/hooks/auth";
import { GetCurrentUser201Response } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { checkPermission } from "./checkPermissions";
import { Roles } from "./permissions.types";

interface PermissionProps {
  children: React.ReactElement;
  noAccess: () => React.ReactElement;
  roles: Roles;
  userRoles: Roles;
}

export const Permission = ({
  roles,
  children,
  noAccess,
  userRoles,
}: PermissionProps) => {
  const u = userRoles.map((i) => i.toLowerCase());
  const r = roles.map((i) => i.toLowerCase());
  const hasAccess = r.every((role) => {
    return u.includes(role);
  });
  return hasAccess ? children : noAccess() || null;
};
