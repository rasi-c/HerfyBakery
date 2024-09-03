// import React from "react";
// import carouselImage1 from "../Carousel_img/carousel11.png";

// const Carousel = () => {
//   return (
// <div className="flex h-[100vh]">
//   <div className="w-50% h-full">
//     <p className=" md2:text-xl text-lg">EVERY DAY WE MAKE </p>
//     <p className=" md2:text-[48px] text-[30px] font-bold">
//       Freshly Baked Cakes
//     </p>
//     <button className="w-36 h-11 rounded-full border-2 border-orange-400">
//       Order Now
//     </button>
//   </div>
//   <div className="w-50% h-full bg-black">
//     <img src={carouselImage1} alt="" className="w-full h-full" />
//   </div>
// </div>

//   );
// };

// export default Carousel;

import React, { useState } from "react";
import img1 from "../Carousel_img/choco1.png";
import img2 from "../Carousel_img/pinple1.png";
// import bgImg from "../Carousel_img/bgImg.png";

const Carousel = () => {
  const [showingCarousel, setShowingCarousel] = useState(1);
  function nextSlide() {
    setShowingCarousel((prev) => (prev === 2 ? 1 : prev + 1));
    console.log(showingCarousel);
  }

  function prevSlide() {
    setShowingCarousel((prev) => (prev === 1 ? 2 : prev - 1));
    console.log(showingCarousel);
  }

  return (
    <div className="relative  w-full xl:h-[100vh] h-fit pt-[130px]">
      <div
        className="flex h-full"
        // style={{ transform: `translateX(-${(showingCarousel - 1) * 100}%)` }}
      >
        {/* carousel 1  */}
        <div
          className={`w-full h-full  flex ${
            showingCarousel === 1 ? "block" : "hidden"
          }`}
        >
          <div className="w-[50%] h-full flex flex-col justify-center items-end">
            <div className="w-50% h-full flex flex-col justify-center">
              <p className=" md2:text-xl text-lg">EVERY DAY WE MAKE </p>
              <p className=" md2:text-[48px] text-[30px] font-bold">
                Freshly Baked Cakes
              </p>
              <button className="w-36 h-11 rounded-full border-2 border-orange-400">
                Order Now
              </button>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center ">
            <img src={img1} alt="img" className="w-[75%] " />
          </div>

          <div className="md2:hidden block w-full h-full" style={{backgroundImage:""}}></div>
        </div>
        {/* carousel 2  */}
        <div
          className={`w-full h-full flex ${
            showingCarousel === 2 ? "block" : "hidden"
          }`}
        >
          <div className="w-[40%] h-full"></div>
          <div className="w-[60%] h-full">
            <img src={img2} alt="img" className="w-[50%] " />
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-[50%] left-[10px] translate-y-[-50%] p-2"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-[50%] right-[10px] translate-y-[-50%]  p-2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
