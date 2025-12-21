'use client';

import styles from "./footer.module.css";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/useTranslation";

export default function Footer() {

  const translations = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <section aria-labelledby="footer-about">
          <h2 id="footer-about" className={styles.logo}>
            {translations.footer.title}
          </h2>
          <p className={styles.description}>
            {translations.footer.description}
          </p>
        </section>

        <nav aria-labelledby="footer-links">
          <h3 id="footer-links" className={styles.title}>Links</h3>
          <ul className={styles.list}>
            <li><Link href="#hero">{translations.footer.links.home}</Link></li>
            <li><Link href="#about">{translations.footer.links.about}</Link></li>
            <li><Link href="#projects">{translations.footer.links.projects}</Link></li>
            <li><Link href="#testimonials">{translations.footer.links.references}</Link></li>
            <li><Link href="#strenghts">{translations.footer.links.strengths}</Link></li>
            <li><Link href="#socialMedia">{translations.footer.links.social}</Link></li>
            <li><Link href="#contact">{translations.footer.links.contact}</Link></li>
            <li><Link href="#faq">{translations.footer.links.faq}</Link></li>
          </ul>
        </nav>

        <address aria-labelledby="footer-socials" className={styles.address}>
          <h3 id="footer-socials" className={styles.title}>{translations.footer.links.contact}</h3>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/marcos-vinicius-angeli-costa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/MarcosVinicius556" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://www.instagram.com/o_l3on/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://api.whatsapp.com/send?phone=5549998266688&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </address>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Marcos Vinicios. All rights reserved.
      </div>
    </footer>
  );
}
