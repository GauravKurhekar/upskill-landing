"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaCalendarAlt, FaPlay } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function TopNotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-2.5 px-4 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
        {/* Announcement content */}
        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-4">
          {/* New Batch */}
          <div className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-yellow-300 text-sm" />
            <span className="font-semibold">
              New batch starts <span className="text-yellow-300">15 Jan</span>
            </span>
          </div>

          <span className="hidden sm:inline text-white/60">·</span>

          {/* Free Demo */}
          <div className="flex items-center gap-1.5">
            <FaPlay className="text-green-300 text-xs" />
            <span>
              FREE demo on <span className="text-green-300 font-semibold">11 Jan</span>
            </span>
          </div>

          <span className="hidden sm:inline text-white/60">·</span>

          {/* WhatsApp CTA */}
          <a
            href="https://chat.whatsapp.com/KoZv2I4vDX56sk7Y1VXVm3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
          >
            <FaWhatsapp className="text-lg" />
            <span className="font-medium">Join WhatsApp</span>
          </a>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close notification"
        >
          <IoClose className="text-lg" />
        </button>
      </div>
    </motion.div>
  );
}
