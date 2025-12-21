import Strengths from "@/sections/Strenghts";
import { title } from "process";

export default {
  navbar: {
    home: "Home",
    about: "About",
    projects: "Projects",
    certifications: "Certifications",
    references: "References",
    featured: "Featured",
    social: "Social",
    faq: "FAQ",
    contact: "Get in Touch",
  },
  hero: {
    eyebrow: "Software Engineer",
    titleLine1: "Technology with Purpose",
    titleLine2: "Code with Quality",
    primaryCta: "See More",
  },
  about: {
    aboutRole: "Software Engineer",
    aboutTitle: "IT Professional",
    aboutText1: "Marcos Vinicius Angeli Costa is a software engineer passionate about technology and innovation. He has experience in developing modern applications, focusing on performance, scalability, and best practices. Throughout his career, he has worked with different languages, frameworks, and architectures, always seeking to deliver efficient and quality solutions.",
    aboutText2: "Beyond programming, he is an enthusiast of video games, gadgets, and virtual reality — passions that inspire him to explore new ideas and maintain a curious outlook on the future of technology. Combining technical knowledge, creativity, and a good sense of humor, his goal is to turn challenges into opportunities and contribute to projects that truly make a difference."
  },
  projectsSection: {
    title: "+ than 5 years of experience",
    text1: `Throughout his journey as a developer, he has participated in the creation of various
            complete solutions — from frontend to backend. He has also worked on legacy systems,
            ensuring maintenance, corrections, improvements, and even modernization processes.`,
    text2: "Check out some of his projects below that he has developed and that are publicly available for you to explore.",
    projects: {
      projectLandingPage: {
          title: "Landing Page",
          description: "Site created for a psychologist who had only one goal... That when people searched for her name, or for psychologists in her region, her site would be displayed. The site scored all averages above 90% on Lighthouse and was extremely well ranked on Google, in addition to being responsive and reflecting the client's visual identity! Made with NextTS + TailwindCSS to maximize the SEO.",
          cta: "Visit"
        },
        projectSintaxGame: {
          title: "Sintax Game",
          description: "Developed when I was in the second phase of college, where I acted as leader, developer, and presenter of the group. The project was designed and developed with one goal - to teach new programmers the importance of writing clean and clear code - The message was conveyed and very well received, bringing elements of gamification, characters, and references to games and college professors.",
          cta: "Visit"
        },
        projectTicketSystem: {
          title: "Ticket System",
          description: "Simple project, just to study integration concepts between React + Firebase. Feel free to access and create your account! Just need to provide an email and create a password with at least 7 digits.",
          cta: "Visit"
        },
        projectDanielEspindola: {
          title: "Landing Page + Micro SaaS",
          description: "Made for a real state agent, this projects starts with only one purpose! Reach more distant clients and expand their business through an effective online presence. This site is able to show his own properties, and with no costs for maintaining it, hosting, or another kind of paid stuff. Is developed with NextTS + TailwindCSS + Firebase + Cloudinary.",
          cta: "Visit"
        },
        projectGitHub: {
          title: "More projects on GitHub",
          description: "In addition to the frontend projects that are live, also visit my GitHub and take a look, there are over 80 study projects developed from scratch to serve as proof of concept for the technology that was the focus of my studies.",
          cta: "Visit"
        }
    }
  },
  achivments: {
    title: "Courses & Certifications",
    cards: {
      java: {
        title: "Java",
        description: "Java COMPLETE 2023/2024 Object-Oriented Programming + Projects."
      },
      react: {
        title: "React",
        description: "React JS from zero to advanced in practice."
      },
      typescript: {
        title: "TypeScript",
        description: "TypeScript from basics to advanced (with React, Express)."
      },
      javaMicroservices: {
        title: "Java Microservices",
        description: "Java Microservices with Spring Boot and Spring Cloud."
      },
      englishB1: {
        title: "English",
        description: "Intermediate level B1."
      },
      englishB2: {
        title: "English",
        description: "Upper-intermediate level B2."
      },
      informationSystems: {
        title: "Information Systems",
        description: "Bachelor's degree in Information Systems."
      },
      microservicesMessaging: {
        title: "Microservices and Messaging",
        description: "Mastering Microservices and Messaging with Spring Cloud and Docker."
      },
      aks: {
        title: "Azure Kubernetes Service",
        description: "Container orchestration on AKS."
      }
    }
  },
  testimonials: {
    title: "What colleagues and collaborators highlight about my professional performance",
    subtitle: "References",
    card: [
      {
        name: "Worked together at Grupo Casas Bahia",
        title: "Technical Lead | Specialist I",
        content:
          "Working with Marcos is always a differential, not only for me, who collaborates with him daily, but also for other squads. When people see his work, it's clear that he is someone who gets things done without dwelling on obstacles. I can say with certainty that he is a professional with great attention to detail, collaborative, and with strong technical skills in both backend and frontend, as well as a well-developed systems architecture vision — something that makes a big difference in our day-to-day work.",
        bgColor: "#2E3A59"
      },
      {
        name: "Worked together at Grupo Casas Bahia",
        title: "Specialist II",
        content:
          "He demonstrated dedication, attention to detail, and a strong desire to grow. He took on responsibilities and faced challenges beyond expectations, always with commitment and excellence. He is building a promising path, surpassing all expectations. The future holds great achievements — keep it up!",
        bgColor: "#2E5D34"
      },
      {
        name: "Worked together at Neomind",
        title: "Software Engineer II",
        content:
          "Marcos is great to work with. He has strong knowledge in best practices, Java, SQL, Hibernate, among other technologies. He is dedicated, attentive, and having him on the team is a real advantage.",
        bgColor: "#5A3942"
      },
      {
        name: "Worked together at HojeApp",
        title: "Technical Lead | Specialist I",
        content:
          "Marcos is an exceptional professional. He solves complex problems in a practical way and stands out for his communication skills. He is also an excellent team player — focused, committed to his work, and quick to absorb new knowledge.",
        bgColor: "#4A3138"
      },
      {
        name: "Worked together at Grupo Casas Bahia",
        title: "Specialist I",
        content:
          "Marcos Vinicius is an exemplary professional. In addition to being consistent in meetings, he demonstrated admirable technical skills, always proactive in proposing solutions. He also shows remarkable social abilities, being helpful and maintaining great interaction with the team.",
        bgColor: "#8A5E00"
      },
      {
        name: "Worked together at Grupo Casas Bahia",
        title: "Specialist I - Frontend",
        content: `I worked with Marcos on some front-end projects and it was a very positive experience. He always showed a lot of willingness to learn and solve challenges, as well as being proactive in day-to-day activities.
                  I used to mention an idea or possible approach and, shortly after, he would come up with a POC or functional prototype. This shows not only initiative but also an ability to turn concepts into results quickly.
                  Furthermore, he always maintained a resilient, open-to-feedback, and collaborative attitude, which made a difference in the quality of the deliveries. I really enjoy working with him and have full confidence that he can contribute to any development team.`
      }
    ]
  },
  strengths: {
    title: "SOFT SKILLS",
    resilient: {
      title: "Resilient",
      description: "Maintains focus and determination even when facing challenges, always finding ways to adapt and overcome obstacles."
    },
    teamwork: {
      title: "Teamwork",
      description: "Values collaboration, contributes to collective growth, and strengthens a cooperative environment among colleagues."
    },
    timeManagement: {
      title: "Time Management",
      description: "Efficiently manages priorities, ensuring balance between productivity, deadlines, and quality of deliverables."
    },
    persistent: {
      title: "Persistent",
      description: "Does not give up easily, sees difficulties as learning opportunities, and remains committed until goals are achieved."
    },
    proactive: {
      title: "Proactive",
      description: "Anticipates needs, proposes practical solutions, and constantly seeks ways to improve processes and results."
    },
    investigative: {
      title: "Investigative",
      description: "Demonstrates constructive curiosity, explores new ideas, and deeply researches topics to innovate and evolve."
    }
  },
  social: {
    title: "Let's connect!",
    subtitle: "Check out my social media profiles.",
    cta: 'Access',
    card: {
      linkedin: {
        description: 'Get in touch with me and follow my journey as a software engineer.'
      },
      instagram: {
        description: "A mix of technology, games, and my more personal side. Let's interact!"
      }
    }
  },
  contact: {
    title: "If you prefer a more formal contact, feel free to reach out via email.",
    cta: 'Send Email',
    ctaLoading: 'Sending...',
    placeholders: {
      name: "Full Name *",
      email: "Your best email *",
      phone: "Phone number (WhatsApp)",
      message: "Would you like to send me a preview of what you'd like to discuss?"
    }
  },
  faq: {
    title: 'FREQUENTLY ASKED QUESTIONS',
    questions: [
      {
        question: "Which technologies do you currently master?",
        answer: "Works as a full-stack developer using Java, Spring Boot, TypeScript, ReactJS/TS and NextJS/TS. Also has experience with databases, REST APIs, legacy systems and modernization processes. Enjoys exploring new tools and keeping knowledge always up to date."
      },
      {
        question: "What was the biggest challenge you've faced in your career?",
        answer: "One of the biggest challenges was modernizing complex legacy systems while ensuring everything continued running smoothly for users, introducing performance improvements and new features at the same time. It was a valuable learning experience about architecture, testing and risk management."
      },
      {
        question: "Which projects do you consider most significant in your journey?",
        answer: "Highlights projects involving system integration and automation, as well as web applications that directly improved team productivity. Also had the opportunity to work on innovative solutions that combined technology with user experience."
      },
      {
        question: "What inspires and motivates you as a professional?",
        answer: "Driven by the opportunity to transform ideas into real and efficient solutions. Technology combined with creativity inspires continuous learning, problem-solving and knowledge sharing. And of course, the fun side of innovation—like exploring games and VR—keeps the energy high!"
      }
    ]
  },
  footer: {
    title: "My Portfolio",
    description: "Developed with ❤️ using Next.js, React, and CSS Modules.",
    links: {
      home: "Home",
      about: "About",
      projects: "Projects",
      certifications: "Certifications",
      strengths: "Soft Skills",
      references: "References",
      featured: "Featured",
      social: "Social",
      faq: "FAQ",
      contact: "Get in Touch",
    },
  }
};