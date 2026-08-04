"use client";

import Image from "next/image";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Eye, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const products = [
  {
    title: "Ball Bearings",
    link:"/products/ball-bearing",
    desc: "High load capacity, superior durability, ideal for radial & axial loads",
    image: "/arb-images/BALL BEARING 62208 2RS.png",
    applications: [
      "Electric Motors",
      "Automobiles",
      "Agricultural Machinery",
      "Industrial Pumps",
      "Fans & Blowers",
      "Gearboxes",
    ],
  },

  {
    title: "Wheel Bearings",
       link:"/products/wheel-bearing",
    desc: "Precision wheel hub bearings, smooth performance, long-lasting reliability",
    image: "/arb-images/Wheel Bearing.png",
    applications: [
      "Mining Equipment",
      "Steel Plants",
      "Paper Mills",
      "Conveyors",
      "Cement Industry",
    ],
  },




  {
    title: "Roller Bearings",
       link:"/products/roller-bearings",
    desc: "Smooth rotation, low friction, reliable performance for versatile applications",
    image: "/arb-images/prodtaper.png",
    applications: [
      "Electric Motors",
      "Automobiles",
      "Agricultural Machinery",
      "Industrial Pumps",
      "Fans & Blowers",
      "Gearboxes",
    ],
  },

  // {
  //   title: "Deep Groove Ball Bearings",
  //   desc: "High speed, low friction, versatile applications",
  //   image: "/1.webp",
  //   applications: [
  //     "Electric Motors",
  //     "Automobiles",
  //     "Agricultural Machinery",
  //     "Industrial Pumps",
  //     "Fans & Blowers",
  //     "Gearboxes",
  //   ],
  // },
];

export default function ProductSlider() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-blue-50 py-15 px-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}

        <div className="flex justify-between items-center mb-9 md:mb-14">
          <div>
            <p className="text-red-600 uppercase text-sm tracking-[3px] font-semibold">
              Our Products
            </p>

            <h2 className="text-blue-700 text-3xl md:text-5xl font-bold mt-2">
              <span className="text-black">Precision in </span> Every Rotation
            </h2>
          </div>

       
        </div>

        <div className="relative">
          {/* <button className="custom-prev absolute -left-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronLeft className="text-white" />
          </button> */}

          {/* <button className="custom-next absolute -right-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronRight className="text-white" />
          </button> */}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7">
  {products.map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      {/* Top Accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1C398E] via-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Product Image */}
      <div className="relative flex items-center justify-center h-72 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute w-40 h-40 rounded-full bg-blue-500/10 blur-3xl group-hover:scale-125 transition duration-500" />

        {/* Decorative Ring */}
        <div className="absolute w-52 h-52 rounded-full border border-slate-200" />

        <Image
          src={item.image}
          alt={item.title}
          width={450}
          height={350}
          className="relative z-10 w-74 h-74 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
        />

        {/* View Button */}
        <button
          onClick={() => setSelectedProduct(item)}
          className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#1C398E] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600"
        >
          <Eye size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 line-clamp-2">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
          {item.desc}
        </p>

        {/* Bottom CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <Link href={item.link} className="text-sm font-semibold text-[#1C398E] group-hover:translate-x-1 transition">
            View Details
          </Link>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C398E]/10 text-[#1C398E] group-hover:bg-[#1C398E] group-hover:text-white transition">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white overflow-hidden shadow-2xl">
            {/* Close */}

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}

              <div className="bg-blue-50 flex items-center justify-center ">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={720}
                  height={720}
                  className="object-cover animate-spin-slow"
                />
              </div>

              {/* Content */}

              <div className="p-5">
                <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                  Bearing Details
                </span>

                <h2 className="text-3xl font-bold text-[#091A2D] mt-3">
                  {selectedProduct.title}
                </h2>

                <p className="text-gray-600 mt-5 leading-7">
                  {selectedProduct.desc}
                </p>

                <h3 className="mt-8 text-xl font-semibold text-[#091A2D]">
                  Applications
                </h3>

                <ul className="mt-4 space-y-3">
                  {selectedProduct.applications.map((app, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
