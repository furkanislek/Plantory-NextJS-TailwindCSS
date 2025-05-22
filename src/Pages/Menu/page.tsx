"use client";
import React, { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="bg-white px-6 py-4 md:px-10 md:pt-6 lg:px-[12vw] lg:pt-8 max-h-fit
    "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center z-10">
          <span className="text-3xl font-semibold">
            <span className="text-green-500">Plantory</span>
            <span className="text-gray-800"> Co.</span>
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          <p className="cursor-pointer hover:text-green-500 transition-colors duration-300">
            Home
          </p>
          <p className="cursor-pointer hover:text-green-500 transition-colors duration-300">
            Shop
          </p>
          <p className="cursor-pointer hover:text-green-500 transition-colors duration-300">
            About
          </p>
          <p className="cursor-pointer hover:text-green-500 transition-colors duration-300">
            Plant Care
          </p>
          <p className="cursor-pointer hover:text-green-500 transition-colors duration-300">
            Contact
          </p>
        </div>

        <div className="hidden md:flex items-center space-x-4 z-10">
          <div className="cursor-pointer hover:text-green-500 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="cursor-pointer hover:text-green-500 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center space-x-4 z-10">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          {/* Hamburger Menü Butonu */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </div>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      <div
        className={`fixed inset-0 bg-white z-0 flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-xl">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Shop</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Plant Care</p>
          <p className="cursor-pointer">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
