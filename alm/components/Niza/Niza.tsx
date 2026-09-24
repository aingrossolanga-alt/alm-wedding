import styles from "./Niza.module.css";

export default function Niza() {
  return (
    <section className={styles.section} id="niza">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Una invitada muy especial</p>

        <h2 className={styles.title}>Niza</h2>

        <p className={styles.subtitle}>
          Hay historias de amor que vienen con cuatro patas.
        </p>

        <div className={styles.line} />

        <p className={styles.text}>
          También forma parte de nuestra historia y, por supuesto, no podía
          faltar en uno de los días más importantes de nuestra vida.
        </p>

        <p className={styles.role}>Portadora oficial de los anillos</p>
      </div>

      <div className={styles.photo}>
        <div className={styles.placeholder}>
          <span>N</span>
          <p>Aquí irá una foto de Niza</p>
        </div>
      </div>
    </section>
  );
}