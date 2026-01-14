'use client';

import { motion } from "framer-motion";
import styles from './about.module.css';
import Image from 'next/image';
import { useTranslation } from "@/app/i18n/useTranslation";

export default function About() {

  const translations = useTranslation();

  return (
    <motion.section
      id="about"
      className={styles.section}
      aria-label="Seção Sobre Marcos Vinicius Angeli Costa"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLeft}>
          <h2 className={styles.aboutName}>Marcos Vinicius Angeli Costa</h2>
          <p className={styles.aboutRole}>{translations.about.aboutRole}</p>
        </div>

        <div className={styles.aboutPhoto}>
          <Image
            src="/images/profile.jpg"
            alt="Foto de Marcos Vinicius Angeli Costa, Engenheiro de Software"
            width={320}
            height={400}
            className={styles.photo}
            priority
          />
        </div>

        <div className={styles.aboutRight}>
          <h3 className={styles.aboutTitle}>{translations.about.aboutTitle}</h3>

          <p className={styles.aboutText}>
            {translations.about.aboutText1}
          </p>

          <p className={styles.aboutText}>
            {translations.about.aboutText2}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
