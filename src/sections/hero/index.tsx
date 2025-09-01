// components/Hero.tsx
"use client";

import './hero.css';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id='hero'>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container hero-content">
              <div className="hero-text">
                  <span className="badge">Transformando ideias em soluções reais.</span>
                  <h1>Tecnologia com Propósito<br />Código com Qualidade</h1>
                  <p>
                    Engenheiro de software com + de 5 anos de experiência. Apaixonado por tecnologia e em criar soluções que atendem um propósito.
                    <br/> Transformo ideias em código de qualidade, sempre buscando inovação, aprendizado e impacto positivo.
                  </p>
                  <Link href="#contact" className="btn solid">Agendar conversa</Link>
              </div>
              <div className="hero-image">
                  <Image
                      src="/images/logo.png"
                      alt="Ilustração de pessoas felizes"
                      width={500}
                      height={500}
                      priority
                  />
              </div>
          </motion.div>
        </section>
  );
}
