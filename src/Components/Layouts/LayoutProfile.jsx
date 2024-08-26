import React from "react";
import Navbar from "../Fragments/Navbar";
import SideBarProfile, { SidebarProvider } from "../Fragments/SideBarProfile";

const LayoutProfile = ({ children, pageTitle, hideSidebar }) => {
  return (
    <SidebarProvider>
      <Navbar className="z-10" />
      <div className="flex flex-1">
        <SideBarProfile hide={hideSidebar} />
        <div className="flex-grow p-4 bg-gray-100  overflow-hidden h-[100dvh] pt-[79px] pl-20 md:pl-0">
          <div className="m-2 md:m-8 h[50dvh] pb-40">
            <h1 className="text-slate-800 text-2xl md:text-4xl font-bold">
              {pageTitle}
            </h1>
            <div className="mt-5">
              <div className="h-[80dvh] overflow-hidden border-2 border-gray-100 p-4 rounded-[25px] shadow-sm bg-white flex flex-col">
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
