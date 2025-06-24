import { headerLinks } from "@/lib/header/data";
import { AnimatedButton } from "../Animations/AnimatedButton";
import Link from "next/link";
import { FiGift } from "react-icons/fi";

export default function HeaderNavLinks() {
  return (
    <ul className="flex justify-center text-sm font-semibold text-gray-800 space-x-8">
      {headerLinks.map((nav) => (
        <li key={nav.name}>
          <Link href={nav.link}>
            <AnimatedButton>
              <span className="flex flex-row gap-1">
                {nav.name === "Gifts" && <FiGift size={16} />}
                {nav.name}
              </span>
            </AnimatedButton>
          </Link>
        </li>
      ))}
    </ul>
  );
}
