import React from "react";
import Header from "../../Components/Header";
import Cards from "../../Components/Cards";
import TwoCard from "../../Components/TwoCard";
import Rasm from "../../Assets/about-img.jpg";
import "../../App.css";
import Grid from "../../Components/Grid";
function Home() {
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
        <p className="text-[14px] text-center text-[#808080] w-[77%] lg:w-[490px]">
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
