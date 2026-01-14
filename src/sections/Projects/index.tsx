"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styles from "@/sections/Projects/projects.module.css";
import { FaGamepad, FaGithub } from "react-icons/fa";
import { RiPsychotherapyLine } from "react-icons/ri";
import { AiOutlineAlignCenter, AiOutlineIssuesClose } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/useTranslation";

const cardVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const translations = useTranslation();

  const features = [
    {
      title: translations.projectsSection.projects.projectLandingPage.title,
      description: translations.projectsSection.projects.projectLandingPage.description,
      cta: translations.projectsSection.projects.projectLandingPage.cta,
      image: "/images/psy-landing-page.png",
      path: "https://www.ellen-santos-machado.com.br/",
      icon: <RiPsychotherapyLine />,
    },
    {
      title: translations.projectsSection.projects.projectSintaxGame.title,
      description: translations.projectsSection.projects.projectSintaxGame.description,
      cta: translations.projectsSection.projects.projectSintaxGame.cta,
      image: "/images/sintax-game.png",
      path: "https://sintax-game.netlify.app/",
      icon: <FaGamepad />,
    },
    {
      title: translations.projectsSection.projects.projectTicketSystem.title,
      description: translations.projectsSection.projects.projectTicketSystem.description,
      cta: translations.projectsSection.projects.projectTicketSystem.cta,
      image: "/images/sistema-chamados.png",
      path: "https://chamados-sistema.netlify.app/",
      icon: <AiOutlineIssuesClose />,
    },
    {
      title: translations.projectsSection.projects.projectDanielEspindola.title,
      description: translations.projectsSection.projects.projectDanielEspindola.description,
      cta: translations.projectsSection.projects.projectDanielEspindola.cta,
      image: "/images/daniel-demo.png",
      path: "https://www.imobiliariadanielespindola.com.br/",
      icon: <AiOutlineAlignCenter />,
    },
    {
      title: translations.projectsSection.projects.projectGitHub.title,
      description: translations.projectsSection.projects.projectGitHub.description,
      cta: translations.projectsSection.projects.projectGitHub.cta,
      image: "/images/github.png",
      path: "https://github.com/MarcosVinicius556",
      icon: <FaGithub />,
    },
  ];

  return (
    <section id="projects" className={styles.projects} aria-label="Projetos Desenvolvidos">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>{translations.projectsSection.title}</h2>
        <p>
          {translations.projectsSection.text1}
          <br />
          <br />
          {translations.projectsSection.text2}
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
                <a href={features[activeIndex].path} className={styles.cta} target="_blank" rel="noopener noreferrer">{features[activeIndex].cta}</a>
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
