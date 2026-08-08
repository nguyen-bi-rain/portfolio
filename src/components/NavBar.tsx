import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Code2, Globe } from 'lucide-react';

interface NavBarProps {
  activeSectionId?: string;
  onNavigate?: (index: number) => void;
  sections?: { id: string; number: string; nameKey: string }[];
}

const NavBar = ({ activeSectionId = 'hero', onNavigate, sections }: NavBarProps) => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultNavItems = [
    { id: 'hero', label: t('nav.home'), index: 0 },
    { id: 'about', label: t('nav.about'), index: 1 },
    { id: 'skills', label: t('nav.skills'), index: 2 },
    { id: 'projects', label: t('nav.projects'), index: 3 },
    { id: 'experience', label: t('nav.experience'), index: 4 },
    { id: 'contact', label: t('nav.contact'), index: 5 },
  ];

  const navItems = sections
    ? sections.map((sec, idx) => ({ id: sec.id, label: t(sec.nameKey), index: idx }))
    : defaultNavItems;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = (index: number, id: string) => {
    if (onNavigate) {
      onNavigate(index);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Developer Identity */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick(0, 'hero')}
          >
            <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-poppins text-slate-100 group-hover:text-cyan-400 transition-colors tracking-tight">
                Vũ Thế Nguyên
              </span>
              <span className="text-[10px] font-mono text-emerald-400 tracking-wider">
                BACKEND ENGINEER
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSectionId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.index, item.id)}
                  className={`relative cursor-pointer px-3 py-2 text-sm font-mono tracking-wide transition-all duration-300 group ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  <span className="text-emerald-500 text-xs mr-1">&lt;</span>
                  {item.label}
                  <span className="text-emerald-500 text-xs ml-1">/&gt;</span>

                  {/* Active indicator bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_8px_#00F0FF]" />
                  )}
                </button>
              );
            })}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono text-cyan-300 bg-slate-900/80 border border-cyan-500/30 rounded-lg hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300 shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{i18n.language === 'en' ? 'VI' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-mono text-cyan-300 bg-slate-900 border border-cyan-500/30 rounded"
            >
              {i18n.language === 'en' ? 'VI' : 'EN'}
            </button>
            <button
              className="text-slate-300 hover:text-cyan-400 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl rounded-b-2xl">
            <div className="px-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSectionId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.index, item.id)}
                    className={`block w-full text-left px-4 py-3 text-sm font-mono rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 border-l-4 border-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;