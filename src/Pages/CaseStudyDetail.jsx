import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import caseStudies from "../data/casestudies.json";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return <div className="p-10 text-center">Case study not found.</div>;
  }

  const related = caseStudies.filter((s) => s.id !== id).slice(0, 2);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Back */}
        <Link
          to="/case-studies"
          className="text-cyan-700 font-medium hover:underline"
        >
          ← Back to Case Studies
        </Link>

        {/* HERO */}
        <div className="text-center">
          <span className="inline-block text-xs font-semibold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full mb-4">
            {study.industry}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {study.title}
          </h1>

          <p className="text-gray-600 text-lg">
            <strong>Client:</strong> {study.client}
          </p>
        </div>

        {/* OVERVIEW */}
        <Section title="Overview">
          {study.overview}
        </Section>

        {/* CHALLENGE */}
        <Section title="Challenge">
          {study.challenge}
        </Section>

        {/* SOLUTION */}
        <Section title="Solution">
          {study.solution}
        </Section>

        {/* TIMELINE */}
        <Section title="Implementation Timeline">
          {study.timeline}
        </Section>

        {/* TECHNOLOGIES */}
        <Section title="Technologies Used">
          <ul className="list-disc pl-6 space-y-2">
            {study.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Section>

        {/* RESULTS — KPI CARDS */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Measurable Results
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(study.results).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-xl shadow border text-center"
              >
                <p className="text-2xl font-bold text-cyan-700">{value}</p>
                <p className="text-sm text-gray-500 capitalize">{key}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DELIVERABLES */}
        <Section title="Key Deliverables">
          <ul className="list-disc pl-6 space-y-2">
            {study.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Section>

        {/* BEFORE / AFTER */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-red-700">Before</h3>
            <p className="text-gray-600">{study.beforeAfter.before}</p>
          </div>
          <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-green-700">After</h3>
            <p className="text-gray-600">{study.beforeAfter.after}</p>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
          <p className="italic text-lg max-w-3xl mx-auto">
            “{study.testimonial}”
          </p>
          <p className="mt-4 text-cyan-300 font-medium">
            — {study.client}
          </p>
        </div>

        {/* RELATED */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Related Case Studies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/case-studies/${r.id}`}
                className="bg-white p-6 rounded-xl border shadow hover:shadow-xl transition"
              >
                <h3 className="font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500">{r.industry}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-10">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Achieve Similar Results?
          </h3>

          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md font-medium hover:from-cyan-700 hover:to-blue-700 transition shadow-lg"
          >
            Start Your Growth Journey
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ---------- REUSABLE SECTION COMPONENT ---------- */

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </section>
  );
}
