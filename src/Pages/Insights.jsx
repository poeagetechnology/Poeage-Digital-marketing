import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Lightbulb,
  FileText,
  TrendingUp,
  Globe,
  Users,
  Cpu,
  Award,
  ArrowRight,
} from "lucide-react";

import insights from "../data/insights.json";
import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import Modal from "../Components/ui/Modal";
import Badge from "../Components/ui/Badge";

/* Icon mapping based on tag */
const iconMap = {
  Strategy: Lightbulb,
  Analytics: LineChart,
  Research: FileText,
  Trends: TrendingUp,
  Clients: Users,
  Global: Globe,
  Technology: Cpu,
  Branding: Award,
};

export default function Insights() {
  const [activeInsight, setActiveInsight] = useState(null);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white text-gray-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
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

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Poeage Strategic Insights
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Executive research, analytics, and growth intelligence for modern enterprises.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {insights.map((item, index) => {
            const Icon = iconMap[item.tag] || Lightbulb;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Card
                  hover
                  padding="lg"
                  shadow="md"
                  className="cursor-pointer"
                  onClick={() => setActiveInsight(item)}
                >
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="info">{item.tag}</Badge>

                    <div className="w-10 h-10 flex items-center justify-center bg-cyan-50 text-cyan-600 rounded-lg">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center text-sm font-medium text-cyan-700">
                    View Report
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* MODAL */}
        <Modal
          open={!!activeInsight}
          onClose={() => setActiveInsight(null)}
          size="lg"
          title={activeInsight?.title}
        >
          {activeInsight && (
            <div>
              <Badge variant="info" className="mb-3">
                {activeInsight.tag}
              </Badge>

              <p className="text-gray-600 leading-relaxed mb-6">
                {activeInsight.details}
              </p>

              <Button onClick={() => setActiveInsight(null)}>
                Close
              </Button>
            </div>
          )}
        </Modal>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Access Executive-Level Business Intelligence
          </h3>

          <Button size="lg">
            Join Poeage Insights
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
