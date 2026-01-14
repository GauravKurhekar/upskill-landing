"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-6">
            Have Any Questions? Let&apos;s Start to Talk
          </h2>
          <p className="text-gray-900 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Let&apos;s start a conversation. Tell a bit about yourself and send your inquiry to us via WhatsApp/SMS or Call. We&apos;ll get back to you as soon as possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/917020269389"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              <div className="text-left">
                <span className="text-xs text-white/80 block">WhatsApp / Call</span>
                <span className="text-sm font-semibold">70 20 269 389</span>
              </div>
            </motion.a>

            {/* Email Button */}
            <motion.a
              href="mailto:info@upskillacademy.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaEnvelope className="text-xl" />
              <div className="text-left">
                <span className="text-xs text-white/80 block">Email Us</span>
                <span className="text-sm font-semibold">info@upskillacademy.in</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
