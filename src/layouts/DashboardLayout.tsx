import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string>("Dashboard");

  useEffect(() => {
    const pathToMenuMap: Record<string, string> = {
      "/": "Dashboard",
      "/profile": "Profile",
      "/activities": "Activities",
      "/department": "Department",
    };

    setActiveMenu(pathToMenuMap[location.pathname] || "Dashboard");
  }, [location.pathname]);

  return (
    <div className="h-screen flex flex-col">
      <div className="w-full bg-white fixed top-0 left-0 z-50">
        <Header />
        <PageHeader />
      </div>

      <div className="flex flex-1 w-full mt-[calc(10vh+80px)]">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <main className="flex-grow bg-[#E7E6ED] overflow-y-auto px-4 ml-[150px] md:ml-[350px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
