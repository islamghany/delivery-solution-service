import React from "react";
import { HeaderWithTabs } from "@/components/Headers";
import Container from "@/components/Container";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/auth";

export function BikerDashboard() {
  const { data } = useAuth(false);
  return (
    <Container className="my-10">
      <HeaderWithTabs
        title={`Biker (${data?.user?.name})`}
        tabs={[
          { name: "Idle Orders", href: "/dashboard/biker" },
          {
            name: "To-do Orders",
            href: "/dashboard/biker/to-do",
          },
        ]}
      />
      <Outlet />
    </Container>
  );
}
