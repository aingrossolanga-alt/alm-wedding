import styles from "./Footer.module.css";
import { wedding } from "@/data/wedding";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.names}>
        {wedding.couple.bride} & {wedding.couple.groom}
      </p>

      <p className={styles.date}>
        {wedding.date.day} {wedding.date.month} {wedding.date.year}
      </p>

      <div className={styles.line}></div>

      <p className={styles.thanks}>
        Gracias por formar parte de nuestra historia.
      </p>

      <p className={styles.copy}>
        Hecho con ♥ para nuestra familia y amigos.
      </p>
    </footer>
  );
}