const features = [
  {
    title: "Premium Quality",
    desc: "We use the finest raw materials to ensure superior product quality.",
    icon: "🌾",
  },
  {
    title: "Hygienic Processing",
    desc: "Manufactured in clean and safe environments with strict standards.",
    icon: "🏭",
  },
  {
    title: "Trusted by Customers",
    desc: "Serving thousands of happy households with consistent quality.",
    icon: "🤝",
  },
  {
    title: "Affordable Pricing",
    desc: "High-quality products at competitive and fair prices.",
    icon: "💰",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-[#FAEDCD] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D2D2D]">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Delivering trust, quality, and value in every product
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-[#6B705C]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}