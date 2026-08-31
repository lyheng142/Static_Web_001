
import styles from "../../src/app/page.module.css";

const HERO_IMAGE =
  "https://tse4.mm.bing.net/th/id/OIP.1SPxfwCYqcxSaLznELxA4wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>
              🇰🇭 Taste Cambodia · Feel at home
            </p>

            <h1 className={styles.title}>
              Discover the taste of{" "}
              <span>Cambodia.</span>
            </h1>

            <p className={styles.lead}>
              Explore authentic Khmer dishes,
              discover new favorites and learn the
              ingredients and stories behind every
              bite.
            </p>

            <form
              className={styles.search}
              action="/foods"
            >
              <input
                name="q"
                placeholder="Search Khmer dishes..."
                aria-label="Search Khmer dishes"
              />

              <button type="submit">
                Find Food →
              </button>
            </form>

            <div className={styles.perks}>
              <div className={styles.perk}>
                <span className={styles.perkIcon}>
                  🇰🇭
                </span>

                <span>
                  <b>Authentic</b>
                  <br />
                  Khmer cuisine
                </span>
              </div>

              <div className={styles.perk}>
                <span className={styles.perkIcon}>
                  🌿
                </span>

                <span>
                  <b>Fresh</b>
                  <br />
                  Local ingredients
                </span>
              </div>

              <div className={styles.perk}>
                <span className={styles.perkIcon}>
                  ❤️
                </span>

                <span>
                  <b>Made with love</b>
                  <br />
                  Culture on a plate
                </span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div
              className={styles.heroBlob}
              aria-hidden="true"
            />

            <img
              className={styles.heroImage}
              src={HERO_IMAGE}
              alt="Traditional Cambodian fish amok"
            />

            <div className={styles.badge}>
              <span>🍚</span>

              <div>
                <strong>100% Khmer</strong>
                <small>
                  Traditional flavors
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}