import type { Food } from "@/types/food";
import FoodCard from "./food-card";

export default function FoodGrid({
  foods,
}: {
  foods: Food[];
}) {
  if (!foods.length) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: "center",
          background: "#fff",
          borderRadius: 20,
        }}
      >
        No Khmer foods found right now.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill,minmax(240px,1fr))",
        gap: 20,
      }}
    >
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
        />
      ))}
    </div>
  );
}