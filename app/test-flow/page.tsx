"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function TestFlowPage() {
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const testResults: any[] = [];

    // Test 1: Check localStorage availability
    try {
      const testKey = "test_" + Date.now();
      localStorage.setItem(testKey, "test");
      localStorage.removeItem(testKey);
      testResults.push({
        name: "localStorage Available",
        status: "✅ PASS",
        details: "Browser localStorage is working",
      });
    } catch (error) {
      testResults.push({
        name: "localStorage Available",
        status: "❌ FAIL",
        details: "localStorage is not available: " + error,
      });
    }

    // Test 2: Check if registration data exists
    const storedLeads = localStorage.getItem("registrationLeads");
    testResults.push({
      name: "Check Stored Registrations",
      status: storedLeads ? "✅ PASS" : "⚠️ NO DATA",
      details: storedLeads
        ? `Found ${JSON.parse(storedLeads).length} registrations`
        : "No registrations stored yet. Submit a form first!",
      data: storedLeads ? JSON.parse(storedLeads) : null,
    });

    // Test 3: Verify data structure
    if (storedLeads) {
      try {
        const leads = JSON.parse(storedLeads);
        if (leads.length > 0) {
          const firstLead = leads[0];
          const requiredFields = [
            "id",
            "fullName",
            "email",
            "phone",
            "experience",
            "courseInterest",
            "courseFormat",
            "submittedAt",
          ];
          const missingFields = requiredFields.filter((field) => !firstLead[field]);

          testResults.push({
            name: "Data Structure Validation",
            status: missingFields.length === 0 ? "✅ PASS" : "⚠️ INCOMPLETE",
            details: `Required fields check. ${missingFields.length > 0 ? "Missing: " + missingFields.join(", ") : "All fields present"}`,
            sample: firstLead,
          });
        }
      } catch (error) {
        testResults.push({
          name: "Data Structure Validation",
          status: "❌ FAIL",
          details: "Data parsing error: " + error,
        });
      }
    }

    // Test 4: Check admin auth
    const adminToken = localStorage.getItem("adminAuthToken");
    testResults.push({
      name: "Admin Auth Token",
      status: adminToken ? "✅ PRESENT" : "⚠️ NOT SET",
      details: adminToken
        ? "Admin is logged in"
        : "Not logged in yet. Go to /admin/login",
    });

    // Test 5: Dashboard data loading simulation
    if (storedLeads) {
      try {
        const leads = JSON.parse(storedLeads);
        const sorted = leads.sort((a: any, b: any) => {
          return (
            new Date(b.submittedAt).getTime() -
            new Date(a.submittedAt).getTime()
          );
        });
        testResults.push({
          name: "Dashboard Data Processing",
          status: "✅ PASS",
          details: `Would display ${sorted.length} registrations on dashboard`,
          data: sorted,
        });
      } catch (error) {
        testResults.push({
          name: "Dashboard Data Processing",
          status: "❌ FAIL",
          details: "Error processing data: " + error,
        });
      }
    }

    setResults(testResults);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Flow Test Dashboard</h1>
          <p className="text-gray-600">Test the complete registration → dashboard flow</p>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"
        >
          <h3 className="font-bold text-blue-900 mb-3">How to Test:</h3>
          <ol className="text-blue-800 space-y-2 list-decimal list-inside">
            <li>Go to <code className="bg-blue-100 px-2 py-1 rounded">/register</code> and submit a form</li>
            <li>After submit, come back here and refresh</li>
            <li>Check if &quot;Check Stored Registrations&quot; shows your data</li>
            <li>Go to <code className="bg-blue-100 px-2 py-1 rounded">/admin/login</code> and login</li>
            <li>You should see your registration on the dashboard</li>
          </ol>
        </motion.div>

        {/* Test Results */}
        <div className="space-y-4">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900">{result.name}</h3>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded ${
                    result.status.includes("✅")
                      ? "bg-green-100 text-green-800"
                      : result.status.includes("⚠️")
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {result.status}
                </span>
              </div>

              <p className="text-gray-700 mb-3">{result.details}</p>

              {result.data && (
                <div className="bg-gray-50 rounded p-3 text-xs font-mono text-gray-800 overflow-auto max-h-40">
                  <pre>{JSON.stringify(result.data, null, 2)}</pre>
                </div>
              )}

              {result.sample && (
                <div className="bg-gray-50 rounded p-3 text-xs font-mono text-gray-800 overflow-auto max-h-40">
                  <pre>{JSON.stringify(result.sample, null, 2)}</pre>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Test Registration Form
          </Link>
          <Link
            href="/admin/login"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            Test Admin Login
          </Link>
          <Link
            href="/debug"
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            View Debug Info
          </Link>
        </div>
      </div>
    </div>
  );
}
