import styles from "./RSVP.module.css";

export default function RSVP() {
  return (
    <section className={styles.section} id="confirmacion">
      <p className={styles.eyebrow}>Confirmación</p>

      <h2 className={styles.title}>
        Nos hará mucha ilusión
        <br />
        compartir este día contigo.
      </h2>

      <p className={styles.text}>
        Muy pronto podrás confirmar tu asistencia, indicar si utilizarás el
        autobús, comunicar alergias o intolerancias y decirnos si vienes
        acompañado.
      </p>

      <div className={styles.card}>
        <div className={styles.icon}>💌</div>

        <h3>RSVP disponible próximamente</h3>

        <p>
          Cuando abramos las confirmaciones aparecerá aquí un formulario para
          responder en menos de un minuto.
        </p>

        <button type="button" className={styles.button} disabled>
          Próximamente
        </button>
      </div>
    </section>
  );
}