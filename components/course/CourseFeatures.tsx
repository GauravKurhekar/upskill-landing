"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheckCircle, FaCloud, FaDatabase, FaCode, FaCertificate, FaProjectDiagram, FaBolt } from "react-icons/fa";
import { GraphyCourse } from "@/lib/graphy";

interface CourseFeaturesProps {
  course: GraphyCourse;
}

export default function CourseFeatures({ course }: CourseFeaturesProps) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Scroll-based transformations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smoother transform - starts after section is sticky for a while
  const gridOpacity = useTransform(scrollYProgress, [0.2, 0.35], [1, 0]);
  const transformedOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  
  // Opacity and position for outcomes appearing on right
  const outcomesOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const outcomesX = useTransform(scrollYProgress, [0.4, 0.55], [50, 0]);

  const features = [
    {
      icon: FaCloud,
      title: "Azure Cloud Mastery",
      description: "Master core Azure services and build strong cloud infrastructure foundations",
    },
    {
      icon: FaDatabase,
      title: "Big Data Processing",
      description: "Learn to handle massive datasets with Azure Data Lake and Databricks",
    },
    {
      icon: FaCode,
      title: "Python & PySpark",
      description: "Write efficient data processing code with Python and Apache Spark",
    },
    {
      icon: FaProjectDiagram,
      title: "Data Pipeline Design",
      description: "Build end-to-end ETL pipelines using Azure Data Factory and Synapse",
    },
    {
      icon: FaCertificate,
      title: "Industry-Ready Skills",
      description: "Learn tools and practices used by top data engineering teams",
    },
    {
      icon: FaBolt,
      title: "Real-Time Analytics",
      description: "Work with streaming data and build real-time analytics solutions",
    },
  ];

  const learningOutcomes = [
    "Design and build end-to-end data pipelines in Azure cloud",
    "Master Databricks, Spark, and PySpark for big data processing",
    "Implement data warehousing with Azure Synapse Analytics",
    "Work with real-time data using Spark Streaming",
    "Build secure and scalable data architectures",
    "Apply Agile methodologies and DevOps practices",
    "Complete hands-on projects for your portfolio",
    "Prepare for Azure Data Engineer certification",
  ];

  return (
    <section ref={containerRef} className="bg-white relative">
      {/* Scroll Transformation Section with Sticky Effect */}
      <div className="min-h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            {/* Original Grid View (Fades Out) */}
            <motion.div
              ref={ref}
              style={{ opacity: gridOpacity }}
              className="absolute inset-0 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
            >
              <div className="w-full max-w-7xl">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    What You'll <span className="text-blue-600">Learn</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Master the essential skills to become a job-ready Azure Data Engineer
                  </p>
                </motion.div>

                {/* Features Grid - Original 3 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gray-50 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Transformed Split View (Fades In) - Vertically Centered */}
            <motion.div
              style={{ opacity: transformedOpacity }}
              className="flex gap-8 items-center justify-center w-full"
            >
              {/* Left Side - What You'll Learn (50% width, stacked, bigger) */}
              <div className="w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  What You'll <span className="text-blue-600">Learn</span>
                </h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div
                      key={`transformed-${index}`}
                      className="group"
                    >
                      <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 flex items-start gap-3">
                        <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - By the End of This Course (50% width, interactive cards) */}
              <motion.div
                style={{
                  opacity: outcomesOpacity,
                  x: outcomesX,
                }}
                className="w-1/2 flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  By the End of This <span className="text-blue-600">Course</span>
                </h3>
                <div className="space-y-2">
                  {learningOutcomes.map((outcome, index) => (
                    <motion.div
                      key={`outcome-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform shadow-sm">
                          <FaCheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-800 text-sm font-medium group-hover:text-gray-900 transition-colors leading-relaxed">{outcome}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
