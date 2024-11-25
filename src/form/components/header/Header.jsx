import React from "react";
import Logo from "../../../assets/VAS2Nets-Logo.png";

const Header = () => {
  return (
    <>
      <div className="header w-full">
        <div className="title__logo flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-auto max-h-20 w-auto max-w-30"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
