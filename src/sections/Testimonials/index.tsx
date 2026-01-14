'use client';

import { motion } from 'framer-motion';
import styles from './testimonials.module.css';
import { useTranslation } from '@/app/i18n/useTranslation';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    "id": 0,
    "name": "",
    "title": "",
    "content": "",
    "bgColor": "#2E3A59"
  },
  {
    "id": 1,
    "name": "",
    "title": "",
    "content": "",
    "bgColor": "#2E5D34"
  },
  {
    "id": 2,
    "name": "",
    "title": "",
    "content": "",
    "bgColor": "#5A3942"
  },
  {
    "id": 3,
    "name": "",
    "title": "",
    "content": "",
    "bgColor": "#4A3138"
  },
  {
    "id": 4,
    "name": "",
    "title": "",
    "content": "",
    "bgColor": "#8A5E00"
  },
  {
    "id": 5,
    "name": "",
    "title": "",
    "content": "",
    "bgColor": "#54406dff"
  }
]

export default function Testimonials() {

  const translations = useTranslation();

  return (
    <section
      id='testimonials'
      className={styles.section}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.testimonialsContainer}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={styles.subtitle}>{translations.testimonials.subtitle}</p>
          <h2 id="testimonials-heading" className={styles.title}>
            {translations.testimonials.title}
          </h2>
        </motion.div>

        <motion.div
          className={`${styles.cardsWrapper}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}>
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={styles.card}
              style={{
                backgroundColor: testimonial.bgColor,
                zIndex: testimonials.length - index,
              }}
              aria-label={`${translations.testimonials.card[testimonial.id].title} - Depoimento`}
            >
              <header className={styles.cardHeader}>
                <span>{translations.testimonials.card[testimonial.id].name}</span>
              </header>
              <h3 className={styles.cardTitle}>{translations.testimonials.card[testimonial.id].title}</h3>
              <p className={styles.cardContent}>{translations.testimonials.card[testimonial.id].content}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
