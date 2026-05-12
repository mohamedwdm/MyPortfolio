import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-[#f6f5ff] dark:bg-[#0f0f1a] transition-colors duration-200 overflow-hidden pt-20"
    >      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Profile Image with Border */}
        <motion.div
          className="relative inline-block mb-8"
          variants={fadeInUp}
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 rounded-full blur opacity-75 animate-pulse" />
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
            <img
              src="/mo4.png"
              alt="Mohamed Awad"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-center font-outfit" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a1a] dark:text-white">
            Hi, I'm
          </h2>

          <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:to-blue-400 -mt-1">
            Mohamed Awad
          </h1>

          <h3 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mt-8 tracking-wide">
            Software Engineer & Mobile Developer
          </h3>

          <p className="mt-8 text-lg md:text-xl font-normal text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light font-inter">
            I'm passionate about building robust and efficient systems, focusing on both
            Frontend and Backend development with strong software engineering fundamentals.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <motion.a
            href="#resume"
            onClick={(e) => scrollToSection(e, 'resume')}
            className="px-8 py-3.5 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-purple-500/25 font-semibold text-lg min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Resume
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-8 py-3.5 rounded-full text-gray-900 dark:text-white border-2 border-purple-200 dark:border-purple-900/30 hover:border-purple-600 dark:hover:border-purple-500 transition-all duration-300 font-semibold text-lg min-w-[200px] backdrop-blur-sm shadow-sm hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}