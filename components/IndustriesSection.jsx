"use client";

import Image from "next/image";
import {
  Factory,
  Pickaxe,
  Fuel,
  Building2,
  Train,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const industries = [
  {
    title: "Metallurgy",
    image: "/Metallurgy.webp",
    icon: Factory,
  },
  {
    title: "Mining",
    image: "/mining.jpg",
    icon: Pickaxe,
  },
  {
    title: "Oil & Gas",
    image: "/oil.jpg",
    icon: Fuel,
  },
  {
    title: "Construction",
    image: "/const.jpg",
    icon: Building2,
  },
  {
    title: "Railways",
    image: "/railway.jpg",
    icon: Train,
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#EDF4FE] py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        <span className="text-[#D9251C] uppercase tracking-[4px] text-sm font-semibold">
          Industries We Serve
        </span>

        <h2 className="mt-3 mb-9 text-3xl font-bold text-[#29166F] md:mb-12 md:text-5xl">
          <span className="text-black">Powering Industries</span> Worldwide
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          
          }}
        >
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="group relative h-[360px] overflow-hidden rounded-xl border border-white/10 bg-[#09192d] cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061322] via-[#061322]/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-blue-500" />

                  <div className="absolute inset-0 bg-blue-500/0 transition duration-500 group-hover:bg-blue-500/10" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}