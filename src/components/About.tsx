import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div>
            <motion.div
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden border-4 border-blue-500"
              variants={fadeInUp}
            >
              <img
                src="/mo4.png"
                alt="Mohamed Awad"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p
              className="text-2xl md:text-2xl text-gray-900 dark:text-gray-100"
              variants={fadeInUp}
            >
              Hi, I'm Mohamed Awad, a passionate Software Engineer specializing
              in Mobile App Development with Flutter.
              With a strong foundation in both mobile and web technologies, I
              create seamless, cross-platform applications that deliver
              exceptional user experiences.
            </motion.p>

            <motion.p
              className="text-2xl md:text-2xl text-gray-900 dark:text-gray-100"
              variants={fadeInUp}
            >
              My expertise spans across Flutter, Dart, Firebase, and various web
              technologies. I'm dedicated to writing clean, efficient code and
              building scalable solutions that solve real-world problems.
              Whether it's developing a complex mobile application or creating
              robust web solutions, I'm always excited to take on new challenges
              and bring innovative ideas to life.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
