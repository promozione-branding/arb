"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";

const supplyRegions = [
  {
    name: "Russia",
    description: "Reliable supply solutions across Russia and surrounding markets.",
    href: "/ball-bearing-in-russia",
    number: "01",
  },
  {
    name: "Latin America",
    description: "Expanding our supply network across diverse Latin American markets.",
    href: "/ball-bearing-in-latin-america",
    number: "02",
  },
  {
    name: "UAE",
    description: "Serving the UAE with dependable and efficient supply solutions.",
    href: "/ball-bearing-in-uae",
    number: "03",
  },
];

const Network = () => {
  return (
    <section className="relative overflow-hidden bg-[#feffff] py-6 md:py-12">
      {/* Decorative background */}
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#2545ca]/5 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#f8f2f3] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2545ca]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2545ca]">
                Global Reach
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#111827] sm:text-5xl md:text-6xl">
              Our Supply
              <span className="text-[#2545ca]"> Network</span>
            </h2>
          </div>

          {/* <div className="max-w-md">
            <p className="text-base leading-7 text-gray-600 md:text-lg">
              Connecting our products with customers across key international
              markets through a growing and reliable supply network.
            </p>
          </div> */}
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {supplyRegions.map((region) => (
            <Link
              key={region.name}
              href={region.href}
              className="group relative h-full overflow-hidden rounded-3xl border border-[#2545ca]/10 bg-[#f8f2f3] p-4 md:p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#2545ca]/30 hover:bg-[#2545ca] hover:shadow-2xl hover:shadow-[#2545ca]/20 sm:p-9"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold tracking-widest text-[#2545ca]/60 transition-colors duration-500 group-hover:text-white/60">
           
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#feffff] text-[#2545ca] transition-all duration-500 group-hover:rotate-45 group-hover:bg-white">
                  <ArrowUpRight size={21} strokeWidth={2} />
                </div>
              </div>

              {/* Globe */}
              <div className="absolute -bottom-10 -right-8 opacity-[0.07] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.12]">
                <Globe2 size={190} strokeWidth={0.8} />
              </div>

              {/* Content */}
              <div className="relative mt-5">
                <h3 className="text-3xl font-bold text-[#111827] transition-colors duration-500 group-hover:text-white sm:text-4xl">
                  {region.name}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600 transition-colors duration-500 group-hover:text-white/80">
                  {region.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#2545ca] transition-all duration-500 group-hover:gap-4 group-hover:text-white">
                  Explore Region
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex items-center justify-center gap-3 text-center text-sm text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2545ca]" />
          <span>Expanding our global supply network</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#2545ca]" />
        </div>
      </div>
    </section>
  );
};

export default Network;