import Image from "next/image";
import styles from "./Gallery.module.css";

const images = [
  {
    src: "/images/hero.jpg",
    alt: "Aless, Manu y Niza",
  },
  {
    src: "/images/hero.jpg",
    alt: "Aless y Manu",
  },
  {
    src: "/images/hero.jpg",
    alt: "Un recuerdo de Aless y Manu",
  },
  {
    src: "/images/hero.jpg",
    alt: "Aless, Manu y Niza juntos",
  },
];

export default function Gallery() {
  return (
    <section className={styles.section} id="galeria">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Galería</p>

        <h2 className={styles.title}>
          Algunos recuerdos
          <br />
          antes del gran día.
        </h2>
      </div>

      <div className={styles.grid}>
        {images.map((image, index) => (
          <figure
            className={`${styles.item} ${index === 0 ? styles.large : ""}`}
            key={`${image.src}-${index}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className={styles.image}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}