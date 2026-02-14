import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import logo from "../Assets/Company_Logo.png"; // ✅ add your logo here

export const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Case Studies", path: "/case-studies" },
];

export default function Footer() {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    company: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email) return;

    // 🔌 Example payload for ESP integration
    const payload = {
      email: form.email,
      firstName: form.firstName,
      company: form.company,
    };

    try {
      // TODO: Replace with Mailchimp / ConvertKit endpoint
      console.log("Newsletter payload:", payload);

      // fake success
      setForm({ email: "", firstName: "", company: "" });
      alert("Subscribed successfully");
    } catch (err) {
      console.error(err);
      alert("Subscription failed");
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-cyan-500/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= NEWSLETTER ================= */}
        <div className="mb-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10">

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Stay Ahead with Insights
                </h3>
                <p className="text-slate-400 text-sm max-w-md">
                  Get strategic updates, digital trends, and growth frameworks
                  delivered to your inbox.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address *"
                  className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name (optional)"
                  className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company (optional)"
                  className="w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md text-sm font-semibold hover:from-cyan-500 hover:to-blue-500 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand with Logo */}
          <div>
            <img src={logo} alt="Poeage Digital" className="h-10 mb-4" />

            <p className="text-sm leading-relaxed text-slate-400">
              Enterprise-grade digital solutions, strategic growth systems,
              and scalable technology for ambitious businesses.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="p-2 rounded-md bg-slate-800/70 border border-slate-700 hover:bg-blue-600 hover:border-blue-500 transition"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-blue-500 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Enterprise Web Systems</li>
              <li>UI/UX Consulting</li>
              <li>Cloud Integration</li>
              <li>Mobile Applications</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-blue-500" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>corporate@poeage.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-slate-800" />

        {/* ================= BOTTOM ================= */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Poeage Technology Pvt. Ltd.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-blue-500">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-500">Terms</Link>
            <Link to="/faq" className="hover:text-blue-500">FAQ</Link>
            <Link to="/security" className="hover:text-blue-500">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
