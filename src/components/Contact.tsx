import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from 'react-i18next';
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins"
        >
          <span className="text-[#1A1A1A]">{t('contact.title1')}</span>{" "}
          <span className="text-[#93BFC7]">{t('contact.title2')}</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-poppins">
              {t('contact.heading')}
            </h3>
            <p className="text-[#4A4A4A] mb-8 font-roboto">
              {t('contact.description')}
            </p>

            <div className="flex gap-6">
              <motion.a
                href="https://github.com/nguyen-bi-rain"
                whileHover={{ scale: 1.2, color: "#93BFC7" }}
                className="text-[#1A1A1A] hover:text-[#93BFC7] transition-colors"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="www.linkedin.com/in/thế-nguyên-vũ"
                whileHover={{ scale: 1.2, color: "#93BFC7" }}
                className="text-[#1A1A1A] hover:text-[#93BFC7] transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="mailto:vunguyenpersonal1605@gmail.com"
                whileHover={{ scale: 1.2, color: "#ABE7B2" }}
                className="text-[#1A1A1A] hover:text-[#ABE7B2] transition-colors"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/50 border-2 border-[#93BFC7]/30 rounded-lg text-[#1A1A1A] placeholder-[#4A4A4A] focus:border-[#93BFC7] focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/50 border-2 border-[#93BFC7]/30 rounded-lg text-[#1A1A1A] placeholder-[#4A4A4A] focus:border-[#93BFC7] focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/50 border-2 border-[#93BFC7]/30 rounded-lg text-[#1A1A1A] placeholder-[#4A4A4A] focus:border-[#93BFC7] focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #93BFC7" }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-[#93BFC7] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#ABE7B2] transition-all duration-300"
            >
              {t('contact.form.submit')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;