import React from "react";
import SAH from "../assets/Sahayog.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#f05b11] h-24 flex items-center">
      <header className="text-white body-font w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white"
            aria-label="Home"
          >
            <img src={SAH} alt="logo" className="w-48 h-16" />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 items-center text-md font-semibold lg:text-xl">
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
            <Link
              to="/management"
              className="hover:font-bold text-white"
              aria-label="Management"
            >
              Management
            </Link>
            <Link
              to="/profile"
              className="hover:font-bold text-white"
              aria-label="Profile"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="hover:font-bold text-white"
              aria-label="Settings"
            >
              Settings
            </Link>
          </nav>

          {/* Signup Button */}
          <Link
            className="group relative inline-flex items-center overflow-hidden rounded-3xl bg-blue-400 px-8 py-3 text-white hover:text-gray-800 focus:outline-none focus:ring hover:bg-blue-300 mt-4 md:mt-0"
            to="/login"
            aria-label="Signup"
          >
            gi
            hgghtxhf<span className="absolute -end-full transition-all group-hover:end-4">
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
            <div className="text-sm rounded-full font-medium transition-all  group-hover:me-4">
              Signup
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}
