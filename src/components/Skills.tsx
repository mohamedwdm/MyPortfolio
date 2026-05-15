import { Code, TabletSmartphone, Globe, Server, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skills = [
  {
    category: 'Programming languages',
    icon: Code,
    skills: ['C++', 'Java', 'Python', 'Dart','PHP','JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Mobile App Development & Frontend ',
    icon: TabletSmartphone,
    skills: ['Flutter', 'Dart' ,'Cubit (Bloc)','Responsive UI Design','HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend & DataBase',
    icon: Server,
    skills: ['Laravel','Spring Boot', 'REST APIs' , 'MS SQL Server', 'Firebase', 'Supabase','Hive', 'Database Design', 'Database Management System'],
  },
  {
  category: 'Engineering & Architecture',
  icon: Globe,
  skills: [
    'Clean Architecture',
    'Microservices',
    'SOLID Principles',
    'Design Patterns',
    'OOP',
    'Software Architecture',
    'Agile & Scrum',
    'Problem Solving',
    'System Design'
  ],
},
{
  category: 'Soft Skills',
  icon: Users,
  skills: [
    'Problem-Solving',
    'Team Collaboration',
    'Technical Analysis',
    'Time Management',
    'Communication Skills',
    'Critical Thinking',
    'Adaptability',
    'Leadership',
    'Presentation Skills',
    'Attention to Detail',
    'Fast Learning',
    'Project Coordination'
  ],
},

];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
         My <span className="text-purple-600">Skills</span> 
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}