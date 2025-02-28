import React from "react";
import frameLogo from "../../assets/Frame.svg"; // Adjust path if needed

const Header = () => {
  return (
    <header className=" top-6  w-full p-4">
      <div className="flex pl-8 pt-4">
        <img src={frameLogo} alt="Logo" className="h-12 w-auto" />
      </div>
    </header>
  );
};

export default Header;
