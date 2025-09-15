import styles from "@/components/skillsCarousel/skillsCarousel.module.css";

const logos = [
  { src: "/logos/java-logo.png", alt: "Java" },
  { src: "/logos/spring-logo.png", alt: "Spring" },
  { src: "/logos/typescript-logo.svg", alt: "TypeScript" },
  { src: "/logos/javascript-logo.png", alt: "JavaScript" },
  { src: "/logos/html-logo.png", alt: "HTML5" },
  { src: "/logos/css-logo.png", alt: "CSS3" },
  { src: "/logos/react-logo.png", alt: "React" },
  { src: "/logos/python-logo.png", alt: "Python" },
  { src: "/logos/postgreSQL-logo.png", alt: "PostgreSQL" },
  { src: "/logos/postman-logo.png", alt: "Postman" },
  { src: "/logos/DB2.png", alt: "DB2" },
];

export default function SkillsCarousel({ rotationDegres }: { rotationDegres: number }) {
  return (
    <div className={styles.wrapper} style={{transform: `rotate(${rotationDegres}deg)`}}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {logos.concat(logos).map((logo, idx) => (
            <div key={idx} className={styles.item}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
