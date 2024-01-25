import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { GoGlobe } from "react-icons/go";
import { AiOutlineBehance } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import Rasm from "../../Assets/logo.png";
import "../../App.css";

const Footer = () => {
  return (
    <div className="">
      <footer className="flex justify-center w-full bg-[#1C1C1C]">
        <div className="w-[100%] md:mx-10 py-16 grid lg:w-full justify-between grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-start p-3 gap-8 lg:px-[100px] xl:px-[275px]">
          <div className="xl:-ml-12">
            <div>
              <img src={Rasm} alt="" />
            </div>
            <div>
              <p className="text-[#808080] text-[14px] lg:w-[390px]">
                Onetel is free Bootstrap v3.3.5 HTML5 layout from <br />
                templatemo website. Feel free to use it for your website.
              </p>
            </div>
            <div className="grid text-[#808080] text-[14px] gap-4 mt-3">
              <p className="gap-3 flex items-center">
                <BsFillTelephoneFill size={20} />
                <span>010-020-0340</span>
              </p>
              <p className="gap-3 flex items-center ">
                <CgMail size={22} />
                <span> info@company.com</span>
              </p>
              <p className="gap-3 flex items-center">
                <GoGlobe size={22} />
                <span> www.company.com</span>
              </p>
            </div>
          </div>
          <div className=" ">
            <div className="lg:ml-24">
              <h4 className="text-white text-[24px] font-bold">Useful Links</h4>
              <div className="mt-3 gap-3 grid">
                <p className="text-[14px] text-[#808080]">Html5 Templates</p>
                <p className="text-[14px] text-[#808080]">CSS3 Tricks</p>
                <p className="text-[14px] text-[#808080]">Design Blog</p>
                <p className="text-[14px] text-[#808080]">Animations</p>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <h4 className="text-white text-[24px] font-bold">Newsletter</h4>
              <div className="mt-3 gap-3 grid justify-items-start ">
                <p className="text-[14px] text-[#808080]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismo.
                </p>
                <input
                  style={{ border: "2px solid white" }}
                  type="text"
                  placeholder="Enter your email"
                  className=" h-[34px] text-white md:w-[200px] bg-transparent inp placeholder:text-white placeholder:text-[13px] hover:bg-[#806040] focus:bg-[#806040] focus:shadow-red-600 hover:duration-500 rounded-none p-3"
                />
                <button
                  style={{ border: "2px solid white" }}
                  className="text-[13px] w-[76.6px] h-[37.76px] text-white font-medium hover:bg-[#009988] hover:text-white"
                >
                  Submit
                  {/* 14:25 */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="lg:flex md:flex md:gap-10 lg:px-24 xl:pl-64 bg-[#101010] md:pb-0 lg:pb-0 pb-2 w-full h-[70px] items-center justify-center  gap-1 p-4">
        <p className="text-[#808080] lg:mb-4 lg:px-0 xl:px-0 lg:w-full">
          Copyright © 2084 Company Name
        </p>
        <br />
        <div className="gap-1 lg:flex lg:ml-16 lg:mb-4 grid md:flex sm:flex grid-cols-5 lg:m-0 mx-4 justify-items-start ml-0">
          <div className="w-[47.44px] h-[40px] bg-[#303030] flex items-center justify-center hover:bg-[#D54AB6] hover:cursor-pointer hover:text-white">
            <CgFacebook size={22} color="#808080" />
          </div>
          <div className="w-[47.44px] h-[40px] bg-[#303030] flex items-center justify-center hover:bg-[#D54AB6] hover:cursor-pointer hover:text-white">
            <AiOutlineTwitter size={22} color="#808080" />
          </div>
          <div className="w-[47.44px] h-[40px] bg-[#303030] flex items-center justify-center hover:bg-[#D54AB6] hover:cursor-pointer hover:text-white">
            <AiOutlineDribbble size={22} color="#808080" />
          </div>
          <div className="w-[47.44px] h-[40px] bg-[#303030] flex items-center justify-center hover:bg-[#D54AB6] hover:cursor-pointer hover:text-white">
            <BsPinterest size={22} color="#808080" />
          </div>
          <div className="w-[47.44px] h-[40px] bg-[#303030] flex items-center justify-center hover:bg-[#D54AB6] hover:cursor-pointer hover:text-white">
            <AiOutlineBehance size={22} color="#808080" />
          </div>
          <div className="w-[47.44px] h-[40px] bg-[#303030] flex items-center justify-center hover:bg-[#D54AB6] hover:cursor-pointer hover:text-white">
            <CgMail size={22} color="#808080" />
          </div>
        </div>
        <br />
      </footer>
    </div>
  );
};

export default Footer;
