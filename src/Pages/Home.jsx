import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import Testimonials from "../Pages/Testimonials";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const services = [
    "Search Engine Optimization",
    "Performance Advertising",
    "Brand Consulting",
    "Web Development",
    "Marketing Automation",
    "Data & Analytics",
  ];

  const stats = [
    { value: "10+ Clients", label: "Trusted Performance" },
    { value: "98% Retention", label: "Client Satisfaction" },
    { value: "5+ Years", label: "Industry Experience" },
    { value: "Global Reach", label: "Worldwide Impact" },
  ];

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-white text-gray-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1 bg-white rounded-full text-sm"
            >
              ENTERPRISE DIGITAL SOLUTIONS
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Empowering Brands with
              <span className="block text-cyan-700">
                Data-Driven Marketing
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg max-w-xl"
            >
              Poeage Digital partners with ambitious organizations to deliver
              measurable growth through intelligent digital transformation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4">
              <Link to="/contact">
                <Button size="lg">
                  Get Proposal
                </Button>
              </Link>

              <Link to="/service">
                <Button variant="secondary" size="lg">
                  Explore Services
                </Button>
              </Link>

            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border rounded-2xl p-6 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Marketing Analytics"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <Card key={stat.value} padding="sm" shadow="sm" hover={false}>
              <h3 className="text-xl font-bold text-blue-900">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Marketing Capabilities
            </h2>
            <p className="text-gray-600">
              Integrated digital services designed for scalable growth.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service} variants={fadeUp}>
                <Card>
                  <h3 className="text-lg font-semibold mb-3">
                    {service}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Delivering precision-driven strategies aligned with your
                    business objectives.
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASE HIGHLIGHT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-800 uppercase">
              Success Story
            </span>

            <h2 className="text-3xl font-bold text-gray-900 my-4">
              3X Revenue Growth for Enterprise Client
            </h2>

            <p className="text-gray-600 mb-6">
              Our strategic optimization framework enabled a multinational
              brand to scale acquisition and retention across digital channels.
            </p>

            <Button as={Link} to="/case-studies" variant="ghost">
              View Case Study →
            </Button>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Business Strategy"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Build a High-Performance Digital Ecosystem
          </h2>

          <p className="text-blue-200 max-w-2xl mx-auto mb-8">
            Let Poeage Digital become your strategic partner in digital
            transformation and revenue acceleration.
          </p>

          <Link to="/contact">
            <Button size="lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>

        <Testimonials />
      </section>
    </main>
  );
}
