import Image from "next/image";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedProducts from "./components/FeaturedProducts";
import Contact from "./components/Contact";

export default function Home() {
  return (
   <main>
      <Hero />
      <Categories />
      <WhyChooseUs />
      <FeaturedProducts />
      <Contact />
    </main>
  );
}
