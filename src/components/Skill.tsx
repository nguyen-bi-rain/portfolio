import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Server, Cloud, Database, Wrench, Layers } from 'lucide-react';

const Skill = () => {
    const { t } = useTranslation();

    const skillCategories = [
        {
            title: t('skills.categories.programmingLanguages'),
            icon: <Code2 className="w-5 h-5 text-purple-400" />,
            skills: [
                { name: "C#", level: ".NET 8 / 9" },
                { name: "JavaScript", level: "ES6+" },
                { name: "TypeScript", level: "Strongly Typed" },
                { name: "Python", level: "Scripting / Data" },
                { name: "SQL", level: "Queries & Stored Procedures" },
            ]
        },
        {
            title: t('skills.categories.frameworksLibraries'),
            icon: <Server className="w-5 h-5 text-cyan-400" />,
            skills: [
                { name: ".NET Core", level: "Web APIs & Microservices" },
                { name: "ASP.NET", level: "RESTful Endpoints" },
                { name: "Entity Framework", level: "EF Core ORM" },
                { name: "React", level: "Hooks & SPA Integration" },
                { name: "Node.js", level: "Express APIs" },
                { name: "Express.js", level: "Middleware" }
            ]
        },
        {
            title: t('skills.categories.cloudDevOps'),
            icon: <Cloud className="w-5 h-5 text-emerald-400" />,
            skills: [
                { name: "Azure", level: "App Services & Functions" },
                { name: "AWS", level: "EC2 & S3 Basics" },
                { name: "Docker", level: "Containerization" },
            ]
        },
        {
            title: t('skills.categories.databases'),
            icon: <Database className="w-5 h-5 text-amber-400" />,
            skills: [
                { name: "SQL Server", level: "Indexes & Schema Design" },
                { name: "PostgreSQL", level: "Relational DB" },
                { name: "MongoDB", level: "NoSQL Documents" },
                { name: "Redis", level: "In-Memory Caching" },
                { name: "MySQL", level: "Relational Queries" }
            ]
        },
        {
            title: t('skills.categories.toolsTechnologies'),
            icon: <Wrench className="w-5 h-5 text-rose-400" />,
            skills: [
                { name: "Visual Studio", level: "Primary IDE" },
                { name: "VS Code", level: "Development Tool" },
                { name: "Git", level: "Version Control" },
                { name: "Postman", level: "API Testing & Docs" },
                { name: "Swagger", level: "OpenAPI Spec" },
                { name: "JIRA", level: "Agile Workflow" }
            ]
        },
        {
            title: t('skills.categories.architecturePatterns'),
            icon: <Layers className="w-5 h-5 text-indigo-400" />,
            skills: [
                { name: "Clean Architecture", level: "Onion / Layered" },
                { name: "CQRS", level: "Command Query Separation" },
                { name: "API Design", level: "RESTful Best Practices" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
            }
        }
    };

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
                    <span className="text-slate-100">{t('skills.title1')}</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                        {t('skills.title2')}
                    </span>
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mt-2 font-roboto">
                    {t('skills.description')}
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-2.5 rounded-full shadow-[0_0_10px_#00F0FF]" />
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.title}
                        className="glass-card rounded-xl p-4 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group text-left"
                        variants={categoryVariants}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-slate-800/80">
                            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xs sm:text-sm font-bold font-poppins text-slate-100 group-hover:text-cyan-400 transition-colors">
                                {category.title}
                            </h3>
                        </div>

                        {/* Skills List Badges */}
                        <div className="flex flex-wrap gap-1.5">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-200 text-[11px] font-mono flex items-center gap-1.5 hover:border-emerald-500/50 hover:bg-slate-800/90 transition-all"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    <span className="font-semibold text-slate-100">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Continuous Learning Card */}
            <motion.div
                className="mt-5 sm:mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="glass-card rounded-xl p-3.5 sm:p-4 border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-slate-900/60 to-emerald-950/20 max-w-3xl mx-auto">
                    <h3 className="text-xs sm:text-sm font-mono font-bold text-cyan-400 mb-1 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        {t('skills.continuousLearning.title')}
                    </h3>
                    <p className="text-slate-300 text-[11px] sm:text-xs font-roboto leading-relaxed max-w-2xl mx-auto">
                        {t('skills.continuousLearning.description')}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Skill;

