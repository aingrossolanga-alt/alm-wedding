import { wedding } from "@/data/wedding";
import styles from "./Locations.module.css";

export default function Locations() {
  return (
    <section className={styles.section} id="lugares">
      <p className={styles.eyebrow}>Lugares</p>

      <h2 className={styles.title}>
        Dos lugares.
        <br />
        Un día inolvidable.
      </h2>

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.icon}>⛪</span>

          <h3>Ceremonia</h3>

          <p className={styles.place}>
            {wedding.ceremony.place}
          </p>

          <p className={styles.address}>
            {wedding.ceremony.city}
          </p>

          <p className={styles.time}>
            {wedding.date.ceremonyTime}
          </p>

          <a
            href={wedding.ceremony.maps || "#"}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            Ver ubicación
          </a>
        </article>

        <article className={styles.card}>
          <span className={styles.icon}>🥂</span>

          <h3>Celebración</h3>

          <p className={styles.place}>
            {wedding.celebration.place}
          </p>

          <p className={styles.address}>
            {wedding.celebration.city}
          </p>

          <p className={styles.time}>
            {wedding.date.cocktailTime} · Cóctel · Comida · Fiesta
          </p>

          <a
            href={wedding.celebration.maps || "#"}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            Ver ubicación
          </a>
        </article>
      </div>
    </section>
  );
}