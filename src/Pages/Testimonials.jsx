import React from "react";
import { motion } from "framer-motion";
import testimonials from "../data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Our Clients
          </h2>
          <p className="text-gray-600">
            Real feedback from businesses that achieved measurable growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition relative"
            >
              {/* Decorative quote */}
              <div className="absolute -top-4 left-6 text-5xl text-cyan-200 font-serif">
                “
              </div>

              {/* Feedback */}
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                {t.feedback}
              </p>

              {/* Rating */}
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Client Info */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.company}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
