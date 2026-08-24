"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function TrustedBrands() {
  const brands = [
    "/client/25.webp",
    "/client/2.webp",

    "/client/4.webp",
    "/client/24.webp",
    "/client/7.webp",
    "/client/8.webp",
    "/client/9.webp",
    "/client/10.webp",
    "/client/11.webp",
    "/client/12.webp",
    "/client/13.webp",
    "/client/14.webp",
    "/client/15.webp",
    "/client/16.webp",
    "/client/17.webp",
    "/client/18.webp",

    "/client/19.webp",
    "/client/20.webp",
    "/client/22.webp",
    "/client/21.webp",
    "/client/23.webp",
  ];

  return (
    <section className="relative py-3 md:py-10 bg-white border-y border-cyan-200 overflow-hidden">
      <div className="w-full md:px-10 px-4 mx-auto ">
        <h3 className="text-center text-[#D9251C] font-bold tracking-[0.25em] text-sm mb-10">
          TRUSTED BY LEADING INDUSTRIES
        </h3>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {brands.map((logo, index) => (
            <SwiperSlide key={index}>
              <div
                className="
      h-28
      rounded-2xl
      border
      border-slate-200
      bg-white
      flex
      items-center
      justify-center
      md:px-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  className="
    h-full
    w-full
    object-cover
 
    transition-all
    duration-500
 
  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-xs text-center mt-7">
        *The logos used in the creative are properties/copyrights of the
        respective companies*
      </p>
    </section>
  );
}
