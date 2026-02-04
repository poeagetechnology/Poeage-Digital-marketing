import React from "react";
import { Link } from "react-router-dom";
import { Testimonials } from "./Testmonials";

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left Content */}
          <div className="space-y-7">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm tracking-wider">
              ENTERPRISE DIGITAL SOLUTIONS
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empowering Brands with
              <span className="block text-cyan-300">Data-Driven Marketing</span>
            </h1>

            <p className="text-blue-100 text-lg max-w-xl leading-relaxed">
              Poeage Digital partners with ambitious organizations to deliver
              measurable growth through intelligent digital transformation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="bg-cyan-400 text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-cyan-300 transition shadow-lg"
              >
                Get Proposal
              </Link>

              <Link
                to="/services"
                className="border border-white/40 px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Marketing Analytics Dashboard"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["10+ Clients", "98% Retention", "5+ Years", "Global Reach"].map(
            (item) => (
              <div key={item} className="space-y-1">
                <h3 className="text-xl font-bold text-blue-900">{item}</h3>
                <p className="text-sm text-gray-500">Trusted Performance</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Marketing Capabilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Integrated digital services designed for scalable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Search Engine Optimization", "Performance Advertising", "Brand Consulting", "Web Development", "Marketing Automation", "Data & Analytics"].map(
              (service) => (
                <div
                  key={service}
                  className="group bg-white rounded-xl p-8 border hover:border-blue-800 hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-800">
                    {service}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    Delivering precision-driven strategies that align with your
                    business objectives.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Case Highlight */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-800 tracking-wider uppercase">
              Success Story
            </span>

            <h2 className="text-3xl font-bold text-gray-900 my-4">
              3X Revenue Growth for Enterprise Client
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our strategic optimization framework enabled a multinational
              brand to scale acquisition and retention across digital channels.
            </p>

            <Link
              to="/contact"
              className="text-blue-800 font-semibold hover:underline"
            >
              View Case Study →
            </Link>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Business Strategy Meeting"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Build a High-Performance Digital Ecosystem
          </h2>

          <p className="text-blue-200 max-w-2xl mx-auto mb-8">
            Let Poeage Digital become your strategic partner in digital
            transformation and revenue acceleration.
          </p>

          <Link
            to="/contact"
            className="bg-cyan-400 text-blue-900 px-9 py-3 rounded-md font-semibold hover:bg-cyan-300 transition shadow-lg"
          >
            Schedule Consultation
          </Link>
        </div>
        <div>
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
