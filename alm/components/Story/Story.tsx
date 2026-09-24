import styles from "./Story.module.css";

const chapters = [
  {
    number: "I",
    title: "Todo empezó",
    year: "2020",
    text: "Nos conocimos trabajando en el hospital, en plena pandemia. Entre turnos, guardias y días difíciles, empezó una historia que ninguno de los dos esperaba.",
  },
  {
    number: "II",
    title: "Nuestra aventura",
    year: "2021 — 2025",
    text: "Llegaron los viajes, los planes tranquilos, las sobremesas largas y una vida compartida que fue creciendo poco a poco.",
  },
  {
    number: "III",
    title: "La familia creció",
    year: "2025",
    text: "Entonces llegó Niza, pequeña en tamaño y enorme en personalidad. Desde ese momento, nuestra historia pasó a escribirse entre seis patas.",
  },
  {
    number: "IV",
    title: "El sí",
    year: "2026",
    text: "Y un día que parecía como cualquier otro terminó cambiándolo todo. La respuesta fue sencilla: sí.",
  },
  {
    number: "V",
    title: "Nos casamos",
    year: "2027",
    text: "El 23 de abril de 2027 celebraremos el siguiente capítulo rodeados de las personas que forman parte de nuestra historia.",
  },
];

export default function Story() {
  return (
    <section className={styles.section} id="historia">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Nuestra historia</p>
        <h2 className={styles.title}>Cinco capítulos. Una vida por delante.</h2>
      </div>

      <div className={styles.timeline}>
        {chapters.map((chapter) => (
          <article className={styles.chapter} key={chapter.number}>
            <div className={styles.marker}>
              <span>{chapter.number}</span>
            </div>

            <div className={styles.content}>
              <p className={styles.year}>{chapter.year}</p>
              <h3>{chapter.title}</h3>
              <p className={styles.text}>{chapter.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}