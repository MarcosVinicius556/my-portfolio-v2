"use client";

import styles from "@/sections/hero/hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero Section - Engenheiro de Software">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.eyebrow}>Engenheiro de Software</p>

        <h1 className={styles.title}>
          <span>Tecnologia com Propósito</span>
          <span>Código com Qualidade</span>
        </h1>

        <a href="#start" className={styles.primaryCta}>
          Ver mais
        </a>
      </motion.div>

      <video
        className={styles.video}
        src="/videos/darkhole.mp4"
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
        role="presentation"
      />

      <div className={styles.overlay}></div>
    </section>
  );
}
