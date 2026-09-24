import styles from "./Info.module.css";

const items = [
  {
    icon: "👔",
    title: "Dress code",
    text: "Traje oscuro o chaqué. Vestido largo o cóctel.",
  },
  {
    icon: "🚗",
    title: "Aparcamiento",
    text: "La finca dispone de aparcamiento gratuito para todos los invitados.",
  },
  {
    icon: "🚌",
    title: "Autobuses",
    text: "Próximamente publicaremos los horarios de ida y vuelta.",
  },
  {
    icon: "🍽️",
    title: "Intolerancias",
    text: "Podrás indicarnos cualquier alergia o intolerancia en la confirmación.",
  },
];

export default function Info() {
  return (
    <section className={styles.section} id="info">
      <p className={styles.eyebrow}>Información útil</p>

      <h2 className={styles.title}>
        Todo preparado para que
        <br />
        solo tengáis que disfrutar.
      </h2>

      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}