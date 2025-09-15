import Hero from "@/sections/hero";
import SkillsCarousel from "@/components/skillsCarousel";
import Projects from "@/sections/projects";
import Testimonials from "@/sections/testimonials";
import SocialMedia from "@/sections/socialMedia";
import FAQ from "@/sections/faq";
import Contact from "@/sections/Contact";
import About from "@/sections/about";
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