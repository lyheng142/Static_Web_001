import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <Link
            href="/"
            className={styles.logo}
          >
            🍲 Nham{" "}
            <span>Khmer</span>
          </Link>

          <p className={styles.copy}>
            Discover authentic Cambodian flavors,
            traditional dishes and the stories behind
            the food we love.
          </p>
        </div>

        <div>
          <h3>Explore</h3>

          <Link href="/">Home</Link>
          <Link href="/foods">
            Khmer Foods
          </Link>
          <Link href="/about">
            About Us
          </Link>
        </div>

        <div>
          <h3>Discover</h3>

          <Link href="/#how-it-works">
            How It Works
          </Link>

          <Link href="/foods">
            Food Collection
          </Link>

          <Link href="/about">
            Contact
          </Link>
        </div>

        <div>
          <h3>Made for Cambodia</h3>

          <p className={styles.copy}>
            From Phnom Penh to every kitchen,
            explore food that feels like home.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} KhmerTaste.
        Built with Next.js + TypeScript.
      </div>
    </footer>
  );
}