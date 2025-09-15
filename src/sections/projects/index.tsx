"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styles from "@/sections/projects/projects.module.css";
import { FaGamepad, FaGithub } from "react-icons/fa";
import { RiPsychotherapyLine } from "react-icons/ri";
import { AiOutlineIssuesClose } from "react-icons/ai";
import Image from "next/image";

const features = [
  {
    title: "Landing Page",
    description:
      "Site criado para uma psicóloga que tinha apenas um objetivo... Que quando buscassem pelo seu nome, ou por psicólogas na sua região, o seu site fosse exibido. O site ficou com médias todas acima de 90% no Lighthouse e extremamente bem ranqueado no Google, além de ser responsivo e refletir a identidade visual da cliente!",
    cta: "Visitar",
    image: "/images/psy-landing-page.png",
    icon: <RiPsychotherapyLine />,
  },
  {
    title: "Sintax Game",
    description:
      "Desenvolvido quando estava na segunda fase da faculdade, onde atuou como líder, desenvolvedor e apresentador do grupo. O projeto foi pensado e desenvolvido com 1 objetivo - Ensinar novos programadores a importância de se escrever um código de forma limpa e clara - A mensagem foi passada e muito bem recebida, trazendo elementos de gamificação, personagens e referências a games e aos professores da faculdade.",
    cta: "Visitar",
    image: "/images/sintax-game.png",
    icon: <FaGamepad />,
  },
  {
    title: "Sistema de Chamados",
    description:
      "Projeto simples, apenas para estudar conceitos de integração entre React + Firebase. Fique à vontade para acessar e criar sua conta! Apenas necessário informar um email e criar uma senha de no mínimo 7 dígitos.",
    cta: "Visitar",
    image: "/images/sistema-chamados.png",
    icon: <AiOutlineIssuesClose />,
  },
  {
    title: "Mais projetos no GitHub",
    description:
      "Além dos projetos frontend que estão no ar, visite também seu GitHub e dê uma olhada, são + de 80 projetos de estudo desenvolvidos do zero para servir como prova de conceito da tecnologia que estava como foco de seus estudos.",
    cta: "Visitar",
    image: "/images/github.png",
    icon: <FaGithub />,
  },
];

const cardVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className={styles.projects} aria-label="Projetos Desenvolvidos">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>+ de 5 anos de experiência</h2>
        <p>
          Ao longo de sua jornada como desenvolvedor, participou da criação de diversas
          soluções completas — do frontend ao backend. Também atuou em sistemas legados,
          garantindo manutenção, correções, melhorias e até processos de modernização.
          <br />
          <br />
          Confira abaixo alguns de seus projetos que já desenvolveu e que estão disponíveis
          publicamente para você explorar.
        </p>
      </motion.div>

      <motion.div
        className={styles.ProjectsCardContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.ProjectsWrapper}>
          <div className={styles.sidebar}>
            {features.map((feature, idx) => (
              <button
                key={idx}
                className={`${styles.iconBtn} ${idx === activeIndex ? styles.active : ""}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Selecionar projeto ${feature.title}`}
              >
                {feature.icon}
              </button>
            ))}
          </div>

          <div className={styles.card}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className={styles.text}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2>{features[activeIndex].title}</h2>
                <p>{features[activeIndex].description}</p>
                <button className={styles.cta}>{features[activeIndex].cta}</button>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex + "-img"}
                className={styles.image}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  width={500}
                  height={300}
                  priority={activeIndex === 0}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
