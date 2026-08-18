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
    images: [
      "/arb-images/roller 1.png",
      // "/arb-images/roller 2.png",
      // "/arb-images/roller 3.png",
    ],
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
    title: "Wheel Bearings / Wheel Bearings Kit",
    link: "/products/wheel-bearing",
    desc: "Precision wheel hub bearings, smooth performance, long-lasting reliability",
    image: "/arb-images/wheel.png",
    images: [
      "/arb-images/123.png",
    ],
    applications: [
      "Passenger Car",
      "Agricultural",
      "Electric Vehicle",
      "ATV/UTV  Vehicles",
      "LCVs",
    ],
  },

  {
    title: "Wheel Hub Bearings",
    link: "/products/wheel-bearing",
    desc: "Engineered for smooth rotation, superior load handling, and long-lasting wheel-end reliability",
    image: "/arb-images/wheelbearinghub.png",

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
    <section className="relative overflow-hidden bg-blue-50 px-4 md:py-15 py-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-5 flex items-end justify-between md:mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
              Our Products
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#29166F] md:text-5xl">
              <span className="text-black">Precision in </span>
              Every Rotation
            </h2>
          </div>
        </div>

        {/* Swiper */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-5 gap-3">
          {products.map((item, index) => (
            <>
              {/* Card */}
              <div
                className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    md:rounded-3xl rounded-lg
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
                      md:h-72 h-32
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
                  {/* <div
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
                  /> */}

                  <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    // navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="relative z-10 h-60 w-full product-card-swiper"
                  >
                    {/* Main Image */}
                    <SwiperSlide className="flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={450}
                        height={350}
                        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
                      />
                    </SwiperSlide>

                    {/* Additional Images */}
                    {/* {item.images?.map((img, imageIndex) => (
                      <SwiperSlide
                        key={imageIndex}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={img}
                          alt={`${item.title} ${imageIndex + 1}`}
                          width={450}
                          height={350}
                          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
                        />
                      </SwiperSlide>
                    ))} */}
                  </Swiper>

                  {/* View Button */}
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="
                        absolute
                        md:right-5 right-2 top-2
                        md:top-5
                        z-30
                        flex
                        md:h-11 h-8 w-8
                        md:w-11
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
                <div className="flex md:h-[200px] flex-col md:p-4 p-2">

                  <h3 className="line-clamp-2 md:text-xl text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="md:mt-3 mt-1 md:line-clamp-3 line-clamp-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-2">

                    <Link
                      href={item.link}
                      className="
                          md:text-sm text-xs
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
                          md:h-10 h-8 w-8
                          md:w-10
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
            </>
          ))}
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
              <div className="flex items-center justify-center bg-blue-50 relative">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  // navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="relative z-10 h-60 w-full product-card-swiper"
                >
                  {/* Main Image */}
                  {selectedProduct.images ?
                    selectedProduct.images?.map((img, imageIndex) => (
                      <SwiperSlide
                        key={imageIndex}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={img}
                          alt={`${selectedProduct.title} ${imageIndex + 1}`}
                          width={450}
                          height={350}
                          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
                        />
                      </SwiperSlide>
                    ))
                    :
                    <SwiperSlide className="flex items-center justify-center">
                      <Image
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        width={450}
                        height={350}
                        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
                      />
                    </SwiperSlide>}
                </Swiper>
              </div>

              {/* Content */}
              <div className="p-4 md:p-7">

                <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
                  Bearings Details
                </span>

                <h2 className="md:mt-3 text-3xl font-bold text-[#091A2D]">
                  {selectedProduct.title}
                </h2>

                <p className="md:mt-5 leading-7 text-gray-600">
                  {selectedProduct.desc}
                </p>

                <h3 className="md:mt-8 mt-2 text-xl font-semibold text-[#091A2D]">
                  Applications
                </h3>

                <ul className="md:mt-4 mt-1 md:space-y-3">
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