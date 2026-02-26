import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import Modal from "../Components/ui/Modal";
import Input from "../Components/ui/Input";

/* ---------------- JOB DATA ---------------- */

const jobs = [
  {
    id: 1,
    title: "Digital Marketing Manager",
    type: "Full Time",
    location: "Remote",
    description:
      "Lead performance campaigns and scale ROI-driven growth strategies.",
  },
  {
    id: 2,
    title: "SEO Specialist",
    type: "Full Time",
    location: "Remote",
    description:
      "Optimize search visibility and improve organic traffic performance.",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: null,
    coverLetter: "",
  });

  const openApplication = (job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "jobApplications"), {
        jobTitle: selectedJob?.title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        linkedin: formData.linkedin || "",
        coverLetter: formData.coverLetter || "",
        createdAt: serverTimestamp(),
      });

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 bg-gradient-to-br from-slate-50 via-cyan-50 to-white min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">
            Join <span className="text-cyan-600">Poeage</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build impactful digital experiences with a passionate and
            forward-thinking team.
          </p>
        </motion.div>

        {/* JOB LIST */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {jobs.map((job) => (
            <motion.div key={job.id} variants={fadeUp}>
              <Card padding="lg" shadow="md">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mt-3">
                      {job.description}
                    </p>
                    <div className="flex gap-6 mt-3 text-sm text-gray-500">
                      <span>{job.type}</span>
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <Button onClick={() => openApplication(job)}>
                    Apply Now
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* APPLICATION MODAL */}
        <AnimatePresence>
          {selectedJob && (
            <Modal
              open={!!selectedJob}
              onClose={() => setSelectedJob(null)}
              title={`Apply for ${selectedJob?.title}`}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center py-10"
                >
                  🎉 Application submitted successfully!
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />

                  <Input
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <Input
                    label="LinkedIn"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                  />

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Resume *
                    </label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                    {errors.resume && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.resume}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Cover Letter
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                    />
                  </div>

                  <Button type="submit" loading={loading} fullWidth>
                    Submit Application
                  </Button>
                </motion.form>
              )}
            </Modal>
          )}
        </AnimatePresence>

      </section>
    </main>
  );
}