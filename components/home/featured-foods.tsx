import Link from "next/link";
import type { Food } from "@/types/food";
import styles from "../../src/app/page.module.css";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85";

function FoodCard({ food }: { food: Food }) {
  return (
    <article className={styles.foodCard}>
      <Link href={`/foods/${food.id}`}>
        <div className={styles.foodImageWrap}>
          <img
            className={styles.foodImage}
            src={food.image_url || FALLBACK_IMAGE}
            alt={food.name}
          />

          <span className={styles.heart}>
            ♡
          </span>
        </div>

        <div className={styles.foodBody}>
          <h3 className={styles.foodTitle}>
            {food.name}
          </h3>

          <p
            className={styles.foodDescription}
          >
            {food.description ||
              "A delicious Cambodian favorite."}
          </p>

          <div className={styles.foodMeta}>
            <span className={styles.rating}>
              ★{" "}
              {food.average_rating?.toFixed(1) ??
                "New"}
            </span>

            <span className={styles.price}>
              ${food.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function FeaturedFoods({
  foods,
}: {
  foods: Food[];
}) {
  const featured = foods
    .filter(
      (food) => food.available !== false,
    )
    .slice(0, 4);

  return (
    <section
      className={styles.section}
      id="popular"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>
              From the kitchen
            </p>

            <h2 className={styles.heading}>
              Popular Khmer dishes
            </h2>

            <p className={styles.subheading}>
              Real dishes from our food API, ready
              to explore.
            </p>
          </div>

          <Link
            href="/foods"
            className={styles.viewAll}
          >
            View all →
          </Link>
        </div>

        {featured.length > 0 ? (
          <div className={styles.foodGrid}>
            {featured.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
              />
            ))}
          </div>
        ) : (
          <div className={styles.promo}>
            <div>
              <p className={styles.kicker}>
                Khmer cuisine
              </p>

              <h3>
                We’re preparing the dishes for you.
              </h3>

              <p>
                Open Khmer Foods to browse the
                complete collection.
              </p>

              <Link
                href="/foods"
                className={styles.button}
              >
                Explore Food →
              </Link>
            </div>
          </div>
        )}

        <div className={styles.promo}>
          <div>
            <p className={styles.kicker}>
              Made for food lovers
            </p>

            <h3>
              Traditional flavors, beautifully
              presented.
            </h3>

            <p>
              Learn what is in each dish, how long
              it takes to prepare and the story
              behind the food.
            </p>

            <Link
              href="/foods"
              className={styles.button}
            >
              Explore Khmer Food →
            </Link>
          </div>

          <img
            className={styles.promoArt}
            src={
              featured[0]?.image_url ||
              FALLBACK_IMAGE
            }
            alt="Khmer food"
          />
        </div>
      </div>
    </section>
  );
}