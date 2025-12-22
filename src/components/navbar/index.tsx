"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/useTranslation";
import ToogleLanguageButton from "../toogleLanguageButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const translation = useTranslation();

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
          <ToogleLanguageButton />
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
          <Link href="#hero" onClick={closeMenu} title="Home">{translation.navbar.home}</Link>
          <Link href="#about" onClick={closeMenu} title="About">{translation.navbar.about}</Link>
          <Link href="#projects" onClick={closeMenu} title="Projects">{translation.navbar.projects}</Link>
          <Link href="#achivments" onClick={closeMenu} title="Certifications">{translation.navbar.certifications}</Link>
          <Link href="#testimonials" onClick={closeMenu} title="References">{translation.navbar.references}</Link>
          <Link href="#strenghts" onClick={closeMenu} title="Featured">{translation.navbar.featured}</Link>
          <Link href="#socialMedia" onClick={closeMenu} title="Social">{translation.navbar.social}</Link>
          <Link href="#faq" onClick={closeMenu} title="FAQ">{translation.navbar.faq}</Link>
        </nav>

        <div className={`${styles.navActions} ${menuOpen ? styles.active : ""}`}>
          <Link
            href="#contact"
            className={`${styles.btn} ${styles.outline}`}
            onClick={closeMenu}
            aria-label="Entrar em contato com Marcos Vinicius"
          >
            {translation.navbar.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
