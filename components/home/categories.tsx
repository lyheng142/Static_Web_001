import Link from "next/link";
import styles from "../../src/app/page.module.css";

const categories = [
  ["🍲", "Main Dishes", "food"],
  ["🍜", "Noodles", "noodles"],
  ["🥣", "Soups", "soup"],
  ["🍚", "Rice", "rice"],
  ["🥗", "Salads", "salad"],
  ["🍢", "Street Food", "street"],
  ["🍰", "Desserts", "dessert"],
  ["🧋", "Drinks", "drink"],
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>
              Explore
            </p>

            <h2 className={styles.heading}>
              Khmer food categories
            </h2>

            <p className={styles.subheading}>
              Start with a category and find your
              next favorite dish.
            </p>
          </div>
        </div>

        <div className={styles.categories}>
          {categories.map(
            ([icon, name, value]) => (
              <Link
                key={name}
                href={`/foods?category=${value}`}
                className={styles.category}
              >
                <div
                  className={styles.categoryIcon}
                >
                  {icon}
                </div>

                <div
                  className={styles.categoryName}
                >
                  {name}
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}