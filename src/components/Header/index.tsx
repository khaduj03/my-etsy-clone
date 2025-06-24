"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../Animations/AnimatedButton";
import CategoryDropdown from "./CategoryDropdown";
import Search from "../Search";
import IconBar from "./IconBar";
import HeaderNavLinks from "./HeaderNavLinks";


export default function Header() {
  return (
    <header className="bg-white border-b-2 broder-gray-400 px-5 pb-1">
      <div className="flex justify-between items-center px-6 flex-wrap gap-2">
        {/* Left: Logo & Categories */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Logo />
          </Link>
          <AnimatedButton>
            <CategoryDropdown />
          </AnimatedButton>
        </div>
        {/* Center: Search */}
        <div className="flex-1 flex justify-center min-w-[300px] max-w-[700px]">
          <Search />
        </div>
        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          <IconBar isAuthenticated={false} />
        </div>
      </div>
      {/* Navigation Links */}
      <HeaderNavLinks />
    </header>
  );
}


function Logo() {
  return (
    <Image
      src="/etsy-logo-svgrepo-com.svg"
      alt="Etsy Clone Logo"
      width={75}
      height={75}
      className="object-top"
      priority
    />
  );
}






