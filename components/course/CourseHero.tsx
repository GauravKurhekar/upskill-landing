"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaStar, FaUsers, FaClock, FaGlobe, FaDatabase, FaCloud } from "react-icons/fa";
import { 
  SiPython, 
  SiApachespark, 
  SiDatabricks
} from "react-icons/si";
import { GraphyCourse } from "@/lib/graphy";
import { useRef } from "react";

interface CourseHeroProps {
  course: GraphyCourse;
}

export default function CourseHero({ course }: CourseHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const techStack = [
    { icon: FaCloud, name: "Azure", color: "#0078D4" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiApachespark, name: "Spark", color: "#E25A1C" },
    { icon: SiDatabricks, name: "Databricks", color: "#FF3621" },
    { icon: FaDatabase, name: "SQL", color: "#CC2927" },
  ];

  return (
    <section ref={ref} className="relative pt-8 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [-25, 25, -25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          style={{ opacity, scale, y }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-md">
                ⭐ Featured Course
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {course.name}
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {course.description}
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm text-gray-600 mb-3 font-medium">Technologies You&apos;ll Master:</p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
                  >
                    <tech.icon className="w-6 h-6 transition-colors" style={{ color: tech.color }} />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                  <FaStar className="w-5 h-5" />
                  <span className="text-2xl font-bold text-gray-900">{course.rating || "4.8"}</span>
                </div>
                <div className="text-gray-600 text-sm">Rating</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaUsers className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">{course.students || "1K"}+</span>
                </div>
                <div className="text-gray-600 text-sm">Students</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaGlobe className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">Online</span>
                </div>
                <div className="text-gray-600 text-sm">Mode</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaGlobe className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">{course.language}</span>
                </div>
                <div className="text-gray-600 text-sm">Language</div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href={`https://www.upskillacademy.co.in/single-checkout/${course.id}?pid=p1`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1kR9AgEYu6oHssxyw4c44Av_Tfxn8-bCm/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Curriculum
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Course Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Course Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <motion.img
                  src={course.thumbnail}
                  alt={course.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Azure+Data+Engineering";
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </div>

              {/* Course Info */}
              <motion.div 
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/64";
                    }}
                  />
                  <div>
                    <div className="text-sm text-gray-500">Instructor</div>
                    <div className="text-lg font-bold text-gray-900">{course.instructor.name}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {course.features.slice(0, 4).map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Price */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Course Price</div>
                      <div className="text-3xl font-bold text-gray-900">
                        ₹24,990
                      </div>
                    </div>
                    <motion.a
                      href={`https://www.upskillacademy.co.in/single-checkout/${course.id}?pid=p1`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enroll →
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
