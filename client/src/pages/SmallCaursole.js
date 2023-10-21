import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import Wildlife from "../assets/Wildlife.jpg";
import Heritage from "../assets/indian Heritage.jpg";
import { GiTigerHead } from "react-icons/gi";
import HeritageIcon from "../assets/heritage.png";
import pilgrimageImg from "../assets/templeImg.jpg";
import pilgrimageIcon from "../assets/temple.png";
import TrekkingImg from "../assets/TrekkingImg.jpg";
import TrekkingIcon from "../assets/trekking.png";
import beachIcon from "../assets/sunset.png";
import beachImg from "../assets/beach-img.jpg";
import hillStationIcon from "../assets/hill-station.png";
import hillstationImg from "../assets/moutain-img.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div
    className="w-[250px] h-[200px] bg-white rounded-lg shadow-md p-4"
    data-value="1"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Wildlife</h1>
      <span>
        <GiTigerHead size={34} color="red" />
      </span>
    </div>
    <h1 className="text-sm text-gray-600 mt-2">10+ Packages</h1>
    <img src={Wildlife} alt="wildlife" className="mt-4" />
  </div>,
  <div
    className="w-[250px] h-[200px] bg-white rounded-lg shadow-md p-4"
    data-value="1"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Indian Heritage</h1>
      <span>
        <img src={HeritageIcon} width={34} height={34} alt="heritage icon" />
      </span>
    </div>
    <h1 className="text-sm text-gray-600 mt-2">10+ Packages</h1>
    <img src={Heritage} alt="wildlife" className="mt-4" />
  </div>,
  <div
    className="w-[250px] h-[200px] bg-white rounded-lg shadow-md p-4"
    data-value="1"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Trekking</h1>
      <span>
        <img src={TrekkingIcon} width={34} height={34} alt="Trekking icon" />
      </span>
    </div>
    <h1 className="text-sm text-gray-600 mt-2">10+ Packages</h1>
    <img src={TrekkingImg} alt="trekkingImg" className="mt-4" />
  </div>,
  <div
    className="w-[250px] h-[200px] bg-white rounded-lg shadow-md p-4"
    data-value="1"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Pilgrimages</h1>
      <span>
        <img
          src={pilgrimageIcon}
          width={34}
          height={34}
          alt="Pilgrimages icon"
        />
      </span>
    </div>
    <h1 className="text-sm text-gray-600 mt-2">10+ Packages</h1>
    <img src={pilgrimageImg} alt="pilgrimageImg" className="mt-4" />
  </div>,
  <div
    className="w-[250px] h-[200px] bg-white rounded-lg shadow-md p-4"
    data-value="1"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Hill Stations</h1>
      <span>
        <img
          src={hillStationIcon}
          width={34}
          height={34}
          alt="hillStation icon"
        />
      </span>
    </div>
    <h1 className="text-sm text-gray-600 mt-2">10+ Packages</h1>
    <img src={hillstationImg} alt="hillstationImg" className="mt-4" />
  </div>,
  <div
    className="w-[250px] h-[200px] bg-white rounded-lg shadow-md p-4"
    data-value="1"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Beach Tour</h1>
      <span>
        <img src={beachIcon} width={34} height={34} alt="beach icon" />
      </span>
    </div>
    <h1 className="text-sm text-gray-600 mt-2">10+ Packages</h1>
    <img src={beachImg} alt="beachImg" className="mt-4" />
  </div>,
];

function SmallCaursole() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < items.length - 3) {
      // Changed to -3 to show 3 items at a time
      setCurrentIndex(currentIndex + 3);
    }
  };

  return (
    <div className="carousel-container">
      <AliceCarousel
        items={items}
        responsive={responsive}
        activeIndex={currentIndex}
        disableButtonsControls
        disableDotsControls
      />
      <div className="carousel-buttons flex p-4">
        <button
          onClick={handlePrevClick}
          className="text-orange-500 font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300"
        >
          <div className="bg-orange-500 p-2 rounded-full">
            <AiOutlineArrowLeft className="text-white text-2xl" />
          </div>
        </button>
        <button
          onClick={handleNextClick}
          className="text-orange-500 font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300"
        >
          <div className="bg-orange-500 p-2 rounded-full">
            <AiOutlineArrowRight className="text-white text-2xl" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SmallCaursole;
