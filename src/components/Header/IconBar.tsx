import { BiHeart, BiHelpCircle } from "react-icons/bi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode, useState } from "react";

interface DropdownIconProps {
  children: ReactNode;
  label: string;
  icon: ReactNode;
}

import SingnIn from "./SingnIn";
import { AnimatedButton } from "../Animations/AnimatedButton";
import Link from "next/link";

export default function IconBar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="flex items-center gap-1">
      {/* 1. Wishlist */}
      {!isAuthenticated && (
        <SingnIn isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      )}
      <IconLink
        href="/favorites"
        icon={<BiHeart size={24} />}
        label="Wishlist"
      />
      <IconLink href="/gifts" icon={<FiGift size={24} />} label="Gifts" />

      {/* 2. Notifications */}
      {isAuthenticated && (
        <DropdownIcon label="Notifications" icon={<FiBell size={24} />}>
          <div className="flex flex-col shadow-md rounded-lg shadow-black  max-w-xs bg-white">
            <h1 className="text-center font-semibold py-4 text-lg">Deals</h1>
            <div className="bg-gray-200 p-3 w-full ">
              <p>Your first update!</p>
              <p>
                {
                  "Look here for updates on items and shops you've favorited – sales, new products, and more"
                }
                .
              </p>
            </div>
          </div>
        </DropdownIcon>
      )}

      {/* 3. Help */}
      {isAuthenticated && (
        <DropdownIcon label="Help" icon={<BiHelpCircle size={24} />}>
          hey
        </DropdownIcon>
      )}

      {/* 4. Account */}
      {isAuthenticated && (
        <DropdownIcon label="Account" icon={<MdAccountCircle size={24} />}>
          hey
        </DropdownIcon>
      )}

      {/* 5. Cart */}
      <IconLink
        href="/cart"
        icon={<PiShoppingCartSimpleBold size={24} />}
        label="Cart"
      />
    </div>
  );
}

function IconLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="hover:text-gray-900 text-black focus:outline-none">
        <AnimatedButton hoverColor="bg-blue-100">
          <Link href={href}>{icon}</Link>
        </AnimatedButton>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export function DropdownIcon({ children, label, icon }: DropdownIconProps) {
  return (
    <Tooltip>
      <DropdownMenu.Root>
        <TooltipTrigger asChild>
          <DropdownMenu.Trigger asChild>
            <AnimatedButton hoverColor="bg-blue-100" aria-label={label}>
              <div className="flex items-center text-black">
                {icon}
                <IoMdArrowDropdown size={20} />
              </div>
            </AnimatedButton>
          </DropdownMenu.Trigger>
        </TooltipTrigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>{children}</DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
