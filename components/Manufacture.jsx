"use client";

import { ShieldCheck, BadgeCheck, Microscope, Cog } from "lucide-react";

export default function QualityCertification() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-13">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Right Side */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl p-8 ">
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Quality Commitment
                </h3>
                <p className="mt-2 text-slate-500">
                  Built on precision, tested for performance.
                </p>
              </div>

              <div className="grid gap-5">
                {/* Item */}
                <div className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#28186C] text-white">
                    <BadgeCheck size={28} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      International Quality Standards
                    </h4>
                  </div>
                </div>

                {/* Item */}
                <div className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Microscope size={28} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Rigorous Testing & Inspection
                    </h4>
                  </div>
                </div>

                {/* Item */}
                <div className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#28186C] text-white">
                    <Cog size={28} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Precision Engineering
                    </h4>
                  </div>
                </div>

                {/* Item */}
                <div className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600 text-white">
                    <ShieldCheck size={28} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Reliable Performance Across Industries
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content */}

          <div>
            <span className="inline-flex items-center rounded-full    text-sm font-semibold uppercase tracking-widest text-red-600">
              Quality & Certifications
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 ">
              Quality You Can Trust.
              <br />
              <span className="text-[#28186C]">Standards You Can Rely On.</span>
            </h2>

            <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-[#28186C]"></div>

            <p className="mt-8 text-lg leading-8 text-black">
              As a trusted bearing supplier, ARB Bearings is committed to
              delivering products that meet the highest standards of quality,
              precision, and reliability. Every bearing undergoes rigorous
              testing and inspection throughout the manufacturing process to
              ensure consistent performance and long service life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
