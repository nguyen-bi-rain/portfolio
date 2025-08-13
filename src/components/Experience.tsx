import { Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Intern Software Engineer",
      company: "NashTech VietNam",
      period: "03 - 2025 -> 06 - 2025",
      location: "Hanoi, Vietnam",
      description:
        "Participated in structured .NET/React.js training program. Contributed as full-stack developer in 6-member team, implementing 30% of project deliverables using ASP.NET Core and React.js. Applied Agile Scrum methodology and gained experience with Git, CI/CD, and cloud deployment.",
      tech: ["ASP.NET Core", "SQL Server", "Reactjs", "Azure"],
    },
    // {
    //   title: "Backend Developer",
    //   company: "DataFlow Systems",
    //   period: "2020 - 2022",
    //   location: "San Francisco, CA",
    //   description:
    //     "Built real-time data processing pipelines and RESTful APIs. Optimized database queries improving performance by 40%.",
    //   tech: ["C#", "Elasticsearch", "SQL Server", "Azure"],
    // },
    // {
    //   title: "Software Developer",
    //   company: "StartupXYZ",
    //   period: "2019 - 2020",
    //   location: "New York, NY",
    //   description:
    //     "Developed MVP backend systems and integrated third-party APIs. Established CI/CD pipelines and testing frameworks.",
    //   tech: ["ASP.NET", "SQL Server", "Redis", "Git"],
    // },
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
          <span className="text-white">Work</span>{" "}
          <span className="text-[#FF1493]">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF1493] to-[#00BFFF]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ boxShadow: "0 10px 30px rgba(0, 191, 255, 0.3)" }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline Marker */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-[#00BFFF] rounded-full border-4 border-[#0A0A0A] shadow-lg shadow-[#00BFFF]/50"></div>

              <div className="bg-[#1A0A26]/70 p-6 rounded-lg border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins">
                      {exp.title}
                    </h3>
                    <p className="text-[#FF1493] font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-[#E0E0E0] text-sm flex items-center gap-4 mt-2 md:mt-0">
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

                <p className="text-[#E0E0E0] mb-4 font-roboto">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] text-sm rounded-full border border-[#00BFFF]/30"
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