'use client';

import { motion } from "framer-motion";
import styles from './about.module.css';
import Image from 'next/image';

export default function About() {

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
          <p className={styles.aboutRole}>Engenheiro de Software</p>
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
          <h3 className={styles.aboutTitle}>Profissional TI</h3>

          <p className={styles.aboutText}>
            <strong>Marcos Vinicius Angeli Costa</strong> é engenheiro de software apaixonado por tecnologia e inovação. Tem experiência no desenvolvimento de aplicações modernas, com foco em performance, escalabilidade e boas práticas. Ao longo da sua carreira, trabalhou com diferentes linguagens, frameworks e arquiteturas, sempre buscando entregar soluções eficientes e de qualidade.
          </p>

          <p className={styles.aboutText}>
            Além da programação, é entusiasta de videogames, gadgets e realidade virtual — paixões que o inspiram a explorar novas ideias e a manter um olhar curioso sobre o futuro da tecnologia. Combinando conhecimento técnico, criatividade e bom humor, seu objetivo é transformar desafios em oportunidades e contribuir para projetos que realmente façam a diferença.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
