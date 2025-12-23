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
      className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
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
            className="inline-block mb-8"
          >
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
              ⚡ Limited Slots Available
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Launch Your
            
            Data Engineering Career?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Book your 1:1 clarity call and get a personalized roadmap to success
          </p>

          {/* Session Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <FaClock className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-white font-semibold text-lg">1.5 Hours</div>
              <div className="text-blue-100 text-sm">Duration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <FaVideo className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-white font-semibold text-lg">Zoho Meeting</div>
              <div className="text-blue-100 text-sm">Platform</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <FaCalendarAlt className="w-8 h-8 text-white mb-3 mx-auto" />
              <div className="text-white font-semibold text-lg">10 AM - 6 PM</div>
              <div className="text-blue-100 text-sm">Available Slots (IST)</div>
            </div>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-12 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
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
                  <FaCheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-white">{item}</span>
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
              className="group relative px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
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
            className="mt-8 text-blue-100 text-sm"
          >
            ✓ No obligation • ✓ Honest feedback • ✓ Clear next steps
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

