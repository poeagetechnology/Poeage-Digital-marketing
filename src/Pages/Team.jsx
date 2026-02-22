import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

import Card from "../Components/ui/Card";
import teamData from "../data/team.json";

/* ---------------- MEMBER CARD ---------------- */

function MemberCard({ member }) {
  return (
    <Card
      hover
      padding="lg"
      shadow="lg"
      className="transition-transform duration-300 hover:-translate-y-2"
    >
      <img
        src={member.image}
        alt={member.name}
        className="rounded-xl mb-6 w-full h-64 object-cover"
      />

      <h4 className="font-semibold text-lg text-gray-900">{member.name}</h4>
      <p className="text-cyan-600 text-sm mb-3">{member.title}</p>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>

      <div className="flex justify-center gap-6 text-gray-400 text-lg">
        <a href={member.linkedin} className="hover:text-cyan-600 transition">
          <FaLinkedin />
        </a>
        <a href={member.twitter} className="hover:text-cyan-600 transition">
          <FaTwitter />
        </a>
        <a href={`mailto:${member.email}`} className="hover:text-cyan-600 transition">
          <FaEnvelope />
        </a>
      </div>
    </Card>
  );
}

/* ---------------- TEAM PAGE ---------------- */

export default function Team() {
  const { departments, values } = teamData;

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-cyan-50 to-white py-28 px-6 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-28 relative">
          <div className="absolute inset-0 blur-3xl opacity-20 bg-cyan-300 rounded-full w-72 h-72 mx-auto -z-10"></div>

          <span className="text-cyan-600 font-semibold tracking-widest uppercase text-sm">
            Our Team
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            People Behind Poeage
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A multidisciplinary team combining strategy, technology, and marketing
            to deliver measurable growth and scalable digital systems.
          </p>
        </div>

        {/* DEPARTMENTS */}
        <div className="space-y-24">
          {departments.map((dept) => (
            <div key={dept.name}>
              <h2 className="text-2xl font-semibold mb-10 text-center">
                {dept.name}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {dept.members.map((member) => (
                  <MemberCard key={member.email} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* VALUES */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-semibold mb-14">
            Our Culture & Values
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {values.map((value) => (
              <Card
                key={value.title}
                padding="lg"
                className="hover:-translate-y-1 transition duration-300"
              >
                <h3 className="font-semibold mb-3 text-lg">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Join Our Team
          </h2>

          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We’re always looking for talented individuals who value structure,
            innovation, and measurable impact.
          </p>

          <Link
            to="/careers"
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-14 py-4 rounded-lg font-semibold shadow-lg
            hover:shadow-cyan-400/40 hover:from-cyan-700 hover:to-blue-700 transition duration-300"
          >
            View Open Positions
          </Link>
        </div>

      </div>
    </section>
  );
}
