import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function FavoriteCard({
  image,
  alt,
  price,
}: {
  image: string;
  alt: string;
  price: string;
}) {
  return (
    <div className="relative w-[11.5rem] h-36 rounded-2xl overflow-hidden shadow-md group cursor-pointer">
      {/* Product Image */}
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="100%"
      />

      {/* Heart Icon - appears on hover */}
      <button className="absolute top-4 right-4 text-white bg-black/40 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/70">
        <FaHeart size={18} />
      </button>

      {/* Price Tag */}
      <div className="absolute bottom-4 left-4 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
        {price}
      </div>
    </div>
  );
}
