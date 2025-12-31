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
      question: "Who Should Enroll in This Program?",
      answer:
        "This program is ideal for working professionals from both Tech and Non-Tech backgrounds. It is also suitable for graduates and professionals from other domains who are willing to put in extra effort to transition into the field of Data Engineering.",
    },
    {
      question: "What if I miss a Live lecture?",
      answer:
        "All live lectures are recorded and you will have access to the recordings after the lecture is completed.",
    },
    {
      question: "What is the Duration of the Program?",
      answer:
        "The program spans approximately 2.5 to 3 months, depending on the learning pace and class schedule.",
    },
    {
      question: "What is profiles of instructor?",
      answer:
        "Our instructor is currently working as a Senior Data Engineer in a product-based company. He holds industry-recognized certifications from Microsoft and Databricks, bringing real-world experience and practical insights to the classroom.",
    },
    {
      question: "Is the entire course taught by one instructor?",
      answer:
        "Yes, the entire course is designed and delivered by Gaurav K himself. He believes in maintaining the highest quality of coaching and a consistent learning experience.",
    },
    {
      question: "Will I be industry-ready after completing the course?",
      answer:
        "Absolutely. You'll gain in-depth training on the latest and most in-demand technologies in the Big Data industry. Our hands-on approach ensures you build the skills and confidence to handle real-world scenarios.",
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
