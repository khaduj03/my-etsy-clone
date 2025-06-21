import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div className="grid grid-cols-5 w-full gap-4 p-4">
      {/* Top Section */}
      <section className="col-span-3 bg-red-100 rounded-2xl shadow-md overflow-hidden flex flex-row md:flex-row items-center justify-between p-6">
        {/* Text content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Just Made For You!
          </h2>
          <p className="text-gray-600">
            Custom pieces you won't find elsewhere
          </p>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Personalize Now
          </button>
        </div>

        {/* Image */}
        <div className="mt-4 md:mt-0 md:ml-8">
          <img
            src="https://i.etsystatic.com/ij/01cfb3/6879478275/ij_fullxfull.6879478275_c9pfl6yr.jpg?version=0"
            alt="Custom product"
            className="rounded-xl object-cover shadow w-80 h-80"
          />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="col-span-2 bg-blue-100 rounded-2xl shadow-md p-6 text-center text-lg font-medium text-gray-700">
        This is another card
      </section>
    </div>
  );
}
