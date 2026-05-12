import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/certifications';
import { fadeInUp } from '../utils/animations';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Certifications & <span className="text-purple-600">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group relative flex flex-col"
            >
              <div className="mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                {cert.title}
              </h3>
              
              <div className="mt-auto">
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mb-4">
                  {cert.date}
                </p>
                
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
