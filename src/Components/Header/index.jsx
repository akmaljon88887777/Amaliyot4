import React from "react";
import "../../App.css";
function Header() {
  return (
    <div className="w-full h-[68vh] bgimg  -mt-10 justify-center flex items-center">
      <div style={{ lineHeight: "1" }} className="lg:ml-[16%] pl-5">
        <h4 className="text-white font-bold text-[40px] pb-1">welcome to</h4>
        <h4 className="text-white font-bold text-[40px]">
          Onetel Design Studio
        </h4>
      </div>
    </div>
  );
}

export default Header;
