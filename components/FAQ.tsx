"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getFAQs } from "@/sanity/lib/queries";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqs, setFaqs] = useState<any[]>([]);

  // Fetch FAQs from Sanity
  useEffect(() => {
    async function loadFAQs() {
      try {
        const data = await getFAQs();
        setFaqs(data);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      }
    }
    loadFAQs();
  }, []);

  const fallbackFaqs = [
    {
      question: "Who is this session for?",
      answer:
        "This session is ideal for students, freshers, IT professionals (developers, testers, support engineers), data analysts, and job seekers who are serious about transitioning into Data Engineering and want expert, personalized guidance on their next steps.",
    },
    {
      question: "What will I learn during the session?",
      answer:
        "You'll get a personalized career roadmap based on your current skills and goals, deep insights from 9+ years of real-world experience, clarity on which tools and skills to focus on, and actionable next steps to become job-ready.",
    },
    {
      question: "Do I need any prior experience to attend?",
      answer:
        "No specific prerequisites are required. Whether you're a complete beginner or have some technical background, the session will be tailored to your current level and career aspirations.",
    },
    {
      question: "Is this a promotional or sales call?",
      answer:
        "No. This is a genuine consultation where you'll receive honest feedback and direction—even if you choose not to work with us further. The focus is on providing value and clarity, not pushing any agenda.",
    },
    {
      question: "How long is the session?",
      answer:
        "The session is 1.5 hours long, conducted via Zoho Meeting. This gives us enough time to understand your background, discuss your goals, and create a clear action plan.",
    },
    {
      question: "How should I prepare for the call?",
      answer:
        "Come prepared with specific questions about your career goals, any challenges you're facing, and what you hope to achieve in Data Engineering. The more context you provide, the more personalized and valuable the guidance will be.",
    },
    {
      question: "What bonuses do I get?",
      answer:
        "You'll receive Interview Prep Kit with real Q&As, Databricks Notebooks for SQL/PySpark practice, Lifetime Access to session recordings, 1:1 Resume & Job Strategy guidance, and Use-Case Assignments based on real industry scenarios.",
    },
    {
      question: "What makes this different from other mentorship programs?",
      answer:
        "Unlike generic coaching programs, this is based on real-world experience from a working Senior Data Engineer with 9+ years in production environments. You get honest feedback, practical insights, and strategies that actually work—not just theory from YouTube.",
    },
  ];

  // Use Sanity data if available, otherwise use fallback
  const displayFaqs = faqs.length > 0 ? faqs : fallbackFaqs;

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the course
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayFaqs.map((faq: any, index: number) => (
            <motion.div
              key={faq._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@upskillacademy.com"
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
