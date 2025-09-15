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
    question: "Quais tecnologias domina atualmente?",
    answer: "Atua com desenvolvimento full-stack, utilizando Java, Spring Boot, TypeScript e React. Também tem experiência com bancos de dados, APIs REST, sistemas legados e processos de modernização. Gosta de explorar novas ferramentas e manter seus conhecimentos sempre atualizados."
  },
  {
    question: "Qual foi o maior desafio que enfrentou na carreira?",
    answer: "Um dos maiores desafios foi modernizar sistemas legados complexos, garantindo que tudo continuasse funcionando para os usuários enquanto introduzía melhorias de performance e novas funcionalidades. Foi um ótimo aprendizado sobre arquitetura, testes e gerenciamento de riscos."
  },
  {
    question: "Quais projetos considera mais marcantes na sua trajetória?",
    answer: "Destaca projetos de integração e automação de sistemas empresariais, além de aplicações web que impactaram diretamente a produtividade de equipes. Também teve a oportunidade de trabalhar em soluções inovadoras que combinaram tecnologia com experiência do usuário."
  },
  {
    question: "O que inspira e motiva como profissional?",
    answer: "Movido pela oportunidade de transformar ideias em soluções reais e eficientes. A tecnologia, aliada à criatividade, inspira a sempre buscar novas formas de resolver problemas, aprender e compartilhar conhecimento. E claro, o lado divertido da inovação, como explorar games e VR, mantém sua energia lá em cima!"
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
          <h2 className={styles.title}>DÚVIDAS COMUNS</h2>
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
