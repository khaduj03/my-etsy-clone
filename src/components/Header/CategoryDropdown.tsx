import { IoMdMenu } from "react-icons/io";
import { categories } from "@/lib/header/data";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function CategoryDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 text-xs font-medium cursor-pointer">
        <IoMdMenu size={20} />
        <span>Categories</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white rounded-md shadow-lg w-64 h-[30rem] overflow-y-auto p-2"
          sideOffset={5}
        >
          {categories.map((cat) => (
            <DropdownMenu.Item
              key={cat.slug}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Link href={`/categories/${cat.slug}`}>
                <span>{cat.name}</span>
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}