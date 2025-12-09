'use client';

import { motion } from 'framer-motion';
import styles from './testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    "id": 1,
    "name": "Worked together at Grupo Casas Bahia",
    "title": "Technical Lead | Specialist I",
    "content": "Working with Marcos is always a differential, not only for me, who collaborates with him daily, but also for other squads. When people see his work, it's clear that he is someone who gets things done without dwelling on obstacles. I can say with certainty that he is a professional with great attention to detail, collaborative, and with strong technical skills in both backend and frontend, as well as a well-developed systems architecture vision — something that makes a big difference in our day-to-day work.",
    "bgColor": "#2E3A59"
  },
  {
    "id": 2,
    "name": "Worked together at Grupo Casas Bahia",
    "title": "Specialist II",
    "content": "He demonstrated dedication, attention to detail, and a strong desire to grow. He took on responsibilities and faced challenges beyond expectations, always with commitment and excellence. He is building a promising path, surpassing all expectations. The future holds great achievements — keep it up!",
    "bgColor": "#2E5D34"
  },
  {
    "id": 3,
    "name": "Worked together at Neomind",
    "title": "Software Engineer II",
    "content": "Marcos is great to work with. He has strong knowledge in best practices, Java, SQL, Hibernate, among other technologies. He is dedicated, attentive, and having him on the team is a real advantage.",
    "bgColor": "#5A3942"
  },
  {
    "id": 4,
    "name": "Worked together at HojeApp",
    "title": "Technical Lead | Specialist I",
    "content": "Marcos is an exceptional professional. He solves complex problems in a practical way and stands out for his communication skills. He is also an excellent team player — focused, committed to his work, and quick to absorb new knowledge.",
    "bgColor": "#4A3138"
  },
  {
    "id": 5,
    "name": "Worked together at Grupo Casas Bahia",
    "title": "Specialist I",
    "content": "Marcos Vinicius is an exemplary professional. In addition to being consistent in meetings, he demonstrated admirable technical skills, always proactive in proposing solutions. He also shows remarkable social abilities, being helpful and maintaining great interaction with the team.",
    "bgColor": "#8A5E00"
  }
]

export default function TestimonialsSection() {

  return (
    <section
      id='testimonials'
      className={styles.section}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={styles.subtitle}>References</p>
          <h2 id="testimonials-heading" className={styles.title}>
            What colleagues and collaborators highlight about my professional performance
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
              aria-label={`${testimonial.title} - Depoimento`}
            >
              <header className={styles.cardHeader}>
                <span>{testimonial.name}</span>
              </header>
              <h3 className={styles.cardTitle}>{testimonial.title}</h3>
              <p className={styles.cardContent}>{testimonial.content}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
