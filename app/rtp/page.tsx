"use client";

import Navbar from "@/components/Navbar";
import TopNotificationBar from "@/components/TopNotificationBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight, FaStar, FaBriefcase, FaCode, FaMicrochip } from "react-icons/fa";

export default function RTPPage() {
  const offerings = [
    {
      icon: FaBriefcase,
      title: "Real-Time Project Experience",
      description: "3 End-to-End Industry-Grade Data Engineering Projects",
      details: [
        "Real-world datasets and business use cases",
        "Production-style pipelines",
        "Azure + Databricks + SQL + PySpark implementations",
      ],
    },
    {
      icon: FaCode,
      title: "Complete Interview Readiness Kit",
      description: "Comprehensive interview preparation",
      details: [
        "L1 / L2 Interview Questions & Answers",
        "Managerial & Client Round Questions",
        "Scenario-based & project discussion questions",
      ],
    },
    {
      icon: FaMicrochip,
      title: "Coding Mastery Pack",
      description: "500+ Ready-to-Use Coding Questions",
      details: [
        "SQL (Beginner to Advanced)",
        "Python (Data Engineering focused)",
        "PySpark (Transformations, optimizations, scenarios)",
      ],
    },
  ];

  const features = [
    "3 End-to-End Industry-Grade Projects",
    "500+ Coding Questions with Solutions",
    "SQL (Beginner to Advanced)",
    "Python (Data Engineering focused)",
    "PySpark (Transformations & Optimizations)",
    "Career guidance from industry perspective",
    "Support for Az-900, DP-900, DP-203, Databricks Exams",
    "2 Mock Technical Interviews",
    "Managerial Round Simulations",
    "Resume Building & Optimization",
    "Naukri Profile Optimization",
    "Global Job Application Tips",
    "CTC & Package Negotiation Tips",
  ];

  return (
    <main className="min-h-screen">
      <TopNotificationBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              <FaStar className="inline mr-2" />
              Project-Focused Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              RTP –{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Real-Time Project Accelerator
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Bridge the gap between courses and real jobs. Master real-world Data Engineering projects, ace your interviews, and land your dream position.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto italic">
              "If you already learned Data Engineering but don't have real project experience, RTP bridges the gap between courses and real jobs."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-200 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Is This Program For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Ideal For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Professionals who completed Data Engineering courses</li>
                  <li>✓ Learners lacking real-time project exposure</li>
                  <li>✓ Career switchers aiming for immediate placement</li>
                  <li>✓ Anyone seeking interview-ready skills</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Program Focus:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Industry-grade projects with real datasets</li>
                  <li>✓ Real interview preparation strategies</li>
                  <li>✓ Job transition and placement support</li>
                  <li>✓ Practical, hands-on learning approach</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            What You Are Getting
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <offering.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{offering.title}</h3>
                <p className="text-gray-600 font-medium mb-4">{offering.description}</p>
                <ul className="space-y-2">
                  {offering.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Complete Program Features
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Career & Placement Support</h3>
              <ul className="space-y-3">
                {[
                  "Career guidance from industry perspective",
                  "Resume building & optimization (project-focused)",
                  "Naukri Profile Optimization",
                  "Global job application tips (India + Abroad)",
                  "Insider tips for CTC & package negotiation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Certification & Interview Support</h3>
              <ul className="space-y-3">
                {[
                  "Guidance for AZ-900, DP-900, DP-203",
                  "Databricks Associate & Professional Exams",
                  "Exam strategy + resource guidance",
                  "2 Mock technical interviews",
                  "Managerial round simulations",
                  "Personalized feedback & improvement plan",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Master real projects, ace interviews, and land your dream Data Engineering role.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Enroll in RTP Now
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
