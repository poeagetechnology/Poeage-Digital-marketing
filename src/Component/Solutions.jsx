import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  Building2,
  GraduationCap,
  HeartPulse,
  Truck,
  ShoppingBag,
  Briefcase,
  Smartphone,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: <Store size={28} />,
      category: "Retail & E-Commerce",
      idea: "Omnichannel selling, loyalty programs, and digital storefront optimization.",
      sales: "Increase footfall and online conversions through targeted campaigns.",
    },
    {
      icon: <Building2 size={28} />,
      category: "Corporate & B2B",
      idea: "Lead generation funnels, LinkedIn outreach, and account-based marketing.",
      sales: "Convert enterprise leads into long-term contracts.",
    },
    {
      icon: <GraduationCap size={28} />,
      category: "Education & Training",
      idea: "Online course platforms, webinar funnels, and student CRM systems.",
      sales: "Boost enrollments with automated follow-ups and ads.",
    },
    {
      icon: <HeartPulse size={28} />,
      category: "Healthcare & Wellness",
      idea: "Appointment systems, health portals, and patient engagement apps.",
      sales: "Improve bookings and retention through digital trust-building.",
    },
    {
      icon: <Truck size={28} />,
      category: "Logistics & Transport",
      idea: "Fleet tracking, booking apps, and route optimization tools.",
      sales: "Generate B2B contracts via industry-specific campaigns.",
    },
    {
      icon: <ShoppingBag size={28} />,
      category: "Startups & D2C",
      idea: "MVP development, branding kits, and influencer partnerships.",
      sales: "Scale rapidly with growth hacking strategies.",
    },
    {
      icon: <Briefcase size={28} />,
      category: "Professional Services",
      idea: "Portfolio websites, client portals, and online consultations.",
      sales: "Attract premium clients through authority marketing.",
    },
    {
      icon: <Smartphone size={28} />,
      category: "Mobile Apps & SaaS",
      idea: "Product-led onboarding, freemium models, and UX optimization.",
      sales: "Increase subscriptions with retention campaigns.",
    },
  ];

  return (
    <section className="bg-slate-50 py-28 px-6 text-gray-900">
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
            Business Solutions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Industry-Specific Growth Solutions
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide customized ideas, development strategies, and sales systems
            for every business category.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm hover:shadow-lg transition"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyan-600 rounded-lg mb-5">
                {item.icon}
              </div>

              {/* Category */}
              <h3 className="text-lg font-semibold mb-3">
                {item.category}
              </h3>

              {/* Idea */}
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold text-gray-800">Idea:</span> {item.idea}
              </p>

              {/* Sales */}
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Sales:</span> {item.sales}
              </p>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Need a Custom Business Solution?
          </h3>

          <button className="px-10 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md font-medium hover:from-cyan-700 hover:to-blue-700 transition shadow-lg shadow-cyan-500/30">
            Get Free Strategy Session
          </button>
        </motion.div>

      </div>
    </section>
  );
}
