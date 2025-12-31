"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaProjectDiagram, FaChalkboardTeacher, FaRocket } from "react-icons/fa";

export default function WhatSetsUsApart() {
  const highlights = [
    {
      icon: FaUserTie,
      title: "Learn from a Lead Data Engineer",
      description: "Get direct mentorship from an experienced professional working on real production systems.",
    },
    {
      icon: FaProjectDiagram,
      title: "99% Real-World Coverage",
      description: "Our curriculum covers virtually all scenarios you'll encounter in actual data engineering projects.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Personalized Mentorship",
      description: "No crowded classrooms—receive focused, one-on-one guidance tailored to your learning pace.",
    },
    {
      icon: FaRocket,
      title: "Interview Ready",
      description: "Hands-on projects and focused interview preparation to help you stand out and succeed.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Half - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Sets Us{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Apart?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We help you confidently switch into a successful data engineering career through{" "}
              <span className="font-semibold text-blue-600">hands-on learning</span>,{" "}
              <span className="font-semibold text-purple-600">real project experience</span>, and{" "}
              <span className="font-semibold text-blue-600">focused interview preparation</span>. 
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
              Learn directly from an experienced Lead Data Engineer working on real production systems—not crowded classrooms. 
              Our carefully crafted program covers{" "}
              <span className="font-bold text-purple-600">99% of real-world data engineering project scenarios</span>, 
              giving you personalized mentorship, practical insights, and the confidence to stand out and succeed as a professional Data Engineer.
            </p>
          </motion.div>

          {/* Right Half - 2x2 Card Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-xl text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
