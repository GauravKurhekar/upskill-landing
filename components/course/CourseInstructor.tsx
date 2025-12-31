"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaAward, FaStar, FaCertificate } from "react-icons/fa";

interface Instructor {
  name: string;
  image: string;
}

interface CourseInstructorProps {
  instructor: Instructor;
}

export default function CourseInstructor({ instructor }: CourseInstructorProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your <span className="text-blue-600">Instructor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from an experienced industry professional
          </p>
        </motion.div>

        {/* Instructor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Quote */}
                  <div className="relative">
                    <div className="text-6xl text-blue-600 opacity-20 absolute -top-4 -left-2">&ldquo;</div>
                    <p className="text-xl text-gray-700 italic relative z-10 pl-6">
                      I explain things in a way you can actually understand. My goal is to make
                      complex data engineering concepts simple and practical for everyone.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Experience & Expertise</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FaStar className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">10+ years in Data Engineering</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCertificate className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Microsoft & Databricks Certified</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaAward className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">100+ Students Mentored</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaStar className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Real-world project experience at top companies</span>
                      </li>
                    </ul>
                  </div>

                  {/* Credentials */}
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Credentials</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        Azure Certified
                      </span>
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        Databricks Expert
                      </span>
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        Real time Industry Expert
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <a
                      href="https://www.linkedin.com/in/gauravkurhekar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden border-b-4 border-blue-600 shadow-2xl">
                <img
                  src="https://ik.imagekit.io/qujrbo6v2/Untitled%20(1).png"
                  alt={instructor.name}
                  className="w-full h-full object-cover scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x500?text=Instructor";
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
