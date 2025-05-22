import React from "react";
import Features from "../../components/About/Features";
import Menu from "../Menu/page";

const AboutPage = () => {
  return (
    <>
    
      <div className="w-full bg-white px-6 pt-16 pb-8 md:px-10 lg:px-[12vw]">
        <div className="flex flex-col items-start justify-start min-w-[100%] mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 min-w-[80%] text-center md:text-left">
            <span className="text-gray-800">Why Plant Lovers Trust </span>
            <br className="hidden md:block" />
            <span className="text-green-500">Plantory</span>
            <span className="text-gray-800"> Co.</span>
          </h1>
          <div className="text-gray-600 text-justify md:text-left text-lg md:text-xl">
            <span>
              At Plantory Co., we don't just sell plants — we deliver happiness,
              <br className="hidden md:block" />
              <span> sustainability, and a greener lifestyle.</span>
            </span>
          </div>
        </div>

        <Features />
      </div>
    </>
  );
};

export default AboutPage;
