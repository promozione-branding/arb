"use client";

import Image from "next/image";
import { CheckCircle2, Play } from "lucide-react";

const features = [
  "Supplier Capabilities in Russia",
  "IATF 9001:2015 Certified",
  "Exporting to 50+ countries worldwide",
  "Commitment to quality and reliability",
];

export default function AboutRussia() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-100 blur-[140px]" />
      </div>

      <div className="relative w-full mx-auto px-8">
        <div className="grid lg:grid-cols-[0.9fr_1fr_0.8fr] gap-10 items-center">
          <div>
            <div className="relative overflow-hidden rounded-[26px] shadow-2xl group">
              <video
                className="
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  md:h-[420px]
                  object-contain
                "
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video4.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-red-700">
              ABOUT ARB BEARING
            </span>

            <h2 className="mt-2 text-2xl font-extrabold leading-tight">
              <span className="text-[#1D4ED8]">A Legacy of Excellence</span>

              <br />

              <span className="text-gray-900">from Russia</span>
            </h2>

            <p className="mt-5 text-[15px]  text-black">
              ARB Bearing is a trusted Russian supplier of high-quality
              bearings, delivering reliable solutions to industries around the
              globe. With a strong focus on innovation, precision and
              durability, our products meet the toughest industrial demands.
            </p>

            <div className="mt-5 space-y-3">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <CheckCircle2 size={18} />
                  </div>

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            
            {/* 
            <button className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-[#1D4ED8] px-2 py-3 font-semibold text-white transition hover:bg-blue-700">

              LEARN MORE ABOUT US

              <ArrowRight
                className="transition group-hover:translate-x-2"
                size={18}
              />

            </button> */}
          </div>

          {/* ================================================= */}
          {/* MAP */}
          {/* ================================================= */}

          <div className="relative flex flex-col mr-4">
            <Image
              src="/map23.png"
              alt="World Map"
              width={520}
              height={320}
              className="w-full h-full"
            />

            {/* Pins */}

            <span className="absolute top-[42%] left-[40%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />

            <span className="absolute top-[36%] left-[66%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />

            <span className="absolute top-[58%] left-[54%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />

            <span className="absolute top-[74%] left-[82%] h-4 w-4 rounded-full border-2 border-white bg-red-600 shadow-lg animate-pulse" />

            {/* Badge */}

            {/* <Image
              src="/made-in-russia.png"
              alt="Made in Russia"
              width={130}
              height={130}
              className="mt-10"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
