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
  { id: 1, name: 'Atuaram juntos em Grupo Casas Bahia', title: 'Líder Técnico | Especialista I', content: 'Trabalhar com o Marcos sempre é um diferencial, não apenas para mim, que estou no dia a dia com ele, mas também para outras squads. Quando veem sua atuação na empresa, já percebem que ele é alguém que faz acontecer, sem enxergar dificuldades. Posso dizer com certeza que ele é um profissional com um olhar atento para detalhes, colaborativo e com um ótimo domínio técnico em backend e frontend, além de ter uma visão de arquitetura de sistemas muito bem desenvolvida, o que faz toda a diferença no nosso dia a dia.', bgColor: '#2E3A59' },
  { id: 2, name: 'Atuaram juntos em Grupo Casas Bahia', title: 'Especialista II', content: 'Demonstrou dedicação, atenção aos detalhes e uma forte vontade de crescer. Assumiu responsabilidades e enfrentou desafios além do esperado, sempre com comprometimento e excelência. Está trilhando um caminho promissor, superando todas as expectativas. O futuro reserva grandes conquistas - continue assim!', bgColor: '#2E5D34' },
  { id: 3, name: 'Atuaram juntos em Neomind', title: 'Engenheiro de Software II', content: 'Marcos é uma ótima pessoa para se trabalhar, possui grande conhecimento em boas práticas, Java, SQL, Hibernate, além de outras tecnologias. É dedicado, atencioso e tê-lo no time é um diferencial.', bgColor: '#5A3942' },
  { id: 4, name: 'Atuaram juntos em HojeApp', title: 'Líder Técnico | Especialista I', content: 'O Marcos é um profissional excepcional, sabe resolver problemas complexos de maneira prática e se destaca pela sua habilidade de comunicação. Além disso é um excelente profissional, sabe trabalhar em equipe, focado, comprometido com o trabalho e assimila rapidamente novos conhecimentos.', bgColor: '#4A3138' },
  { id: 5, name: 'Atuaram juntos em Grupo Casas Bahia', title: 'Especialista I', content: 'Marcos Vinicius é um profissional exemplar. Além de sua assiduidade nas reuniões, demonstrou competências técnicas louváveis, sendo sempre propositivo nas soluções apresentadas. Também demonstra habilidades sociais notáveis, mostrando-se constantemente solícito e com ótima capacidade de interação.', bgColor: '#8A5E00' },
];

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
          <p className={styles.subtitle}>Referências</p>
          <h2 id="testimonials-heading" className={styles.title}>
            O que colegas e colaboradores destacam sobre minha atuação profissional
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
