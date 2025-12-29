"use client";

import Navbar from "@/components/Navbar";
import TopNotificationBar from "@/components/TopNotificationBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function OnDemandPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const features = [
    "Comprehensive Curriculum Coverage",
    "Access to All Session Recordings",
    "Certificate of Completion",
    "Lifetime Access Granted",
    "3 Real-World Projects Included",
    "Engage with a WhatsApp Community",
    "Live Doubt Sessions",
    "Interview Questions",
  ];

  const notIncluded = [
    "Live Compact and Interactive Batches",
    "Live and Practical Classes",
    "Instant Doubt Resolution",
    "Mock Interviews for Preparation",
  ];

  const modules = [
    { title: "Introduction to Big Data", videos: [{ title: "Big Data Fundamentals", link: "" }, { title: "Why Big Data?", link: "" }] },
    { title: "Azure Cloud Fundamentals", videos: [{ title: "Azure Overview", link: "" }, { title: "Azure Services", link: "" }] },
    { title: "Data Storage on Azure Cloud", videos: [{ title: "Azure Blob Storage", link: "" }, { title: "Azure Data Lake", link: "" }] },
    { title: "SQL and Azure SQL", videos: [{ title: "SQL Basics", link: "" }, { title: "Azure SQL Setup", link: "" }] },
    { title: "Python Basics", videos: [{ title: "Python Introduction", link: "" }, { title: "Data Types & Variables", link: "" }] },
    { title: "Introduction to Hadoop", videos: [{ title: "Hadoop Architecture", link: "" }, { title: "HDFS Overview", link: "" }] },
    { title: "Spark and Deep dive into Spark Architecture", videos: [{ title: "Spark Basics", link: "" }, { title: "Spark Architecture", link: "" }] },
    { title: "Introduction To Databricks", videos: [{ title: "Databricks Platform", link: "" }, { title: "Workspace Setup", link: "" }] },
    { title: "Working with Databricks Filesystem – DBFS", videos: [{ title: "DBFS Overview", link: "" }, { title: "File Operations", link: "" }] },
    { title: "Spark DataFrame Reading APIs and Databricks", videos: [{ title: "DataFrame Basics", link: "" }, { title: "Reading Data", link: "" }] },
    { title: "Spark DataFrame Transformation and Databricks", videos: [{ title: "DataFrame Transformations", link: "" }, { title: "Optimization", link: "" }] },
    { title: "Spark SQL in Databricks", videos: [{ title: "Spark SQL Syntax", link: "" }, { title: "Query Optimization", link: "" }] },
    { title: "Mounting Storage in Databricks", videos: [{ title: "Mount Configuration", link: "" }, { title: "Access Control", link: "" }] },
    { title: "Databricks Utilities and Widgets", videos: [{ title: "DBUtils", link: "" }, { title: "Widgets", link: "" }] },
    { title: "Notebook Integration & Connectivity", videos: [{ title: "Notebook Features", link: "" }, { title: "Integration Patterns", link: "" }] },
    { title: "Databricks Cluster Management", videos: [{ title: "Cluster Creation", link: "" }, { title: "Scaling & Performance", link: "" }] },
    { title: "Spark Join Optimization and Performance Tuning", videos: [{ title: "Join Types", link: "" }, { title: "Performance Tuning", link: "" }] },
    { title: "Spark Performance & Memory Management", videos: [{ title: "Memory Management", link: "" }, { title: "GC Optimization", link: "" }] },
    { title: "Delta Lake & Data Lakehouse", videos: [{ title: "Delta Lake Features", link: "" }, { title: "Lakehouse Architecture", link: "" }] },
    { title: "Databricks New Features", videos: [{ title: "Recent Updates", link: "" }, { title: "Best Practices", link: "" }] },
    { title: "Spark Streaming", videos: [{ title: "Streaming Concepts", link: "" }, { title: "Stream Processing", link: "" }] },
    { title: "Unity Catalog in Databricks", videos: [{ title: "Catalog Overview", link: "" }, { title: "Governance", link: "" }] },
    { title: "Databricks Workflows", videos: [{ title: "Workflow Creation", link: "" }, { title: "Job Scheduling", link: "" }] },
    { title: "Azure Data Factory", videos: [{ title: "ADF Overview", link: "" }, { title: "Pipeline Design", link: "" }] },
    { title: "Azure Key Vaults", videos: [{ title: "Key Vault Setup", link: "" }, { title: "Secret Management", link: "" }] },
    { title: "Data Warehousing using Synapse Analytics", videos: [{ title: "Synapse Overview", link: "" }, { title: "Data Warehouse Design", link: "" }] },
    { title: "Microsoft Fabric", videos: [{ title: "Fabric Introduction", link: "" }, { title: "Analytics in Fabric", link: "" }] },
    { title: "Introduction to Agile Methodology", videos: [{ title: "Agile Principles", link: "" }, { title: "Scrum Framework", link: "" }] },
    { title: "Introduction to JIRA for Agile", videos: [{ title: "JIRA Setup", link: "" }, { title: "Issue Tracking", link: "" }] },
    { title: "End-to-end project of azure data engineering", videos: [{ title: "Project Overview", link: "" }, { title: "Implementation", link: "" }] },
  ];

  return (
    <main className="min-h-screen">
      <TopNotificationBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              On-Demand{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Recorded Sessions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Learn Azure Data Engineering at your own pace with our comprehensive recorded sessions. Lifetime access to all materials, real-world projects, and career support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Learn at Your Own Pace
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Perfect for professionals with busy schedules who want to master Azure Data Engineering without live class commitments. Access all course materials whenever you want, from anywhere in the world.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our carefully recorded sessions capture everything you need to learn, with lifetime access to all materials. Join our WhatsApp community for peer support and clarification sessions.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What's Included:</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
            >
              <div className="text-center">
                <p className="text-gray-600 mb-4">Price</p>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-2xl text-gray-400 line-through">₹XX,XXX</span>
                  <span className="text-5xl font-bold text-gray-900">₹XX,XXX</span>
                  <span className="text-gray-500">/-</span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold mb-6 hover:shadow-lg transition-all duration-300">
                  Enroll Now
                  <FaArrowRight className="inline ml-2" />
                </button>

                <p className="text-gray-600 text-sm">
                  ✓ Lifetime Access
                  <br />✓ Certificate of Completion
                  <br />✓ Community Support
                  <br />✓ 30-Day Money Back Guarantee
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Comprehensive Curriculum
          </motion.h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * (index % 5) }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{module.title}</h3>
                  <motion.div
                    animate={{ rotate: expandedModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-blue-600" />
                  </motion.div>
                </button>

                {expandedModule === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 px-6 py-4 bg-gray-50"
                  >
                    <div className="space-y-3">
                      {module.videos.map((video, vidIndex) => (
                        <div key={vidIndex} className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{video.title}</p>
                            {video.link ? (
                              <a
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-flex items-center gap-2"
                              >
                                Watch Video <FaArrowRight className="text-xs" />
                              </a>
                            ) : (
                              <p className="text-gray-400 text-sm mt-1">Video link coming soon</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
