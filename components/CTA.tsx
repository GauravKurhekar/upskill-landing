"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheckCircle, FaClock, FaVideo, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-md">
              ⚡ Limited Slots Available
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ready to Launch Your
            
            Data Engineering Career?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Book your 1:1 clarity call and get a personalized roadmap to success
          </p>

          {/* Session Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-5 shadow-md">
              <FaClock className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
              <div className="text-gray-900 font-semibold text-base">1.5 Hours</div>
              <div className="text-gray-600 text-sm">Duration</div>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-5 shadow-md">
              <FaVideo className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
              <div className="text-gray-900 font-semibold text-base">Zoho Meeting</div>
              <div className="text-gray-600 text-sm">Platform</div>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-5 shadow-md">
              <FaCalendarAlt className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
              <div className="text-gray-900 font-semibold text-base">10 AM - 6 PM</div>
              <div className="text-gray-600 text-sm">Available Slots (IST)</div>
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 mb-8 max-w-3xl mx-auto shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {[
                "Personalized Career Mapping",
                "Expert Guidance (9+ Years)",
                "Actionable Roadmap",
                "Interview & Resume Tips",
                "5 Exclusive Bonuses",
                "Lifetime Access to Resources",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://tidycal.com/growdigitally113/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
            >
              <span className="relative z-10">Book Your Call Now</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-6 text-gray-600 text-sm"
          >
            ✓ No obligation • ✓ Honest feedback • ✓ Clear next steps
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

