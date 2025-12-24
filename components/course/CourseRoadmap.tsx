"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCloud, FaDatabase, FaCode, FaChartLine, FaShieldAlt, FaRocket, FaArrowRight } from "react-icons/fa";

export default function CourseRoadmap() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const roadmapSteps = [
    {
      icon: FaCloud,
      title: "Azure Cloud",
      description: "Understand core Azure services to build a strong infrastructure",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: FaDatabase,
      title: "Data Storage",
      description: "Store and manage big data using Azure Data Lake",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: FaCode,
      title: "Data Processing",
      description: "Perform advanced transformations with Azure Databricks",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: FaChartLine,
      title: "Real-Time Analytics",
      description: "Work with streaming data using Azure Stream Analytics",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: FaDatabase,
      title: "Data Warehousing",
      description: "Use Azure Synapse Analytics for powerful data modeling and analysis",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: FaShieldAlt,
      title: "Security & Governance",
      description: "Learn to protect and manage your data the right way",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
  ];

  const abilities = [
    "Design and build end-to-end data pipelines in the Azure cloud",
    "Pick the right Azure tools for every stage of the data lifecycle",
    "Monitor, optimize, and scale pipelines for real-world use",
    "Become a confident, job-ready Data Engineer with skills companies need",
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg">
              🎯 Your Learning Path
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Roadmap For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum, designed for professionals
          </p>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-gray-700 mb-4">
            Do you dream of building powerful data pipelines and becoming a key player in any data-driven company?
          </p>
          <p className="text-xl font-semibold text-gray-900">
            Upskill Academy's Azure Data Engineering course is your launchpad to a successful tech career.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Roadmap */}
        <div ref={containerRef} className="relative mb-20">
          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8 text-gray-500"
          >
            <span className="text-sm font-medium">Scroll to explore the journey</span>
            <FaArrowRight className="animate-bounce-horizontal" />
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-8 w-max px-4">
              {roadmapSteps.map((step, index) => {
                const xOffset = useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [index * 50, 0, -index * 50]
                );

                return (
                  <div key={index} className="relative">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      style={{ x: xOffset }}
                      className="relative group w-[380px]"
                    >
                      {/* Card */}
                      <div className={`${step.bgColor} rounded-3xl p-8 h-full border-2 border-transparent hover:border-opacity-50 hover:border-current transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl`}>
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border-4 border-gray-50 z-10">
                          <span className="text-xl font-bold text-gray-900">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring" }}
                          className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-6`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* Content */}
                        <h3 className={`text-2xl font-bold ${step.iconColor} mb-4 group-hover:scale-105 transition-transform origin-left`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base">
                          {step.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "100%" } : {}}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                            className={`h-full bg-gradient-to-r ${step.color}`}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Connection Arrow */}
                    {index < roadmapSteps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-20"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                          <FaArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* What You'll Be Able To Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You'll Be Able To Do
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {abilities.map((ability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg flex-1 leading-relaxed">
                    {ability}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-center mt-10"
            >
              <FaRocket className="w-12 h-12 text-purple-600 mx-auto mb-4 animate-bounce" />
              <p className="text-xl font-semibold text-gray-900 mb-2">
                Start your transformation with Upskill Academy
              </p>
              <p className="text-gray-600">
                Where future-ready data engineers are made
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite;
        }
      `}</style>
    </section>
  );
}
