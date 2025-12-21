"use client";

import { useTranslation } from "@/app/i18n/useTranslation";
import styles from "./achivments.module.css";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { JSX } from "react";
import { FaCheck } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

type Course = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  unlocked: boolean;
  progress: number;
};

export default function Achivments() {

  const translations = useTranslation();

  const courses: Course[] = [
    { id: 1, title: translations.achivments.cards.java.title, description: translations.achivments.cards.java.description, icon: <Trophy size={28} />, unlocked: true, progress: 100 },
    { id: 2, title: translations.achivments.cards.react.title, description: translations.achivments.cards.react.description, icon: <Trophy size={28} />, unlocked: true, progress: 100 },
    { id: 3, title: translations.achivments.cards.typescript.title, description: translations.achivments.cards.typescript.description, icon: <Trophy size={28} />, unlocked: true, progress: 100 },
    { id: 4, title: translations.achivments.cards.javaMicroservices.title, description: translations.achivments.cards.javaMicroservices.description, icon: <Trophy size={28} />, unlocked: true, progress: 100 },
    { id: 5, title: translations.achivments.cards.englishB1.title, description: translations.achivments.cards.englishB1.description, icon: <Trophy size={28} />, unlocked: true, progress: 100 },
    { id: 6, title: translations.achivments.cards.englishB2.title, description: translations.achivments.cards.englishB2.description, icon: <Trophy size={28} />, unlocked: false, progress: 40 },
    { id: 7, title: translations.achivments.cards.informationSystems.title, description: translations.achivments.cards.informationSystems.description, icon: <Trophy size={28} />, unlocked: false, progress: 55 },
    { id: 8, title: translations.achivments.cards.microservicesMessaging.title, description: translations.achivments.cards.microservicesMessaging.description, icon: <Trophy size={28} />, unlocked: false, progress: 20 },
    { id: 9, title: translations.achivments.cards.aks.title, description: translations.achivments.cards.aks.description, icon: <Trophy size={28} />, unlocked: false, progress: 15 },
  ];

  return (
    <section id="achivments" className={styles.section} aria-label="Cursos e Certificações">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>{translations.achivments.title}</h2>
        </motion.div>

        <div className={styles.grid}>
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className={`${styles.card} ${course.unlocked ? styles.unlocked : styles.locked}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              aria-label={`${course.title} - ${course.unlocked ? 'Concluído' : 'Em progresso'} - ${course.progress}%`}
            >
              <div className={styles.infoContent}>
                <div className={styles.icon}>{course.icon}</div>
                <div className={styles.info}>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>

              <div className={styles.progressContent}>
                {!course.unlocked && <FiLoader size={25}/>}
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${course.progress}%` }} />
                </div>
                <span className={styles.progressText}>{course.progress}%</span>
              </div>

              {!course.unlocked && <span className={styles.lock} aria-hidden="true">🔒</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
