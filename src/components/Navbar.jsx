import SAH from "../assets/Sahayog-full.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#008080] h-16 sm:h-20 md:h-24 lg:h-24 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
      <header className="text-white body-font w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex font-medium items-center text-white"
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
              to="/login"
              className="group relative inline-flex items-center overflow-hidden rounded-3xl bg-[#26004d] px-4 py-2 sm:px-6 sm:py-2 text-white focus:outline-none focus:ring hover:bg-[#5900b3]"
              aria-label="Login"
            >
              <span className="text-sm sm:text-lg rounded-full font-medium transition-all group-hover:me-4">
                Login
              </span>
            </Link>
            <Link
              to="/signup"
              className="group relative inline-flex items-center overflow-hidden rounded-3xl bg-[#26004d] px-4 py-2 sm:px-6 sm:py-2 text-white focus:outline-none focus:ring hover:bg-[#5900b3]"
              aria-label="Signup"
            >
              <span className="text-sm sm:text-lg rounded-full font-medium transition-all group-hover:me-4">
                Signup
              </span>
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
                  className="hover:font-bold text-white"
                  aria-label="Home"
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="group relative inline-flex items-center overflow-hidden rounded-3xl bg-[#26004d] px-4 py-2 sm:px-6 sm:py-2 text-white focus:outline-none focus:ring hover:bg-[#5900b3]"
                  aria-label="Login"
                >
                  <span className="text-sm sm:text-lg rounded-full font-medium transition-all group-hover:me-4">
                    Login
                  </span>
                </Link>
                <Link
                  to="/signup"
                  className="group relative inline-flex items-center overflow-hidden rounded-3xl bg-[#26004d] px-4 py-2 sm:px-6 sm:py-2 text-white focus:outline-none focus:ring hover:bg-[#5900b3]"
                  aria-label="Signup"
                >
                  <span className="text-sm sm:text-lg rounded-full font-medium transition-all group-hover:me-4">
                    Signup
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
