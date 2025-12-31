"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const screenshots = [
    {
      id: 1,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0006.jpg",
      alt: "Student Success Story 1",
    },
    {
      id: 2,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0003.jpg",
      alt: "Student Success Story 2",
    },
    {
      id: 3,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0011.jpg",
      alt: "Student Success Story 3",
    },
    {
      id: 4,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0008.jpg",
      alt: "Student Success Story 4",
    },
    {
      id: 5,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0009.jpg",
      alt: "Student Success Story 5",
    },
    {
      id: 6,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0010.jpg",
      alt: "Student Success Story 6",
    },
    {
      id: 7,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0007.jpg",
      alt: "Student Success Story 7",
    },
    {
      id: 8,
      url: "https://ik.imagekit.io/qujrbo6v2/IMG-20250810-WA0002.jpg",
      alt: "Student Success Story 8",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 bg-gradient-to-br from-purple-50 to-blue-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied students who have transformed their careers
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={screenshot.url}
                alt={screenshot.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={85}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <FaStar className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 2000+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
