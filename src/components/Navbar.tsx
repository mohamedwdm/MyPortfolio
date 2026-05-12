import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Database } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Certifications', href: 'certifications' },
    { name: 'Resume', href: 'resume' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#f7f6ff]/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 ${
      isScrolled ? 'py-2 shadow-lg' : 'py-4 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center space-x-2 group"
          >
            <div className="p-1.5 bg-indigo-600 rounded-lg text-white group-hover:bg-indigo-700 transition-colors">
              <Database className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              <span className="text-indigo-600 font-black">&lt;</span>
              <span className="mx-1">MY Portfolio</span>
              <span className="text-indigo-600 font-black">/&gt;</span>
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center px-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.href}`} 
                onClick={(e) => scrollToSection(e, link.href)} 
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Icons & Theme Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
              
              <a href="https://github.com/mohamedwdm" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-awad-801219345" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:mohamedawad46857@gmail.com" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-4 absolute left-4 right-4 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={`#${link.href}`} 
                  onClick={(e) => scrollToSection(e, link.href)} 
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800 flex justify-around">
                <a href="https://github.com/mohamedwdm" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600"><Github className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/mohamed-awad-801219345" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600"><Linkedin className="w-6 h-6" /></a>
                <a href="mailto:mohamedawad46857@gmail.com" className="p-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600"><Mail className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}