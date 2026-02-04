import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Aset/1.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Poeage Logo"
            className="h-11 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-12 text-gray-700 text-sm font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Solutions", path: "/solutions" },
            { name: "Insights", path: "/insights" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group"
            >
              <span className="group-hover:text-blue-800 transition">
                {item.name}
              </span>
              <span className="absolute left-1/2 -bottom-2 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-600 hover:text-blue-800 transition"
          >
            Talk to Sales
          </Link>

          <Link
            to="/contact"
            className="bg-blue-800 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-900 transition shadow-sm"
          >
            Get Proposal
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-6 space-y-5 text-gray-800 text-sm font-medium">
            {[
              "Home",
              "Services",
              "Solutions",
              "Insights",
              "About",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                onClick={() => setOpen(false)}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-blue-800 transition"
              >
                {item}
              </Link>
            ))}

            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className="bg-blue-800 text-white text-center py-2 rounded-md font-semibold hover:bg-blue-900 transition"
            >
              Get Proposal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
