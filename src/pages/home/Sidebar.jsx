import LogoWhite from "assets/icons/LogoWhite";
import React, { useState } from "react";
import MenuList from "./MenuList";
import XIcon from "assets/icons/XIcon";

function Sidebar({ children }) {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
 
  return (
    <div>
      <button
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <div className="flex items-center justify-between">
          <div class="p-2.5 mt-1 flex items-center rounded-md ">
            <LogoWhite fill="#605BFF"/>
            <h1 class="text-[15px]  ml-3 text-xl text-gray-800 font-bold">
              Base
            </h1>
          </div>
          <span className="md:hidden" onClick={toggleSidebar}><XIcon/></span>
          </div>
          <MenuList/>
        </div>
      </aside>
      {children}
    </div>
  );
}

export default Sidebar;
