"use client";

import { ChangeEvent, useState } from "react";
import styles from "./GuestPhotos.module.css";

const previewStories = [
  {
    src: "/images/hero.jpg",
    label: "Ceremonia",
  },
  {
    src: "/images/hero.jpg",
    label: "Cóctel",
  },
  {
    src: "/images/hero.jpg",
    label: "Fiesta",
  },
  {
    src: "/images/hero.jpg",
    label: "Niza",
  },
];

export default function GuestPhotos() {
  const [files, setFiles] = useState<File[]>([]);
  const [activeStory, setActiveStory] = useState(0);

  function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  }

  function nextStory() {
    setActiveStory((current) => (current + 1) % previewStories.length);
  }

  function previousStory() {
    setActiveStory(
      (current) =>
        (current - 1 + previewStories.length) % previewStories.length
    );
  }

  return (
    <section className={styles.section} id="subir-fotos">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>El día de la boda</p>

        <h2 className={styles.title}>
          El día visto
          <br />
          por vosotros.
        </h2>

        <p className={styles.intro}>
          Aquí iremos viendo las fotos y vídeos que compartáis durante la boda.
        </p>
      </div>

      <div className={styles.viewer}>
        <img
          src={previewStories[activeStory].src}
          alt={previewStories[activeStory].label}
          className={styles.viewerImage}
        />

        <div className={styles.overlay} />

        <div className={styles.progress}>
          {previewStories.map((_, index) => (
            <span
              key={index}
              className={`${styles.progressBar} ${
                index === activeStory ? styles.activeProgress : ""
              }`}
            />
          ))}
        </div>

        <div className={styles.storyHeader}>
          <span className={styles.monogram}>A · M</span>
          <span className={styles.storyLabel}>
            {previewStories[activeStory].label}
          </span>
        </div>

        <button
          type="button"
          className={`${styles.navZone} ${styles.leftZone}`}
          onClick={previousStory}
          aria-label="Foto anterior"
        />

        <button
          type="button"
          className={`${styles.navZone} ${styles.rightZone}`}
          onClick={nextStory}
          aria-label="Foto siguiente"
        />

        <div className={styles.storyCaption}>
          <p>Recuerdos compartidos por nuestros invitados</p>
        </div>
      </div>

      <div className={styles.uploadArea}>
        <label className={styles.uploadButton}>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFiles}
            className={styles.input}
          />

          Subir fotos o vídeos
        </label>

        {files.length > 0 && (
          <div className={styles.selection}>
            <p>
              {files.length}{" "}
              {files.length === 1 ? "archivo seleccionado" : "archivos seleccionados"}
            </p>

            <button type="button" className={styles.confirmButton}>
              Compartir recuerdos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}