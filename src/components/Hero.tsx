import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
        >
          <span className="text-white">Backend</span>{" "}
          <span className="text-[#FF1493]">Software</span>{" "}
          <span className="text-[#00BFFF]">Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#E0E0E0] mb-8 font-roboto"
        >
          Specializing in <span className="text-[#FF1493]">C#</span> and{" "}
          <span className="text-[#00BFFF]">ASP.NET Core</span> development with expertise in 
          RESTful APIs, Entity Framework, and SQL Server. 
          Experienced in React.js for full-stack solutions, Docker containerization, 
          and cloud deployment on GCP and AWS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #FF1493" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#FF1493] text-white font-semibold rounded-lg hover:bg-[#FF1493]/90 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00BFFF" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-lg hover:bg-[#00BFFF] hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;