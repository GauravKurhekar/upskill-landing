"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    courseInterest: "",
    courseFormat: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.courseInterest) newErrors.courseInterest = "Please select a course";
    if (!formData.experience) newErrors.experience = "Please select your experience level";
    if (!formData.courseFormat) newErrors.courseFormat = "Please select a course format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Here you can add your API call to submit the form
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save to localStorage
      const existingLeads = localStorage.getItem("registrationLeads");
      const leads = existingLeads ? JSON.parse(existingLeads) : [];
      
      const newLead = {
        id: Date.now().toString(),
        ...formData,
        submittedAt: new Date().toLocaleString(),
      };
      
      leads.push(newLead);
      localStorage.setItem("registrationLeads", JSON.stringify(leads));

      console.log("✅ Modal form saved successfully!");
      console.log("New lead:", newLead);
      console.log("All leads in storage:", leads);
      console.log("localStorage check:", localStorage.getItem("registrationLeads"));
      setSubmitSuccess(true);

      // Reset form
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          currentRole: "",
          experience: "",
          courseInterest: "",
          courseFormat: "",
          message: "",
        });
        setSubmitSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Register Now</h2>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mb-4 text-4xl">✓</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Registration Successful!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for registering. We&apos;ll be in touch soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          errors.fullName ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Current Role */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Role
                      </label>
                      <input
                        type="text"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleChange}
                        placeholder="e.g., Software Developer, Data Analyst"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          errors.experience ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select experience level</option>
                        <option value="fresher">0-1 years (Fresher)</option>
                        <option value="junior">1-3 years</option>
                        <option value="mid">3-5 years</option>
                        <option value="senior">5-10 years</option>
                        <option value="expert">10+ years</option>
                      </select>
                      {errors.experience && (
                        <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
                      )}
                    </div>

                    {/* Course Interest */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested In *
                      </label>
                      <select
                        name="courseInterest"
                        value={formData.courseInterest}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          errors.courseInterest ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a course</option>
                        <option value="live-course">Live Course</option>
                        <option value="recorded-course">Recorded Course</option>
                        <option value="rtp">Real Time Program</option>
                      </select>
                      {errors.courseInterest && (
                        <p className="text-red-500 text-xs mt-1">{errors.courseInterest}</p>
                      )}
                    </div>

                    {/* Course Format */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Learning Format *
                      </label>
                      <select
                        name="courseFormat"
                        value={formData.courseFormat}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                          errors.courseFormat ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select format</option>
                        <option value="self-paced">Self-Paced</option>
                        <option value="instructor-led">Instructor-Led</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                      {errors.courseFormat && (
                        <p className="text-red-500 text-xs mt-1">{errors.courseFormat}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals..."
                        rows={2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Registering..." : "Register Now"}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
