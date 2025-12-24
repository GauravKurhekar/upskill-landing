"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaAward, FaStar } from "react-icons/fa";

export default function Instructor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instructor" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn From{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get mentored by professionals with years of real-world experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Instructor Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://ik.imagekit.io/a0ivf97jq/alop.png?updatedAt=1764168497635"
                  alt="Gaurav Kumar - Azure Data Engineer"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <FaAward className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2">
                <FaStar className="w-6 h-6 text-yellow-500" />
                <span className="font-bold text-gray-900">4.9/5</span>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Gaurav
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  Senior Data Engineer | Microsoft & Databricks Certified
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                With over 9+ years of hands-on experience in the IT industry, I&apos;ve worked across 
                real-time data projects, complex cloud systems, and enterprise-level pipelines — 
                not just in theory, but in production. I&apos;ve helped hundreds of aspiring professionals 
                transition confidently into Data Engineering careers through practical, job-focused 
                training rooted in real-world use cases.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">What I Offer</h4>
                <ul className="space-y-3">
                  {[
                    "Not just teaching tools, but showing how they're used in real projects",
                    "Not just sharing theory, but solving actual business problems with cloud tech",
                    "Not just guiding for interviews, but preparing you to handle them like a pro",
                    "Microsoft & Databricks Certified Professional",
                    "Worked across real-time data projects and enterprise-level pipelines",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <blockquote className="italic text-gray-600 border-l-4 border-blue-600 pl-4">
                  &ldquo;I explain things in a way you can actually understand. My goal is to help 
                  data enthusiasts turn ambition into achievement by offering a structured, 
                  practical learning approach.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
