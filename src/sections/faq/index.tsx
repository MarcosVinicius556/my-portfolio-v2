'use client';

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import styles from './faq.module.css';
import { useTranslation } from '@/app/i18n/useTranslation';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const translations = useTranslation();

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
          <h2 className={styles.title}>{translations.faq.title}</h2>
        </div>

        <div className={styles.faqContainer}>
          {[1,2,3,4].map((q, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3>{translations.faq.questions[index].question}</h3>
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
                    <p>{translations.faq.questions[index].answer}</p>
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
