"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaLock, FaUser } from "react-icons/fa";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded admin credentials (for demo - change in production!)
  const ADMIN_EMAIL = "admin@upskill.com";
  const ADMIN_PASSWORD = "UpSkill@2024";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Store auth token in localStorage
        localStorage.setItem("adminAuthToken", "demo-token-" + Date.now());
        localStorage.setItem("adminEmail", email);
        router.push("/admin/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4">
            <FaLock className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-600">UpSkill Academy Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@upskill.com"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-red-700 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs font-semibold text-blue-900 mb-2">Demo Credentials:</p>
          <p className="text-xs text-blue-800">Email: <code className="font-mono font-bold">admin@upskill.com</code></p>
          <p className="text-xs text-blue-800">Password: <code className="font-mono font-bold">UpSkill@2024</code></p>
        </div>
      </motion.div>
    </div>
  );
}
