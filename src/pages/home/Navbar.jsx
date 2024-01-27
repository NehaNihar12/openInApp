import BellIcon from "assets/icons/BellIcon";
import BurgerRegular from "assets/icons/BurgerRegular";
import LogoWhite from "assets/icons/LogoWhite";
import profilePic from "assets/icons/defaultProfile.png";
import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex md:hidden">
          <div>
            <BurgerRegular />
          </div>
          <div>
            <LogoWhite fill="#605BFF" />
          </div>

          <div>
            <h1 class="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
              Base
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="hidden md:block">
            Upload CSV
          </div>
          <div>
            <BellIcon />
          </div>
          <div>
            <img src={profilePic} alt="Your profile pic" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
