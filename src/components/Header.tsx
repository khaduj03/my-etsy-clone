"use client";

import Image from "next/image";
import {BiHeart,BiHelpCircle,BiSearch,BiShoppingBag,BiUser} from "react-icons/bi";
import { FaGifts } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useState } from "react";
import Search from "./Search";
import { AnimatedButton } from "./Animations/AnimatedButton";
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
const headerNavLinksItem = [
  { name: "Gifts", link: "/gifts-mode" },
  { name: "Seller Deals", link: "/sales-deals" },
  { name: "Home Favorites", link: "/home-favorites" },
  { name: "Fashion Finds", link: "/fashion-favorites" },
  { name: "Registry", link: "/registry" },
];



const icons = [BiHeart, FaGifts, FiBell, BiHelpCircle, BiUser, BiShoppingBag];
const labels = ["Wishlist","Gifts","Notifications","Help","Profile","Cart",];
const links = ["/favorites", "/gift-mode", null, null, null, "/cart"];

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-e-gray-600 pl-8 pb-2 items-center">
      <section className="flex justify-between items-center px-6  gap-1 flex-wrap">
        {/* Left: Logo + Categories */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Logo />
          </Link>
          <AnimatedButton>
            <CategoryDropdown />
          </AnimatedButton>
        </div>

        {/* Center: Search bar */}
        <div className="flex-1 flex justify-center min-w-[400px] max-w-[700px]">
          <Search />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center ">
          <IconBar />
        </div>
      </section>

      {/* Navigation links */}
      <section>
        <HeaderNavLinks />
      </section>
    </header>
  );
}

export function HeaderNavLinks() {
  return (
    <ul className="flex w-full justify-center text-sm font-semibold text-gray-700 items-center space-x-8">
      {headerNavLinksItem.map((navLink) => (
        <li key={`NavLink-${navLink.name}`}>
          <Link href={navLink.link}>
            <AnimatedButton>{navLink.name}</AnimatedButton>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Logo() {
  return (
    <Image
      src="/etsy-logo-svgrepo-com.svg"
      width={80}
      height={80}
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
        className="flex rounded-full items-center space-x-2 cursor-pointer select-none transition-colors duration-300 spin-out"
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
    <div className="flex items-cente relative">
      {icons.map((Icon, i) =>
        links[i] === null ? (
          // Dropdown Icons
          <div key={i} className="relative">
            <Tooltip>
              <AnimatedButton>
                <TooltipTrigger
                  onClick={() => handleDropdown(i)}
                  aria-label={labels[i]}
                  className="hover:text-gray-900 cursor-pointer text-black focus:outline-none flex items-center space-x-0.5"
                >
                  <Icon size={26} />
                  <IoMdArrowDropdown size={20} />
                </TooltipTrigger>
              </AnimatedButton>
              <TooltipContent>
                <p>{labels[i]}</p>
              </TooltipContent>
            </Tooltip>
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
            <Tooltip>
              <AnimatedButton>
                <TooltipTrigger
                  aria-label={labels[i]}
                  className="hover:text-gray-900 text-black focus:outline-none flex items-center space-x-1"
                >
                  <Icon size={26} />
                </TooltipTrigger>
              </AnimatedButton>
              <TooltipContent>
                <p>{labels[i]}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        )
      )}
    </div>
  );
}
