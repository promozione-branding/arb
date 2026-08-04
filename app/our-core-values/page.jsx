"use client";

import {
  Eye,
  Target,
  Award,
  Factory,
  Boxes,
  Globe2,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function CoreValues() {
  const strengths = [
    {
      icon: Award,
      title: "Decades of Industry Expertise",
      description:
        "Backed by over 60+ years of collective experience, we combine technical knowledge with engineering excellence to deliver reliable bearing solutions.",
    },
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description:
        "Our six state-of-the-art manufacturing facilities are equipped with modern technology and precision engineering processes to produce high-quality bearings that meet international standards.",
    },
    {
      icon: Boxes,
      title: "Comprehensive Product Portfolio",
      description:
        "With 2,500+ bearing sizes, we offer an extensive range of ball bearings, roller bearings, taper roller bearings, spherical roller bearings, needle roller bearings, and customized bearing solutions for diverse industrial applications.",
    },
    {
      icon: Globe2,
      title: "Global Presence",
      description:
        "Serving customers in 50+ countries across six continents, our extensive network of 800+ dealers, distributors, and OEM partners enables us to deliver dependable solutions worldwide.",
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description:
        "Every bearing is manufactured under stringent quality control processes and rigorous testing to ensure superior performance, durability, and long service life.",
    },
    {
      icon: Handshake,
      title: "Customer-Centric Approach",
      description:
        "We believe in building lasting partnerships by delivering responsive support, application expertise, timely deliveries, and solutions tailored to our customers' evolving requirements.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-[160px] opacity-60" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-100 blur-[160px] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#CF2E20] shadow-md">
            Our Core Values
          </span>

          <h2 className="mt-6 text-4xl  font-bold text-slate-900">
            Building Trust Through Excellence
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#CF2E20]" />
        </div>

        {/* Vision & Mission */}

        <div className="grid gap-10 lg:grid-cols-2 mb-14">
          {/* Vision */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 backdrop-blur-xl p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(37,99,235,0.18)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#28186D] to-[#D92620] text-white shadow-xl">
              <Eye size={30} />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="leading-9 text-slate-600 text-lg">
              To become the most trusted bearing supplier by delivering
              innovative, precision-engineered bearing solutions that empower
              industries worldwide. We envision a future where ARB Bearings is
              recognized for setting new benchmarks in quality, reliability, and
              technological excellence while driving sustainable growth and
              creating long-term value for our customers, partners, and
              stakeholders. Through continuous innovation and a customer-centric
              approach, we aim to strengthen our global presence and remain the
              preferred choice for industrial bearings across diverse
              industries.
            </p>
          </div>

          {/* Mission */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 backdrop-blur-xl p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(37,99,235,0.18)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#28186D] to-[#D92620] text-white shadow-xl">
              <Target size={30} />
            </div>

            <h3 className="mb-3 text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="leading-9 text-slate-600 text-lg">
              Our mission is to design, manufacture, and deliver world-class
              industrial bearings and precision bearing solutions that enhance
              the performance, efficiency, and reliability of machinery across
              industries. We are committed to investing in advanced
              manufacturing technologies, maintaining stringent quality
              standards, and fostering a culture of continuous improvement to
              exceed customer expectations.
            </p>

            <p className="mt-6 leading-9 text-slate-600 text-lg">
              By building strong relationships with our dealers, distributors,
              OEM partners, and customers, we strive to deliver exceptional
              value through innovative products, responsive service, and
              dependable support. At ARB Bearings, our mission extends beyond
              manufacturing—we are dedicated to engineering reliable solutions
              that help industries reduce downtime, improve productivity, and
              achieve sustainable success.
            </p>
          </div>
        </div>

        {/* Strengths */}

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900">Our Strengths</h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#CF2E20]" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#28186D] to-[#CF2E20] text-white shadow-xl">
                  <Icon size={30} />
                </div>

                <h3 className="mb-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
