import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

const values = [
  {
    number: "01",
    title: "Authentic Khmer Cuisine",
    text: "We put Cambodian food at the center of the experience, from everyday favorites to traditional dishes passed down through generations.",
    icon: "🇰🇭",
  },
  {
    number: "02",
    title: "Discover Every Detail",
    text: "Explore ingredients, preparation time, nutrition and other useful information that helps you understand what makes each dish special.",
    icon: "🌿",
  },
  {
    number: "03",
    title: "Food & Culture",
    text: "Khmer food is more than something we eat. It carries memories, traditions and stories that connect people with Cambodia.",
    icon: "❤️",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.eyebrow}>
                ABOUT KHMER TASTE
              </span>

              <h1>
                Discover the
                <span> heart of Cambodia</span>
                {" "}through food.
              </h1>

              <p className={styles.heroDescription}>
                KhmerTaste is a digital food discovery platform
                created to celebrate Cambodian cuisine and make
                Khmer food easier to discover, understand and
                appreciate.
              </p>

              <div className={styles.actions}>
                <Link
                  href="/foods"
                  className={styles.primaryButton}
                >
                  Explore Khmer Foods
                  <span>→</span>
                </Link>

                <a
                  href="#our-story"
                  className={styles.secondaryButton}
                >
                  Our Story
                  <span>↓</span>
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualCircle} />

              <div className={styles.imageFrame}>
                <Image
                  src="https://tse4.mm.bing.net/th/id/OIP.1SPxfwCYqcxSaLznELxA4wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Traditional Cambodian food"
                  fill
                  sizes="(max-width: 900px) 90vw, 520px"
                  className={styles.heroImage}
                  unoptimized
                />
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingIcon}>
                  🇰🇭
                </span>

                <div>
                  <strong>Made for Cambodia</strong>
                  <small>Inspired by Khmer cuisine</small>
                </div>
              </div>

              <div className={styles.smallBadge}>
                <span>✦</span>
                Khmer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        id="our-story"
        className={styles.story}
      >
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyLabel}>
              <span className={styles.sectionNumber}>
                01
              </span>

              <span>OUR STORY</span>
            </div>

            <div className={styles.storyContent}>
              <h2>
                Food brings people
                <span> together.</span>
              </h2>

              <p>
                Cambodia has a rich food culture shaped by
                generations of tradition. From the aroma of
                lemongrass and coconut milk to the familiar
                taste of a family meal, Khmer food is deeply
                connected to everyday life.
              </p>

              <p>
                KhmerTaste was created as a simple way to
                explore that culture through a modern digital
                experience. Instead of searching through
                scattered information, visitors can discover
                Cambodian dishes in one place.
              </p>

              <div className={styles.storyQuote}>
                <span>“</span>

                <p>
                  Every dish has a story. Every flavor
                  carries a piece of Cambodia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>
                WHAT WE BELIEVE
              </span>

              <h2>
                More than just
                <span> food.</span>
              </h2>
            </div>

            <p>
              KhmerTaste combines food discovery with the
              culture and stories behind Cambodian cuisine.
            </p>
          </div>

          <div className={styles.valueGrid}>
            {values.map((value) => (
              <article
                key={value.number}
                className={styles.valueCard}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>
                    {value.number}
                  </span>

                  <span className={styles.valueIcon}>
                    {value.icon}
                  </span>
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div>
              <span className={styles.eyebrow}>
                START EXPLORING
              </span>

              <h2>
                Taste Cambodia,
                <br />
                one dish at a time.
              </h2>

              <p>
                Explore our collection of Khmer dishes and
                discover something delicious today.
              </p>

              <Link
                href="/foods"
                className={styles.primaryButton}
              >
                Explore Khmer Foods
                <span>→</span>
              </Link>
            </div>

            <div className={styles.ctaDecoration}>
              <span>🍚</span>
              <span>🌿</span>
              <span>🥥</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}