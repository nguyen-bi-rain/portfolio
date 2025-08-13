import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState, type ChangeEvent, type FormEvent } from "react";
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
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
          <span className="text-white">Get In</span>{" "}
          <span className="text-[#00BFFF]">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-[#E0E0E0] mb-8 font-roboto">
              I'm always interested in discussing new opportunities, challenging
              projects, or just having a chat about technology.
            </p>

            <div className="flex gap-6">
              <motion.a
                href="https://github.com/nguyen-bi-rain"
                whileHover={{ scale: 1.2, color: "#FF1493" }}
                className="text-white hover:text-[#FF1493] transition-colors"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="www.linkedin.com/in/thế-nguyên-vũ"
                whileHover={{ scale: 1.2, color: "#00BFFF" }}
                className="text-white hover:text-[#00BFFF] transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="mailto:vunguyenpersonal1605@gmail.com"
                whileHover={{ scale: 1.2, color: "#FF1493" }}
                className="text-white hover:text-[#FF1493] transition-colors"
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
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-white/20 rounded-lg text-white placeholder-[#E0E0E0] focus:border-[#FF1493] focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-white/20 rounded-lg text-white placeholder-[#E0E0E0] focus:border-[#00BFFF] focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-transparent border-2 border-white/20 rounded-lg text-white placeholder-[#E0E0E0] focus:border-[#FF1493] focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00BFFF" }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#FF1493] to-[#00BFFF] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;