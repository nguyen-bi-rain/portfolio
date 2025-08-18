import { motion } from "motion/react";
import Profile from '../assets/profile.jpg'



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
          I am a recent IT graduate from the University of Transport and Communications 
          with practical experience in C#, Python, JavaScript, and databases like SQL Server 
          and MySQL. I'm proficient in ASP.NET Core for backend development and have hands-on 
          experience with React.js for frontend integration.
        </p>
        <p className="text-[#E0E0E0] text-lg leading-relaxed font-roboto">
          My long-term career goal is to evolve into a full-stack developer and eventually 
          advance to a senior developer or team leader position, contributing to innovative 
          projects that make a meaningful impact.
        </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;