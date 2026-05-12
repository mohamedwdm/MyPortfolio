import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectModal from "./ProjectModal";
import type { ProjectItem } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured  <span className="text-purple-600">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay with Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-outfit">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed line-clamp-3">
                  {project.breif}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-[12px] font-medium border border-purple-100 dark:border-purple-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
