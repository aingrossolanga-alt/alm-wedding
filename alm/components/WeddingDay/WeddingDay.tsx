import styles from "./WeddingDay.module.css";

const schedule = [
  {
    time: "12:30",
    title: "Ceremonia",
    place: "Iglesia de Santiago el Mayor",
  },
  {
    time: "14:00",
    title: "Cóctel",
    place: "Torre del Pino",
  },
  {
    time: "15:30",
    title: "Comida",
    place: "Salón principal",
  },
  {
    time: "18:30",
    title: "Fiesta",
    place: "Baile, barra libre y sorpresas",
  },
];

export default function WeddingDay() {
  return (
    <section className={styles.section} id="boda">
      <p className={styles.eyebrow}>El gran día</p>

      <h2 className={styles.title}>
        Todo preparado
        <br />
        para celebrar.
      </h2>

      <div className={styles.timeline}>
        {schedule.map((item) => (
          <div className={styles.item} key={item.time}>
            <span className={styles.time}>{item.time}</span>

            <div className={styles.line}></div>

            <div className={styles.info}>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}