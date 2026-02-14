import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import Badge from "../Components/ui/Badge";

/* ---------------- JOB DATA ---------------- */

const jobs = [
  {
    id: 1,
    title: "Digital Marketing Manager",
    type: "Full Time",
    location: "Remote",
    department: "Marketing",
    description:
      "Lead performance campaigns, manage acquisition channels, and scale ROI-driven growth strategies.",
  },
  {
    id: 2,
    title: "SEO Specialist",
    type: "Full Time",
    location: "Remote",
    department: "Marketing",
    description:
      "Optimize search visibility, execute technical SEO, and improve organic traffic performance.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Hybrid",
    department: "Design",
    description:
      "Design user-centric digital experiences and improve conversion-focused interfaces.",
  },
  {
    id: 4,
    title: "Content Strategist",
    type: "Full Time",
    location: "Remote",
    department: "Content",
    description:
      "Plan and execute content strategies aligned with SEO and brand authority goals.",
  },
];

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ---------------- COMPONENT ---------------- */

export default function Careers() {
  return (
    <main className="pt-24 bg-gradient-to-br from-slate-50 via-cyan-50 to-white">
      <section className="max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Careers at Poeage
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join a performance-driven team building structured digital growth
            systems for global brands.
          </p>
        </motion.div>

        {/* JOB LIST */}
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card padding="lg" shadow="md" hover>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  {/* Left Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </h3>

                      <Badge variant="info">{job.department}</Badge>
                    </div>

                    <p className="text-gray-600 text-sm max-w-xl">
                      {job.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {job.type}
                      </span>

                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="md:w-48">
                    <Button fullWidth>
                      Apply Now
                    </Button>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CULTURE CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Don’t See a Role That Fits?
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We’re always looking for talented individuals passionate about
            structured growth, technology, and measurable impact.
          </p>

          <Button size="lg">
            Send Your Resume
          </Button>
        </motion.div>

      </section>
    </main>
  );
}
