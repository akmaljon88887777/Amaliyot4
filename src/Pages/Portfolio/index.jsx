import React from "react";
import "../../App.css";
import Grid from "../../Components/Grid";
function Portfolio() {
  return (
    <div className="text-white">
      <div className="portfolio"></div>
      <div className="grid justify-items-center mt-32">
        <h1 className="text-[30px] font-bold">Our Projects</h1>
        <br />
        <p className="lg:w-full w-[87%] text-center text-sm text-[#808080]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh <br /> euismod tincidunt ut laoreet. Dolore magna aliquam
          erat volutpat.
        </p>
        <br />
        <br />
        <Grid />
      </div>
    </div>
  );
}

export default Portfolio;
