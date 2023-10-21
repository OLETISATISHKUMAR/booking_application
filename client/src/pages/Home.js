import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Himalayas from "../assets/Himalayas.jpg";
import Beach from "../assets/Beach.jpg";
import Tajmahal from "../assets/taj.jpg";
import Nature from "../assets/nature.jpg";
import SmallCaursole from "./SmallCaursole";

function Home() {
  const slides = [
    {
      url: Himalayas,
      name: "Beautiful Himalayas, a very pleasant place",
    },
    {
      url: Beach,
      name: "The most beautiful sunset place ever",
    },
    {
      url: Tajmahal,
      name: "The Symbol of pure Love 💖",
    },
    {
      url: Nature,
      name: "The greenest place ever in Kerala",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/3 div1 ">
        <div className="max-w-[400px] h-[650px] w-full m-auto py-6 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-[35px] font-semibold text-center">
              {slides[currentIndex].name}
            </div>
          </div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
      <div className="w-2/3 div2">
        <h1 className="text-[70px] font-semibold  mb-2">
          Let us plan you a perfect{" "} <br />
          <span className="text-[70px] font-bold mb-8 text-orange-400">
            India Holiday
          </span>
        </h1>
        <p className="text-[20px]">
          Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in
          India.
        </p>
        <SmallCaursole />
      </div>
    </div>
  );
}

export default Home;
