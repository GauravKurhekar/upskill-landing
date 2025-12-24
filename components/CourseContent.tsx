"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CourseContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    {
      title: "Interview Prep Kit",
      duration: "Bonus #1",
      topics: [
        "Real-world Q&As for data engineering roles",
        "Simplified answers you can understand",
        "Comprehensive cheat sheets",
        "Tips to ace technical interviews",
      ],
    },
    {
      title: "Databricks Notebooks",
      duration: "Bonus #2",
      topics: [
        "SQL practice materials and queries",
        "PySpark coding exercises",
        "Python notebooks for data engineering",
        "Real coding scenarios and solutions",
      ],
    },
    {
      title: "Lifetime Access",
      duration: "Bonus #3",
      topics: [
        "Session recordings available forever",
        "Select tutorials for continued learning",
        "Updated content as technologies evolve",
        "Learn at your own pace, anytime",
      ],
    },
    {
      title: "1:1 Resume & Job Strategy",
      duration: "Bonus #4",
      topics: [
        "Personal guidance on resume optimization",
        "Job search strategy tailored to you",
        "LinkedIn profile enhancement tips",
        "Interview preparation techniques",
      ],
    },
    {
      title: "Use-Case Assignments",
      duration: "Bonus #5",
      topics: [
        "Practice materials based on real scenarios",
        "Industry challenges you'll actually face",
        "Hands-on problem-solving exercises",
        "Build practical experience with projects",
      ],
    },
    {
      title: "Career Clarity Session",
      duration: "Core Offering",
      topics: [
        "1.5 hour personalized consultation",
        "Clear roadmap based on your goals",
        "Direct insights from 9+ years experience",
        "Actionable next steps for your career",
      ],
    },
  ];

  return (
    <section
      id="course"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What&apos;s Included{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              (Bonuses & Privileges)
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you book your session, you also get exclusive bonuses worth thousands
          </p>
        </motion.div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Module Header */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {module.duration}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {module.title}
                </h3>
              </div>

              {/* Topics List */}
              <ul className="space-y-3">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Course Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Session Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1.5 Hours", label: "Duration" },
              { number: "1:1", label: "Personalized Call" },
              { number: "English", label: "Language" },
              { number: "Zoho Meet", label: "Platform" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{item.number}</div>
                <div className="text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
