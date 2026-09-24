import styles from "./Travel.module.css";

export default function Travel() {
  return (
    <section className={styles.section} id="como-llegar">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Cómo llegar</p>

        <h2 className={styles.title}>
          Nosotros ponemos el plan.
          <br />
          Vosotros solo tenéis que venir.
        </h2>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.number}>01</span>
          <p className={styles.category}>Transporte</p>
          <h3>Autobuses</h3>

          <p>
            Habrá servicio de autobús para que podáis disfrutar del día sin
            preocuparos por el coche.
          </p>

          <div className={styles.status}>Horarios próximamente</div>
        </article>

        <article className={styles.card}>
          <span className={styles.number}>02</span>
          <p className={styles.category}>Por vuestra cuenta</p>
          <h3>En coche</h3>

          <p>
            Si preferís venir en vuestro propio vehículo, podréis aparcar
            directamente en la finca.
          </p>

          <div className={styles.status}>Aparcamiento disponible</div>
        </article>

        <article className={styles.card}>
          <span className={styles.number}>03</span>
          <p className={styles.category}>Para los que venís de fuera</p>
          <h3>Alojamiento</h3>

          <p>
            Añadiremos una selección de hoteles bien situados para que podáis
            alojaros cerca y moveros cómodamente.
          </p>

          <div className={styles.status}>Hoteles próximamente</div>
        </article>
      </div>
    </section>
  );
}