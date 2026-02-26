import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import caseStudies from "../data/casestudies.json";

export default function CaseStudy() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="text-cyan-600 font-semibold tracking-widest uppercase text-sm">
            Proven Results
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Case Studies That Demonstrate Real Growth
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We don’t rely on promises. We deliver measurable outcomes through
            structured strategy, disciplined execution, and continuous optimization.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={`/case-studies/${study.id}`}
                className="group block bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl transition relative overflow-hidden"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />

                {/* Industry Badge */}
                <span className="inline-block text-xs font-semibold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full mb-4">
                  {study.industry}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-700 transition">
                  {study.title}
                </h3>

                {/* Client */}
                <p className="text-sm text-gray-500 mb-4">
                  {study.client}
                </p>

                {/* Overview */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {study.overview}
                </p>

                {/* Metrics Preview */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {study.results?.revenue || "—"}
                    </p>
                    <p className="text-gray-500">Revenue</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {study.results?.traffic || "—"}
                    </p>
                    <p className="text-gray-500">Traffic</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 text-cyan-700 font-medium text-sm group-hover:translate-x-1 transition">
                  View Full Case Study →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Results That Speak for Themselves
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our case studies highlight real performance metrics — not vanity numbers.
            Every engagement is designed to produce measurable business impact.
          </p>
        </div>

      </div>
    </section>
  );
}
