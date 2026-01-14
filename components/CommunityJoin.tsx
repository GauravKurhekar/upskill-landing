"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function CommunityJoin() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Join Our Community
          </h3>
          <p className="text-blue-100 text-lg mb-10">
            Stay updated with latest content and connect with fellow learners
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* YouTube Button */}
            <motion.a
              href="https://www.youtube.com/@UpskillAcademyOfficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <FaYoutube className="text-3xl" />
              <span>Subscribe on YouTube</span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/917020269389"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <FaWhatsapp className="text-3xl" />
              <span>Join WhatsApp Group</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
