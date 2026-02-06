import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skill = () => {
    const { t } = useTranslation();
    const skillCategories = [
        {
            title: t('skills.categories.programmingLanguages'),
            icon: "💻",
            skills: [
                { name: "C#", color: "from-[#239120] to-[#68217A]" },
                { name: "JavaScript", color: "from-[#F7DF1E] to-[#E8B429]" },
                { name: "TypeScript", color: "from-[#3178C6] to-[#1E5299]" },
                { name: "Python", color: "from-[#3776AB] to-[#FFD43B]" },
                { name: "SQL", color: "from-[#336791] to-[#1E4D5F]" },
            ]
        },
        {
            title: t('skills.categories.frameworksLibraries'),
            icon: "⚡",
            skills: [
                { name: ".NET Core", color: "from-[#512BD4] to-[#7B68EE]" },
                { name: "ASP.NET", color: "from-[#0078D4] to-[#00BCF2]" },
                { name: "Entity Framework", color: "from-[#1BA1E2] to-[#00A1F1]" },
                { name: "React", color: "from-[#61DAFB] to-[#21B1C7]" },
                { name: "Node.js", color: "from-[#339933] to-[#6CC24A]" },
                { name: "Express.js", color: "from-[#000000] to-[#404040]" }
            ]
        },
        {
            title: t('skills.categories.cloudDevOps'),
            icon: "☁️",
            skills: [
                { name: "Azure", color: "from-[#0078D4] to-[#00BCF2]" },
                { name: "AWS", color: "from-[#FF9900] to-[#FF6B35]" },
                { name: "Docker", color: "from-[#2496ED] to-[#0DB7ED]" },
            ]
        },
        {
            title: t('skills.categories.databases'),
            icon: "🗄️",
            skills: [
                { name: "SQL Server", color: "from-[#CC2927] to-[#A91E22]" },
                { name: "PostgreSQL", color: "from-[#336791] to-[#1E4D5F]" },
                { name: "MongoDB", color: "from-[#47A248] to-[#3FA037]" },
                { name: "Redis", color: "from-[#DC382D] to-[#B32821]" },
                { name: "MySQL", color: "from-[#4479A1] to-[#00618A]" }
            ]
        },
        {
            title: t('skills.categories.toolsTechnologies'),
            icon: "🛠️",
            skills: [
                { name: "Visual Studio", color: "from-[#5C2D91] to-[#7B68EE]" },
                { name: "VS Code", color: "from-[#007ACC] to-[#0078D4]" },
                { name: "Git", color: "from-[#F05032] to-[#E8563A]" },
                { name: "Postman", color: "from-[#FF6C37] to-[#FF4500]" },
                { name: "Swagger", color: "from-[#85EA2D] to-[#6FCF1F]" },
                { name: "JIRA", color: "from-[#0052CC] to-[#2684FF]" }
            ]
        },
        {
            title: t('skills.categories.architecturePatterns'),
            icon: "🏗️",
            skills: [
                { name: "Clean Architecture", color: "from-[#68217A] to-[#9A4993]" },
                { name: "CQRS", color: "from-[#FF6B35] to-[#E8563A]" },
                { name: "API Design", color: "from-[#0078D4] to-[#00BCF2]" }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section className="py-20 px-6 ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold text-[#1A1A1A] mb-6 font-roboto">
                        {t('skills.title1')} <span className="text-[#93BFC7]">{t('skills.title2')}</span>
                    </h2>
                    <p className="text-[#4A4A4A] text-lg max-w-3xl mx-auto font-roboto leading-relaxed">
                        {t('skills.description')}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-[#93BFC7]/30 hover:border-[#93BFC7]/50 hover:shadow-lg transition-all duration-300 group"
                            variants={categoryVariants as any}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center mb-8">
                                <span className="text-3xl mr-4">{category.icon}</span>
                                <h3 className="text-2xl font-bold text-[#1A1A1A] font-roboto group-hover:text-[#93BFC7] transition-colors duration-300">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item"
                                        variants={skillVariants as any}
                                        custom={skillIndex}
                                    >
                                        <div className="flex items-center">
                                            <div className="w-4 h-4 bg-[#93BFC7] rounded-full mr-3 shadow-sm shadow-[#93BFC7]/50"></div>
                                            <span className="text-[#1A1A1A] font-medium font-roboto text-lg">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="bg-[#93BFC7]/10 rounded-2xl p-8 border border-[#93BFC7]/30">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-roboto">
                            {t('skills.continuousLearning.title')}
                        </h3>
                        <p className="text-[#4A4A4A] font-roboto leading-relaxed max-w-2xl mx-auto">
                            {t('skills.continuousLearning.description')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skill;
