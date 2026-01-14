"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function CommunityJoin() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Join Our Community
          </h3>
          <p className="text-gray-600 mb-8">
            Stay updated with latest content and connect with fellow learners
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* YouTube Button */}
            <motion.a
              href="https://www.youtube.com/@UpskillAcademyOfficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaYoutube className="text-2xl" />
              <span>Subscribe on YouTube</span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/917020269389"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Join WhatsApp Group</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
