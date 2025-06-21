import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { Input } from './ui/input';

export default function Search() {
  return (
    <>

        <form
          role="search"
          aria-label="Site search"
          className="relative w-full"
        >
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
    </>
  );
}
