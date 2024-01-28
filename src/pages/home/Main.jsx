import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div class="p-4 sm:ml-64 bg-slate-200">
      <Outlet />
    </div>
  );
}
