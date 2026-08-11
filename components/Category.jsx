
"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Double Row Angular Contact Ball Bearings",
    image: "/arb-images/DOUBLE POINT ANGULAR.png",
    desc: "Designed to accommodate combined radial and axial loads in both directions, offering high rigidity and reliable performance for demanding industrial applications.",
    link: "/products/ball-bearing/double-row-angular-contact-bearings",
  },
  {
    title: "Four Point Contact Ball Bearings",
    image: "/arb-images/FOUR POINT ANGULAR CONTACT.png",
    desc: "Engineered to support axial loads in both directions while occupying minimal space, making them ideal for gearboxes, pumps, and industrial machinery.",
    link: "/products/ball-bearing/four-point-contact-ball-bearings",
  },
  {
    title: "Ball Bearings",
    image: "/arb-images/BALL BEARING 62208 2RS.png",
    desc: "Precision-engineered ball bearings deliver smooth rotation, low friction, high-speed operation, and extended service life across automotive and industrial applications.",
    link: "/products/ball-bearing/ball-bearings",
  },
  {
    title: "Wheel Bearings",
    image: "/arb-images/Wheel Bearing.png",
    desc: "High-performance wheel bearings provide smooth wheel rotation, reduced friction, and enhanced durability for reliable automotive performance and safety.",
    link: "/products/wheel-bearing/wheel-bearings",
  },
  {
    title: "Cylindrical Roller Bearings",
    image: "/arb-images/CYLINDRICAL BEARING NU-212 E.png",
    desc: "Built to handle heavy radial loads with exceptional rigidity, ensuring efficient performance in electric motors, gearboxes, and heavy industrial equipment.",
    link: "/products/roller-bearings/cylindrical-roller-bearings",
  },
  {
    title: "Mix Cylindrical Roller Bearings",
    image: "/arb-images/CYLINDRICAL BEARING JC 8003.png",
    desc: "Manufactured for high load capacity and dependable operation, these bearings offer superior strength and durability for demanding industrial and automotive applications.",
    link: "/products/roller-bearings/mix-cylindrical-roller-bearings",
  },
];

export default function ProductCategories() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 ">

      {/* Background Details */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-red-100/40 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">


        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end ">

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600" />

              <span className="text-xs font-bold uppercase tracking-[4px] text-red-600">
                ARB BEARINGS
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
             Bearings We Offer
              
            </h2>

          

          </div>

   

          <div className="hidden shrink-0 md:block">
            <div className="border-l border-slate-300 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-slate-400">
                Product Range
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-800">
                Precision Components
              </p>
            </div>
          </div>

        </div>

    

        <div className="relative">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={700}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible"
          >

            {products.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">

                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[500px]
                    flex-col
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-slate-200
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-blue-200
                    hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                  "
                >

               

                  <div className="absolute left-5 top-5 z-10">
                    <span className="text-xs font-bold tracking-[2px] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                 

                  <div className="absolute right-5 top-5 z-10">
                    <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[1.5px] text-slate-500 backdrop-blur">
                      Precision
                    </span>
                  </div>

           

                  <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 px-8 pt-8">

                

                    <div
                      className="
                        absolute
                        h-44
                        w-44
                        rounded-full
                        border
                        border-blue-100
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:border-blue-200
                      "
                    />

                    <div
                      className="
                        absolute
                        h-32
                        w-32
                        rounded-full
                        border
                        border-dashed
                        border-slate-200
                        transition-all
                        duration-700
                        group-hover:rotate-90
                      "
                    />

                  

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={600}
                      sizes="
                        (max-width: 640px) 90vw,
                        (max-width: 1024px) 40vw,
                        25vw
                      "
                      className="
                        relative
                        z-10
                        h-[190px]
                        w-full
                        object-contain
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                  

                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

                  </div>

               
                  <div className="flex flex-1 flex-col p-6">

                    <h3 className="min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-[#1D4ED8]">
                      {item.title}
                    </h3>

                    <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-500">
                      {item.desc}
                    </p>

              

                    <div className="my-5 h-px w-full bg-slate-100" />

                

                    <Link
                      href={item.link}
                      className="
                        mt-auto
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-slate-200
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-slate-700
                        transition-all
                        duration-300
                        hover:border-[#1D4ED8]
                        hover:bg-[#1D4ED8]
                        hover:text-white
                      "
                    >
                      <span>Explore Product</span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-slate-100
                          transition-all
                          duration-300
                          group-hover:bg-white/15
                        "
                      >
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>

                  </div>

                  {/* Hover Accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-gradient-to-r
                      from-[#1D4ED8]
                      to-red-600
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

       

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-500">
            Precision bearings engineered for demanding applications.
          </p>

          <Link
            href="/products/ball-bearing"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8]"
          >
            View All Products

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}

