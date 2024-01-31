import React from "react";
import "../../App.css";
function Header() {
  return (
    <div className="w-full h-[68vh] bgimg  -mt-10 justify-center flex items-center md:w-full">
      <div
        style={{ lineHeight: "45px", fontFamily: "Montserrat,sans-serif" }}
        className="lg:ml-[18.5%] lg:-mt-5 pl-5"
      >
        <h4 className="text-white font-bold text-[40px] pb-1">welcome to</h4>
        <h4 className="text-white font-bold text-[40px]">
          Onetel Design Studio
        </h4>
      </div>
    </div>
  );
}

export default Header;
