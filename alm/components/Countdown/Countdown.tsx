"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";
import styles from "./Countdown.module.css";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTime(): TimeLeft {
  const target = new Date(wedding.date.iso).getTime();
  const now = Date.now();

  const diff = Math.max(target - now, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    setTime(calculateTime());

    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <section className={styles.section}>
        <p className={styles.eyebrow}>Cuenta atrás</p>

        <h2 className={styles.title}>
          Cada día queda uno menos.
        </h2>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Cuenta atrás</p>

      <h2 className={styles.title}>
        Cada día queda uno menos.
      </h2>

      <div className={styles.grid}>
        <div>
          <strong>{time.days}</strong>
          <span>Días</span>
        </div>

        <div>
          <strong>{time.hours}</strong>
          <span>Horas</span>
        </div>

        <div>
          <strong>{time.minutes}</strong>
          <span>Minutos</span>
        </div>

        <div>
          <strong>{time.seconds}</strong>
          <span>Segundos</span>
        </div>
      </div>
    </section>
  );
}