import React from "react";
import Card from "../Components/ui/Card";
import Button from "../Components/ui/Button";
import Badge from "../Components/ui/Badge";

export default function Terms() {
  const lastUpdated = "February 13, 2026";

  const sections = [
    {
      id: "service-description",
      title: "Service Description",
      content: `
Poeage Digital provides digital consulting, marketing, web development, and technology solutions designed to help businesses achieve measurable growth and operational efficiency.

Services may include strategy consulting, design, software development, performance marketing, analytics, and ongoing optimization.
      `,
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      list: [
        "Provide accurate and complete information when engaging our services",
        "Use our services only for lawful purposes",
        "Not attempt to disrupt, hack, or misuse our systems",
        "Respect intellectual property rights",
        "Comply with applicable local and international laws",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `
All content, designs, code, frameworks, and materials developed by Poeage Digital remain our intellectual property unless otherwise agreed in writing.

Clients receive usage rights as defined in project agreements. Unauthorized reproduction, resale, or redistribution is prohibited.
      `,
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      content: `
Payment terms are defined in individual service agreements or invoices. Unless otherwise stated:

• Payments are due within the agreed timeframe.
• Late payments may incur additional fees.
• Work may be paused if payments are overdue.
      `,
    },
    {
      id: "warranty-disclaimer",
      title: "Warranty Disclaimer",
      content: `
Services are provided "as is" without warranties of any kind, express or implied. While we strive for accuracy and performance, we do not guarantee uninterrupted service, specific outcomes, or error-free operation.
      `,
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: `
To the fullest extent permitted by law, Poeage Digital shall not be liable for indirect, incidental, or consequential damages arising from the use of our services, including but not limited to loss of revenue, data, or business opportunities.
      `,
    },
    {
      id: "termination",
      title: "Termination",
      content: `
We reserve the right to suspend or terminate services if terms are violated, payments are overdue, or unlawful activities are detected.

Clients may terminate services in accordance with the terms specified in their service agreement.
      `,
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: `
We may update these Terms from time to time. Continued use of our services after updates constitutes acceptance of the revised Terms.
      `,
    },
    {
      id: "contact",
      title: "Contact Information",
      content: `
Email: legal@poeage.com
Phone: +91 98765 43210
Address: Tamil Nadu, India
      `,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-20 px-6 print:px-0">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
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
        <div className="space-y-10">
          {sections.map((section) => (
            <Card key={section.id} id={section.id} padding="lg">
              
              {/* Title Row */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">
                  {section.title}
                </h2>
                <Badge variant="info">Legal</Badge>
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
            Print Terms
          </Button>
        </div>

      </div>
    </section>
  );
}
