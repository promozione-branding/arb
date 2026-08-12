"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Eye, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    title: "Ball Bearings",
    link: "/products/ball-bearing",
    desc: "Engineered for high speed applications, superior durability, ideal for radial & axial loads",
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
    title: "Roller Bearings",
    link: "/products/roller-bearings",
    desc: "Smooth rotation, low friction, reliable performance for versatile applications",
    image: "/arb-images/prodtaper.png",
    applications: [
      "Automobiles",
      "Agricultural Machinery",
      "Industrial Pumps",
      "Fans & Blowers",
      "Gearboxes",
      "Electric Motors",
    ],
  },

  {
    title: "Wheel Bearing / Wheel Bearing Kit",
    link: "/products/wheel-bearing",
    desc: "Precision wheel hub bearings, smooth performance, long-lasting reliability",
    image: "/wheelbearingcat.png",
    applications: [
      "Mining Equipment",
      "Steel Plants",
      "Paper Mills",
      "Conveyors",
      "Cement Industry",
    ],
  },

  {
    title: "Wheel Hub Bearing",
    link: "/products/wheel-bearing",
    desc: "Engineered for smooth rotation, superior load handling, and long-lasting wheel-end reliability",
    image: "/arb-images/Wheel Bearing.png",
    applications: [
      "Trucks",
      "Trailers ",
      "Semi Trailers",
      "Buses",
    ,
    ],
  },
];

export default function ProductSlider() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="relative overflow-hidden bg-blue-50 px-5 py-15">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-9 flex items-end justify-between md:mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
              Our Products
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#29166F] md:text-5xl">
              <span className="text-black">Precision in </span>
              Every Rotation
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden gap-3 md:flex">
            <button
              className="product-prev flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29166F] shadow-sm transition hover:bg-[#29166F] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="product-next flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#29166F] shadow-sm transition hover:bg-[#29166F] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative">

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".product-prev",
              nextEl: ".product-next",
            }}
            pagination={{
              el: ".product-pagination",
              clickable: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="!pb-12"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">

                {/* Card */}
                <div
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >

                  {/* Top Accent */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      z-20
                      h-1
                      w-full
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-[#1C398E]
                      via-blue-500
                      to-cyan-400
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />

                  {/* Product Image */}
                  <div
                    className="
                      relative
                      flex
                      h-72
                      items-center
                      justify-center
                      overflow-hidden
                      bg-gradient-to-b
                      from-slate-50
                      to-white
                    "
                  >

                    {/* Background Glow */}
                    <div
                      className="
                        absolute
                        h-40
                        w-40
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        transition
                        duration-500
                        group-hover:scale-125
                      "
                    />

                    {/* Decorative Ring */}
                    <div
                      className="
                        absolute
                        h-52
                        w-52
                        rounded-full
                        border
                        border-slate-200
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:border-blue-200
                      "
                    />

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={450}
                      height={350}
                      className="
                        relative
                        z-10
                        h-74
                        w-74
                        object-contain
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                        group-hover:-rotate-2
                      "
                    />

                    {/* View Button */}
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="
                        absolute
                        right-5
                        top-5
                        z-30
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#1C398E]
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-blue-600
                      "
                    >
                      <Eye size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex h-[220px] flex-col p-6">

                    <h3 className="line-clamp-2 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>

                    {/* Bottom CTA */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">

                      <Link
                        href={item.link}
                        className="
                          text-sm
                          font-semibold
                          text-[#1C398E]
                          transition
                          group-hover:translate-x-1
                        "
                      >
                        View Details
                      </Link>

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-[#1C398E]/10
                          text-[#1C398E]
                          transition
                          group-hover:bg-[#1C398E]
                          group-hover:text-white
                        "
                      >
                        <ArrowRight size={18} />
                      </div>

                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="product-pagination mt-2 flex justify-center" />

        </div>
      </div>

      {/* =====================================================
          PRODUCT MODAL
      ====================================================== */}

      {selectedProduct && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/70
            p-3
            backdrop-blur-sm
          "
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="
              relative
              w-full
              max-w-3xl
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-gray-100
                transition
                hover:bg-red-500
                hover:text-white
              "
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* Image */}
              <div className="flex items-center justify-center bg-blue-50">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={720}
                  height={720}
                  className="animate-spin-slow object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-7">

                <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
                  Bearing Details
                </span>

                <h2 className="mt-3 text-3xl font-bold text-[#091A2D]">
                  {selectedProduct.title}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
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
                      <div className="h-2 w-2 rounded-full bg-red-500" />
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