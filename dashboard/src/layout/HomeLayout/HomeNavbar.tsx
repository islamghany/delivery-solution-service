import { SearchInput } from "@/components/Form";
import { Title } from "@/components/Typeo";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomeNavbar() {
  const searchRef = useRef<HTMLInputElement | undefined>();
  const navigate = useNavigate();
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      navigate({
        pathname: "/",
        search: `?search=${searchRef.current.value}`,
      });
    }
  };
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
          <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <Title
                  as="h2"
                  className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 bg-clip-text font-display  tracking-tight text-transparent"
                >
                  Movies Stack
                </Title>
              </Link>
            </div>
          </div>
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
              <form onSubmit={handleSubmitSearch}>
                <SearchInput register={searchRef} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
