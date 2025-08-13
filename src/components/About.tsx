import { motion } from "motion/react";
import {
  Code,
  Database,
  Server,
  Search,
  Layers,
} from "lucide-react";

import Profile from '../assets/profile.jpg'

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins"
      >
        <span className="text-white">About</span>{" "}
        <span className="text-[#FF1493]">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
        >
        <div className="w-80 h-80 bg-gradient-to-br from-[#FF1493] to-[#00BFFF] rounded-full p-1">
          <div className="w-full h-full bg-[#1A0A26] rounded-full flex items-center justify-center">
          <img
            src={Profile}
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover"
          />
          </div>
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        >
        <p className="text-[#E0E0E0] text-lg leading-relaxed mb-6 font-roboto">
          With over 5 years of experience in backend development, I
          specialize in building high-performance, scalable applications
          using the Microsoft technology stack. My passion lies in
          architecting robust systems that can handle millions of requests
          while maintaining clean, maintainable code.
        </p>
        <p className="text-[#E0E0E0] text-lg leading-relaxed font-roboto">
          I've worked with startups and enterprise companies, delivering
          solutions that drive business growth through efficient data
          processing, caching strategies, and search optimization.
        </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;