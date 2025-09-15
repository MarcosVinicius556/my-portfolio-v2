"use client";

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

const courses: Course[] = [
  { id: 1, title: "Java", description: "Java COMPLETO 2023/2024 Programação Orientada a Objetos + Projetos.", icon: <Trophy size={28} />, unlocked: true, progress: 100 },
  { id: 2, title: "React", description: "React JS do zero ao avançado na prática.", icon: <Trophy size={28} />, unlocked: true, progress: 100 },
  { id: 3, title: "TypeScript", description: "TypeScript do básico ao avançado (c/ React, Express).", icon: <Trophy size={28} />, unlocked: true, progress: 100 },
  { id: 4, title: "Microsserviços Java", description: "Microsserviços Java com Spring Boot e Spring Cloud.", icon: <Trophy size={28} />, unlocked: true, progress: 100 },
  { id: 5, title: "Inglês", description: "Nível intermediário B1.", icon: <Trophy size={28} />, unlocked: true, progress: 100 },
  { id: 6, title: "Inglês", description: "Nível intermediário avançado B2.", icon: <Trophy size={28} />, unlocked: false, progress: 40 },
  { id: 7, title: "Sistemas de Informação", description: "Bacharelado.", icon: <Trophy size={28} />, unlocked: false, progress: 55 },
  { id: 8, title: "Microservicos e Mensageria", description: "Dominando Microservicos e Mensageria com Spring Cloud e Docker.", icon: <Trophy size={28} />, unlocked: false, progress: 20 },
  { id: 9, title: "Azure Kubernetes Service", description: "Orquestração de Containers no AKS.", icon: <Trophy size={28} />, unlocked: false, progress: 15 },
];

export default function Achivments() {
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
          <h2 className={styles.title}>Cursos & Certificações</h2>
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
