import Image from "next/image";

const products = [
  {
    name: "Shudh Chakki Atta",
    size: "1kg / 5kg",
    image: "/categories/atta.jpg",
  },
  {
    name: "Premium Besan",
    size: "500g / 1kg",
    image: "/categories/besanpowder.jpg",
  },
  {
    name: "Roasted Sattu",
    size: "500g / 1kg",
    image: "/categories/sattu.jpg",
  },
  {
    name: "Pure Mustard Oil",
    size: "1L / 5L",
    image: "/categories/oils.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D]">
          Featured Products
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Our most popular and trusted products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-[#FAEDCD] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-40">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#6B705C]">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pack: {item.size}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-10">
          <button className="bg-[#D4A373] text-white px-6 py-3 rounded-xl hover:bg-[#b08968] transition">
            View All Products
          </button>
        </div> */}
      </div>
    </section>
  );
}