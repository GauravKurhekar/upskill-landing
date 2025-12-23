"use client";

import { motion } from "framer-motion";
import { FaCloud, FaChartLine, FaCertificate, FaRocket } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getHeroSection } from "@/sanity/lib/queries";

export default function Hero() {
  const [heroData, setHeroData] = useState<any>(null);

  // Fetch hero data from Sanity
  useEffect(() => {
    async function loadHero() {
      try {
        const data = await getHeroSection();
        setHeroData(data);
      } catch (error) {
        console.error('Error loading hero:', error);
      }
    }
    loadHero();
  }, []);

  const floatingIcons = [
    { Icon: FaCloud, delay: 0, position: "top-20 left-10" },
    { Icon: FaChartLine, delay: 0.2, position: "top-40 right-20" },
    { Icon: FaCertificate, delay: 0.4, position: "bottom-40 left-20" },
    { Icon: FaRocket, delay: 0.6, position: "bottom-20 right-10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 1 }}
          className={`hidden lg:block absolute ${position} text-blue-600 text-6xl animate-float`}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              🚀 Your Journey to Data Engineering Starts Here
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            {heroData?.headlineBeforeHighlight || "Build a High-Income Career in"}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
              {heroData?.headlineHighlight || "Azure Data Engineering"}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {heroData?.subheadline || 
              "Get personalized direction from a Microsoft & Databricks Certified Senior Data Engineer with 9+ years of experience solving real-world data problems."
            }
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <a
              href="#booking"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Book Your 1:1 Clarity Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#instructor"
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-600"
            >
              Meet Your Mentor
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto"
          >
            {[
              { number: "9+ Years", label: "Industry Experience" },
              { number: "100+", label: "Professionals Mentored" },
              { number: "Real-World", label: "Project Scenarios" },
              { number: "1:1", label: "Personalized Guidance" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
