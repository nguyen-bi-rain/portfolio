import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';
import { Terminal, Cpu, Database, Server, ChevronDown, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onExplore?: () => void;
  onContact?: () => void;
}

const HeroSection = ({ onExplore, onContact }: HeroSectionProps) => {
  const { t } = useTranslation();

  const techBadges = [
    { label: "C# / .NET Core 9", icon: <Cpu className="w-3.5 h-3.5 text-purple-400" /> },
    { label: "ASP.NET Core", icon: <Server className="w-3.5 h-3.5 text-cyan-400" /> },
    { label: "SQL Server & Redis", icon: <Database className="w-3.5 h-3.5 text-emerald-400" /> },
    { label: "Microservices & Docker", icon: <Terminal className="w-3.5 h-3.5 text-indigo-400" /> },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-28 sm:pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
      <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Heading & Tech Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-7 space-y-5 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
            <span>OPEN FOR BACKEND & FULLSTACK ROLES</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-slate-100 tracking-tight leading-tight">
            <span>{t('hero.title1')}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t('hero.title2')}
            </span>{" "}
            <span className="text-cyan-400">{t('hero.title3')}</span>
          </h1>

          {/* Summary Description */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-roboto leading-relaxed max-w-2xl">
            {t('hero.description')} <span className="text-emerald-400 font-semibold">{t('hero.description2')}</span> {t('hero.description3')}{" "}
            <span className="text-cyan-400 font-semibold">{t('hero.description4')}</span> {t('hero.description5')}
          </p>

          {/* Core Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {techBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-[11px] sm:text-xs font-mono hover:border-cyan-500/40 transition-colors"
              >
                {badge.icon}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-3">
            <motion.button
              onClick={onExplore}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold font-mono text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all cursor-pointer"
            >
              <span>{t('hero.viewWork')}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={onContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-slate-900/90 text-cyan-300 font-bold font-mono text-xs sm:text-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800/90 transition-all shadow-sm cursor-pointer"
            >
              {t('hero.getInTouch')}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Interactive Backend Terminal Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-5 w-full hidden sm:block"
        >
          <div className="glass-card rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-left">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-[10px]">BackendEngineerController.cs</span>
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Code Body */}
            <div className="p-4 space-y-2 bg-slate-950/60 leading-relaxed text-slate-300 overflow-x-auto text-[11px]">
              <p><span className="text-purple-400">using</span> Microsoft.AspNetCore.Mvc;</p>
              <p><span className="text-purple-400">using</span> System.Threading.Tasks;</p>
              <br />
              <p><span className="text-cyan-400">[ApiController]</span></p>
              <p><span className="text-cyan-400">[Route]</span>(<span className="text-emerald-300">"api/v1/engineer"</span>)</p>
              <p><span className="text-purple-400">public class</span> <span className="text-amber-300">NguyenController</span> : <span className="text-blue-400">ControllerBase</span></p>
              <p className="pl-4">&#123;</p>
              <p className="pl-8 text-slate-400">// Core stack initialization</p>
              <p className="pl-8"><span className="text-purple-400">private readonly</span> <span className="text-cyan-300">IStack</span> _stack = <span className="text-purple-400">new</span> <span className="text-amber-300">DotNetStack</span>();</p>
              <br />
              <p className="pl-8"><span className="text-cyan-400">[HttpGet(</span><span className="text-emerald-300">"profile"</span><span className="text-cyan-400">)]</span></p>
              <p className="pl-8"><span className="text-purple-400">public async</span> <span className="text-blue-400">Task</span>&lt;<span className="text-amber-300">IActionResult</span>&gt; <span className="text-emerald-400">GetProfile</span>()</p>
              <p className="pl-8">&#123;</p>
              <p className="pl-12"><span className="text-purple-400">return</span> <span className="text-emerald-400">Ok</span>(<span className="text-purple-400">new</span> &#123;</p>
              <p className="pl-16">Developer = <span className="text-emerald-300">"Vũ Thế Nguyên"</span>,</p>
              <p className="pl-16">Role = <span className="text-emerald-300">"Software Engineer"</span>,</p>
              <p className="pl-16">Specialties = <span className="text-purple-400">new</span>[] &#123; <span className="text-emerald-300">"C#"</span>, <span className="text-emerald-300">"ASP.NET"</span>, <span className="text-emerald-300">"SQL"</span> &#125;,</p>
              <p className="pl-16">Status = <span className="text-emerald-300">"Ready for Production"</span></p>
              <p className="pl-12">&#125;);</p>
              <p className="pl-8">&#125;</p>
              <p className="pl-4">&#125;</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Down Arrow Scroll Prompt Indicator */}
      <motion.button
        onClick={onExplore}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-6 sm:mt-8 p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 hover:border-cyan-400 transition-colors focus:outline-none cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>
    </div>
  );
};

export default HeroSection;