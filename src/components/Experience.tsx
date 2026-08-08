import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
};

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      title: t('experience.softwareEngineer.title'),
      company: t('experience.softwareEngineer.company'),
      period: t('experience.softwareEngineer.period'),
      location: t('experience.softwareEngineer.location'),
      description: t('experience.softwareEngineer.description'),
      tech: ["ASP.NET", "SQL Server", "Node.js", "Golang", "React.js", "Git"],
    },
    {
      title: t('experience.internSoftwareEngineer.title'),
      company: t('experience.internSoftwareEngineer.company'),
      period: t('experience.internSoftwareEngineer.period'),
      location: t('experience.internSoftwareEngineer.location'),
      description: t('experience.internSoftwareEngineer.description'),
      tech: ["ASP.NET Core", "SQL Server", "React.js", "Azure", "Scrum"],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-28 sm:pb-12 flex flex-col justify-center min-h-[calc(100vh-5rem)] text-left">
      {/* Section Header */}
      <motion.div
        className="text-center mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins tracking-tight">
          <span className="text-slate-100">{t('experience.title1')}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            {t('experience.title2')}
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-2.5 rounded-full shadow-[0_0_10px_#00F0FF]" />
      </motion.div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-10 space-y-5 sm:space-y-7">
        {/* Glowing Vertical Line */}
        <div className="absolute left-2 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-indigo-500 shadow-[0_0_8px_#00F0FF]" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + index}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Glowing Marker Dot */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-4 sm:top-5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_#00F0FF] group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />

            {/* Experience Card */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border-b border-slate-800/80 pb-2.5 sm:pb-3">
                <div>
                  <h3 className="text-base sm:text-xl font-bold font-poppins text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    {exp.title}
                  </h3>
                  <p className="text-emerald-400 font-mono font-semibold text-xs sm:text-sm mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-400 font-mono text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-800">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-800">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm font-roboto leading-relaxed">
                {exp.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-900/90 text-cyan-300 text-[11px] font-mono rounded-md border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;