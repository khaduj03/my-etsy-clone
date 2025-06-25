import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function ProductCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
    return (
      <div className="relative w-56 h-56 rounded-lg overflow-hidden shadow-lg group">
        {/* Full Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100%"
        />

        {/* Gradient overlay for readability (optional) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Button at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <button className="bg-white text-black rounded-full px-5 py-2 font-medium relative overflow-hidden transition-all duration-300 group-hover:px-8 group-hover:pr-10">
            Shop
            {/* Sliding Arrow */}
            <FaArrowRight
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
              size={14}
            />
          </button>
        </div>
      </div>
    );
}
