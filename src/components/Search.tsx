"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "./ui/input";

export default function Search() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <form
        role="search"
        aria-label="Site search"
        className="relative w-full max-w-2xl mx-auto"
      >
        {/* Input field */}
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search for anything"
          className="pr-14 rounded-full border-2 border-gray-800 focus:border-amber-500 transition duration-300 ease-in-out py-[1.35rem] pl-6"
        />

        {/* Animated search button */}
        <button
          type="submit"
          aria-label="Search"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`absolute top-1/2  -translate-y-1/2
          flex items-center justify-center
           text-white
          transition-all right-0.5 duration-500 ease-in-out
          ${
            hovered
              ? "w-12 h-[42px] border-amber-500/50  bg-amber-500/50 rounded-r-full rounded-l-none"
              : "w-11 h-10.5 border-white border-2 bg-orange-500 rounded-full"
          }`}
        >
          <BiSearch size={24} />
        </button>
      </form>
    </>
  );
}
