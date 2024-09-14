import React, { useState } from "react";
import SAH from "../assets/Sahayog-full.png";
import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-indigo-900 h-16 sm:h-20 md:h-24 lg:h-24 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
      <header className="text-white body-font w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white"
            aria-label="Home"
          >
            <img
              src={SAH}
              alt="logo"
              className="w-32 sm:w-40 md:w-44 lg:w-56"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle Navigation"
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex md:flex-wrap md:gap-6 items-center text-sm sm:text-md md:text-lg lg:text-xl">
            <Link
              to="/"
              className="hover:font-bold text-white"
              aria-label="Home"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="hover:font-bold text-white"
              aria-label="Dashboard"
            >
              Dashboard
            </Link>
            <div className="items-center p-2 gap-2 ">
              <IoMdNotifications
                size={26}
                className="text-[#fff] text-sm sm:text-md md:text-lg lg:text-xl"
              />
            </div>
            <Link
              className="group relative inline-flex items-center overflow-hidden rounded-3xl bg-green-400 px-4 py-2 sm:px-6 sm:py-2 text-white hover:text-gray-800 focus:outline-none focus:ring hover:bg-green-300"
              to="/login"
              aria-label="Login"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="text-sm sm:text-lg rounded-full font-medium transition-all group-hover:me-4">
                Login
              </div>
            </Link>
            <Link
              className="group relative inline-flex items-center overflow-hidden rounded-3xl bg-blue-400 px-4 py-2 sm:px-6 sm:py-2 text-white hover:text-gray-800 focus:outline-none focus:ring hover:bg-blue-300"
              to="/signup"
              aria-label="Signup"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="w-5 h-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="text-sm sm:text-lg rounded-full font-medium transition-all group-hover:me-4">
                Signup
              </div>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 z-50 bg-[#ca4e00] transition-transform transform ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-4 py-4 px-6">
              <button
                className="self-end text-white text-2xl"
                onClick={toggleMobileMenu}
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-white text-xl"
                  aria-label="Home"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="text-white text-xl"
                  aria-label="Dashboard"
                  onClick={toggleMobileMenu}
                >
                  Dashboard
                </Link>
                <div>
                  <p className="text-white text-xl">Notification</p>
                </div>
                <div className="flex flex-col items-center w-full gap-4 px-6 py-4">
                  <Link
                    className="py-2 px-6 rounded-3xl bg-green-400 text-white hover:bg-green-300 w-full max-w-xs text-center transition-colors duration-300 ease-in-out sm:px-8 sm:py-3"
                    to="/login"
                    aria-label="Login"
                    onClick={toggleMobileMenu}
                  >
                    Login
                  </Link>
                  <Link
                    className="py-2 px-6 rounded-3xl bg-blue-400 text-white hover:bg-blue-300 w-full max-w-xs text-center transition-colors duration-300 ease-in-out sm:px-8 sm:py-3"
                    to="/signup"
                    aria-label="Signup"
                    onClick={toggleMobileMenu}
                  >
                    Signup
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
