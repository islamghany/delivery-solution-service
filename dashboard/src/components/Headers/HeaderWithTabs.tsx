import client, { QueryKeys } from "@/hooks";
import clsx from "clsx";
import React from "react";
import {
  Link,
  useActionData,
  useLocation,
  useMatch,
  useMatches,
} from "react-router-dom";
import Button from "../Button";
import { Title } from "../Typeo";

interface HeaderWithTabsProps {
  tabs: {
    name: string;
    href: string;
  }[];
  title: string;
  action?: () => React.ReactNode;
}

export function HeaderWithTabs({ tabs, title, action }: HeaderWithTabsProps) {
  const location = useLocation();
  const handleSignout = () => {
    localStorage.removeItem("token");

    window.location.reload();
  };
  return (
    <div>
      <div className="relative pb-5 border-b border-gray-200 sm:pb-0">
        <div className="md:flex md:items-center md:justify-between">
          <Title as="h2">{title}</Title>
          <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
            <Button onClick={handleSignout}>Signout</Button>
          </div>
        </div>
        <div className="mt-4">
          <div className="block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.href}
                  className={clsx(
                    location.pathname === tab.href
                      ? "border-blue-700 text-blue-800"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={
                    location.pathname === tab.href ? "page" : undefined
                  }
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
