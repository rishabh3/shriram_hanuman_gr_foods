import Image from "next/image";
import { JSX } from "react";
import { getImagePath } from "../utils/util";

type Category = {
  name: string;
  image: string;
};

const categories: Category[] = [
  { name: "Atta", image: "/categories/atta.jpg" },
  { name: "Besan", image: "/categories/besanpowder.jpg" },
  { name: "Sattu", image: "/categories/sattu.jpg" },
  { name: "Spices", image: "/categories/spices.jpg" },
  { name: "Namkeen", image: "/categories/namkeen.jpg" },
  { name: "Oils", image: "/categories/oils.jpg" },
];

export default function Categories(): JSX.Element {
  return (
    <section id="categories" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D]">
          Our Product Categories
        </h2>

        <p className="text-center text-gray-600 mt-3">
          High-quality essentials for every household
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-70">
                <Image
                  src={getImagePath(item.image)}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Name */}
              <div className="p-4 text-center bg-[#FAEDCD]">
                <h3 className="text-lg font-semibold text-[#6B705C]">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}