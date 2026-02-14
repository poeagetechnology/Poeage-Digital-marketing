import React from "react";
import { Lock, Server, FileCheck, Bug, AlertTriangle } from "lucide-react";
import Card from "../Components/ui/Card";
import Badge from "../Components/ui/Badge";

export default function Security() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="info" className="mb-4">Security & Compliance</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-Grade Security
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Poeage implements modern security controls, encryption standards,
            and compliance practices to safeguard client data and infrastructure.
          </p>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Security Certifications & Standards
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "ISO 27001 Alignment", desc: "Information security management practices aligned with ISO 27001 principles." },
              { title: "SOC 2 Ready Architecture", desc: "Controls designed to meet SOC 2 security, availability, and confidentiality criteria." },
              { title: "OWASP Top 10 Protection", desc: "Protection against common web vulnerabilities including injection and XSS." },
            ].map((item) => (
              <Card key={item.title} padding="lg" shadow="md">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* ENCRYPTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Lock className="text-cyan-600 mb-4" size={36} />
            <h2 className="text-2xl font-semibold mb-4">
              Data Encryption
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All sensitive data is encrypted in transit using TLS 1.2+ and
              encrypted at rest using AES-256 standards. Access controls ensure
              only authorized systems and personnel can access protected data.
            </p>
          </div>

          <Card padding="lg">
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>✔ TLS 1.2+ secure transmission</li>
              <li>✔ AES-256 data encryption at rest</li>
              <li>✔ Role-based access control (RBAC)</li>
              <li>✔ Secure key management practices</li>
            </ul>
          </Card>
        </div>

        {/* INFRASTRUCTURE SECURITY */}
        <div>
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Infrastructure Security
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Cloud infrastructure with network isolation",
              "Continuous monitoring and threat detection",
              "Automated backups and disaster recovery",
            ].map((item) => (
              <Card key={item} padding="lg">
                <Server className="text-cyan-600 mb-3" />
                <p className="text-gray-600 text-sm">{item}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* COMPLIANCE */}
        <div>
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Compliance & Privacy
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "GDPR", desc: "Data protection principles aligned with EU GDPR requirements." },
              { title: "CCPA", desc: "Privacy controls supporting California Consumer Privacy Act rights." },
              { title: "Data Minimization", desc: "We collect only necessary data required to deliver services." },
            ].map((item) => (
              <Card key={item.title}>
                <FileCheck className="text-cyan-600 mb-3" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* VULNERABILITY DISCLOSURE */}
        <div className="grid md:grid-cols-2 gap-10">
          <Card padding="lg" shadow="md">
            <Bug className="text-cyan-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">
              Vulnerability Disclosure
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you discover a security vulnerability, please report it
              responsibly. We investigate all reports and respond promptly.
            </p>
            <p className="mt-4 text-sm">
              Email: <strong>security@poeage.com</strong>
            </p>
          </Card>

          <Card padding="lg" shadow="md">
            <Bug className="text-cyan-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">
              Bug Bounty Program
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We encourage responsible disclosure and may reward valid
              vulnerability reports that improve platform security.
            </p>
          </Card>
        </div>

        {/* INCIDENT RESPONSE */}
        <div>
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Incident Response
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Continuous monitoring & alerting",
              "Immediate threat containment",
              "Client notification protocols",
              "Post-incident review & improvements",
            ].map((step) => (
              <Card key={step} padding="md">
                <AlertTriangle className="text-cyan-600 mb-2" />
                <p className="text-sm text-gray-600">{step}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* AUDIT & TRANSPARENCY */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Security Audits & Transparency
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our systems undergo periodic security reviews and internal audits to
            ensure compliance with evolving security standards and best practices.
          </p>
        </div>

      </div>
    </section>
  );
}
