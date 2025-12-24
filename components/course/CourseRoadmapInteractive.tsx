"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiPython, 
  SiApachespark, 
  SiDatabricks,
  SiJira,
  SiGit
} from "react-icons/si";
import { FaDatabase, FaFlag, FaCloud, FaStream, FaProjectDiagram } from "react-icons/fa";

export default function CourseRoadmapInteractive() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Road progress animation
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const roadmapSteps = [
    {
      section: "START",
      items: [
        { icon: FaCloud, name: "Azure Cloud", color: "#0078D4" },
        { icon: FaDatabase, name: "SQL / Azure SQL", color: "#0078D4" },
        { icon: SiPython, name: "Python", color: "#3776AB" },
        { icon: SiApachespark, name: "PySpark", color: "#E25A1C" },
      ]
    },
    {
      section: "MIDDLE",
      items: [
        { icon: FaProjectDiagram, name: "Synapse Analytics", color: "#0078D4" },
        { icon: FaProjectDiagram, name: "Azure Data Factory", color: "#0078D4" },
        { icon: FaStream, name: "Spark Streaming", color: "#E25A1C" },
        { icon: SiDatabricks, name: "Databricks", color: "#FF3621" },
      ]
    },
    {
      section: "END",
      items: [
        { icon: FaProjectDiagram, name: "Microsoft Fabric", color: "#0078D4" },
        { icon: SiJira, name: "Agile Methodology & Jira", color: "#0052CC" },
        { icon: SiGit, name: "Azure DevOps CI/CD & GIT", color: "#F05032" },
      ]
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
              🎯 Your Learning Journey
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Roadmap</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow the path from beginner to expert Azure Data Engineer
          </p>
        </motion.div>

        {/* Animated Road Path */}
        <div ref={containerRef} className="relative">
          <svg className="w-full h-[600px] md:h-[400px]" viewBox="0 0 1200 600" preserveAspectRatio="none">
            {/* Background Road */}
            <motion.path
              d="M 0,200 Q 400,50 600,200 T 1200,200"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="120"
              strokeLinecap="round"
            />
            {/* Animated Progress Road */}
            <motion.path
              d="M 0,200 Q 400,50 600,200 T 1200,200"
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth="120"
              strokeLinecap="round"
              strokeDasharray="1"
              style={{
                pathLength,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            {/* Center Dashed Line */}
            <motion.path
              d="M 0,200 Q 400,50 600,200 T 1200,200"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="20,15"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* START Label */}
          <motion.div
            className="absolute left-0 top-20 md:top-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-r-full shadow-lg font-bold flex items-center gap-2">
              <FaFlag className="w-5 h-5" />
              START
            </div>
          </motion.div>

          {/* FINISH Label */}
          <motion.div
            className="absolute right-0 top-20 md:top-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-l-full shadow-lg font-bold flex items-center gap-2">
              FINISH
              <FaFlag className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Tech Icons - Top Row */}
          <div className="absolute top-0 left-0 right-0 flex justify-around px-12">
            {roadmapSteps[0].items.map((tech, index) => (
              <motion.div
                key={`top-${index}`}
                initial={{ opacity: 0, y: -50, scale: 0 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.2,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group-hover:border-blue-400">
                  <tech.icon 
                    className="w-12 h-12 md:w-16 md:h-16 transition-colors" 
                    style={{ color: tech.color }} 
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {tech.name}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Tech Icons - Middle Row */}
          <div className="absolute top-40 md:top-32 left-0 right-0 flex justify-around px-12">
            {roadmapSteps[1].items.map((tech, index) => (
              <motion.div
                key={`middle-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.0 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.2,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group-hover:border-purple-400">
                  <tech.icon 
                    className="w-12 h-12 md:w-16 md:h-16 transition-colors" 
                    style={{ color: tech.color }} 
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {tech.name}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Tech Icons - Bottom Row */}
          <div className="absolute bottom-20 md:bottom-32 left-0 right-0 flex justify-around px-12">
            {roadmapSteps[2].items.map((tech, index) => (
              <motion.div
                key={`bottom-${index}`}
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.5 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.2,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group-hover:border-pink-400">
                  <tech.icon 
                    className="w-12 h-12 md:w-16 md:h-16 transition-colors" 
                    style={{ color: tech.color }} 
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="mt-2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap max-w-[150px] text-center"
                >
                  {tech.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Follow this structured learning path to master Azure Data Engineering. Each technology builds upon the previous one, creating a comprehensive skillset that makes you industry-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
