import Hero from "@/sections/Hero";
import SkillsCarousel from "@/components/skillsCarousel";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import SocialMedia from "@/sections/SocialMedia";
import FAQ from "@/sections/Faq";
import Contact from "@/sections/Contact";
import About from "@/sections/About";
import Achivments from "@/sections/Achivments";
import Strengths from "@/sections/Strenghts";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsCarousel rotationDegres={-4} />
      <Projects />
      <Achivments />
      <Testimonials />
      <Strengths />
      <SocialMedia />
      <Contact />
      <FAQ />
    </>
  );
}