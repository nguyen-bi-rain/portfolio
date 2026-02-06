import { Calendar, MapPin } from "lucide-react";
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
      title: t('experience.internSoftwareEngineer.title'),
      company: t('experience.internSoftwareEngineer.company'),
      period: t('experience.internSoftwareEngineer.period'),
      location: t('experience.internSoftwareEngineer.location'),
      description: t('experience.internSoftwareEngineer.description'),
      tech: ["ASP.NET Core", "SQL Server", "React.js", "Azure"],
    },
    {
      title: t('experience.softwareEngineer.title'),
      company: t('experience.softwareEngineer.company'),
      period: t('experience.softwareEngineer.period'),
      location: t('experience.softwareEngineer.location'),
      description: t('experience.softwareEngineer.description'),
      tech: ["ASP.NET", "SQL Server", "Node.js", "Git"],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins"
        >
          <span className="text-[#1A1A1A]">{t('experience.title1')}</span>{" "}
          <span className="text-[#93BFC7]">{t('experience.title2')}</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#93BFC7]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ boxShadow: "0 10px 30px rgba(147, 191, 199, 0.3)" }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline Marker */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-[#93BFC7] rounded-full border-4 border-[#ECF4E8] shadow-lg shadow-[#93BFC7]/50"></div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-[#93BFC7]/30 hover:border-[#93BFC7]/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] font-poppins">
                      {exp.title}
                    </h3>
                    <p className="text-[#ABE7B2] font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-[#4A4A4A] text-sm flex items-center gap-4 mt-2 md:mt-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-[#4A4A4A] mb-4 font-roboto">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#CBF3BB]/20 text-[#CBF3BB] text-sm rounded-full border border-[#CBF3BB]/30"
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
    </section>
  );
};

export default ExperienceSection;