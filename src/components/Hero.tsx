import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
        >
          <span className="text-[#1A1A1A]">{t('hero.title1')}</span>{" "}
          <span className="text-[#ABE7B2]">{t('hero.title2')}</span>{" "}
          <span className="text-[#93BFC7]">{t('hero.title3')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#4A4A4A] mb-8 font-roboto"
        >
          {t('hero.description')} <span className="text-[#ABE7B2]">{t('hero.description2')}</span> {t('hero.description3')}{" "}
          <span className="text-[#93BFC7]">{t('hero.description4')}</span> {t('hero.description5')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #93BFC7" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#93BFC7] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#ABE7B2] transition-all duration-300"
          >
            {t('hero.viewWork')}
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ABE7B2" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#ABE7B2] text-[#ABE7B2] font-semibold rounded-lg hover:bg-[#ABE7B2] hover:text-[#0A0A0A] transition-all duration-300"
          >
            {t('hero.getInTouch')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;