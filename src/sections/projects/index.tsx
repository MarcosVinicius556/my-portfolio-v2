"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styles from "@/sections/projects/projects.module.css";
import { FaGamepad, FaGithub } from "react-icons/fa";
import { RiPsychotherapyLine } from "react-icons/ri";
import { AiOutlineAlignCenter, AiOutlineIssuesClose } from "react-icons/ai";
import Image from "next/image";

const features = [
  {
    title: "Landing Page",
    description:
      "Site created for a psychologist who had only one goal... That when people searched for her name, or for psychologists in her region, her site would be displayed. The site scored all averages above 90% on Lighthouse and was extremely well ranked on Google, in addition to being responsive and reflecting the client's visual identity! Made with NextTS + TailwindCSS to maximize the SEO.",
    cta: "Visit",
    image: "/images/psy-landing-page.png",
    path: "https://www.ellen-santos-machado.com.br/",
    icon: <RiPsychotherapyLine />,
  },
  {
    title: "Sintax Game",
    description:
      "Developed when I was in the second phase of college, where I acted as leader, developer, and presenter of the group. The project was designed and developed with one goal - to teach new programmers the importance of writing clean and clear code - The message was conveyed and very well received, bringing elements of gamification, characters, and references to games and college professors.",
    cta: "Visitar",
    image: "/images/sintax-game.png",
    path: "https://sintax-game.netlify.app/",
    icon: <FaGamepad />,
  },
  {
    title: "Ticket System",
    description:
      "Simple project, just to study integration concepts between React + Firebase. Feel free to access and create your account! Just need to provide an email and create a password with at least 7 digits.",
    cta: "Visit",
    image: "/images/sistema-chamados.png",
    path: "https://chamados-sistema.netlify.app/",
    icon: <AiOutlineIssuesClose />,
  },
  {
    title: "Landing Page + Micro SaaS",
    description:
      "Made for a real state agent, this projects starts with only one purpose! Reach more distant clients and expand their business through an effective online presence. This site is able to show his own properties, and with no costs for maintaining it, hosting, or another kind of paid stuff. Is developed with NextTS + TailwindCSS + Firebase + Cloudinary.",
    cta: "Visit",
    image: "/images/daniel-demo.png",
    path: "https://www.imobiliariadanielespindola.com.br/",
    icon: <AiOutlineAlignCenter />,
  },
  {
    title: "More projects on GitHub",
    description:
      "In addition to the frontend projects that are live, also visit my GitHub and take a look, there are over 80 study projects developed from scratch to serve as proof of concept for the technology that was the focus of my studies.",
    cta: "Visit",
    image: "/images/github.png",
    path: "https://github.com/MarcosVinicius556",
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
        <h2>+ of 5 years of experience</h2>
        <p>
          Throughout his journey as a developer, he has participated in the creation of various
          complete solutions — from frontend to backend. He has also worked on legacy systems,
          ensuring maintenance, corrections, improvements, and even modernization processes.
          <br />
          <br />
          Check out some of his projects below that he has developed and that are publicly available for you to explore.
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
