import { ExternalLink, Github } from "lucide-react";
import {motion} from "motion/react";
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
  const projects: Project[] = [
    {
      title: "HandCraft Shop E-commerce",
      description:
        "An e-commerce web application with roles for guest, customer, and admin. Features include JWT token security, Redis caching, product filtering by name and price range, pagination, and account management (password, image). Manage orders and administrator shop CRUD for products, accounts, and orders.",
      tech: ["ASP.NET Core", "Reactjs", "SQL Server", "Redux", "Redis cache", "Entity Framework"],
      image: "https://ik.imagekit.io/tvlk/blog/2023/01/go-and-share-trai-nghiem-lam-gom-bat-trang-13.jpg",
      github: "https://github.com/nguyen-bi-rain/CraftShop_FrontEnd",
      backend : "https://github.com/nguyen-bi-rain/CraftShop_Backend",
      live: "#",
    },
    {
      title: "Booking Hotel",
      description:
        "Full-stack hotel booking platform with personalized search recommendations, user profile management, hotel owner dashboard, and comprehensive admin controls for platform oversight",
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
          <span className="text-white">Featured</span>{" "}
          <span className="text-[#00BFFF]">Projects</span>
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
                boxShadow: "0 20px 40px rgba(255, 20, 147, 0.3)",
              }}
              className="bg-[#1A0A26]/70 rounded-lg overflow-hidden border border-white/10 p-4"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6"></div>
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                {project.title}
              </h3>
              <p className="text-[#E0E0E0] mb-4 font-roboto">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#FF1493]/20 text-[#FF1493] text-sm rounded-full border border-[#FF1493]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  className="text-[#00BFFF] hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                {project.backend && (
                  <motion.a
                    href={project.backend}
                    whileHover={{ scale: 1.1 }}
                    className="text-[#00BFFF] hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}

                {project.live && (
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="text-[#00BFFF] hover:text-white transition-colors"
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