import React from "react";
import { FaRegLifeRing } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { MdOutlineLaptopMac } from "react-icons/md";
import Header from "../../Components/Header";
import Cards from "../../Components/Cards";
import TwoCard from "../../Components/TwoCard";
import Rasm from "../../Assets/about-img.jpg";
import "../../App.css";
import Grid from "../../Components/Grid";
function Home() {
  // const data = [
  //   {
  //     icon: <MdOutlineLaptopMac size={32} />,
  //   },
  //   {
  //     icon: <ImMobile size={32} />,
  //   },
  //   {
  //     icon: <FaRegLifeRing size={32} />,
  //   },
  // ];
  const Data2 = [
    {
      img: Rasm,
      title: "Startup Business",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.",
    },
  ];
  return (
    <div className="col-span-1">
      <Header />
      {/* <div className="-mt-10 gap-5 m-2 justify-items-center md:justify-items-center lg:grid-cols-3 grid grid-cols-1 md:grid-cols-2 xl:mx-[260px] ">
        {data.map((i) => (
          ))}
        </div> */}
      <Cards />
      <div className="lg:flex justify-center gap-0 my-20 grid grid-cols-1 md:grid">
        {Data2.map((i) => (
          <TwoCard
            key={i}
            img={i.img}
            title={i.title}
            text={i.text}
            lorem={i.lorem}
          />
        ))}
      </div>
      <div className="grid justify-items-center w-full text-white">
        <h4 className="text-[30px] font-bold">Recent Projects</h4>
        <br />
        <p className="lg:w-[40%] text-center text-[#808080] w-[77%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat
          volutpat.
        </p>
        <br />
        <br />
        <div className="md:flex justify-center w-full">
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default Home;
