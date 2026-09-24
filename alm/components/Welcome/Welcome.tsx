import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <section
  id="bienvenida"
  className={styles.welcome}
>
      <div className={styles.container}>

        <span className={styles.line}></span>

        <p className={styles.eyebrow}>
          NUESTRA HISTORIA
        </p>

        <h2 className={styles.title}>
          Hay días que pasan.
          <br />
          Y hay días que cambian la vida.
        </h2>

        <p className={styles.text}>
          Después de casi cinco años compartiendo la vida,
          los viajes, las guardias, las risas y también los días
          difíciles, queremos celebrar con vosotros el comienzo
          de nuestra mayor aventura.
        </p>

      </div>

    </section>
  );
}