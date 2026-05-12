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
      className="min-h-screen flex items-center justify-center relative bg-[#f6f5ff] dark:bg-[#0f0f1a] transition-colors duration-200 overflow-hidden py-10"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Profile Image - Compact */}
        <motion.div
          className="relative inline-block mb-4"
          variants={fadeInUp}
        >
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 rounded-full blur opacity-50" />
          <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white dark:border-gray-900 shadow-xl">
            <img
              src="/mo4.png"
              alt="Mohamed Awad"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-center font-outfit" variants={fadeInUp}>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="h-px w-6 bg-purple-600"></span>
            <span className="text-purple-600 font-bold tracking-[0.2em] text-[15px] uppercase">Welcome to my world</span>
            <span className="h-px w-6 bg-purple-600"></span>
          </motion.div>

          <div className="relative mb-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] flex flex-col items-center">
              <span className="flex overflow-hidden">
                {"Mohamed".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, rotate: i % 2 === 0 ? 5 : -5 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.03 + 0.2, type: "spring" }}
                    className="inline-block text-[#1a1a1a] dark:text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="flex overflow-hidden -mt-1">
                {"Awad".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, rotate: i % 2 === 0 ? -5 : 5 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.04 + 0.4, type: "spring" }}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:to-blue-400"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          <motion.div
            className="bg-gray-900/5 dark:bg-white/5 backdrop-blur-sm px-5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 mb-4"
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
              Software Engineer & Mobile Developer
            </h3>
          </motion.div>

          <p className="mb-6 text-sm md:text-base font-normal text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-inter">
            I'm passionate about building robust and efficient systems, focusing on both
            <span className="text-purple-600 font-semibold italic"> Frontend</span> and 
            <span className="text-blue-600 font-semibold italic"> Backend</span> development with strong software engineering fundamentals.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {/* View My Resume Button - Pulsing/Floating */}
          <motion.a
            href="#resume"
            onClick={(e) => scrollToSection(e, 'resume')}
            animate={{ 
              y: [0, -5, 0],
              boxShadow: [
                "0 10px 15px -3px rgba(147, 51, 234, 0.3)",
                "0 20px 25px -5px rgba(147, 51, 234, 0.5)",
                "0 10px 15px -3px rgba(147, 51, 234, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="group relative px-10 py-3 rounded-full text-white font-bold text-lg overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600" />
            
            {/* Automatic Shimmer Effect */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" 
            />
            
            <span className="relative z-10 flex items-center gap-2">
              View My Resume 
            </span>
          </motion.a>
          
          {/* Contact Me Button - Breathing Glow */}
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="group relative px-10 py-3 rounded-full text-gray-900 dark:text-white font-bold text-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-[2px] bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-sm" 
            />
            <div className="absolute inset-0 border-2 border-purple-200 dark:border-purple-900/30 rounded-full" />
            <span className="relative z-10">Contact Me</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}