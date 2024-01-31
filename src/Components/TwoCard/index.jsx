import React from "react";
import "../../App.css";
import Rasm from "../../Assets/about-img.jpg";
function TwoCard() {
  return (
    <div className="flex md:mx-5 mt-10  md:m-0 md:overflow-hidden overflow-hidden xl:mx-0">
      <div className="flex flex-col lg:flex-row xl:px-[265px] md:px-0 ">
        <div className="lg:w-[100%] md:w-full lg:h-[333px] ">
          <img
            className="lg:w-full lg:h-[333px] w-full h-[200px] md:w-[725px] md:h-[460px] xl:w-full"
            src={Rasm}
            alt=""
          />
        </div>
        <div className="w-full bg-[#191919] md:w-full lg:w-full xl:w-[100%] xl:h-[333.33px] lg:h-[333px] md:mt-0 lg:pt-8 p-7">
          <h2 className="text-[30px] font-bold text-white">Startup Business</h2>
          <p className="text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br />
            diam nonummy nibh euismod tincidu nt ut laoreet. Dolore <br /> magna
            aliquam erat volutpat. Lorem ipsum dolor sit amet.
          </p>
          <br />
          <p className="text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br />
            diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
            erat volutpat.
          </p>
          <br />
          <button
            style={{ border: "2.5px solid", marginTop: "8px" }}
            className="w-[131.14px] h-[45.76px] hover:w-[131.14px] hover:h-[45.76px] hover:m-0 hover:p-0 font-medium text-white text-[14px] hover:bg-[#009988] hover:text-black hover:duration-1000 hover:border-none"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TwoCard;
