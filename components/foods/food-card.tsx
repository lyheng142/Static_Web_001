import Link from "next/link";
import type { Food } from "@/types/food";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85";

export default function FoodCard({
  food,
}: {
  food: Food;
}) {
  return (
    <Link
      href={`/foods/${food.id}`}
      style={{
        display: "block",
        background: "#fff",
        border: "1px solid #eee6dc",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow:
          "0 7px 24px rgba(70,48,28,.06)",
      }}
    >
      <img
        src={food.image_url || FALLBACK_IMAGE}
        alt={food.name}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
        }}
      />

      <div style={{ padding: 18 }}>
        <h2
          style={{
            fontSize: 19,
            marginBottom: 7,
          }}
        >
          {food.name}
        </h2>

        <p
          style={{
            color: "#6b7280",
            fontSize: 14,
            lineHeight: 1.55,
            minHeight: 44,
          }}
        >
          {food.description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 14,
          }}
        >
          <b style={{ color: "#a16207" }}>
            ★{" "}
            {food.average_rating?.toFixed(1) ??
              "New"}
          </b>

          <b style={{ color: "#f97316" }}>
            ${food.price.toFixed(2)}
          </b>
        </div>
      </div>
    </Link>
  );
}