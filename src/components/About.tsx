import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';
import { ShieldCheck, GraduationCap, Code, Layers } from "lucide-react";
import Profile from '../assets/profile.webp';

const AboutSection = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      title: "Backend Focus",
      desc: "ASP.NET Core & C#",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Education",
      desc: "UTC IT Graduate",
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Architecture",
      desc: "Clean & CQRS Patterns",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-28 sm:pb-12 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins tracking-tight">
          <span className="text-slate-100">{t('about.title1')}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            {t('about.title2')}
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-2.5 rounded-full shadow-[0_0_10px_#00F0FF]" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Column: Avatar Profile with Glowing Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Animated Glow Halo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-500 opacity-70 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse" />
            
            {/* Profile Avatar Container */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-full p-1 bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src={Profile}
                alt="Vũ Thế Nguyên - Backend Engineer"
                className="w-full h-full rounded-full object-cover filter saturate-105 contrast-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative & Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-4 text-left"
        >
          {/* Main Bio Container */}
          <div className="glass-card rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-3">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-roboto">
              {t('about.paragraph1')}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-roboto">
              {t('about.paragraph2')}
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-card p-3.5 rounded-xl border border-slate-800/80 flex flex-col gap-1.5 hover:border-cyan-500/40 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 w-fit border border-slate-800">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs sm:text-sm font-semibold font-poppins text-slate-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;