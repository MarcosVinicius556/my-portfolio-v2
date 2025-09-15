"use client";
import { motion } from "framer-motion";
import styles from "./strengths.module.css";
import { 
    FaSearch, 
    FaBolt, 
    FaMountain, 
    FaClock, 
    FaUsers, 
    FaShieldAlt 
} from "react-icons/fa";

const strengths = [
  {
    icon: <FaShieldAlt />,
    title: "Resiliente",
    description:
      "Mantém o foco e a determinação mesmo diante de desafios, sempre encontrando maneiras de se adaptar e superar obstáculos.",
  },
  {
    icon: <FaUsers />,
    title: "Trabalho em Equipe",
    description:
      "Valoriza a colaboração, contribui para o crescimento coletivo e fortalece o ambiente de cooperação entre colegas.",
  },
  {
    icon: <FaClock />,
    title: "Organização de Tempo",
    description:
      "Gerencia prioridades de forma eficiente, garantindo equilíbrio entre produtividade, prazos e qualidade das entregas.",
  },
  {
    icon: <FaMountain />,
    title: "Persistente",
    description:
      "Não desiste facilmente, encara dificuldades como oportunidades de aprendizado e segue firme até alcançar os objetivos.",
  },
  {
    icon: <FaBolt />,
    title: "Proativo",
    description:
      "Antecipase às necessidades, propõe soluções práticas e busca constantemente maneiras de melhorar processos e resultados.",
  },
  {
    icon: <FaSearch />,
    title: "Investigativo",
    description:
      "Demonstra curiosidade construtiva, explora novas ideias e busca compreender a fundo os assuntos para inovar e evoluir.",
  },
];

export default function Strengths() {
  return (
    <section id="strenghts" className={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Pontos Fortes
      </motion.h2>
      <div className={styles.grid}>
        {strengths.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <span className={styles.divider}></span>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
