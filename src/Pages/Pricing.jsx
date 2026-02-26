import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import Badge from "../Components/ui/Badge";

/* ---------------- DATA ---------------- */

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    billing: "/month",
    bestFor: "Small businesses starting digital growth",
    features: [
      "SEO setup & optimization",
      "Website maintenance",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "₹60,000",
    billing: "/month",
    bestFor: "Growing companies scaling acquisition",
    features: [
      "Advanced SEO & content strategy",
      "Performance marketing campaigns",
      "Conversion tracking & analytics",
      "Priority support",
      "Landing page optimization",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    billing: "",
    bestFor: "Large organizations with complex needs",
    features: [
      "Full growth strategy",
      "Dedicated account manager",
      "CRM & automation integration",
      "Custom analytics dashboards",
      "24/7 priority support",
    ],
  },
];

const pricingFaq = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade anytime as your business grows.",
  },
  {
    q: "Do you offer custom pricing?",
    a: "Enterprise plans are fully customized based on requirements.",
  },
  {
    q: "Is there a contract?",
    a: "Starter & Professional are monthly. Enterprise varies.",
  },
];

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

/* ---------------- COMPONENT ---------------- */

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto">

       
        {/* HEADER */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing for Every Stage
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan aligned with your growth stage.
          </p>
        </motion.div>

        {/* PRICING CARDS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 mb-24"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp} whileHover={{ y: -8 }}>
              <Card
                padding="lg"
                shadow="lg"
                className={`relative ${
                  plan.highlighted ? "border-cyan-600" : ""
                }`}
              >
                {plan.highlighted && (
                  <Badge variant="info" className="absolute top-4 right-4">
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                <p className="text-3xl font-bold mb-2">
                  {plan.price}
                  <span className="text-sm text-gray-500">{plan.billing}</span>
                </p>

                <p className="text-sm text-gray-600 mb-6">{plan.bestFor}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-cyan-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  fullWidth
                  variant={plan.highlighted ? "primary" : "secondary"}
                  as={Link}
                  to="/contact"
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GUARANTEE */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Card padding="lg" className="text-center mb-24">
            <h2 className="text-2xl font-semibold mb-4">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Not satisfied? Get a full refund within 30 days.
            </p>
          </Card>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-5">
            Pricing FAQ
          </h2>

          <Card padding="none" className="max-w-3xl mx-auto divide-y mt-10">
            {pricingFaq.map((faq, i) => {
              const open = openFaq === i;

              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <span className="font-medium">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`transition ${open ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-5 text-sm text-gray-600 overflow-hidden"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Card>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Not Sure Which Plan Fits?
          </h2>
          <p className="text-gray-600 mb-8">
            Speak with our team and get a tailored recommendation.
          </p>

          <Button size="lg" as={Link} to="/contact">
            Talk to an Expert
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
