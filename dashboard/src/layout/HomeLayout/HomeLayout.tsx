import { Outlet } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import Footer from "./HomeFooter";

export const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
