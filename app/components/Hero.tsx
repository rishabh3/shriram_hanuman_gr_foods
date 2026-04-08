"use client";

import Image from "next/image";
import { getImagePath, scrollToSection } from "../utils/util";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="bg-[#FAEDCD]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
            Pure & Quality <br />
            Food Products
            {/* शुद्ध एवं गुणवत्तापूर्ण <br /> खाद्य उत्पाद */}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            From Atta to Spices — delivering freshness and trust in every pack.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-[#D4A373] text-white px-6 py-3 rounded-xl hover:bg-[#b08968] transition" onClick={() => scrollToSection("products")}>
              View Products
            </button>

            <button className="border border-[#6B705C] text-[#6B705C] px-6 py-3 rounded-xl hover:bg-[#6B705C] hover:text-white transition" onClick={() => scrollToSection("contact")}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={getImagePath("masala.jpg")}
            alt="Masala"
            fill
            className="object-cover rounded-2xl shadow-lg brightness-90"
          />
        </div>
      </div>
    </section>
  );
}