"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaClock, FaCalendarAlt, FaVideo, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true },
    { time: "6:00 PM", available: true },
  ];

  const benefits = [
    "1:1 Personalized Career Mapping",
    "Expert Guidance from 9+ Years Experience",
    "Actionable Roadmap & Next Steps",
    "Interview Prep & Resume Tips",
  ];

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4"
          >
            ⚡ Limited Slots Available
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              1:1 Clarity Call
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred time slot and start your journey to becoming a
            Data Engineer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100"
          >
            {/* Session Details */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Session Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <FaClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-gray-900">1.5 Hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <FaVideo className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Platform</div>
                    <div className="font-semibold text-gray-900">Zoho Meeting</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center">
                    <FaCalendarAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Language</div>
                    <div className="font-semibold text-gray-900">English</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Select Your Time Slot
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Available slots: 10:00 AM - 6:00 PM IST
              </p>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      selectedTime === slot.time
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                        : slot.available
                        ? "bg-gray-50 text-gray-900 hover:bg-gray-100 hover:shadow-md border-2 border-gray-200 hover:border-blue-300"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                    }`}
                  >
                    {slot.time}
                    {!slot.available && (
                      <div className="text-xs mt-1">Booked</div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <motion.a
              href="https://tidycal.com/growdigitally113/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="group relative w-full block"
            >
              <div className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <span>Confirm Your Booking</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
              {selectedTime && (
                <div className="text-center text-sm text-gray-600 mt-3">
                  Selected: {selectedTime}
                </div>
              )}
            </motion.a>

            <p className="text-center text-xs text-gray-500 mt-4">
              You&apos;ll receive a confirmation email with meeting details
            </p>
          </motion.div>

          {/* Right Side - What You'll Get */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You&apos;ll Get in This Call
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaCheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">⭐</div>
                <div>
                  <div className="font-bold text-xl">Real Results</div>
                  <div className="text-blue-100">From Past Sessions</div>
                </div>
              </div>
              <p className="text-white/90 italic leading-relaxed">
                &ldquo;This call gave me the clarity I needed. Gaurav&apos;s insights helped me
                land my first Data Engineer role within 3 months!&rdquo;
              </p>
              <div className="mt-4 text-blue-100 font-semibold">
                - Priya S., Data Engineer
              </div>
            </motion.div>

            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 }}
              className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-2">⏰</div>
              <div className="font-bold text-gray-900 text-lg mb-1">
                Limited Slots Available
              </div>
              <div className="text-gray-600 text-sm">
                Only 5 slots left this week. Book now to secure your spot!
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
