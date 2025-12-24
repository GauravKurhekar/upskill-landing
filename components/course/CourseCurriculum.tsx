"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown, FaPlayCircle, FaFileAlt } from "react-icons/fa";

interface Module {
  id: string;
  title: string;
  order: number;
  lessons: Array<{
    id: string;
    title: string;
    type: string;
    duration?: string;
  }>;
}

interface CourseCurriculumProps {
  modules: Module[];
}

export default function CourseCurriculum({ modules }: CourseCurriculumProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <section id="curriculum" ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Course <span className="text-blue-600">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {modules.length} comprehensive modules covering everything from basics to advanced topics
          </p>
        </motion.div>

        {/* Curriculum Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto space-y-4"
        >
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.03 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{module.order}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {module.title}
                    </h3>
                    {module.lessons.length > 0 && (
                      <p className="text-sm text-gray-500">
                        {module.lessons.length} {module.lessons.length === 1 ? "lesson" : "lessons"}
                      </p>
                    )}
                  </div>
                </div>
                <FaChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    expandedModule === module.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Module Content */}
              {expandedModule === module.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 border-t border-gray-100"
                >
                  {module.lessons.length > 0 ? (
                    <div className="space-y-3 pt-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lesson.id}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {lesson.type === "video" ? (
                            <FaPlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <FaFileAlt className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                          <span className="text-gray-700 flex-1">{lesson.title}</span>
                          {lesson.duration && (
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pt-4 text-gray-500">
                      Module content includes comprehensive lessons and practical exercises
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Want to see the full curriculum details?
          </p>
          <a
            href="#cta"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now to Get Full Access
          </a>
        </motion.div>
      </div>
    </section>
  );
}
