import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Menu({ label, icon, to }) {
  const { state } = useLocation();
  return (
    <li>
      <NavLink
        to={to}
        className={`flex items-center p-2 ${state==='upload' && label==='Upload'?'text-white-ghost from-violet-300':''} text-gray-900 rounded-lg dark:text-white bg-gradient-to-r hover:text-white-ghost hover:from-violet-300  group`}
      >
        {icon}
        <span className="ms-3">{label}</span>
      </NavLink>
    </li>
  );
}
