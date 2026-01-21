"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaSignOutAlt,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaBook,
  FaDownload,
  FaSearch,
} from "react-icons/fa";

interface Lead {
  _id?: string;
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  experience: string;
  courseInterest: string;
  courseFormat: string;
  submittedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [lastRefresh, setLastRefresh] = useState(new Date());

  // Fetch leads from MongoDB
  const fetchLeads = useCallback(async () => {
    try {
      const response = await fetch("/api/leads");
      if (!response.ok) throw new Error("Failed to fetch leads");
      const data = await response.json();
      setLeads(data);
      setError("");
    } catch (err) {
      console.error("Error fetching leads:", err);
      setError("Failed to load leads from database");
    }
  }, []);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("adminAuthToken");
    const email = localStorage.getItem("adminEmail");

    if (!token) {
      router.push("/admin/login");
    } else {
      setAdminEmail(email || "");
      setIsAuthenticated(true);
      setIsLoading(false);
      
      // Fetch leads from MongoDB
      fetchLeads();
      
      // Poll for new leads every 5 seconds
      const interval = setInterval(() => {
        fetchLeads();
        setLastRefresh(new Date());
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [router, fetchLeads]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthToken");
    localStorage.removeItem("adminEmail");
    router.push("/admin/login");
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm)
  );

  const handleDownloadCSV = () => {
    const headers = [
      "Full Name",
      "Email",
      "Phone",
      "Current Role",
      "Experience",
      "Course Interest",
      "Course Format",
      "Submitted At",
    ];
    const rows = filteredLeads.map((lead) => [
      lead.fullName,
      lead.email,
      lead.phone,
      lead.currentRole,
      lead.experience,
      lead.courseInterest,
      lead.courseFormat,
      lead.submittedAt,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">UpSkill Academy</h1>
          <p className="text-slate-400 text-sm mt-1">Admin Panel</p>
        </div>
        <nav className="p-6">
          <div className="space-y-6">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Main</p>
              <ul className="space-y-2">
                <li>
                  <a href="/admin/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-700 bg-opacity-50">
                    <span>📊</span>
                    <span>Dashboard</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Data</p>
              <ul className="space-y-2">
                <li>
                  <button onClick={handleDownloadCSV} className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-700 hover:bg-opacity-50 transition">
                    <span>📥</span>
                    <span>Export CSV</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="absolute bottom-6">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-medium"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-300">
          <div className="px-8 py-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 text-sm">Welcome back, {adminEmail}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>🔄 Last refreshed: {lastRefresh.toLocaleTimeString()}</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Leads</p>
                  <p className="text-3xl font-bold text-gray-900">{leads.length}</p>
                </div>
                <FaUsers className="text-4xl text-blue-600 opacity-20" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">This Month</p>
                  <p className="text-3xl font-bold text-gray-900">{leads.length}</p>
                </div>
                <FaEnvelope className="text-4xl text-purple-600 opacity-20" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Conversion Rate</p>
                  <p className="text-3xl font-bold text-gray-900">-</p>
                </div>
                <FaBriefcase className="text-4xl text-green-600 opacity-20" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Response Rate</p>
                  <p className="text-3xl font-bold text-gray-900">-</p>
                </div>
                <FaBook className="text-4xl text-orange-600 opacity-20" />
              </div>
            </motion.div>
          </div>

          {/* Leads Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">Recent Leads ({filteredLeads.length})</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsLoading(true);
                  fetchLeads().finally(() => setIsLoading(false));
                }}
                className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition text-sm"
              >
                🔄 Refresh
              </motion.button>
            </div>

            {/* Search */}
            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <FaSearch className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Format
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead, index) => (
                      <motion.tr
                        key={lead.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {lead.fullName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{lead.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{lead.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{lead.currentRole}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                            {lead.courseInterest.replace("-", " ")}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                            {lead.courseFormat.replace("-", " ")}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                          {formatDate(lead.submittedAt)}
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                        No leads found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
