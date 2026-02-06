import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    {id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#93BFC7]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-[#1A1A1A] cursor-pointer hover:text-[#93BFC7] transition-colors duration-300 font-roboto tracking-tight"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-[#1A1A1A]">
              Vũ Thế Nguyên
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 font-roboto tracking-wide group ${
                  activeSection === item.id
                    ? 'text-[#93BFC7]'
                    : 'text-[#4A4A4A] hover:text-[#93BFC7]'
                }`}
              >
                {item.label}
                
                {/* Active indicator */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#93BFC7] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
                
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-[#ABE7B2]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </button>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-medium text-[#0A0A0A] bg-[#93BFC7] rounded-lg hover:bg-[#ABE7B2] transition-all duration-300"
            >
              {i18n.language === 'en' ? 'VI' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-white hover:text-[#00D4FF] focus:outline-none transition-colors duration-300 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/98 backdrop-blur-xl rounded-2xl mt-4 border border-[#93BFC7]/30 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block cursor-pointer w-full text-left px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl font-roboto group ${
                  activeSection === item.id
                    ? 'text-[#93BFC7] bg-[#93BFC7]/10 border-l-4 border-[#93BFC7]'
                    : 'text-[#4A4A4A] hover:text-[#93BFC7] hover:bg-[#ECF4E8]'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : '',
                }}
              >
                <span className="flex items-center">
                  {item.label}
                  {activeSection === item.id && (
                    <span className="ml-auto w-2 h-2 bg-[#93BFC7] rounded-full animate-pulse" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;