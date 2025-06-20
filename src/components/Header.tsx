"use client";

import Image from "next/image";
import {BiHeart,BiHelpCircle,BiSearch,BiShoppingBag,BiUser} from "react-icons/bi";
import { FaGifts } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useState } from "react";
const categories = [
  { name: "Accessories", slug: "accessories" },
  { name: "Art & Collectibles", slug: "art-and-collectibles" },
  { name: "Baby", slug: "baby" },
  { name: "Bags & Purses", slug: "bags-and-purses" },
  { name: "Bath & Beauty", slug: "bath-and-beauty" },
  { name: "Books, Movies & Music", slug: "books-movies-and-music" },
  { name: "Clothing", slug: "clothing" },
  { name: "Craft Supplies & Tools", slug: "craft-supplies-and-tools" },
  { name: "Electronics & Accessories", slug: "electronics-and-accessories" },
  { name: "Gifts", slug: "gifts" },
  { name: "Home & Living", slug: "home-and-living" },
  { name: "Jewelry", slug: "jewelry" },
  { name: "Paper & Party Supplies", slug: "paper-and-party-supplies" },
  { name: "Pet Supplies", slug: "pet-supplies" },
  { name: "Shoes", slug: "shoes" },
  { name: "Toys & Games", slug: "toys-and-games" },
  { name: "Weddings", slug: "weddings" },
];

const icons = [BiHeart, FaGifts, FiBell, BiHelpCircle, BiUser, BiShoppingBag];
const labels = ["Wishlist","Gifts","Notifications","Help","Profile","Cart",];
const links = ["/favorites", "/gift-mode", null, null, null, "/cart"];

export default function Header() {
  return (
    <header className="bg-white grid grid-cols-12 shadow-md px-8 py-2 items-center">
      {/* Left: Logo + Categories */}
      <div className="col-span-2 flex items-center justify-between pr-3">
        <Link href="/">
          <Logo />
        </Link>
        <CategoryDropdown />
      </div>

      {/* Center: Search bar */}
      <div className="col-span-7 flex justify-center">
        <form role="search" aria-label="Site search"
          className="relative w-full mr-10">
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Search for anything"
            className="pr-12 rounded-full border-2 border-gray-800 focus:border-amber-500 transition duration-300 ease-in-out py-5 pl-6"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-0.5 top-1/3 -translate-y-1/3 bg-orange-500 hover:bg-orange-300 rounded-full w-9 h-9 m-0.5 flex justify-center items-center text-white shadow-md hover:rounded-r-full hover:rounded-l-none transition duration-300 ease-in-out"
          >
            <BiSearch size={26} />
          </button>
        </form>
      </div>

      {/* Right: Icons */}
      <div className="col-span-3 flex items-center justify-between">
        <IconBar />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Image
      src="/etsy-logo-svgrepo-com.svg"
      width={70}
      height={70}
      alt="logo"
      className="object-contain"
      priority
    />
  );
}
function CategoryDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="flex hover:bg-gray-100 p-3 rounded-full items-center space-x-2 cursor-pointer select-none transition-colors duration-300 spin-out"
        aria-label="Categories"
      >
        <IoMdMenu size={20} />
        <span className="text-xs font-medium">Categories</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white rounded-md shadow-lg w-64 h-[30rem] overflow-y-auto p-2"
          sideOffset={5}
        >
          {categories.map((cat) => (
            <DropdownMenu.Item
              key={cat.slug}
              className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <Link href={`/categories/${cat.slug}`}>
                <span className="block w-full">{cat.name}</span>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
function IconBar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="col-span-3 flex items-center justify-between space-x-4 relative">
      {icons.map((Icon, i) =>
        links[i] === null ? (
          // Dropdown Icons
          <div key={i} className="relative">
            <button
              onClick={() => handleDropdown(i)}
              aria-label="menu bar"
              className="hover:text-gray-900 text-black focus:outline-none flex items-center space-x-1"
            >
              <Icon size={26} />
              <IoMdArrowDropdown />
            </button>
            {openIndex === i && (
              <div className="absolute top-10 right-0 bg-white shadow-lg p-4 rounded-md w-40 z-50 animate-fade-in">
                <p className="text-sm text-gray-700">
                  Dropdown content {labels[i]}
                </p>
              </div>
            )}
          </div>
        ) : (
          // Redirecting Icons
          <Link key={i} href={links[i] || "#"}>
            <button
              aria-label={labels[i]}
              className="hover:text-gray-900 text-black focus:outline-none flex items-center space-x-1"
            >
              <Icon size={26} />
            </button>
          </Link>
        )
      )}
    </div>
  );
}
