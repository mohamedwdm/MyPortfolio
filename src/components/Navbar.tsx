import { Menu, X, /*Github,*/ Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="text-2xl font-bold hover:text-purple-600 text-gray-900 dark:text-white"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9 w-full">
            <div className="flex space-x-9 flex-1 justify-center">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">About</a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Skills</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Projects</a>
              <a href="#resume" onClick={(e) => scrollToSection(e, 'resume')} className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Resume</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-5">
              <a href="https://www.linkedin.com/in/mohamed-awad-801219345" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:mohamedawad46857@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
              <div className="flex flex-col space-y-2">
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
                <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Skills</a>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Projects</a>
                <a href="#resume" onClick={(e) => scrollToSection(e, 'resume')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Resume</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
                <div className="flex space-x-4 px-3 py-2">
                  <a href="https://www.linkedin.com/in/mohamed-awad-801219345" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:mohamedawad46857@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}