import { ExternalLink, Github } from "lucide-react";
import {motion} from "motion/react";
import { useTranslation } from 'react-i18next';
type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  backend?: string;
  live?: string;
};
import Booking from '../assets/bookingapp.jpg';
const ProjectsSection = () => {
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      title: t('projects.handcraftShop.title'),
      description: t('projects.handcraftShop.description'),
      tech: ["ASP.NET Core", "Reactjs", "SQL Server", "Redux", "Redis cache", "Entity Framework"],
      image: "https://ik.imagekit.io/tvlk/blog/2023/01/go-and-share-trai-nghiem-lam-gom-bat-trang-13.jpg",
      github: "https://github.com/nguyen-bi-rain/CraftShop_FrontEnd",
      backend : "https://github.com/nguyen-bi-rain/CraftShop_Backend",
      live: "#",
    },
    {
      title: t('projects.bookingHotel.title'),
      description: t('projects.bookingHotel.description'),
      tech: ["ASP.NET Core", "SQL Server", "Redis", "Kafka", "Nextjs"],
      image: Booking,
      github: "https://github.com/nguyen-bi-rain/DoAnTotNghiep",
    },
    
    // {
    //   title: "Document Management System",
    //   description:
    //     "Enterprise document processing system with full-text search and automated workflows",
    //   tech: ["ASP.NET", "Elasticsearch", "Azure Blob", "Redis"],
    //   image: "/placeholder.svg?height=200&width=300",
    //   github: "#",
    //   live: "#",
    // },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins"
        >
          <span className="text-[#1A1A1A]">{t('projects.title1')}</span>{" "}
          <span className="text-[#93BFC7]">{t('projects.title2')}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(147, 191, 199, 0.3)",
              }}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden border border-[#93BFC7]/30 hover:border-[#93BFC7]/50 transition-all duration-300 p-4"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6"></div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 font-poppins">
                {project.title}
              </h3>
              <p className="text-[#4A4A4A] mb-4 font-roboto">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#CBF3BB]/20 text-[#CBF3BB] text-sm rounded-full border border-[#CBF3BB]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  className="text-[#93BFC7] hover:text-[#1A1A1A] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                {project.backend && (
                  <motion.a
                    href={project.backend}
                    whileHover={{ scale: 1.1 }}
                    className="text-[#93BFC7] hover:text-[#1A1A1A] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}

                {project.live && (
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="text-[#93BFC7] hover:text-[#1A1A1A] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;