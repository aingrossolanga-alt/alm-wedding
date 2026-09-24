import styles from "./Contact.module.css";

const questions = [
  {
    question: "¿Hasta cuándo podemos confirmar asistencia?",
    answer:
      "Indicaremos la fecha límite cuando abramos las confirmaciones.",
  },
  {
    question: "¿Habrá autobús?",
    answer:
      "Sí. Habrá servicio de autobús y publicaremos aquí los horarios y puntos de salida.",
  },
  {
    question: "¿Puedo indicar alergias o intolerancias?",
    answer:
      "Sí. Podrás indicarlas directamente al confirmar tu asistencia.",
  },
  {
    question: "¿Hay aparcamiento en la finca?",
    answer:
      "Sí. Torre del Pino dispone de aparcamiento para los invitados.",
  },
  {
    question: "¿Puedo llevar acompañante?",
    answer:
      "En el formulario de confirmación aparecerán las personas incluidas en vuestra invitación.",
  },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.header}>
        <p className={styles.eyebrow}>¿Alguna duda?</p>

        <h2 className={styles.title}>
          Todo lo que
          <br />
          necesitáis saber.
        </h2>

        <p className={styles.intro}>
          Si os queda alguna pregunta, aquí iremos reuniendo toda la información
          importante para el gran día.
        </p>
      </div>

      <div className={styles.questions}>
        {questions.map((item, index) => (
          <details className={styles.question} key={item.question}>
            <summary>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.question}</span>

              <span className={styles.plus}>+</span>
            </summary>

            <p>{item.answer}</p>
          </details>
        ))}
      </div>

      <div className={styles.contact}>
        <p>¿No encuentras lo que buscas?</p>

        <h3>Escríbenos</h3>

        <p className={styles.small}>
          Podréis contactar directamente con nosotros desde aquí.
        </p>

        <button type="button" className={styles.button}>
          Contactar
        </button>
      </div>
    </section>
  );
}