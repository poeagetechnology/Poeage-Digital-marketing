import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Target,
  TrendingUp,
  ShieldCheck,
  Palette,
  Users,
  X,
} from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const primeServices = [
    {
      icon: <Target size={28} />,
      phase: "01",
      title: "Market Intelligence",
      desc: "Strategic research and competitor analysis for accurate positioning.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      details:
        "We analyze competitors, customer behavior, and market trends to build strong positioning strategies.",
    },
    {
      icon: <Rocket size={28} />,
      phase: "02",
      title: "Growth Acceleration",
      desc: "Performance-driven campaigns to increase visibility and leads.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      details:
        "Our growth systems focus on paid ads, funnels, and organic reach to maximize conversions.",
    },
    {
      icon: <TrendingUp size={28} />,
      phase: "03",
      title: "Performance Management",
      desc: "Advanced analytics and optimization for sustainable ROI.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4",
      details:
        "We track KPIs, analyze data, and continuously improve campaign performance.",
    },
    {
      icon: <Palette size={28} />,
      phase: "04",
      title: "Brand Strategy",
      desc: "Professional brand identity and digital experience design.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
      details:
        "We design strong visual identities and user experiences that build trust.",
    },
    {
      icon: <ShieldCheck size={28} />,
      phase: "05",
      title: "Security & Compliance",
      desc: "Website security, data protection, and trust frameworks.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
      details:
        "We ensure your digital assets are protected with modern security systems.",
    },
    {
      icon: <Users size={28} />,
      phase: "06",
      title: "Client Relationship",
      desc: "CRM systems and automation for long-term retention.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      details:
        "We implement CRM and automation tools for long-term customer loyalty.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white text-gray-900 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-cyan-600 font-semibold tracking-widest uppercase text-sm">
            Our Methodology
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Prime Development Framework
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A structured corporate growth system designed by Poeage Technology
            to deliver measurable digital success.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {primeServices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveService(item)}
              className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-9 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
            >

              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />

              {/* Top Row */}
              <div className="flex items-center justify-between mb-7">

                <div className="w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyan-600 rounded-lg group-hover:bg-cyan-100 transition">
                  {item.icon}
                </div>

                <span className="text-sm font-semibold text-gray-400">
                  Phase {item.phase}
                </span>

              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>

              <p className="mt-4 text-cyan-600 text-sm font-medium">
                View Details →
              </p>

            </motion.div>
          ))}

        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeService && (
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
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                  <X size={24} />
                </button>

                {/* Image */}
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-8">
                  <span className="text-cyan-600 font-semibold text-sm">
                    Phase {activeService.phase}
                  </span>

                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {activeService.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {activeService.details}
                  </p>

                  <button
                    onClick={() => setActiveService(null)}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md font-medium hover:from-cyan-700 hover:to-blue-700 transition"
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
          className="text-center mt-28"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Partner With Us for Sustainable Growth
          </h3>

          <button className="px-12 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-md font-medium transition shadow-lg shadow-cyan-500/30">
            Request Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
}
