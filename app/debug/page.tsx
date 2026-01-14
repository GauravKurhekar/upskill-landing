"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  experience: string;
  courseInterest: string;
  courseFormat: string;
  submittedAt: string;
}

export default function DebugPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedLeads = localStorage.getItem("registrationLeads");
    console.log("Raw localStorage value:", storedLeads);
    
    if (storedLeads) {
      try {
        const parsed = JSON.parse(storedLeads);
        console.log("Parsed leads:", parsed);
        setLeads(parsed);
      } catch (error) {
        console.error("Error parsing leads:", error);
      }
    } else {
      console.log("No data found in localStorage under key 'registrationLeads'");
    }
    setIsLoading(false);
  }, []);

  const yourEmailLeads = leads.filter(
    (lead) => lead.email.toLowerCase() === "mpiyush2727@gmail.com"
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Debug Storage</h1>
          <p className="text-gray-600">Check your stored registration data</p>
        </div>

        {/* Your Data Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Data (mpiyush2727@gmail.com)
          </h2>

          {yourEmailLeads.length > 0 ? (
            <div className="space-y-4">
              {yourEmailLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="border border-green-200 bg-green-50 rounded-lg p-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 text-sm">Full Name</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.fullName}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Email</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Phone</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Current Role</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.currentRole || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Experience</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.experience}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Course Interest</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.courseInterest}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Course Format</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.courseFormat}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Submitted At</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lead.submittedAt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-red-200 bg-red-50 rounded-lg p-6 text-center">
              <p className="text-red-700 font-semibold">❌ No data found!</p>
              <p className="text-red-600 text-sm mt-2">
                No registration with email mpiyush2727@gmail.com found in storage.
              </p>
            </div>
          )}
        </motion.div>

        {/* All Stored Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            All Stored Registrations ({leads.length})
          </h2>

          {leads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Course
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {lead.fullName}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {lead.email}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {lead.phone}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {lead.courseInterest}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {lead.submittedAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-gray-600">
                No registrations stored yet. Go to /register to submit a form!
              </p>
            </div>
          )}
        </motion.div>

        {/* Clear Data Button */}
        <div className="mt-8">
          <button
            onClick={() => {
              localStorage.removeItem("registrationLeads");
              window.location.reload();
            }}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
}
