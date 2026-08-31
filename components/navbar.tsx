import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Khmer Foods",
    href: "/foods",
  },
  {
    label: "About Us",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.brand}>
          <Image
            src="/khmertaste.jpg"
            alt="KhmerTaste"
            width={150}
            height={75}
            priority
            className={styles.logo}
          />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/foods" className={styles.cta}>
          <span>Explore Food</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </header>
  );
}