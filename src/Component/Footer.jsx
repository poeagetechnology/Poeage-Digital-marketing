import React from "react";
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

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">
            Poeage<span className="text-blue-500">Digital Marketing</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering businesses with enterprise-grade digital solutions,
            innovative design, and scalable technology.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="p-2 rounded-md bg-slate-800 hover:bg-blue-600 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-slate-800 hover:bg-blue-600 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-slate-800 hover:bg-blue-600 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-slate-800 hover:bg-blue-600 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-blue-500 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500 transition">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Solutions</h3>
          <ul className="space-y-3 text-sm">
            <li>Enterprise Web Systems</li>
            <li>UI/UX Consulting</li>
            <li>Cloud Integration</li>
            <li>Mobile Applications</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">Corporate Office</h3>
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
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <div className="border-t border-slate-800"></div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Poeage Technology Pvt. Ltd. All rights
          reserved.
        </p>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-blue-500 transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-blue-500 transition">
            Terms of Service
          </Link>
          <Link to="/security" className="hover:text-blue-500 transition">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
