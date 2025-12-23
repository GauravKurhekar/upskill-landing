"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Engineer at Microsoft",
      image: "👩‍💼",
      rating: 5,
      text: "This course completely transformed my career! The hands-on projects and real-world scenarios prepared me perfectly for my role at Microsoft. Highly recommended!",
    },
    {
      name: "Rahul Verma",
      role: "Senior Data Analyst at Amazon",
      image: "👨‍💻",
      rating: 5,
      text: "The best Azure course I've taken. The instructor's expertise and the comprehensive curriculum helped me transition from analyst to data engineer seamlessly.",
    },
    {
      name: "Anita Desai",
      role: "Cloud Engineer at TCS",
      image: "👩‍🔬",
      rating: 5,
      text: "Excellent course structure and support. The career guidance and certification prep were invaluable. Got my dream job within 3 months of completing the course!",
    },
    {
      name: "Vikram Singh",
      role: "Data Architect at Infosys",
      image: "👨‍🎓",
      rating: 5,
      text: "The depth of knowledge and practical experience shared in this course is unmatched. It's not just about passing certifications, but truly understanding Azure.",
    },
    {
      name: "Meera Patel",
      role: "BI Developer at Wipro",
      image: "👩‍🏫",
      rating: 5,
      text: "From basics to advanced concepts, everything was explained clearly. The projects helped me build a strong portfolio that impressed interviewers.",
    },
    {
      name: "Arjun Reddy",
      role: "Data Engineer at Google",
      image: "👨‍🔧",
      rating: 5,
      text: "Worth every penny! The instructor's industry experience shows in every lesson. The community support and mentorship made learning enjoyable and effective.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <FaQuoteLeft className="w-8 h-8" />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
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
