import { useState, useEffect } from 'react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    {id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

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
          ? 'bg-gradient-to-br from-[#1A0A26] via-[#0A0A0A] to-[#1A0A26] shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-white cursor-pointer hover:text-[#00D4FF] transition-colors duration-300 font-roboto tracking-tight"
            onClick={() => scrollToSection('hero')}
          >
            <span className="bg-gradient-to-r from-white via-[#00D4FF] to-[#0099CC] bg-clip-text text-transparent">
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
                    ? 'text-white'
                    : 'text-[#B0B0B0] hover:text-white'
                }`}
              >
                {item.label}
                
                {/* Active indicator */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
                
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#0099CC]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </button>
            ))}
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
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-[#1A1A1A]/98 backdrop-blur-xl rounded-2xl mt-4 border border-[#333333]/30 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block cursor-pointer w-full text-left px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl font-roboto group ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-[#00D4FF]/20 to-[#0099CC]/20 border-l-4 border-[#00D4FF]'
                    : 'text-[#B0B0B0] hover:text-white hover:bg-[#333333]/30'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : '',
                }}
              >
                <span className="flex items-center">
                  {item.label}
                  {activeSection === item.id && (
                    <span className="ml-auto w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />
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