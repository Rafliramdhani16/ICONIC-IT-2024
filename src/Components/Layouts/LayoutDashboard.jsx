import React from "react";
import Navbar from "../Fragments/NavbarDashboard";
import SideBarProfile from "../Fragments/SideBarProfile";
import { SidebarProvider } from "../../Context/SidebarContext";
import { sidebarItems2 } from "../../Context/SidebarItem2";

const LayoutProfile = ({ children, pageTitle, hideSidebar }) => {
  return (
    <SidebarProvider>
      <Navbar className="z-10" />
      <div className="flex flex-1">
        <SideBarProfile hide={hideSidebar} menuItems={sidebarItems2} />
        <div className="flex-grow p-4 bg-gray-200  overflow-hidden h-[100dvh] pt-[79px] pl-20 md:pl-0">
          <div className="m-2 md:m-8 h[50dvh] pb-40">
            <h1 className="text-slate-800 text-2xl md:text-4xl font-bold">
              {pageTitle}
            </h1>
            <div className="mt-5">
              <div className="h-[75dvh] overflow-hidden border-2 border-gray-200 p-4 rounded-[25px] shadow-sm bg-white flex flex-col">
                <div className="flex-grow overflow-y-scroll overflow-x-hidden">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default LayoutProfile;
