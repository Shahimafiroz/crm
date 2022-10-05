import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../assets/dummy";
const Sidebar = () => {
  const activeMenu = true;
  return (
    <div class=" ml-3 h-screen  md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10 ">
      {activeMenu && (
        <>
          <div className=" flex justify-between items-center">
            <link to="/" onClick={() => {}} className="  items-center ">
              <SiShopware className="text-3xl" />
              <span>Shoppy</span>
            </link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
