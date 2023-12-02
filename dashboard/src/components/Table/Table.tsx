import { Order } from "@/types";
import React, { ReactNode } from "react";
import { Text, Title } from "../Typeo";

interface TableProps {
  cols: string[];

  title?: string;
  description?: string;
  action?: () => React.ReactNode;
  children: ReactNode;
}

export const Row = ({ children }: { children: ReactNode }) => {
  return <tr className="divide-x divide-gray-200">{children}</tr>;
};
export const Col = ({ children }: { children: ReactNode }) => {
  return (
    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
      {children}
    </td>
  );
};
export function Table({
  cols,
  children,
  description,
  title,
  action,
}: TableProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          {title && <Title as="h1">{title}</Title>}
          {description && (
            <Text className="mt-2 text-sm text-gray-700">{description}</Text>
          )}
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          {action && action()}
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    {cols.map((c, idx) => (
                      <th
                        key={c + idx}
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {children}
                  {/* {people.map((person) => (
                    <tr key={person.email} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                        {person.role}
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
