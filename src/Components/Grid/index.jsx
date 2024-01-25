// import React from "react";
// import "lightbox.js-react/dist/index.css";
import Rasm from "../../Assets/portfolio-img1.jpg";
import Rasm2 from "../../Assets/portfolio-img2.jpg";
import Rasm3 from "../../Assets/portfolio-img3.jpg";
import Rasm4 from "../../Assets/portfolio-img4.jpg";
import Rasm5 from "../../Assets/portfolio-img5.jpg";
import Rasm6 from "../../Assets/portfolio-img6.jpg";
import Rasm7 from "../../Assets/portfolio-img7.jpg";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const arrOfImages = [Rasm, Rasm2, Rasm3, Rasm4, Rasm5, Rasm6, Rasm7];
function Grid() {
  const [indexOfImages, setIndexOfImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModalAndSetIndex = (index) => {
    setIndexOfImages(index);
    setShowModal(true);
    return;
  };
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 cursor-pointer lg:grid-cols-3 w-[100%] lg:w-[70%] m-auto bg-slate-400 gap-0">
        {arrOfImages.map((image, ind) => {
          if (ind < 3) {
            return (
              <div>
                <img
                  key={image}
                  src={image}
                  alt={image}
                  onClick={() => openModalAndSetIndex(ind)}
                />
              </div>
            );
          }
        })}

        {showModal && (
          <Lightbox
            mainSrc={arrOfImages[indexOfImages]}
            nextSrc={arrOfImages[(indexOfImages + 1) % arrOfImages.length]}
            prevSrc={
              arrOfImages[
                (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
              ]
            }
            onCloseRequest={() => setShowModal(false)}
            onMovePrevRequest={() =>
              setIndexOfImages(
                (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
              )
            }
            onMoveNextRequest={() =>
              setIndexOfImages(
                (indexOfImages + arrOfImages.length + 1) % arrOfImages.length
              )
            }
          />
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 cursor-pointer lg:grid-cols-4 w-[100%] lg:w-[70%] m-auto bg-slate-400 gap-0">
        {arrOfImages.map((image, index) => {
          if (index == 6) {
            return (
              <div className="col-span-12 lg:col-auto">
                <img
                  key={image}
                  src={image}
                  alt={image}
                  onClick={() => openModalAndSetIndex(index)}
                />
              </div>
            );
          } else if (index >= 3) {
            return (
              <div>
                <img
                  key={image}
                  src={image}
                  alt={image}
                  onClick={() => openModalAndSetIndex(index)}
                />
              </div>
            );
          } else {
            return null;
          }
        })}

        {showModal && (
          <Lightbox
            mainSrc={arrOfImages[indexOfImages]}
            nextSrc={arrOfImages[(indexOfImages + 1) % arrOfImages.length]}
            prevSrc={
              arrOfImages[
                (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
              ]
            }
            onCloseRequest={() => setShowModal(false)}
            onMovePrevRequest={() =>
              setIndexOfImages(
                (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
              )
            }
            onMoveNextRequest={() =>
              setIndexOfImages(
                (indexOfImages + arrOfImages.length + 1) % arrOfImages.length
              )
            }
          />
        )}
      </div>
      <div className="w-full pb-16 pt-8 flex justify-center">
        <button
          style={{ border: "2px solid white", zIndex: "1" }}
          className="w-[103.26px] h-[45.76px] text-white text-[13px] font-medium hover:bg-[#009988] hover:text-black hover:duration-1000"
        >
          <a
            style={{ textDecoration: "none" }}
            href="http://www.templatemo.com/tag/darkgray"
            rel="nofollow"
          >
            View More
          </a>
        </button>
      </div>
    </div>
  );
}

export default Grid;
