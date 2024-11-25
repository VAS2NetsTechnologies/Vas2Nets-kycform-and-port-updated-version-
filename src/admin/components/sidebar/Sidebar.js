import React from "react";
import Logo from "../../../assets/VAS2Nets-Logo.png";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { FaFolderOpen } from "react-icons/fa";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import { GoNumber } from "react-icons/go";
import SidebarItem from "./SidebarItem";
import { useSidebarContext } from "../../context/sidebarContext";

const Sidebar = () => {
  const { expanded, setExpanded } = useSidebarContext();
  return (
    <aside
      className={`h-screen  fixed left-0 top-0 shadow-md z-50  ${
        expanded ? "w-1/4" : "w-[20%] md:w-[10%]"
      }`}
    >
      <nav className="h-full flex flex-col bg-red-700 border-r shadow-sm">
        {/* top */}
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* logo */}
          <img
            src={Logo}
            alt="vfs logo"
            className={`overlow-hidden transition-all hidden md:flex ${
              expanded ? "h-10 w-[200px]" : "w-0 h-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <LuChevronFirst className="w-6 h-6" />
            ) : (
              <LuChevronLast className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* middle --links */}
        <ul className="flex-1 p-3 mt-10">
          <SidebarItem
            icon={<MdDashboard className="h-8 w-8" />}
            text="Records"
            to="/admin/records"
          />

          <SidebarItem
            icon={<GoNumber className="h-8 w-8" />}
            text="Nin"
            to="/admin/nin"
          />
          <SidebarItem
            icon={<FaFolderOpen className="h-8 w-8" />}
            text="Old Records"
            to="/admin/old-records"
          />
        </ul>

        {/* bottom */}
        <SidebarItem
          icon={<MdOutlineLogout className="h-8 w-8" />}
          text="Logout"
          to="/admin/logout"
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
