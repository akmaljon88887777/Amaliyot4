import { FaRegLifeRing } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlineLaptopMac } from "react-icons/md";
import React from "react";

function Cards() {
  return (
    <div className="md:w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center w-full -mt-10 xl:px-56">
      <div
        style={{ background: "#C14000" }}
        className="w-72 grid transition-all md:w-[340px] xl:w-80 lg:w-[300px] justify-items-center py-10 items-center text-white cursor-pointer hover:bottom-[60px] hover:cursor-pointer hover:duration-1000"
      >
        <div
          style={{ border: "2px solid" }}
          className="w-[80px] h-[80px] rounded-full justify-center items-center flex"
        >
          <MdOutlineLaptopMac color="white" size={32} />
        </div>
        <div className=" text-center mt-3">
          <h4 className="text-[30px] font-bold">Responsive</h4>
          <p style={{}} className="w-[185px] text-center mt-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
      <div
        style={{ background: "#009988" }}
        className="w-72 grid transition-all md:w-[340px] xl:w-80 lg:w-[300px] justify-items-center py-10 items-center text-white cursor-pointer hover:bottom-[60px] hover:cursor-pointer hover:duration-1000"
      >
        <div
          style={{ border: "2px solid" }}
          className="w-[80px] h-[80px] rounded-full justify-center items-center flex"
        >
          <SlScreenSmartphone color="white" size={32} />
        </div>
        <div className=" text-center mt-3">
          <h4 className="text-[30px] font-bold">Responsive</h4>
          <p style={{}} className="w-[185px] text-center mt-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
      <div
        style={{ background: "#FFA500" }}
        //md:w-[94.5%]
        className="w-72 grid transition-all md:w-[94.5%] md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-1 xl:w-80 lg:w-[300px] lg::h-[342.5px] justify-items-center py-10 items-center text-white cursor-pointer hover:bottom-[60px] hover:cursor-pointer hover:duration-1000"
      >
        <div
          style={{ border: "2px solid" }}
          className="w-[80px] h-[80px] rounded-full justify-center items-center flex"
        >
          <FaRegLifeRing color="white" size={32} />
        </div>
        <div className=" text-center mt-3">
          <h4 className="text-[30px] font-bold">Responsive</h4>
          <p style={{}} className="w-[185px] text-center mt-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
