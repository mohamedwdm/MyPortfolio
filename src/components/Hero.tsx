import { ArrowDown } from 'lucide-react';
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 via-gray-800 to-black transition-colors duration-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Orbs with enhanced animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute -top-48 -left-48 w-[40rem] h-[40rem] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-[40rem] h-[40rem] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-8">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-sm md:text-base font-medium px-6 py-2 rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl text-white/90 mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)" }}
              transition={{ duration: 0.2 }}
            >
              Mobile & Web Developer
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            variants={fadeInUp}
          >
            <motion.span 
              className="block text-white mb-2"
              variants={fadeInUp}
            >
              Transforming Ideas Into
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2"
              variants={fadeInUp}
            >
              Digital Reality
            </motion.span>
            <motion.span 
              className="block text-white"
              variants={fadeInUp}
            >
              One App at a Time
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide"
            variants={fadeInUp}
          >
            <motion.span 
              className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300"
              whileHover={{ scale: 1.05 }}
            >
              Software Engineer
            </motion.span> {" - "} 
            <motion.span 
              className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300"
              whileHover={{ scale: 1.05 }}
            >
              Flutter Developer
            </motion.span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
            variants={fadeInUp}
          >
            <motion.a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="group relative px-8 py-4 rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium tracking-wide">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group relative px-8 py-4 rounded-full text-white border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium tracking-wide">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="w-6 h-6 text-cyan-500/70 animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}