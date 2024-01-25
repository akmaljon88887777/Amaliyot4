import { RiMenuFill } from "react-icons/ri";
import Rasm from "../../Assets/logo.png";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
function Navbars() {
  const border = {
    borderLeft: "6px solid #D54AB6",
  };
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(true);

  return (
    <div
      style={{ borderLeft: "6px solid #D54AB6", zIndex: "1" }}
      className="flex w-full bg-[#202020] justify-between lg:w-full lg:pb-0 pb-4 md:pb-0 items-center md:mx-5 xl:mx-[275px] mx-4 my-5 px-5 lg:pr-10 text-[13px]"
    >
      <div className="navbar w-full flex justify-between items-center lg:ml-0 xl:ml-0 md:ml-0 -ml-1 h-[70px]  text-white">
        <h4 className="text-[32px]  font-normal ">
          <Link
            className="flex items-center sm:flex  hover:text-[#F1C111]"
            to={"/"}
          >
            <div className="md:flex sm:flex lg:flex lg:-ml-1 flex items-center gap-2 ">
              <img src={Rasm} alt="" />
            </div>
          </Link>
        </h4>
        <div className="lg:hidden md:hidden flex items-center">
          <div
            className="duration-1000 transition-all absolute -mt-2 mx-10 top-[40px] right-5  "
            onClick={() => {
              setOpen(!open);
              setMenu(!menu);
            }}
          >
            {menu ? (
              <button className="bg-[#D54AB6] px-2 py-1">
                <RiMenuFill color="#fff" fontSize={"30px"} />
              </button>
            ) : (
              <button
                className="px-2 py-1"
                onClick={() => {
                  setMenu(false);
                }}
              >
                <RiMenuFill color="#fff" fontSize={"30px"} />
              </button>
            )}
          </div>
        </div>

        <div className=" flex justify-center">
          <div
            className={`w-[90%] flex justify-center m-0 ${
              open ? "h-[240px] sm:w-full p-0 m-0 flex justify-center" : "h-0"
            } bg-[#202020] border-l-[6px] border-[#D54AB6] overflow-x-hidden justify-items-center top-0 left-4 mt-[100px] z-50 absolute duration-300 transition-all flex flex-col items-start  gap-5 `}
            y
          >
            <div className="grid justify-items-start w-ful text-center items-center gap-5">
              <Link
                className="font-semibold mt-1 text-[13px] w-full text-start uppercase hover:text-[#F1C111] cursor-pointer ml-[15px]"
                activeClass="active"
                to="/"
                style={{ borderTop: "1px solid", paddingTop: "25px" }}
                id={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : "current gap-2 text-center"
                }
              >
                HOME
              </Link>
              <Link
                className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#F1C111] cursor-pointer ml-[15px]"
                activeClass="active"
                to="/about"
              >
                ABOUT US
              </Link>
              <Link
                className="font-semibold mt-1 text-[13px] uppercase hover:text-[#F1C111] cursor-pointer  ml-[15px]"
                activeClass="active"
                to="/portfolio"
              >
                PORTFOLIO
              </Link>

              <Link
                className="font-semibold mt-1 text-[13px] uppercase hover:text-[#F1C111] cursor-pointer  ml-[15px]"
                activeClass="active"
                to="/contact"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        <div className=" items-center gap-10 hidden lg:flex md:flex">
          <a className="hover:text-[#F1C111] cursor-pointer">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : "current gap-2 text-center"
              }
              to={"/"}
            >
              HOME
            </NavLink>
          </a>
          <a href="#Carousels" className="hover:text-[#F1C111] cursor-pointer">
            <NavLink to="/about">ABOUT US</NavLink>
          </a>
          <NavLink to="/portfolio" className="hover:text-[#F1C111]">
            PORTFOLIO
          </NavLink>

          <NavLink to={"/contact"}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbars;
