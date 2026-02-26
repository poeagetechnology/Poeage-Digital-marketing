import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Search, Home, Mail } from "lucide-react";

/* ---------------- MOCK RECENT PAGES ---------------- */

const recentPages = [
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "Pricing", path: "/pricing" },
  { name: "Insights", path: "/insights" },
];

/* ---------------- COMPONENT ---------------- */

export default function NotFound() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-white px-6 py-20 text-gray-900">
      <div className="max-w-2xl text-center">

        {/* 404 CODE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-bold text-cyan-600 mb-4"
        >
          404
        </motion.h1>

        {/* MESSAGE */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-semibold mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-10"
        >
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </motion.p>

        {/* SEARCH */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-10"
        >
          <input
            type="text"
            placeholder="Search our site..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 outline-none"
          />
          <button
            type="submit"
            className="px-4 text-cyan-600 hover:text-cyan-700 transition"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </motion.form>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link
            to="/"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-700 hover:to-blue-700 transition"
          >
            <Home size={18} />
            Go Home
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition"
          >
            <Mail size={18} />
            Contact Support
          </Link>
        </motion.div>

        {/* RECENT PAGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
            Popular Pages
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {recentPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="px-4 py-2 bg-white border border-gray-200 rounded-md text-sm hover:bg-gray-50 transition"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
