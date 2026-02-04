import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Lightbulb,
  FileText,
  TrendingUp,
  Globe,
  Users,
  ArrowRight,
  X,
} from "lucide-react";

export default function Insights() {
  const [activeInsight, setActiveInsight] = useState(null);

  const insights = [
    {
      icon: <Lightbulb size={24} />,
      tag: "Strategy",
      title: "Enterprise Growth Models",
      desc: "Proven frameworks for scalable and sustainable business expansion.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      details:
        "This report covers enterprise growth frameworks, market positioning models, and long-term scaling strategies for modern organizations.",
    },
    {
      icon: <LineChart size={24} />,
      tag: "Analytics",
      title: "Performance Intelligence",
      desc: "Advanced analytics and benchmarking for data-driven decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      details:
        "Includes KPI dashboards, ROI analysis methods, and performance optimization techniques used by leading enterprises.",
    },
    {
      icon: <FileText size={24} />,
      tag: "Research",
      title: "Industry Whitepapers",
      desc: "Professional research reports on evolving market dynamics.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      details:
        "Comprehensive whitepapers covering consumer behavior, technology shifts, and industry forecasts.",
    },
    {
      icon: <TrendingUp size={24} />,
      tag: "Trends",
      title: "Future Readiness",
      desc: "Insights on upcoming technologies and digital ecosystems.",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      details:
        "Analysis of AI, automation, digital platforms, and future-ready business systems.",
    },
    {
      icon: <Users size={24} />,
      tag: "Clients",
      title: "Customer Intelligence",
      desc: "Data-backed understanding of client journeys and expectations.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      details:
        "Insights on customer behavior, retention strategies, and loyalty program development.",
    },
    {
      icon: <Globe size={24} />,
      tag: "Global",
      title: "Market Expansion",
      desc: "International opportunity mapping and entry strategies.",
      image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572",
      details:
        "Global market analysis including cross-border strategies and international growth planning.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-gray-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <span className="text-cyan-700 font-semibold tracking-widest uppercase text-sm">
            Corporate Intelligence Center
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Poeage Strategic Insights
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Curated business intelligence, executive research, and
            performance-driven perspectives for modern enterprises.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveInsight(item)}
              className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-2xl transition-all relative"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                <div className="w-10 h-10 flex items-center justify-center bg-cyan-50 text-cyan-600 rounded-lg group-hover:bg-cyan-100 transition">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-700 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {item.desc}
              </p>

              {/* Link */}
              <div className="flex items-center text-sm font-medium text-cyan-700 group-hover:text-cyan-800 transition">
                View Report
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
              </div>

            </motion.div>
          ))}

        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeInsight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
              >

                {/* Close */}
                <button
                  onClick={() => setActiveInsight(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                  <X size={24} />
                </button>

                {/* Image */}
                <img
                  src={activeInsight.image}
                  alt={activeInsight.title}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-8">
                  <span className="text-cyan-700 font-semibold text-sm">
                    {activeInsight.tag}
                  </span>

                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {activeInsight.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {activeInsight.details}
                  </p>

                  <button
                    onClick={() => setActiveInsight(null)}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-700 to-blue-700 text-white rounded-md font-medium hover:from-cyan-800 hover:to-blue-800 transition"
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Access Executive-Level Business Intelligence
          </h3>

          <button className="px-12 py-3 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-800 hover:to-blue-800 text-white rounded-md font-medium transition shadow-lg shadow-cyan-600/30">
            Join Poeage Insights
          </button>
        </motion.div>

      </div>
    </section>
  );
}
