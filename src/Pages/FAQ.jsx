import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import faqData from "../data/faq.json";

import Card from "../Components/ui/Card";
import Input from "../Components/ui/Input";
import Badge from "../Components/ui/Badge";
import Button from "../Components/ui/Button";

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [openItem, setOpenItem] = useState(null);

  /* ---------------- FILTER ---------------- */

  const filteredFaq = useMemo(() => {
    if (!search) return faqData;

    return faqData
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(search.toLowerCase()) ||
            item.answer.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [search]);

  const hasResults = filteredFaq.length > 0;

  /* ---------------- UI ---------------- */

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers about services, pricing, and implementation.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-12">
          <Input
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* EMPTY STATE */}
        {!hasResults && (
          <Card padding="lg" className="text-center">
            <p className="text-gray-500 mb-4">
              No results found for "{search}"
            </p>
            <Button variant="secondary" onClick={() => setSearch("")}>
              Clear Search
            </Button>
          </Card>
        )}

        {/* FAQ LIST */}
        <div className="space-y-8">
          {filteredFaq.map((category, cIndex) => (
            <Card key={category.category} padding="lg" shadow="sm">

              {/* Category Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {category.category}
                </h2>

                <Badge variant="info">
                  {category.items.length} items
                </Badge>
              </div>

              {/* Questions */}
              {category.items.map((item, iIndex) => {
                const id = `${cIndex}-${iIndex}`;
                const isOpen = openItem === id;

                return (
                  <div key={id} className="border-b last:border-0">
                    <button
                      onClick={() =>
                        setOpenItem(isOpen ? null : id)
                      }
                      className="w-full flex justify-between items-center py-4 text-left"
                    >
                      <span className="font-medium">
                        {item.question}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          isOpen ? "rotate-180 text-cyan-600" : "text-gray-400"
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 text-sm text-gray-600">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-xl font-semibold mb-4">
            Didn’t find your answer?
          </h3>

          <Button size="lg" onClick={() => (window.location.href = "/contact")}>
            Contact Our Team
          </Button>
        </div>

      </div>
    </section>
  );
}
