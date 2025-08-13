import AboutSection from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import ContactSection from "./components/Contact";
import ExperienceSection from "./components/Experience";
import HeroSection from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/Projects";
import Skill from "./components/Skill";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <NavBar />

      <div className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <Skill/>
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/10">
          <p className="text-[#E0E0E0] font-roboto">
            © 2024 Backend Engineer Portfolio. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;