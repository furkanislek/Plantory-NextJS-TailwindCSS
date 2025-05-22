import React from "react";
import Image from "next/image";

const ReviewPage = () => {
  return (
    <div className="bg-[#F2F5FF] flex flex-col items-center px-6 md:px-10 lg:px-[12vw] py-16">
      <div className="flex flex-col md:flex-row justify-between w-full mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-slate-800">Our </span>
            <span className="text-green-500">Review</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Stories from the Green Side – Real Reviews from Plant Parents"
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white rounded-md px-8 py-3 font-medium transition-colors duration-300 w-full md:w-auto">
          View All Review
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full mt-6">
        <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-6 w-full shadow-md hover:shadow-xl transition-shadow duration-300 ">
          <div className="w-full md:w-1/3">
            <Image
              src={"/photos/woman.webp"}
              alt="Emily R."
              width={300}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col md:w-2/3">
            <h2 className="text-xl font-semibold">Emily R.</h2>
            <p className="text-gray-600 mb-2">Brooklyn, New York</p>
            <p className="text-gray-700 my-4">
              "My Fiddle Leaf Fig arrived looking like it came straight from a
              botanical garden. It was packed with care, and the instructions
              were so beginner-friendly. My living room feels alive!"
            </p>
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row gap-6 w-full shadow-md hover:shadow-xl transition-shadow duration-300 ">
          <div className="w-full md:w-1/3">
            <Image
              src={"/photos/man.webp"}
              alt="Liam T."
              width={300}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col md:w-2/3">
            <h2 className="text-xl font-semibold">Liam T.</h2>
            <p className="text-gray-600 mb-2">Toronto, Canada</p>
            <p className="text-gray-700 my-4">
              "I've ordered from several plant stores, but Plantory Co. is on
              another level. The Monstera was lush and healthy, and the
              eco-packaging impressed me. Shipping to Canada was fast and
              flawless."
            </p>
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
