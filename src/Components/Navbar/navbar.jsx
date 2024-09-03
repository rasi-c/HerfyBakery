import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 w-full fixed transition-transform duration-300 ease-in-out ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Navbar */}
      <div className="flex justify-between max-w-[1270px] lg:min-w-[1024px]">
        <div className="max-w-[130px]">
          <a href="/">
            <img src="assets/logo/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="hidden lg:flex items-center justify-center float-right mr-[40px]">
          <ul className="flex gap-10 font-bold text-xl">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden flex items-center mr-[30px]">
          <IconMenu2
            className="w-[33px] h-[33px] cursor-pointer"
            onClick={toggleMenu}
            aria-label="Open menu"
            role="button"
            aria-expanded={isOpen}
          />
        </div>
      </div>

      {/* Offcanvas */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-white z-50 transform translate-x-0 transition-transform duration-300 ease-in-out">
            <div className="p-4 relative">
              <button
                className="absolute top-4 right-4 text-black"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <IconX />
              </button>
              <nav className="mt-10">
                <a href="#home" className="block py-2 px-4 hover:bg-gray-200">
                  Home
                </a>
                <a href="#products" className="block py-2 px-4 hover:bg-gray-200">
                  Products
                </a>
                <a href="#about-us" className="block py-2 px-4 hover:bg-gray-200">
                  About Us
                </a>
                <a href="#blog" className="block py-2 px-4 hover:bg-gray-200">
                  Blog
                </a>
                <a href="#contact-us" className="block py-2 px-4 hover:bg-gray-200">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
