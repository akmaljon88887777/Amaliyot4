import React from "react";

import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/index";
const Root = () => {
  return (
    <>
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default Root;
