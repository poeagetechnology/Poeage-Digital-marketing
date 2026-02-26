import React from "react";
import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import Badge from "../Components/ui/Badge";

export default function Privacy() {
  const lastUpdated = "February 13, 2026";

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: `Poeage Digital ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.`,
    },
    {
      id: "data-collection",
      title: "Data Collection Methods",
      list: [
        "Contact forms and inquiries",
        "Email and phone communications",
        "Website analytics tools",
        "Service agreements and onboarding",
      ],
    },
    {
      id: "data-usage",
      title: "How We Use Your Data",
      list: [
        "Provide and improve services",
        "Respond to inquiries and support requests",
        "Send important service updates",
        "Analyze usage to improve performance",
      ],
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      content: `We use cookies to enhance user experience, analyze traffic, and personalize content. You can manage or disable cookies through your browser settings.`,
    },
    {
      id: "user-rights",
      title: "Your Rights",
      list: [
        "Access the personal data we hold about you",
        "Request corrections",
        "Request deletion of your data",
        "Withdraw consent at any time",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: `We retain personal data only as long as necessary to fulfill legal and operational requirements, resolve disputes, and enforce agreements.`,
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      content: `We may use trusted third-party providers such as analytics platforms, payment processors, and communication tools. These providers are required to protect your data.`,
    },
    {
      id: "contact",
      title: "Contact for Privacy Inquiries",
      content: `Email: privacy@poeage.com
Phone: +91 80568 89616
Address: Erode, Tamil Nadu, India`,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-20 px-6 print:px-0">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: <strong>{lastUpdated}</strong>
          </p>
        </div>

        {/* TABLE OF CONTENTS */}
        <Card padding="lg" className="mb-14 print:hidden">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {sections.map((sec) => (
              <li key={sec.id}>
                {/* Use anchor, NOT react-router Link */}
                <a
                  href={`#${sec.id}`}
                  className="text-cyan-700 hover:underline"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </Card>

        {/* SECTIONS */}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <Card
              key={section.id}
              id={section.id}
              padding="lg"
              className="scroll-mt-24"
            >
              {/* Title */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <Badge variant="info">Policy</Badge>
              </div>

              {/* Content */}
              {section.content && (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              )}

              {/* List */}
              {section.list && (
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>

        {/* PRINT BUTTON */}
        <div className="mt-14 text-center print:hidden">
          <Button size="lg" onClick={() => window.print()}>
            Print Privacy Policy
          </Button>
        </div>

      </div>
    </section>
  );
}
