'use client';

import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './socialMedia.module.css';
import Image from 'next/image';

const panelVariants: Record<'left' | 'right', Variants> = {
  left: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  },
  right: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  },
};

const SocialMedia: React.FC = () => {
  return (
    <section id='socialMedia' className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className={styles.title}>
            Vamos nos conectar! <br /> <br /> Confira minhas redes sociais
          </h2>
        </motion.div>

        <div className={styles.cardsContainer}>
          {[
            {
              key: 'linkedin',
              title: 'Linkedin',
              username: 'Marcos Vinicius Angeli Costa',
              description: 'Conecte-se comigo e acompanhe minha trajetória como engenheiro de software.',
              src: '/images/profile.jpg',
              gradientClass: styles.linkedinGradient,
            },
            {
              key: 'instagram',
              title: 'Instagram',
              username: 'O_l3on',
              description: 'Um mix de tecnologia, games e meu lado mais pessoal. Bora interagir!',
              src: '/images/insta_profile.jpg',
              gradientClass: styles.instagramGradient,
            },
          ].map((social, idx) => (
            <motion.div
              key={social.key}
              className={`${styles.socialMediaPanel} ${social.gradientClass}`}
              variants={idx === 0 ? panelVariants.left : panelVariants.right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3>{social.title}</h3>
              <div className={styles.infoCard}>
                <div className={styles.infoCardDetails}>
                  <Image
                    src={social.src}
                    alt={`Foto de ${social.username}, Engenheiro de Software`}
                    width={150}
                    height={150}
                    className={styles.photo}
                    priority
                    loading="eager"
                  />
                  <p>{social.username}</p>
                  <p className={styles.balance}>{social.description}</p>
                </div>
              </div>
              <div className={styles.goal}>
                <button className={styles.button}>Acessar</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(SocialMedia);
