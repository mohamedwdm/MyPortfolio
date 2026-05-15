import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import { fadeInUp } from '../utils/animations';

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 bg-[#f6f5ff] dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          My <span className="text-purple-600">Resume</span>
        </motion.h2>

        <motion.div
          className="
            max-w-3xl mx-auto
            bg-white dark:bg-gray-800
            rounded-2xl
            overflow-hidden
            min-h-[300px]
            border border-gray-200/60 dark:border-gray-700/60
            relative
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]
            backdrop-blur-sm
          "
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.01,
            transition: { duration: 0.3 },
          }}
        >
          {/* Optional subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

          <div className="p-8 md:p-12 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Access My Professional Resume
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-center mb-10 text-lg leading-relaxed">
              Explore my professional experience, technical skills, projects,
              certifications, and software engineering journey.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <motion.a
                href="https://drive.google.com/file/d/1DP9aE_KXVfBpm1DxVrDksDE7FkfCC46N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  px-8 py-3.5
                  rounded-full
                  text-white
                  font-semibold
                  bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
                  hover:from-purple-700 hover:via-pink-700 hover:to-blue-700
                  transition-all duration-300
                  shadow-lg shadow-purple-500/20
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View My Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}