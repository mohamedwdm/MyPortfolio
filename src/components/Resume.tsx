import { motion } from 'framer-motion';
import { /*FileDown,*/ ExternalLink } from 'lucide-react';

import { fadeInUp } from '../utils/animations';



export default function Resume() {


  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
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
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden min-h-[300px]"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Access My Professional Resume
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
              View my complete professional background, skills, and achievements
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href={"https://drive.google.com/file/d/1sOPHVPYTCdtxe3bMhWYAG1r9viE03IPk/view?usp=sharing"}
                target="_blank"
                download
                className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25 dark:shadow-purple-500/10`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View My Resume
              </motion.a>

              {/* <motion.a
                //href={resume.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full text-gray-900 dark:text-white border-2 border-gray-900/10 dark:border-white/20 hover:bg-gray-900/5 dark:hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View in Browser
              </motion.a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}