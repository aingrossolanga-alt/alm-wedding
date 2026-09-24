import Image from "next/image";
import { wedding } from "@/data/wedding";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <Image
        src="/images/hero.jpg"
        alt={`Aless, Manu y ${wedding.dog.name}`}
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />

      <div className={styles.overlay} aria-hidden="true" />

      <header className={styles.header}>
        <a href="#inicio" className={styles.monogram}>
          {wedding.couple.initials}
        </a>

        <nav className={styles.navigation} aria-label="Navegación principal">
          <a href="#bienvenida">Historia</a>
          <a href="#boda">La boda</a>
          <a href="#confirmacion">Confirmación</a>
        </nav>

        <button
          type="button"
          className={styles.mobileMenu}
          aria-label="Abrir menú"
        >
          <span />
          <span />
        </button>
      </header>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Nos casamos</p>

        <h1 className={styles.names}>
          <span className={styles.name}>{wedding.couple.bride}</span>
          <span className={styles.ampersand}>&</span>
          <span className={styles.name}>{wedding.couple.groom}</span>
        </h1>

        <div className={styles.divider} />

        <p className={styles.date}>
          {wedding.date.day}
          <span>·</span>
          {wedding.date.month}
          <span>·</span>
          {wedding.date.year}
        </p>

        <p className={styles.city}>{wedding.ceremony.city}</p>
      </div>

      <a href="#bienvenida" className={styles.discover}>
        <span>Descubrir</span>
        <span className={styles.arrow} aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  );
}