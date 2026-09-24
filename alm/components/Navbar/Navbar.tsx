"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Historia", href: "#historia" },
  { label: "El gran día", href: "#el-gran-dia" },
  { label: "Lugares", href: "#lugares" },
  { label: "Información", href: "#informacion" },
  { label: "Confirmar", href: "#confirmacion" },
  { label: "Fotos", href: "#subir-fotos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={styles.header}>
      <a
        href="#"
        className={styles.logo}
        onClick={closeMenu}
        aria-label="Volver al inicio"
      >
        A·M
      </a>

      <nav className={styles.desktopNav}>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={`${styles.menuButton} ${open ? styles.menuOpen : ""}`}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      <div className={`${styles.mobileMenu} ${open ? styles.visible : ""}`}>
        <nav>
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <p>Aless & Manu · 23.04.2027</p>
      </div>
    </header>
  );
}