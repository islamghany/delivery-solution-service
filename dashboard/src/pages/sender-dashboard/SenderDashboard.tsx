import React from "react";
import { HeaderWithTabs } from "@/components/Headers";
import Container from "@/components/Container";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/auth";
import Button from "@/components/Button";

export function SenderDashboard() {
  const { data } = useAuth(false);
  return (
    <Container className="my-10">
      <HeaderWithTabs
        title={`Sender (${data?.user?.name})`}
        tabs={[
          { name: "Your Orders", href: "/dashboard/sender" },
          {
            name: "Add New Order",
            href: "/dashboard/sender/new",
          },
        ]}
      />
      <Outlet />
    </Container>
  );
}
