import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp, Users, ShieldCheck } from "lucide-react";

import Card from "../Components/ui/Card";
import Modal from "../Components/ui/Modal";
import Button from "../Components/ui/Button";
import aboutBlocks from "../data/services.json";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


/* 🔹 Icon map */
const iconMap = {
  Rocket,
  Target,
  TrendingUp,
  Users,
  ShieldCheck,
};

/* 🔹 Animations */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function Services() {
  const [activeItem, setActiveItem] = useState(null);

  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    return newErrors;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});
  setLoading(true);

  try {
    await addDoc(collection(db, "serviceInquiries"), {
      service: formData.service,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "",
      company: formData.company || "",
      budget: formData.budget || "",
      timeline: formData.timeline || "",
      message: formData.message || "",
      createdAt: serverTimestamp(),
    });

    setSubmitted(true);

    // Reset form
    setFormData({
      service: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      message: "",
    });

  } catch (error) {
    console.error("Firebase Error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔹 HEADER (Animated) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-600 font-semibold tracking-widest uppercase text-sm">
            About Poeage
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Structured Growth Consultancy
          </h2>

          <p className="text-gray-600 text-lg">
            We design digital ecosystems that deliver measurable, sustainable,
            and scalable business outcomes.
          </p>
        </motion.div>

        {/* 🔹 SERVICES GRID (Animated with stagger) */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-28"
        >
          {aboutBlocks.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <Card
                  hover
                  padding="lg"
                  shadow="md"
                  onClick={() => setActiveItem(item)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyan-600 rounded-lg">
                      <Icon size={28} />
                    </div>
                    <span className="text-sm text-gray-400">
                      Phase {item.phase}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 🔹 INQUIRY FORM (NO animation) */}
        <div className="max-w-3xl mx-auto">
          <Card padding="lg" shadow="lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Service Inquiry
            </h3>

            {submitted ? (
              <p className="text-green-600 text-center py-8">
                Inquiry submitted successfully.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Service */}
                <div>
                  <label className="text-sm font-medium">Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.service && "border-red-500"}`}
                  >
                    <option value="">Select Service</option>
                    {aboutBlocks.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">{errors.service}</p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="text-sm font-medium">Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.name && "border-red-500"}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium">Email *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.email && "border-red-500"}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Optional Fields */}
                <input name="phone" placeholder="Phone" onChange={handleChange} className={inputClass} />
                <input name="company" placeholder="Company" onChange={handleChange} className={inputClass} />
                <input name="budget" placeholder="Budget Range" onChange={handleChange} className={inputClass} />
                <input name="timeline" placeholder="Timeline" onChange={handleChange} className={inputClass} />
                <textarea name="message" rows="4" placeholder="Message" onChange={handleChange} className={inputClass} />

                <Button type="submit" loading={loading} fullWidth size="lg">
                  Submit Inquiry
                </Button>

              </form>
            )}
          </Card>
        </div>

        {/* 🔹 MODAL (content animation only) */}
        <Modal
          open={!!activeItem}
          onClose={() => setActiveItem(null)}
          size="lg"
          title={activeItem?.title}
        >
          {activeItem && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {activeItem.details}
            </motion.p>
          )}
        </Modal>

      </div>
    </section>
  );
}
