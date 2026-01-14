"use client";

import Typewriter from 'typewriter-effect';
import { useTranslation } from "@/app/i18n/useTranslation";
import styles from "@/sections/hero/hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {

  const translations = useTranslation();

  return (
    <section id="hero" className={styles.hero} aria-label="Hero Section - Engenheiro de Software">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.eyebrow}>{translations.hero.eyebrow}</p>

        <h1 className={styles.title}>
          <Typewriter
              options={{
                  strings: [
                    `<span>${translations.hero.titleLine1}</span><span>${translations.hero.titleLine2}</span>`
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  cursor: '',
              }}
              onInit={(typewriter) => {
                  typewriter
                    .pauseFor(5500)
                    .deleteAll()
                    .start();
              }}
          />
          
          
        </h1>

        <a href="#about" className={styles.primaryCta}>
          {translations.hero.primaryCta}
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
