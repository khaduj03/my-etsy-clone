"use client";

import Image from "next/image";
import {
  BiAlarm,
  BiHeart,
  BiHelpCircle,
  BiSearch,
  BiShoppingBag,
  BiUser,
} from "react-icons/bi";
import { FaGifts } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white grid grid-cols-12 shadow-md px-8 py-2 items-center">
      {/* Left: Logo + Categories */}
      <div className="col-span-2 flex items-center justify-between pr-6">
        <Logo />
        <div className="flex items-center space-x-2 cursor-pointer">
          <IoMdMenu size={20} />
          <span className="text-xs font-bold select-none">Categories</span>
        </div>
      </div>

      {/* Center: Search bar */}
      <div className="col-span-7 flex justify-center">
        <form
          className="relative w-full mr-10"
          role="search"
          aria-label="Site search"
        >
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Search for anything"
            className="pr-12 rounded-full border-2 border-gray-800 focus:border-amber-500 transition duration-300 ease-in-out py-5 pl-6"
          />
          <Button
            type="submit"
            aria-label="Search"
            variant="ghost"
            className="absolute right-0.5 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-300 rounded-full w-10 h-10 flex justify-center items-center text-white shadow-md hover:rounded-r-full hover:rounded-l-none transition duration-300 ease-in-out"
          >
            <BiSearch size={30} />
          </Button>
        </form>
      </div>

      {/* Right: Icons */}
      <div className="col-span-3 flex items-center justify-end space-x-4">
        {[BiHeart, FaGifts, BiAlarm, BiHelpCircle, BiUser, BiShoppingBag].map(
          (Icon, i) => (
            <Button
              key={i}
              variant="ghost"
              size="icon"
              aria-label={Icon.name.replace("Bi", "").replace("Fa", "")}
              className="text-gray-600  hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <Icon size={40} />
            </Button>
          )
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Image
      src="/etsy-logo-svgrepo-com.svg"
      width={65}
      height={65}
      alt="logo"
      className="object-contain"
      priority
    />
  );
}
