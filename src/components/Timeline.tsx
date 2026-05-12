import { Briefcase, GraduationCap, MapPin, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import { fadeInUp } from '../utils/animations';

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-[#f8f9fa] dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Work <span className="text-purple-600">Experience</span>
        </motion.h2>
        
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Badge & Date - Top Right */}
              <div className="md:absolute top-8 right-8 flex flex-col items-start md:items-end mb-4 md:mb-0 gap-2">
                {item.badge && (
                  <span className="px-4 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold tracking-wide border border-blue-100 dark:border-blue-800/30">
                    {item.badge}
                  </span>
                )}
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.year}
                </div>
              </div>

              {/* Title & Company Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex flex-wrap gap-y-2 gap-x-6">
                  <div className="flex items-center text-gray-700 dark:text-gray-300 font-semibold">
                    <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                    {item.company}
                  </div>
                  {item.location && (
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {item.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Description / Points */}
              <div className="space-y-4">
                {item.points ? (
                  item.points.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-start group/point">
                      <div className="mr-3 mt-2.5 w-4 h-[2px] bg-purple-400 rounded-full group-hover/point:w-6 transition-all duration-300" />
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                        <span className="font-bold text-gray-800 dark:text-gray-200">{point.title}:</span> {point.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start">
                    <div className="mr-3 mt-2.5 w-4 h-[2px] bg-purple-400 rounded-full" />
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}