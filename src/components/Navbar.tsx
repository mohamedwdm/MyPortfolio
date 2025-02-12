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

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-2xl font-bold hover:text-purple-600 text-gray-900 dark:text-white">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9 w-full">
            <div className="flex space-x-9 flex-1 justify-center">

            <a href="#about" className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Projects</a>
            <a href="#resume" className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="text-lg text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-5">
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github className="w-5 h-5" />
              </a> */}
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
              <div>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white" onClick={() => setIsOpen(false)}>About</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#resume" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white" onClick={() => setIsOpen(false)}>Resume</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
              <div className="flex space-x-4 py-2">
              </div>
                {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Github className="w-5 h-5" />
                </a> */}
                <a href="https://www.linkedin.com/in/mohamed-awad-801219345" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:mohamedawad46857@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}