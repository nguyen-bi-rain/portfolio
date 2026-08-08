import { ExternalLink, Github, Server, Code, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';
import Booking from '../assets/bookingapp.jpg';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  backend?: string;
  live?: string;
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t('projects.handcraftShop.title'),
      description: t('projects.handcraftShop.description'),
      tech: ["ASP.NET Core", "Reactjs", "SQL Server", "Redux", "Redis cache", "Entity Framework"],
      image: "https://ik.imagekit.io/tvlk/blog/2023/01/go-and-share-trai-nghiem-lam-gom-bat-trang-13.jpg",
      github: "https://github.com/nguyen-bi-rain/CraftShop_FrontEnd",
      backend: "https://github.com/nguyen-bi-rain/CraftShop_Backend",
    },
    {
      title: t('projects.bookingHotel.title'),
      description: t('projects.bookingHotel.description'),
      tech: ["ASP.NET Core", "SQL Server", "Redis", "Kafka", "Nextjs"],
      image: Booking,
      github: "https://github.com/nguyen-bi-rain/DoAnTotNghiep",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-28 sm:pb-12 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
      {/* Section Header */}
      <motion.div
        className="text-center mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins tracking-tight">
          <span className="text-slate-100">{t('projects.title1')}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            {t('projects.title2')}
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-2.5 rounded-full shadow-[0_0_10px_#00F0FF]" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_15px_35px_-10px_rgba(0,240,255,0.25)] transition-all duration-300 flex flex-col text-left group"
          >
            {/* Image Preview Container */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-slate-950">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-90" />
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md text-[10px] font-mono text-cyan-400">
                Backend System Architecture
              </div>
            </div>

            {/* Project Details */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-poppins text-slate-100 mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-roboto leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-900/90 text-cyan-300 text-[11px] font-mono rounded-md border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & Live Links */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 border-t border-slate-800/80">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>Frontend Repo</span>
                  </motion.a>

                  {project.backend && (
                    <motion.a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                      <span>Backend Repo</span>
                    </motion.a>
                  )}

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-slate-300 hover:text-indigo-400 transition-colors ml-auto"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;