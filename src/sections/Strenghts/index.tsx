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
    "icon": <FaShieldAlt />,
    "title": "Resilient",
    "description":
      "Maintains focus and determination even when facing challenges, always finding ways to adapt and overcome obstacles."
  },
  {
    "icon": <FaUsers />,
    "title": "Teamwork",
    "description":
      "Values collaboration, contributes to collective growth, and strengthens a cooperative environment among colleagues."
  },
  {
    "icon": <FaClock />,
    "title": "Time Management",
    "description":
      "Efficiently manages priorities, ensuring balance between productivity, deadlines, and quality of deliverables."
  },
  {
    "icon": <FaMountain />,
    "title": "Persistent",
    "description":
      "Does not give up easily, sees difficulties as learning opportunities, and remains committed until goals are achieved."
  },
  {
    "icon": <FaBolt />,
    "title": "Proactive",
    "description":
      "Anticipates needs, proposes practical solutions, and constantly seeks ways to improve processes and results."
  },
  {
    "icon": <FaSearch />,
    "title": "Investigative",
    "description":
      "Demonstrates constructive curiosity, explores new ideas, and deeply researches topics to innovate and evolve."
  }
]

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
        SOFT SKILLS
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
