"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.png"
            alt="Logo de Marcos Vinicius Angeli Costa"
            width={260}
            height={260}
            className={styles.logo}
            priority
          />
        </div>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          ☰
        </button>

        <nav
          id="main-navigation"
          className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}
          role="navigation"
          aria-label="Menu principal"
        >
          <Link href="#hero" onClick={closeMenu} title="Home">Home</Link>
          <Link href="#about" onClick={closeMenu} title="About">About</Link>
          <Link href="#projects" onClick={closeMenu} title="Projects">Projects</Link>
          <Link href="#achivments" onClick={closeMenu} title="Certifications">Certifications</Link>
          <Link href="#testimonials" onClick={closeMenu} title="References">References</Link>
          <Link href="#strenghts" onClick={closeMenu} title="Featured">Featured</Link>
          <Link href="#socialMedia" onClick={closeMenu} title="Social">Social</Link>
          <Link href="#faq" onClick={closeMenu} title="FAQ">FAQ</Link>
        </nav>

        <div className={`${styles.navActions} ${menuOpen ? styles.active : ""}`}>
          <Link
            href="#contact"
            className={`${styles.btn} ${styles.outline}`}
            onClick={closeMenu}
            aria-label="Entrar em contato com Marcos Vinicius"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
