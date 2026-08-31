import styles from "../../src/app/page.module.css";

const items = [
  [
    "🇰🇭",
    "Authentic Khmer food",
    "We keep the focus on Cambodian dishes and the flavors that make them unique.",
  ],
  [
    "🌿",
    "Know your ingredients",
    "See ingredients, nutrition and preparation time so you know what is on your plate.",
  ],
  [
    "✨",
    "Discover something new",
    "Browse beautiful food cards and open any dish for a deeper look.",
  ],
];

export default function WhyFoodie() {
  return (
    <section
      className={`${styles.section} ${styles.why}`}
      id="how-it-works"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>
              Why Nham Khmer?
            </p>

            <h2 className={styles.heading}>
              Food is more than a meal.
            </h2>

            <p className={styles.subheading}>
              It is culture, memory and a story
              worth sharing.
            </p>
          </div>
        </div>

        <div className={styles.whyGrid}>
          {items.map(
            ([icon, title, text]) => (
              <article
                className={styles.whyCard}
                key={title}
              >
                <div
                  className={styles.whyIcon}
                >
                  {icon}
                </div>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}