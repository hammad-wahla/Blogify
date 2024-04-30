"use client";
import React, { useState } from "react";
import Links from "./Links/Links";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>

        <div className="hidden md:flex space-x-4">
          <Links />
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white border border-slate-700 rounded px-2 py-1 hover:bg-slate-900"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex border justify-center border-slate-800 mt-4 rounded p-4">
          <Links />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
