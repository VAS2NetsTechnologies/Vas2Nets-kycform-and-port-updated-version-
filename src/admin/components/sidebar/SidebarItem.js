import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../../context/sidebarContext";

const SidebarItem = ({ icon, text, to }) => {
  const { expanded } = useSidebarContext();

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative font-poet flex flex-col items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all md:flex-row ${
          isActive
            ? "bg-white text-black"
            : "text-white hover:text-black hover:bg-white"
        }`
      }
    >
      <span>{icon}</span>
      <span
        className={`text-xl capitalize transition-all ${
          expanded ? "ml-3" : "w-0 overflow-hidden"
        }`}
      >
        {text}
      </span>
    </NavLink>
  );
};

export default SidebarItem;
