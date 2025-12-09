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
          <p className={styles.aboutRole}>Software Engineer</p>
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
          <h3 className={styles.aboutTitle}>IT Professional</h3>

          <p className={styles.aboutText}>
            <strong>Marcos Vinicius Angeli Costa</strong> is a software engineer passionate about technology and innovation. He has experience in developing modern applications, focusing on performance, scalability, and best practices. Throughout his career, he has worked with different languages, frameworks, and architectures, always seeking to deliver efficient and quality solutions.
          </p>

          <p className={styles.aboutText}>
            Beyond programming, he is an enthusiast of video games, gadgets, and virtual reality — passions that inspire him to explore new ideas and maintain a curious outlook on the future of technology. Combining technical knowledge, creativity, and a good sense of humor, his goal is to turn challenges into opportunities and contribute to projects that truly make a difference.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
