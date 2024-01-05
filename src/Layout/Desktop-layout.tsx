import Sidebar from "@/components/side-bar";
import TabMenu from "@/components/tab-menu";

import { Helmet } from "react-helmet";

import Header from "@/components/header";
import { Outlet } from "react-router-dom";


export default function DesktopLayout() {
  return (
    <>
      <Helmet>
        <title>Home | Aircall</title>
      </Helmet>
      {/* top header */}
      <Header />
      {/* side bar */}
      <Sidebar />
      {/* for mobile */}
      <div className="md:hidden">
        <div className="container pt-16">
          {/* sticky actions */}
          <div className="space-y-4 mb-5 sticky top-[62px] bg-white z-10 pt-4 pb-2">
            {/* tabmenu */}
            <TabMenu />
          </div>
          {/* content */}
          <Outlet />
        </div>
      </div>
      {/* for desktop  */}
      <div className="hidden md:flex w-full h-screen flex-col overflow-hidden">
        {/* right content con */}
        <div className="flex-1 h-full ml-20 lg:ml-24 bg-gray-100 p-4 px-2 lg:px-14 overflow-y-auto pt-28">
          <Outlet />
        </div>
      </div >
    </>
  )
}