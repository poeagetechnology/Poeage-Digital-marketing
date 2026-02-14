import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp, Users, ShieldCheck } from "lucide-react";

import Card from "../Components/ui/Card";
import Modal from "../Components/ui/Modal";
import Button from "../Components/ui/Button";
import aboutBlocks from "../data/services.json";

/* Icon map */
const iconMap = {
  Rocket,
  Target,
  TrendingUp,
  Users,
  ShieldCheck,
};

export default function Services() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white text-gray-900 py-28 px-6">
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
            About Poeage
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Structured Growth Consultancy
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We design digital ecosystems that deliver measurable, sustainable,
            and scalable business outcomes.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {aboutBlocks.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  hover
                  padding="lg"
                  shadow="md"
                  onClick={() => setActiveItem(item)}
                  className="cursor-pointer relative overflow-hidden"
                >
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />

                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyan-600 rounded-lg">
                      <Icon size={28} />
                    </div>

                    <span className="text-sm font-semibold text-gray-400">
                      Phase {item.phase}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <p className="mt-4 text-cyan-600 text-sm font-medium">
                    View Details →
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* MODAL */}
        <Modal
          open={!!activeItem}
          onClose={() => setActiveItem(null)}
          size="lg"
          title={activeItem?.title}
        >
          {activeItem && (
            <div>
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <span className="text-cyan-600 font-semibold text-sm">
                Phase {activeItem.phase}
              </span>

              <p className="text-gray-600 leading-relaxed mt-4 mb-6">
                {activeItem.details}
              </p>

              <Button onClick={() => setActiveItem(null)}>
                Close
              </Button>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
}
