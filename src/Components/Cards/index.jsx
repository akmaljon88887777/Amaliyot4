import { FaRegLifeRing } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlineLaptopMac } from "react-icons/md";
import React from "react";

function Cards({ price, title, img }) {
  return (
    <div className="md:w-full md:p-0 md:m-0 gap-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center w-full xl:gap-5 lg:px-0 md:px-0 xl:-mt-10 xl:px-[273px]">
      <div
        style={{ background: "#C14000" }}
        className="w-72 grid transition-all lg:w-[303.33px] md:w-[340px] xl:w-[303.33px] xl:h-[317px] lg:h-[317px] justify-items-center py-10 items-center text-white cursor-pointer hover:-mt-12 hover:right-[277px] hover:cursor-pointer hover:duration-[1.2s]"
      >
        <div
          style={{ border: "2px solid" }}
          className="w-[80px] h-[80px] rounded-full justify-center items-center flex"
        >
          <MdOutlineLaptopMac color="white" size={32} />
        </div>
        <div className=" text-center mt-3">
          <h4 className="text-[30px] font-bold">Responsive</h4>
          <p className="w-[200px] text-center mt-2 text-[14px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
      <div
        style={{ background: "#009988" }}
        className="w-72 grid transition-all lg:w-[303.33px] md:w-[340px] xl:w-[303.33px] xl:h-[317px] lg:h-[317px] justify-items-center py-10 items-center text-white cursor-pointer hover:-mt-12 hover:right-[277px] hover:cursor-pointer hover:duration-[1.2s]"
      >
        <div
          style={{ border: "2px solid" }}
          className="w-[80px] h-[80px] rounded-full justify-center items-center flex"
        >
          <SlScreenSmartphone color="white" size={32} />
        </div>
        <div className=" text-center mt-3">
          <h4 className="text-[30px] font-bold">Responsive</h4>
          <p className="w-[200px] text-center mt-2 text-[14px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
      <div
        style={{ background: "#FFA500" }}
        //md:w-[94.5%]
        className="w-72 grid transition-all lg:w-[303.33px] md:w-[94.5%] md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-1 xl:w-[303.33px] xl:h-[317px] lg::h-[342.5px] justify-items-center py-10 items-center text-white cursor-pointer hover:-mt-12 hover:right-[277px] hover:cursor-pointer hover:duration-[1.2s]"
      >
        <div
          style={{ border: "2px solid" }}
          className="w-[80px] h-[80px] rounded-full justify-center items-center flex"
        >
          <FaRegLifeRing color="white" size={32} />
        </div>
        <div style={{ lineHeight: "28px" }} className=" text-center mt-3">
          <h4 className="text-[30px] font-bold ">Responsive</h4>
          <p className="w-[200px] text-center mt-2 text-[14px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
