import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import Input from "../Components/ui/Input";
import Textarea from "../Components/ui/Textarea";
import Button from "../Components/ui/Button";
import Card from "../Components/ui/Card";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


/* ---------------- VALIDATION ---------------- */

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  budget: z.string().optional(),
  contactMethod: z.enum(["email", "phone"]),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
  honeypot: z.string().optional(),
});

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
const onSubmit = async (data) => {
  if (data.honeypot) return;

  try {
    setLoading(true);

    await addDoc(collection(db, "contactMessages"), {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      service: data.service,
      budget: data.budget || "",
      message: data.message,
      contactMethod: data.contactMethod,
      createdAt: serverTimestamp(),
    });

    toast.success("Message sent successfully");
    reset();

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us about your goals and we’ll design a structured growth plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* FORM */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card padding="lg" shadow="lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <input type="text" className="hidden" {...register("honeypot")} />

                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                  {...register("email")}
                />

                <Input
                  label="Phone Number"
                  placeholder="+91 98765 43210"
                  {...register("phone")}
                />

                <Input
                  label="Company Name"
                  placeholder="Your Company"
                  {...register("company")}
                />

                {/* Service */}
                <div>
                  <label className="text-sm font-medium">Service</label>
                  <select
                    {...register("service")}
                    className="w-full border p-3 rounded-md mt-1"
                  >
                    <option value="">Select a service</option>
                    <option>SEO</option>
                    <option>Performance Marketing</option>
                    <option>Web Development</option>
                    <option>Brand Strategy</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">{errors.service.message}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="text-sm font-medium">Budget</label>
                  <select
                    {...register("budget")}
                    className="w-full border p-3 rounded-md mt-1"
                  >
                    <option value="">Select budget</option>
                    <option>₹25k – ₹50k</option>
                    <option>₹50k – ₹1L</option>
                    <option>₹1L – ₹5L</option>
                    <option>₹5L+</option>
                  </select>
                </div>

                <Textarea
                  label="Message"
                  placeholder="Tell us about your project..."
                  error={errors.message?.message}
                  {...register("message")}
                />

                {/* Contact Method */}
                <div>
                  <p className="text-sm font-medium mb-2">Preferred Contact</p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input type="radio" value="email" {...register("contactMethod")} />
                      Email
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" value="phone" {...register("contactMethod")} />
                      Phone
                    </label>
                  </div>
                </div>

                {/* Terms */}
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register("terms")} />
                    I accept the terms and conditions
                  </label>
                  {errors.terms && (
                    <p className="text-red-500 text-sm">{errors.terms.message}</p>
                  )}
                </div>

                <motion.div whileTap={{ scale: 0.97 }}>
                  <Button type="submit" fullWidth loading={loading}>
                    Submit Inquiry
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { title: "Email", value: "sales@poeage.com" },
              { title: "Phone", value: "+91 98765 43210" },
              { title: "Office", value: "Kavandapadi, Tamil Nadu, India" },
            ].map((item) => (
              <motion.div key={item.title} variants={slideRight}>
                <Card>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={slideRight}>
              <Card className="text-center">
                <h3 className="font-semibold mb-4">Schedule a Call</h3>
                <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">Book via Calendly</Button>
                </a>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* MAP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Kavandapadi&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
