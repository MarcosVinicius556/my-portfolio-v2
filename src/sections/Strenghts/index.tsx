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
import { useTranslation } from "@/app/i18n/useTranslation";

export default function Strengths() {

  const translations = useTranslation();

  const strengths = [
    {
      "icon": <FaShieldAlt />,
      "title": translations.strengths.resilient.title,
      "description": translations.strengths.resilient.description
    },
    {
      "icon": <FaUsers />,
      "title": translations.strengths.teamwork.title,
      "description": translations.strengths.teamwork.description
    },
    {
      "icon": <FaClock />,
      "title": translations.strengths.timeManagement.title,
      "description": translations.strengths.timeManagement.description
    },
    {
      "icon": <FaMountain />,
      "title": translations.strengths.persistent.title,
      "description": translations.strengths.persistent.description
    },
    {
      "icon": <FaBolt />,
      "title": translations.strengths.proactive.title,
      "description": translations.strengths.proactive.description
    },
    {
      "icon": <FaSearch />,
      "title": translations.strengths.investigative.title,
      "description": translations.strengths.investigative.description
    }
  ]

  return (
    <section id="strenghts" className={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        {translations.strengths.title}
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
