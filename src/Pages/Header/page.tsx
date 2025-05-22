import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#F2F5FF] flex flex-col md:flex-row items-center h-screen px-6 md:px-10 lg:px-[12vw]">
      <div className="flex flex-col justify-center w-full md:w-1/2 md:pr-8 pt-20 md:pt-0">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6 text-center md:text-left">
          <span className="text-gray-800">Where Every Leaf Tells</span>
          <br className="hidden md:block" />
          <span className="text-gray-800">a Story of </span>
          <span className="text-green-500">Growth</span>
          <span className="text-gray-800"> and</span>
          <br className="hidden md:block" />
          <span className="text-green-500"> Green</span>
          <span className="text-gray-800"> Living.</span>
        </h1>
        <p className="text-gray-700 mb-8 text-base text-justify lg:text-lg max-w-xl">
          Discover thoughtfully selected plants for every space from cozy
          corners to outdoor patios each one chosen to bring joy, wellness, and
          natural charm into your daily life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-0">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 text-lg font-medium">
            Explore Collection
          </button>
          <button
            className="relative px-6 py-3 rounded-md text-lg font-medium border-2 border-gray-800 text-gray-800 overflow-hidden group"
            style={{
              transition: "color 0.1s ease",
            }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Get 10% Off First Order
            </span>
            <div
              className="absolute left-0 top-0 h-full w-0 bg-green-500 group-hover:border-transparent group-hover:w-full transition-all duration-[500ms] ease-in-out"
              style={{
                transitionProperty: "width",
              }}
            ></div>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full flex justify-end items-start">
        <div className="relative w-[100%] md:w-[65%] h-[90%] mt-0">
          <div className="absolute top-0 right-0 w-full h-full bg-green-400 md:rounded-b-[30%] rounded-t-none"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/photos/header.webp"
              alt="Peace Lily Plant"
              width={800}
              height={800}
              className="object-contain p-4 z-10 md:w-[100%] w-[80%]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
