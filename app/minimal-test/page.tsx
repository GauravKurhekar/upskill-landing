"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MinimalTestPage() {
  const [testData, setTestData] = useState({
    fullName: "Test User",
    email: "test@example.com",
    phone: "+1 5555555555",
    currentRole: "Developer",
    experience: "junior",
    courseInterest: "live-course",
    courseFormat: "instructor-led",
  });

  const [storedData, setStoredData] = useState<any>(null);
  const [message, setMessage] = useState("");

  const handleSaveTest = () => {
    try {
      const existingLeads = localStorage.getItem("registrationLeads");
      const leads = existingLeads ? JSON.parse(existingLeads) : [];

      const newLead = {
        id: Date.now().toString(),
        ...testData,
        submittedAt: new Date().toLocaleString(),
      };

      leads.push(newLead);
      localStorage.setItem("registrationLeads", JSON.stringify(leads));

      setMessage("✅ Data saved to localStorage!");
      console.log("Saved:", newLead);
      console.log("All leads:", leads);
      
      setTimeout(() => {
        handleCheckData();
      }, 500);
    } catch (error) {
      setMessage(`❌ Error: ${error}`);
    }
  };

  const handleCheckData = () => {
    try {
      const data = localStorage.getItem("registrationLeads");
      if (data) {
        const parsed = JSON.parse(data);
        setStoredData(parsed);
        setMessage(`✅ Found ${parsed.length} registrations in localStorage`);
      } else {
        setStoredData(null);
        setMessage("❌ No data in localStorage");
      }
    } catch (error) {
      setMessage(`❌ Error reading: ${error}`);
    }
  };

  const handleClear = () => {
    localStorage.removeItem("registrationLeads");
    setStoredData(null);
    setMessage("✅ Cleared localStorage");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-6 block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Minimal localStorage Test
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 space-y-6"
        >
          {/* Test Data */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Test Data:</h2>
            <div className="bg-gray-50 rounded p-4 font-mono text-sm">
              {JSON.stringify(testData, null, 2)}
            </div>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`p-4 rounded ${
                message.includes("✅")
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleSaveTest}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
            >
              1️⃣ Save Test Data
            </button>
            <button
              onClick={handleCheckData}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-semibold"
            >
              2️⃣ Check localStorage
            </button>
            <button
              onClick={handleClear}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 font-semibold"
            >
              3️⃣ Clear Data
            </button>
          </div>

          {/* Stored Data */}
          {storedData && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Stored Data ({storedData.length} items):
              </h2>
              <div className="bg-gray-50 rounded p-4 font-mono text-sm overflow-auto max-h-80">
                {JSON.stringify(storedData, null, 2)}
              </div>
            </div>
          )}

          {/* Quick Links */}
          <div className="border-t pt-6 space-y-4">
            <h3 className="font-bold text-gray-900">Next Steps:</h3>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Click &quot;Save Test Data&quot; to simulate a form submission</li>
              <li>Click &quot;Check localStorage&quot; to verify it saved</li>
              <li>Go to <Link href="/admin/login" className="text-blue-600 hover:underline">/admin/login</Link> and login</li>
              <li>You should see the test data on the dashboard</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
