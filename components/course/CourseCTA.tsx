"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight, FaCheckCircle, FaClock, FaUsers, FaInfinity } from "react-icons/fa";
import { GraphyCourse } from "@/lib/graphy";

interface CourseCTAProps {
  course: GraphyCourse;
}

export default function CourseCTA({ course }: CourseCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: FaInfinity, text: "Lifetime Access" },
    { icon: FaClock, text: "Learn at Your Pace" },
    { icon: FaUsers, text: "Community Support" },
    { icon: FaCheckCircle, text: "Certificate of Completion" },
  ];

  return (
    <section id="cta" ref={ref} className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Become an Azure Data Engineer?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join {course.students || "1000"}+ students transforming their careers
          </p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <benefit.icon className="w-6 h-6 text-white mb-2 mx-auto" />
                <div className="text-white font-medium text-sm">{benefit.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mb-6"
          >
            <a
              href={`https://www.upskillacademy.co.in/single-checkout/${course.id}?pid=p1`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Enroll Now</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 text-blue-100 text-sm"
          >
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              <span>30-day guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" />
              <span>Instant access</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
