import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <section aria-labelledby="footer-about">
          <h2 id="footer-about" className={styles.logo}>
            Meu Portfólio
          </h2>
          <p className={styles.description}>
            Desenvolvido com ❤️ usando Next.js, React e CSS Modules.
          </p>
        </section>

        <nav aria-labelledby="footer-links">
          <h3 id="footer-links" className={styles.title}>Links</h3>
          <ul className={styles.list}>
            <li><Link href="#hero">Início</Link></li>
            <li><Link href="#about">Sobre</Link></li>
            <li><Link href="#projects">Projetos</Link></li>
            <li><Link href="#testimonials">Referências</Link></li>
            <li><Link href="#strenghts">Pontos Fortes</Link></li>
            <li><Link href="#socialMedia">Redes</Link></li>
            <li><Link href="#contact">Email</Link></li>
            <li><Link href="#faq">Dúvidas</Link></li>
          </ul>
        </nav>

        <address aria-labelledby="footer-socials" className={styles.address}>
          <h3 id="footer-socials" className={styles.title}>Conecte-se</h3>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/marcos-vinicius-angeli-costa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/MarcosVinicius556" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://www.instagram.com/o_l3on/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://api.whatsapp.com/send?phone=5549998266688&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </address>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} Marcos Vinicios. Todos os direitos reservados.
      </div>
    </footer>
  );
}
