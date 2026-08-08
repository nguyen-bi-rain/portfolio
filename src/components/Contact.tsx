import { Github, Linkedin, Mail, Send, Terminal, CheckCircle2 } from "lucide-react";
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
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
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 flex flex-col justify-center text-left">
      {/* Section Header */}
      <motion.div
        className="text-center mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins tracking-tight">
          <span className="text-slate-100">{t('contact.title1')}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            {t('contact.title2')}
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-2.5 rounded-full shadow-[0_0_10px_#00F0FF]" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Heading & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-4 sm:space-y-6"
        >
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-poppins text-slate-100">
              {t('contact.heading')}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-roboto leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="pt-2">
              <span className="text-[10px] sm:text-xs font-mono text-cyan-400 block mb-2 sm:mb-3 uppercase tracking-wider">
                Direct Channels & Profiles
              </span>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/nguyen-bi-rain"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/thế-nguyên-vũ"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>

                <motion.a
                  href="mailto:vunguyenpersonal1605@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-indigo-400 hover:border-indigo-500/40 transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: API-Styled Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            {/* Terminal Route Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  POST
                </span>
                <span className="text-slate-300">/api/v1/contact</span>
              </div>
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Form Container */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-slate-950/40">
              {isSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>HTTP 200 OK: Message dispatched successfully!</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  JSON.stringify(&#123; name &#125;)
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all font-roboto text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  JSON.stringify(&#123; email &#125;)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all font-roboto text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  JSON.stringify(&#123; message &#125;)
                </label>
                <textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all font-roboto text-sm resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold font-mono text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t('contact.form.submit')}</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;