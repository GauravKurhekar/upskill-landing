"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Roadmap() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Learning{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master essential data engineering tools and technologies step by step
          </p>
        </motion.div>

        {/* Roadmap Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white rounded-2xl overflow-hidden">
            <Image
              src="https://ik.imagekit.io/qujrbo6v2/roadmap_high_resolution.png?updatedAt=1766997017916"
              alt="Learning Roadmap"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-2 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Progress through our carefully designed curriculum covering all essential Azure Data Engineering tools and technologies. From foundational concepts to advanced implementations, you&apos;ll master every tool you need for real-world success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
