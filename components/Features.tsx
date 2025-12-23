"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaCloud,
  FaChartBar,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";
import { getFeatures } from "@/sanity/lib/queries";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [features, setFeatures] = useState<any[]>([]);

  // Fetch features from Sanity
  useEffect(() => {
    async function loadFeatures() {
      try {
        const data = await getFeatures();
        setFeatures(data);
      } catch (error) {
        console.error('Error loading features:', error);
      }
    }
    loadFeatures();
  }, []);

  const fallbackFeatures = [
    {
      icon: FaUsers,
      title: "Personalized Career Mapping",
      description:
        "Get clear guidance based on your experience, goals, and current skill set. No cookie-cutter advice—just tailored direction.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaAward,
      title: "Deep Insight from a Senior Data Engineer",
      description:
        "This is not theory. It's based on 9+ years of hands-on Azure Data Engineering experience in real production environments.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaCheckCircle,
      title: "No Fluff, No Sales Pitch",
      description:
        "You'll walk away with clear direction and actionable next steps—even if you choose not to work with us further.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaLaptopCode,
      title: "Tailored for Career Growth",
      description:
        "Whether you're switching careers or stuck in your current role, we cut through the noise and focus on real next steps.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FaChartBar,
      title: "Honest Feedback",
      description:
        "Even if you're not ready yet, you'll leave with clarity on what you need to focus on to become job-ready.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: FaCloud,
      title: "Focus on Real Outcomes",
      description:
        "Skills and projects that matter more than just certificates. Learn what hiring managers actually care about.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  // Use Sanity data if available, otherwise use fallback
  const displayFeatures = features.length > 0 ? features : fallbackFeatures;

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Makes This{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clarity Call Different?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't just a casual chat or generic consultation. Here's what sets it apart.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature: any, index: number) => {
            const Icon = feature.icon || FaCheckCircle;
            return (
              <motion.div
                key={feature._id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8 text-lg">Ideal for</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Students & Freshers", "IT Professionals", "Data Analysts", "Job Seekers"].map(
              (company, index) => (
                <div
                  key={index}
                  className="text-xl md:text-2xl font-bold text-gray-700 px-6 py-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
