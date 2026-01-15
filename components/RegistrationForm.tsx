"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    courseInterest: "",
    courseFormat: "",
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
    if (!formData.courseFormat) newErrors.courseFormat = "Please select a course format";
    if (!formData.experience) newErrors.experience = "Please select your experience level";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("🚀 handleSubmit called!");
    console.log("Form data:", formData);

    if (!validateForm()) {
      console.log("❌ Validation failed!");
      return;
    }

    console.log("✅ Validation passed!");
    setIsSubmitting(true);

    try {
      // Save to MongoDB via API
      console.log("💾 Saving to MongoDB...");
      
      const newLead = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };
      
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLead),
      });

      if (!response.ok) {
        throw new Error("Failed to save to database");
      }

      const savedLead = await response.json();
      console.log("✅ Lead saved to MongoDB:", savedLead);

      // Also save to localStorage for backup
      const existingLeads = localStorage.getItem("registrationLeads");
      const leads = existingLeads ? JSON.parse(existingLeads) : [];
      leads.push({
        id: savedLead._id || Date.now().toString(),
        ...newLead,
      });
      localStorage.setItem("registrationLeads", JSON.stringify(leads));

      console.log("✅✅✅ Form saved successfully to both MongoDB and localStorage!");
      
      // Show alert to confirm
      alert("✅ Registration saved! You'll hear from us soon.");
      
      setSubmitSuccess(true);

      // Keep success message visible for 3 seconds then reset
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          currentRole: "",
          experience: "",
          courseInterest: "",
          courseFormat: "",
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setErrors({
        submit: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
      });
      alert("❌ Error: " + (error instanceof Error ? error.message : "Failed to submit"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl mb-4"
          >
            ✓
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Registration Successful!
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Thank you for registering with UpSkill Academy.
          </p>
          <p className="text-gray-600">
            We&apos;ll send you a confirmation email shortly with your next steps.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Our team will reach out to you within 24 hours to discuss your learning goals.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Join UpSkill Academy Today
            </h2>
            <p className="text-blue-100 text-lg">
              Start your data engineering transformation journey
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Current Role */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Current Role
                </label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  placeholder="e.g., Software Developer, Data Analyst"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
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
                  <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
                )}
              </div>

              {/* Course Interest */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Which Course Interests You? <span className="text-red-500">*</span>
                </label>
                <select
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.courseInterest ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a course</option>
                  <option value="live-course">Live Course</option>
                  <option value="recorded-course">Recorded Course</option>
                  <option value="rtp">Real Time Program</option>
                </select>
                {errors.courseInterest && (
                  <p className="text-red-500 text-sm mt-1">{errors.courseInterest}</p>
                )}
              </div>

              {/* Course Format */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Preferred Learning Format <span className="text-red-500">*</span>
                </label>
                <select
                  name="courseFormat"
                  value={formData.courseFormat}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                    errors.courseFormat ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select format</option>
                  <option value="self-paced">Self-Paced</option>
                  <option value="instructor-led">Instructor-Led</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                {errors.courseFormat && (
                  <p className="text-red-500 text-sm mt-1">{errors.courseFormat}</p>
                )}
              </div>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registering...
                </span>
              ) : (
                "Complete Registration"
              )}
            </motion.button>

            {/* Terms & Conditions */}
            <p className="text-center text-gray-600 text-sm mt-6">
              By registering, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>
        </motion.div>
      )}
    </div>
  );
}
