import Hero from "@/components/home/hero";
import Categories from "@/components/home/categories";
import FeaturedFoods from "@/components/home/featured-foods";
import WhyFoodie from "@/components/home/why-foodie";
import { getFoods } from "@/lib/api";

export default async function Home() {
  const foods = await getFoods(100);

  return (
    <>
      <Hero />
      <Categories />
      <FeaturedFoods foods={foods} />
      <WhyFoodie />
    </>
  );
}