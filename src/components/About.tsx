import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';
import Profile from '../assets/profile.jpg'

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins"
      >
        <span className="text-[#1A1A1A]">{t('about.title1')}</span>{" "}
        <span className="text-[#93BFC7]">{t('about.title2')}</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
        >
        <div className="w-80 h-80 bg-[#93BFC7] rounded-full p-1 shadow-lg shadow-[#93BFC7]/30">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
          <img
            src={Profile}
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover"
          />
          </div>
        </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        >
        <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6 font-roboto">
          {t('about.paragraph1')}
        </p>
        <p className="text-[#4A4A4A] text-lg leading-relaxed font-roboto">
          {t('about.paragraph2')}
        </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;