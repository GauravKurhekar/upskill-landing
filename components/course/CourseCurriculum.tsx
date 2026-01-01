"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronRight, FaPlayCircle, FaFileAlt } from "react-icons/fa";

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

interface CourseSection {
  type: 'live' | 'recorded';
  title: string;
  modules: Module[];
}

interface CourseCurriculumProps {
  modules: Module[];
}

export default function CourseCurriculum({ modules }: CourseCurriculumProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedModule, setSelectedModule] = useState<string>("");

  // Live Sessions Data
  const liveSessions: Module[] = [
    {
      id: "live-1",
      title: "Introduction to Big Data",
      order: 1,
      lessons: [
        { id: "live-1-1", title: "What is database", type: "live" },
        { id: "live-1-2", title: "Types of databases", type: "live" },
        { id: "live-1-3", title: "What is Big Data", type: "live" },
        { id: "live-1-4", title: "5 V's of Big Data", type: "live" },
        { id: "live-1-5", title: "Types of data (structure, semi-structure, unstructured)", type: "live" },
        { id: "live-1-6", title: "Store and process big data", type: "live" },
      ]
    },
    {
      id: "live-2",
      title: "Azure Cloud Fundamentals",
      order: 2,
      lessons: [
        { id: "live-2-1", title: "What is cloud computing?", type: "live" },
        { id: "live-2-2", title: "Types of Cloud Services", type: "live" },
        { id: "live-2-3", title: "Features of cloud", type: "live" },
        { id: "live-2-4", title: "Different cloud providers, Azure, AWS, GCP", type: "live" },
        { id: "live-2-5", title: "Steps to create an Azure account", type: "live" },
        { id: "live-2-6", title: "Azure Subscription", type: "live" },
        { id: "live-2-7", title: "Accessing the Azure account", type: "live" },
        { id: "live-2-8", title: "Data Storage on Azure Cloud", type: "live" },
      ]
    },
    {
      id: "live-3",
      title: "Python",
      order: 3,
      lessons: [
        { id: "live-3-1", title: "Why python for Data Engineers", type: "live" },
        { id: "live-3-2", title: "Advantage of Python", type: "live" },
        { id: "live-3-3", title: "Installation of Python", type: "live" },
        { id: "live-3-4", title: "Variables", type: "live" },
        { id: "live-3-5", title: "DataTypes", type: "live" },
        { id: "live-3-6", title: "Collections (List, Tuple, Set, Dictionary)", type: "live" },
        { id: "live-3-7", title: "If-Else statements", type: "live" },
        { id: "live-3-8", title: "Loops", type: "live" },
        { id: "live-3-9", title: "Functions", type: "live" },
        { id: "live-3-10", title: "Operators", type: "live" },
        { id: "live-3-11", title: "Python Modules", type: "live" },
        { id: "live-3-12", title: "Python Packages", type: "live" },
      ]
    },
    {
      id: "live-4",
      title: "Introduction to Hadoop",
      order: 4,
      lessons: [
        { id: "live-4-1", title: "What is Hadoop?", type: "live" },
        { id: "live-4-2", title: "How Hadoop overcomes big data challenges", type: "live" },
        { id: "live-4-3", title: "Hadoop Architecture", type: "live" },
        { id: "live-4-4", title: "Hadoop Daemons", type: "live" },
        { id: "live-4-5", title: "HDFS", type: "live" },
        { id: "live-4-6", title: "YARN", type: "live" },
        { id: "live-4-7", title: "MapReduce", type: "live" },
        { id: "live-4-8", title: "Hadoop Ecosystem Components", type: "live" },
      ]
    },
    {
      id: "live-5",
      title: "Spark",
      order: 5,
      lessons: [
        { id: "live-5-1", title: "What is Spark", type: "live" },
        { id: "live-5-2", title: "What is pyspark", type: "live" },
        { id: "live-5-3", title: "Spark Architecture & Internals", type: "live" },
        { id: "live-5-4", title: "Spark RDD", type: "live" },
        { id: "live-5-5", title: "Spark DataFrame and datasets", type: "live" },
      ]
    },
    {
      id: "live-6",
      title: "Databricks",
      order: 6,
      lessons: [
        { id: "live-6-1", title: "Databricks Architecture", type: "live" },
        { id: "live-6-2", title: "Working with Databricks Filesystem – DBFS", type: "live" },
        { id: "live-6-3", title: "Dataframe and RDD's", type: "live" },
        { id: "live-6-4", title: "Data Frame Transformation", type: "live" },
        { id: "live-6-5", title: "Spark SQL in Databricks", type: "live" },
        { id: "live-6-6", title: "Mounting Storage in Databricks", type: "live" },
        { id: "live-6-7", title: "Databricks Utilities and Widgets", type: "live" },
        { id: "live-6-8", title: "Cluster Management", type: "live" },
        { id: "live-6-9", title: "Optimization and Performance Tuning", type: "live" },
        { id: "live-6-10", title: "Spark Performance & Memory Management", type: "live" },
        { id: "live-6-11", title: "Delta Lake & Data Lakehouse", type: "live" },
        { id: "live-6-12", title: "Spark Streaming", type: "live" },
        { id: "live-6-13", title: "Unity Catalog in Databricks", type: "live" },
        { id: "live-6-14", title: "Databricks Workflows", type: "live" },
        { id: "live-6-15", title: "Notebook Integration & Connectivity", type: "live" },
      ]
    },
    {
      id: "live-7",
      title: "Azure Data Factory",
      order: 7,
      lessons: [
        { id: "live-7-1", title: "What is Azure Data Factory?", type: "live" },
        { id: "live-7-2", title: "Use case of Azure Data Factory", type: "live" },
        { id: "live-7-3", title: "Creating an Azure Data Factory Workspace", type: "live" },
        { id: "live-7-4", title: "Data Factory Components", type: "live" },
        { id: "live-7-5", title: "Creating Pipeline in Azure Data Factory", type: "live" },
        { id: "live-7-6", title: "Data flows and Triggers in ADF", type: "live" },
        { id: "live-7-7", title: "Monitoring and optimization in ADF", type: "live" },
        { id: "live-7-8", title: "DevOps In ADF", type: "live" },
      ]
    },
    {
      id: "live-8",
      title: "Synapse Analytics and Data Warehousing",
      order: 8,
      lessons: [
        { id: "live-8-1", title: "What is Data Warehouse", type: "live" },
        { id: "live-8-2", title: "OLTP VS OLAP", type: "live" },
        { id: "live-8-3", title: "Extract, Transform, Loading (ETL)", type: "live" },
        { id: "live-8-4", title: "Extract, Load, Transform(ELT)", type: "live" },
        { id: "live-8-5", title: "Data Lake VS Data Warehouse", type: "live" },
        { id: "live-8-6", title: "Star & Snowflake Schema", type: "live" },
        { id: "live-8-7", title: "Fact and Dimension Table", type: "live" },
        { id: "live-8-8", title: "Data Marts", type: "live" },
        { id: "live-8-9", title: "Slowly changing dimensions(SCD)", type: "live" },
        { id: "live-8-10", title: "Understanding dimensional modeling", type: "live" },
      ]
    },
    {
      id: "live-9",
      title: "Agile Methodology",
      order: 9,
      lessons: [
        { id: "live-9-1", title: "What is Agile Methodology?", type: "live" },
        { id: "live-9-2", title: "Why Agile is Important in Modern Data Projects", type: "live" },
        { id: "live-9-3", title: "Early Software Development Models: Waterfall Approach", type: "live" },
        { id: "live-9-4", title: "Limitations of Waterfall in Data Projects", type: "live" },
        { id: "live-9-5", title: "Agile Events and meetings", type: "live" },
      ]
    },
    {
      id: "live-10",
      title: "Introduction to JIRA",
      order: 10,
      lessons: [
        { id: "live-10-1", title: "What is JIRA?", type: "live" },
        { id: "live-10-2", title: "Basic JIRA Concepts", type: "live" },
        { id: "live-10-3", title: "JIRA Workflow Stages", type: "live" },
        { id: "live-10-4", title: "Sprint Board Overview", type: "live" },
        { id: "live-10-5", title: "Using JIRA for Data Engineering", type: "live" },
      ]
    }
  ];

  // Recorded Sessions - using new data
  const recordedSessions: Module[] = [
    {
      id: "recorded-1",
      title: "SQL and Azure SQL",
      order: 1,
      lessons: [
        { id: "recorded-1-1", title: "What is SQL?", type: "video" },
        { id: "recorded-1-2", title: "Installation of Azure SQL Database", type: "video" },
        { id: "recorded-1-3", title: "Connect Azure SQL from local SQL Server", type: "video" },
        { id: "recorded-1-4", title: "Management Studio", type: "video" },
        { id: "recorded-1-5", title: "DQL Commands (select)", type: "video" },
        { id: "recorded-1-6", title: "DDL commands (create, alter, drop, truncate)", type: "video" },
        { id: "recorded-1-7", title: "DML Commands (insert, update, delete, merge)", type: "video" },
        { id: "recorded-1-8", title: "Joins in SQL", type: "video" },
        { id: "recorded-1-9", title: "Window functions", type: "video" },
        { id: "recorded-1-10", title: "Aggregate functions", type: "video" },
        { id: "recorded-1-11", title: "CTE (Common table expression)", type: "video" },
      ]
    },
    {
      id: "recorded-2",
      title: "Microsoft Fabric",
      order: 2,
      lessons: [
        { id: "recorded-2-1", title: "Create workspace in fabric", type: "video" },
        { id: "recorded-2-2", title: "How to Create a Lakehouse in Microsoft Fabric", type: "video" },
        { id: "recorded-2-3", title: "OneLake File Explorer in Microsoft Fabric", type: "video" },
        { id: "recorded-2-4", title: "Lakehouse Essentials", type: "video" },
        { id: "recorded-2-5", title: "Spark Notebooks and Data Factory in MS Fabric", type: "video" },
      ]
    },
    {
      id: "recorded-3",
      title: "Real time Industry level projects of azure data engineering",
      order: 3,
      lessons: [
        { id: "recorded-3-1", title: "Project 1 – End-To-End Azure Data Engineering pipeline (batch processing)", type: "video" },
        { id: "recorded-3-2", title: "Project 2 – Enterprise data processing using databricks workflows", type: "video" },
        { id: "recorded-3-3", title: "Project 3 – Production-grade CI/CD for Data Engineering using Azure Devops", type: "video" },
      ]
    }
  ];

  // Combine all modules with section headers
  const allModules = [
    ...liveSessions.map(m => ({ ...m, section: 'Live Sessions' })),
    ...recordedSessions.map(m => ({ ...m, section: 'Recorded Sessions' }))
  ];

  const currentModule = allModules.find(m => m.id === selectedModule) || allModules[0];

  // Set default selected module on mount using useEffect
  useEffect(() => {
    if (!selectedModule && allModules.length > 0) {
      setSelectedModule(allModules[0].id);
    }
  }, []);

  return (
    <section id="curriculum" ref={ref} className="py-16 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Course <span className="text-blue-600">Curriculum</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive modules covering everything from basics to advanced topics
          </p>
        </motion.div>

        {/* Section Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-8 max-w-5xl mx-auto"
        >
        </motion.div>

        {/* Compact Container with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row h-[650px]">
            {/* Left Side - Scrollable Tabs */}
            <div className="lg:w-72 bg-gray-900 border-r border-gray-800 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
              <div className="p-4 space-y-2">
                {allModules.map((module: any, index: number) => {
                  const isFirstInSection = index === 0 || allModules[index - 1]?.section !== module.section;
                  
                  return (
                    <div key={`section-${module.id}`}>
                      {isFirstInSection && (
                        <div className="px-3 py-2 mt-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                          {module.section}
                        </div>
                      )}
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                        onClick={() => setSelectedModule(module.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 border-l-4 ${
                          selectedModule === module.id
                            ? "bg-blue-600 text-white border-l-blue-400"
                            : "bg-gray-800 text-gray-300 border-l-transparent hover:bg-gray-700"
                        }`}
                      >
                        <div>
                          <p className={`text-xs mt-0.5 truncate ${selectedModule === module.id ? "text-blue-100" : "text-gray-400"}`}>{module.title}</p>
                          <p className={`text-xs mt-0.5 ${selectedModule === module.id ? "text-blue-100" : "text-gray-500"}`}>{module.lessons.length} lessons</p>
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Scrollable Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100">
              {currentModule ? (
                <motion.div
                  key={currentModule.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  {/* Module Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {currentModule.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {currentModule.lessons.length} {currentModule.lessons.length === 1 ? "lesson" : "lessons"}
                    </p>
                  </div>

                  {/* Lessons List */}
                  {currentModule.lessons.length > 0 ? (
                    <div className="space-y-2">
                      {currentModule.lessons.map((lesson, lessonIndex) => (
                        <motion.div
                          key={lesson.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: lessonIndex * 0.05 }}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {lesson.type === "video" ? (
                              <FaPlayCircle className="w-4 h-4 text-blue-600" />
                            ) : lesson.type === "live" ? (
                              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            ) : (
                              <FaFileAlt className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 font-medium text-sm">{lesson.title}</p>
                            {lesson.duration && (
                              <p className="text-xs text-gray-500 mt-0.5">{lesson.duration}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 text-sm">Module content includes comprehensive lessons and practical exercises</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-600">Select a module to view lessons</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to start learning?
          </p>
          <a
            href="#cta"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
