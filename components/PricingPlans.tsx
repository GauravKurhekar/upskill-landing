"use client";

import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";

export default function PricingPlans() {
  const plans = [
    {
      name: "On-Demand Recorded Sessions",
      badge: "SELF-PACED",
      originalPrice: "12,990",
      price: "8,990",
      popular: false,
      features: [
        { text: "Comprehensive Curriculum Coverage", included: true },
        { text: "Access to All Session Recordings", included: true },
        { text: "Certificate of Completion", included: true },
        { text: "Lifetime Access Granted", included: true },
        { text: "3 Real-World Projects Included", included: true },
        { text: "Engage with a WhatsApp Community", included: true },
        { text: "Live Doubt Sessions", included: true },
        { text: "Interview Questions", included: true },
        { text: "Live Compact and Interactive Batches", included: false },
        { text: "Live and Practical Classes", included: false },
        { text: "Instant Doubt Resolution", included: false },
        { text: "On Call Job Tips", included: false },
        { text: "Global Job Tips", included: false },
        { text: "Resume Building Assistance", included: false },
        { text: "Insider Tips for Package Negotiation", included: false },
        { text: "Mock Interviews for Preparation", included: false },
      ],
    },
    {
      name: "Instructor-Led Live Sessions",
      badge: "MOST POPULAR",
      originalPrice: "34,990",
      price: "25,990",
      popular: true,
      features: [
        { text: "Comprehensive Curriculum Coverage", included: true },
        { text: "Access to All Session Recordings", included: true },
        { text: "Lifetime Access Granted", included: true },
        { text: "3 Real-World Projects Included", included: true },
        { text: "Compact and Interactive Batches", included: true },
        { text: "Certification Support Available", included: true },
        { text: "Daily Assignments", included: true },
        { text: "Live Q&A Sessions", included: true },
        { text: "Instant Doubt Resolution", included: true },
        { text: "Engage with a WhatsApp Community", included: true },
        { text: "Live and Practical Classes", included: true },
        { text: "Career Guidance Provided", included: true },
        { text: "Support for Az-900, DP-900, DP-203, Databricks Exams", included: true },
        { text: "Naukri Profile Optimization", included: true },
        { text: "Global Job Tips", included: true },
        { text: "Resume Building Assistance", included: true },
        { text: "Placement Support Offered", included: true },
        { text: "Mock Interviews for Preparation", included: true },
        { text: "Insider Tips for Package Negotiation", included: true },
      ],
    },
    {
      name: "RTP – Real-Time Project Accelerator",
      badge: "PROJECT FOCUSED",
      originalPrice: "4,990",
      price: "2,990",
      popular: false,
      features: [
        { text: "3 End-to-End Industry-Grade Projects", included: true },
        { text: "500+ Coding Questions with Solutions", included: true },
        { text: "SQL (Beginner to Advanced)", included: true },
        { text: "Python (Data Engineering focused)", included: true },
        { text: "PySpark (Transformations & Optimizations)", included: true },
        { text: "Career Guidance from Industry Perspective", included: true },
        { text: "Support for Az-900, DP-900, DP-203, Databricks Exams", included: true },
        { text: "2 Mock Technical Interviews", included: true },
      ],
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your career goals and learning style
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 shadow-2xl shadow-purple-300"
                  : "bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl"
              } transition-all duration-300`}
            >
              {/* Badge */}
              <div
                className={`text-center py-3 font-bold text-sm tracking-wider ${
                  plan.popular
                    ? "bg-white/10 text-yellow-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {plan.badge}
              </div>

              {/* Price Section */}
              <div className={`p-6 pb-4 text-center ${plan.popular ? "border-b border-white/10" : "border-b border-gray-100"}`}>
                <h3 className={`text-lg font-semibold mb-4 ${plan.popular ? "text-white" : "text-gray-800"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <span className={`line-through text-lg ${plan.popular ? "text-white/50" : "text-gray-400"}`}>
                    ₹{plan.originalPrice}
                  </span>
                  <div className="flex items-baseline">
                    <span className={`text-4xl md:text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      ₹{plan.price}
                    </span>
                    <span className={`ml-1 ${plan.popular ? "text-white/60" : "text-gray-500"}`}>/-</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-green-400" : "bg-green-100"}`}>
                          <FaCheck className={`text-xs ${plan.popular ? "text-green-900" : "text-green-600"}`} />
                        </span>
                      ) : (
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-red-400/30" : "bg-red-100"}`}>
                          <FaTimes className={`text-xs ${plan.popular ? "text-red-300" : "text-red-500"}`} />
                        </span>
                      )}
                      <span
                        className={`text-sm ${
                          plan.popular
                            ? feature.included ? "text-white" : "text-white/40"
                            : feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href={
                    index === 0
                      ? "/on-demand"
                      : index === 2
                      ? "/rtp"
                      : "#booking"
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:shadow-lg hover:shadow-yellow-300/50"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Enroll Now
                  <FaArrowRight className="text-sm" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          All plans include lifetime access to course materials. EMI options available.
        </motion.p>
      </div>
    </section>
  );
}
