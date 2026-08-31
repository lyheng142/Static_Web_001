import FoodGrid from "@/components/foods/food-grid";
import { getFoods } from "@/lib/api";

export default async function FoodsPage() {
  const foods = await getFoods(100);

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
        <p
          style={{
            color: "#f97316",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            fontSize: 13,
          }}
        >
          The collection
        </p>

        <h1
          style={{
            fontSize:
              "clamp(42px,6vw,70px)",
            letterSpacing: "-.05em",
            margin: "10px 0 14px",
          }}
        >
          Khmer Foods
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 650,
            marginBottom: 36,
          }}
        >
          Explore Cambodian dishes from the API.
          Open any food to see ingredients,
          nutrition and preparation time.
        </p>

        <FoodGrid foods={foods} />
      </main>

    </>
  );
}