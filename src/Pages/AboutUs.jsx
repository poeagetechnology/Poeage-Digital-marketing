import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

/* ---------------- DATA ---------------- */

const team = [
  {
    name: "Gowrishankar Gunasekaran",
    title: "Founder & CEO",
    bio: "Leads strategic growth architecture and long-term digital systems.",
    img: "https://via.placeholder.com/400",
    email: "gowridyk3@gmail.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Preethika G",
    title: "Head of Marketing",
    bio: "Builds ROI-driven acquisition frameworks and analytics systems.",
    img: "https://via.placeholder.com/400",
    email: "preethika@gmail.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Vigneshwaran",
    title: "Technology Director",
    bio: "Architect of scalable and secure digital platforms.",
    img: "https://via.placeholder.com/400",
    email: "vignesh@gmail.com",
    linkedin: "#",
    twitter: "#",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "150+", label: "Clients Served" },
  { value: "98%", label: "Client Retention" },
];

/* ---------------- COMPONENT ---------------- */

export default function About() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white text-gray-900 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="text-center mb-24"
        >
          <motion.span variants={fadeUp} className="text-cyan-600 font-semibold uppercase text-sm">
            About Poeage
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Structured <span className="text-cyan-600">Digital Growth Consultancy</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-600 max-w-3xl mx-auto text-lg">
            We design measurable digital ecosystems that deliver sustainable and scalable business outcomes.
          </motion.p>
        </motion.div>

        {/* CEO MESSAGE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-16 items-center mb-28"
        >
          <img src={team[0].img} alt="CEO" className="rounded-2xl shadow-lg" />

          <div>
            <h2 className="text-3xl font-semibold mb-6">Message from the Founder</h2>
            <p className="text-gray-600 mb-4">
              Poeage was founded on the belief that growth should be structured, measurable, and accountable.
            </p>
            <p className="text-gray-600 mb-6">
              We build long-term systems — not short-term campaigns — ensuring our partners achieve sustainable competitive advantage.
            </p>
            <p className="font-semibold">— {team[0].name}</p>
          </div>
        </motion.div>

        {/* MISSION / VISION / VALUES */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 mb-28"
        >
          {[
            {
              title: "Mission",
              text: "Deliver performance-driven digital strategies that create measurable growth.",
            },
            {
              title: "Vision",
              text: "Become a benchmark consultancy for structured digital transformation.",
            },
            {
              title: "Values",
              text: "Clarity, execution, accountability, and client-first thinking.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card title={item.title}>
                <p className="text-gray-600">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-28"
        >
          <h2 className="text-3xl font-semibold text-center mb-16">Our Journey</h2>

          <div className="space-y-10 border-l-4 border-cyan-600 pl-8">
            {[
              ["2022 — Founded", "Established with a performance-first philosophy."],
              ["2023 — Growth", "Served 50+ brands across industries."],
              ["2024 — Expansion", "Expanded services nationwide."],
              ["2025 — Enterprise Clients", "Partnered with national brands."],
            ].map(([title, text]) => (
              <div key={title}>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TEAM */}
        <div className="mb-28">
          <h2 className="text-3xl font-semibold text-center mb-16">Leadership Team</h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover padding="lg">
                  <img src={member.img} alt={member.name} className="rounded-xl mb-6 w-full h-64 object-cover" />
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-cyan-600 text-sm mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-6">{member.bio}</p>

                  <div className="flex justify-center gap-5 text-gray-500">
                    <a href={member.linkedin}><FaLinkedin /></a>
                    <a href={member.twitter}><FaTwitter /></a>
                    <a href={`mailto:${member.email}`}><FaEnvelope /></a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-10 text-center mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card>
                <h3 className="text-4xl font-bold text-cyan-600">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* AWARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-28 text-center"
        >
          <h2 className="text-3xl font-semibold mb-12">Awards & Certifications</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["Google Partner", "Meta Certified", "ISO Certified", "Top Agency 2025"].map((award, i) => (
              <Card key={i}>
                <p className="font-medium">{award}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold mb-6">Ready to Accelerate Growth?</h2>
          <p className="text-gray-600 mb-8">
            Schedule a strategic consultation with our leadership team.
          </p>

          <Link to="/contact">
            <Button size="lg">Schedule a Call</Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
