"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Enquiry from "./Enquiry";

const Cta = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section
        style={{ backgroundImage: "url(/ctabg.jpg)" }}
        className="
          relative
          mb-5
          overflow-hidden
          bg-cover
          bg-center
          md:mb-10
        "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071426]/75" />

        {/* Red Accent */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#DA2416]" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-12 lg:px-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_280px] lg:gap-16 lg:grid-cols-[1fr_320px]">

            {/* Left */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400 md:text-sm">
                ENGINEERED SOLUTIONS
              </span>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-[42px] mt-2">
                Your Application. <br />
                Our Expertise.{" "} <br />
                <span className="text-blue-300">
                  The Right Solution
                </span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center gap-3">

              {/* Request Quote */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  bg-[#DA2416]
                  px-5
                  py-4
                  text-base
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#c91f13]
                  hover:shadow-xl
                  md:px-6
                  md:py-4
                  md:text-lg
                "
              >
                <span>Request Quote</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </button>

              {/* Browse Products */}
              <Link
                href="/products/ball-bearing"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/40
                  bg-white/5
                  px-5
                  py-4
                  text-base
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white/10
                  md:px-6
                  md:py-4
                  md:text-lg
                "
              >
                <span>Browse Products</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <ArrowRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {isFormOpen && (
        <Enquiry
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
};

export default Cta;