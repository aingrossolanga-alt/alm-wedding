"use client";

import { useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        loop
        preload="metadata"
      />

      <button
        type="button"
        className={`${styles.player} ${playing ? styles.playing : ""}`}
        onClick={toggleMusic}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
      >
        <span className={styles.icon}>
          {playing ? "Ⅱ" : "▶"}
        </span>

        <span className={styles.text}>
          {playing ? "Sonando" : "Nuestra canción"}
        </span>

        <span className={styles.lines}>
          <i />
          <i />
          <i />
        </span>
      </button>
    </>
  );
}