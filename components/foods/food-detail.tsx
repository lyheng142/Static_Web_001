import Link from "next/link";
import type { Food } from "@/types/food";

export default function FoodDetail({
  food,
}: {
  food: Food;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "minmax(0,1fr) minmax(0,1fr)",
        gap: 42,
        alignItems: "center",
      }}
    >
      <img
        src={
          food.image_url ||
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85"
        }
        alt={food.name}
        style={{
          width: "100%",
          aspectRatio: "1/1",
          objectFit: "cover",
          borderRadius: 28,
          boxShadow:
            "0 25px 60px rgba(70,55,24,.12)",
        }}
      />

      <div>
        <p
          style={{
            color: "#f97316",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            fontSize: 13,
          }}
        >
          {food.cuisine || "ម្ហូបខ្មែរ"}
        </p>

        <h1
          style={{
            fontSize: "clamp(40px,5vw,64px)",
            lineHeight: 1,
            letterSpacing: "-.05em",
            margin: "12px 0 18px",
          }}
        >
          {food.name}
        </h1>

        <p
          style={{
            color: "#6b7280",
            lineHeight: 1.8,
            fontSize: 17,
          }}
        >
          {food.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            margin: "22px 0",
          }}
        >
          {food.preparation_time_minutes && (
            <span
              style={{
                padding: "9px 13px",
                background: "#fff",
                border:
                  "1px solid #eee6dc",
                borderRadius: 99,
              }}
            >
              ⏱ {food.preparation_time_minutes} min
            </span>
          )}

          {food.calories && (
            <span
              style={{
                padding: "9px 13px",
                background: "#fff",
                border:
                  "1px solid #eee6dc",
                borderRadius: 99,
              }}
            >
              🔥 {food.calories} kcal
            </span>
          )}
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#f97316",
            fontWeight: 900,
            marginBottom: 24,
          }}
        >
          ${food.price.toFixed(2)}
        </div>

        <h2
          style={{
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          Ingredients
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 28,
          }}
        >
          {(food.ingredients ?? []).map(
            (item) => (
              <span
                key={item}
                style={{
                  padding: "8px 12px",
                  borderRadius: 99,
                  background: "#fff0df",
                  color: "#7c2d12",
                  fontSize: 13,
                }}
              >
                {item}
              </span>
            ),
          )}
        </div>

        <Link
          href="/foods"
          style={{
            display: "inline-flex",
            padding: "13px 20px",
            background: "#f97316",
            color: "#fff",
            borderRadius: 11,
            fontWeight: 800,
          }}
        >
          ← Back to Khmer Foods
        </Link>
      </div>
    </div>
  );
}