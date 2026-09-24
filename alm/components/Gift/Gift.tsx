import { wedding } from "@/data/wedding";
import styles from "./Gift.module.css";

export default function Gift() {
  return (
    <section className={styles.section} id="regalo">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Regalo</p>

        <h2 className={styles.title}>
          Vuestra presencia
          <br />
          es nuestro mejor regalo.
        </h2>

        <p className={styles.text}>
          Pero si además queréis ayudarnos a empezar esta nueva etapa,
          podéis hacerlo de la forma que os resulte más cómoda.
        </p>

        <div className={styles.options}>
          <article className={styles.card}>
            <span className={styles.number}>01</span>
            <h3>Transferencia</h3>

            <p className={styles.label}>IBAN</p>

            <p className={styles.value}>
              {wedding.gift.iban || "Disponible próximamente"}
            </p>
          </article>

          <article className={styles.card}>
            <span className={styles.number}>02</span>
            <h3>Bizum</h3>

            <p className={styles.label}>Número</p>

            <p className={styles.value}>
              {wedding.gift.bizum || "Disponible próximamente"}
            </p>
          </article>
        </div>

        <p className={styles.note}>
          Lo más importante para nosotros es poder compartir el día con vosotros.
        </p>
      </div>
    </section>
  );
}