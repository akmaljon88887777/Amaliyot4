import React from "react";
import "../../App.css";
import Rasm from "../../Assets/team1.jpg";
import Rasm1 from "../../Assets/team2.jpg";
import Rasm2 from "../../Assets/team3.jpg";
function About() {
  return (
    <div className=" text-white w-full lg:p-0 ">
      <div className="about"></div>
      <div className="text-[32px] font-bold grid justify-items-center mt-20">
        Meet the crew!
        <p className="text-start md:flex md:justify-start lg:m-0 md:m-0 ml-4 lg:text-start lg:justify-center lg:mt-5 lg:flex md:ml-9 mt-10 font-normal text-[#7B7B7B]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh <br /> euismod tincidunt ut laoreet. Dolore magna aliquam
          erat volutpat.
        </p>
        <br />
      </div>
      <div className="lg:flex md:mx-10 md:gap-16 lg:m-0 md:m-0 -ml-16 justify-center px-2 grid gap-10 md:grid md:grid-cols-3 md:justify-items-center">
        <div
          style={{ border: "2px solid #303030" }}
          className="lg:w-[303.33px] lg:h-[469px] h-[400px] w-[220px] p-5"
        >
          <img src={Rasm} alt="" />
          <p
            style={{ fontSize: "26px", fontFamily: "inherit" }}
            className="font-extrabold mt-3 uppercase"
          >
            LINDA
          </p>
          <p className="text-lg font-bold text-[#d54ab6] my-2 ">
            Creative Director
          </p>
          <p className="text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismo.
          </p>
          <br />
        </div>
        <div
          style={{ border: "2px solid #303030" }}
          className="lg:w-[303.33px] md:h-[380px] lg:h-[469px] h-[400px] w-[220px] p-5"
        >
          <img src={Rasm1} alt="" />
          <p
            style={{ fontSize: "26px", fontFamily: "inherit" }}
            className="font-extrabold mt-3 uppercase"
          >
            julia
          </p>
          <p className="text-lg font-bold text-[#d54ab6] my-2 ">Ux Designer</p>
          <p className="text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy uismo.
          </p>
          <br />
          <br />
          <br />
        </div>
        <div
          style={{ border: "2px solid #303030" }}
          className="lg:w-[303.33px] lg:h-[469px] h-[400px] w-[220px] p-5 "
        >
          <img src={Rasm2} alt="" />
          <p
            style={{ fontSize: "26px", fontFamily: "inherit" }}
            className="font-extrabold mt-3 uppercase"
          >
            mary
          </p>
          <p className="text-lg font-bold text-[#d54ab6] my-2 ">
            Creative Director
          </p>
          <p className="text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismo.
          </p>
          <br />
        </div>
      </div>
      <div className="lg:flex grid-cols-1 md:grid-cols-2 md:grid -mx-2 w-full lg:w-full xl:flex justify-center my-24 xl:px-64 md:px-14 px-6 items-center gap-10">
        <div className="x w-full">
          <h4 className="lg:text-[26px] text-[20px] text-white font-bold px-0 w-full">
            Onetel Design Studio
          </h4>
          <br />
          <p className="text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet.
          </p>
          <p className="mt-2 text-[#808080]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            <br /> nonummy nibh euismo.
          </p>
        </div>
        <div className="grid gap-4 my-8 text-[#808080] w-full">
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-14px font-semibold">HTML5 & CSS3</p>
              <p className="text-14px font-semibold">100%</p>
            </div>
            <div className="w-full xl:w-[500px] lg:w-[100%] bg-white h-1">
              <div className="w-[93%] h-1 bg-[#F0AD4E]"></div>
              <br />
            </div>
          </div>
          <div>
            <div className="flex mt-3 justify-between mb-2">
              <p className="text-14px font-semibold">BOOTSTRAP</p>
              <p className="text-14px font-semibold">80%</p>
            </div>
            <div className="w-full mt-3 bg-white h-1">
              <div className="w-[85%] h-1 bg-[#D9534F]"></div>
              <br />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-14px font-semibold">HTML5 & CSS3</p>
              <p className="text-14px font-semibold">70%</p>
            </div>
            <div className="w-full mt-3 bg-white h-1">
              <div className="w-[70%] h-1 bg-[#337AB7]"></div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
