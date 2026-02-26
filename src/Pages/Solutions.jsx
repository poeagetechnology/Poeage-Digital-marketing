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

import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import solutions from "../data/solutions.json";

/* ---------------- ICON MAP ---------------- */

const iconMap = {
  Store,
  Building2,
  GraduationCap,
  HeartPulse,
  Truck,
  ShoppingBag,
  Briefcase,
  Smartphone,
};

export default function Solutions() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
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

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {solutions.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Card hover shadow="md" padding="lg">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyan-600 rounded-lg mb-5">
                    {Icon && <Icon size={28} />}
                  </div>

                  {/* Category */}
                  <h3 className="text-lg font-semibold mb-3">
                    {item.category}
                  </h3>

                  {/* Idea */}
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold text-gray-800">Idea:</span>{" "}
                    {item.idea}
                  </p>

                  {/* Sales */}
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Sales:</span>{" "}
                    {item.sales}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Need a Custom Business Solution?
          </h3>

          <Button size="lg">
            Get Free Strategy Session
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
