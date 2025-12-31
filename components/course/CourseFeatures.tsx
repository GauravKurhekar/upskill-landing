"use client";

import { FaCheckCircle, FaCloud, FaDatabase, FaCode, FaCertificate, FaProjectDiagram, FaBolt } from "react-icons/fa";
import { GraphyCourse } from "@/lib/graphy";

interface CourseFeaturesProps {
  course: GraphyCourse;
}

export default function CourseFeatures({ course }: CourseFeaturesProps) {

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
    <section className="bg-white relative">
      {/* Split View Section */}
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 items-center justify-center w-full">
            {/* Left Side - What You'll Learn (50% width) */}
            <div className="w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What You&apos;ll <span className="text-blue-600">Learn</span>
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={`feature-${index}`}
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

            {/* Right Side - By the End of This Course (50% width) */}
            <div className="w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                By the End of This <span className="text-blue-600">Course</span>
              </h3>
              <div className="space-y-2">
                {learningOutcomes.map((outcome, index) => (
                  <div
                    key={`outcome-${index}`}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform shadow-sm">
                        <FaCheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 text-sm font-medium group-hover:text-gray-900 transition-colors leading-relaxed">{outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
