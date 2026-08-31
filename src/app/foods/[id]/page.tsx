import { notFound } from "next/navigation";

import FoodDetail from "@/components/foods/food-detail";

import { getFood } from "@/lib/api";

export default async function FoodPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const food = await getFood(id);

  if (!food) {
    notFound();
  }

  return (
    <>

      <main
        style={{
          width:
            "min(1180px,calc(100% - 40px))",
          margin: "0 auto",
          padding: "70px 0 90px",
        }}
      >
        <FoodDetail food={food} />
      </main>

    </>
  );
}