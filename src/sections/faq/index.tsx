'use client';

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import styles from './faq.module.css';

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "Which technologies do you currently master?",
    answer: "Works as a full-stack developer using Java, Spring Boot, TypeScript, ReactJS/TS and NextJS/TS. Also has experience with databases, REST APIs, legacy systems and modernization processes. Enjoys exploring new tools and keeping knowledge always up to date."
  },
  {
    question: "What was the biggest challenge you've faced in your career?",
    answer: "One of the biggest challenges was modernizing complex legacy systems while ensuring everything continued running smoothly for users, introducing performance improvements and new features at the same time. It was a valuable learning experience about architecture, testing and risk management."
  },
  {
    question: "Which projects do you consider most significant in your journey?",
    answer: "Highlights projects involving system integration and automation, as well as web applications that directly improved team productivity. Also had the opportunity to work on innovative solutions that combined technology with user experience."
  },
  {
    question: "What inspires and motivates you as a professional?",
    answer: "Driven by the opportunity to transform ideas into real and efficient solutions. Technology combined with creativity inspires continuous learning, problem-solving and knowledge sharing. And of course, the fun side of innovation—like exploring games and VR—keeps the energy high!"
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='faq' className={styles.section}>
      <motion.div
        className={styles.mainFaqContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.textContent}>
          <h2 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className={styles.faqContainer}>
          {questions.map((q, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3>{q.question}</h3>
                <motion.span
                  className={styles.toggleIcon}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className={styles.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
