import React from "react";
import "../../App.css";
function Contact() {
  return (
    <div className="text-white w-full">
      <div className="contact"></div>
      <br />
      <div className="px-2">
        <h4 className="text-[30px] text-white font-bold flex justify-center">
          Get in touch
        </h4>
        <br />
        <p className="text-[#808080] flex justify-center px-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh <br /> euismod tincidunt ut laoreet. Dolore magna aliquam
          erat volutpat.
        </p>
        <br />
        <div className="lg:flex md:flex justify-center gap-7 mt-2 grid grid-cols-1 lg:m-0 ml-2 lg:mx-0">
          <div className="grid gap-2 grid-cols-1 justify-items-start  ">
            <label
              className="text-[14px] mb-3 text-[#808080] font-semibold"
              htmlFor=""
            >
              NAME <br />
              <input
                type="text"
                className="lg:w-[288.33px] md:w-[200px] h-[53px] bg-[#1F1F1F] mt-2 w-[288px]"
                name=""
                id=""
              />
            </label>
            <label
              className="text-[14px] mb-3 text-[#808080] font-semibold"
              htmlFor=""
            >
              EMAIL <br />
              <input
                type="text"
                className="lg:w-[288.33px] md:w-[200px] h-[53px] bg-[#1F1F1F] mt-2 w-[288px]"
                name=""
                id=""
              />
            </label>
          </div>
          <div>
            <label
              className="text-[14px] mb-3 text-[#808080] grid font-semibold"
              htmlFor=""
            >
              MESSAGE <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="lg:w-[288.33px] md:w-[200px] h-[132px] bg-[#1F1F1F] mt-2 w-[288px]"
              ></textarea>
              <br />
              <button
                style={{ border: "2px solid" }}
                className=" text-white w-[77.46px] h-[45.76px] hover:bg-[#009988] hover:text-black hover:duration-1000"
              >
                salom
              </button>
            </label>
          </div>
          <div className="lg:ml-4">
            <div className="font-semibold">
              <h1 className="text-[24px]">Email</h1>
              <p className="text-[14px] text-[#808080] mt-2">
                info@company.com
              </p>
            </div>
            <br />
            <div className="font-semibold">
              <h1 className="text-[24px]">Phones</h1>
              <p className="text-[14px] text-[#808080] mt-2">
                010-020-0340 | 090-080-0760
              </p>
            </div>
          </div>
        </div>
        <br />
        <div>
          <div className="flex justify-center mb-32">
            <div className="w-[870px] h-[300px] lg:mx-0 mx-5">
              <h4 className="text-[24px] font-semibold text-start">Location</h4>
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.990980646774!2d71.26316257529027!3d40.37438685821654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbab8025bced7d%3A0xc22cdf6b8ee85751!2sCodemy!5e1!3m2!1sru!2s!4v1704916573230!5m2!1sru!2s"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
