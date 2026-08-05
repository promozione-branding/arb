"use client";

import Image from "next/image";
import Link from "next/link";
import Catpopup from "@/components/Catpopup";
import { useState } from "react";

import {
  MoveRight,
  ArrowBigRight,
  BadgeCheck,
  Award,
  Globe2,
  Settings,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const bearingImages = [
    "/banner/1.png",
    "/banner/22.png",
    "/banner/3.png",
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section
        style={{
          backgroundImage: `url('/banner1.webp')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative w-full min-h-screen lg:min-h-[700px] overflow-hidden flex items-center pt-10 lg:py-0"
      >
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center  lg:gap-6">
            {/* LEFT CONTENT */}
            <div className=" text-center lg:text-left">
              <p className="mb-5 tracking-[2px] text-xs sm:text-sm font-bold uppercase text-red-600">
                RUSSIAN PRECISION, GLOBAL TRUST
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-bold leading-tight text-black">
                PRECISION THAT
                <span className="block text-blue-700">
                  POWER PROGRESS
                </span>
              </h1>

              <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-7 text-black">
                High-quality ball and roller bearings
                <br className="hidden sm:block" />
                manufactured in Russia for industries worldwide.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/about-us">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#26196D] to-blue-600 px-7 py-3.5 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
                    EXPLORE MORE
                    <MoveRight size={18} />
                  </button>
                </Link>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-xl border border-[#CC1C15] bg-[#CC1C15]/5 px-7 py-3.5 text-red-600 font-medium transition-all duration-300 hover:bg-red-600 hover:text-white"
                >
                  DOWNLOAD CATALOGUE
                  <ArrowBigRight size={18} />
                </button>
              </div>

              {/* FEATURES */}
              <div className="mt-10 hidden md:block rounded-xl overflow-hidden">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                                    {/* Card 1 */}
                  <div className="flex flex-col items-center lg:items-start justify-center py-5 lg:py-6 border-r border-b lg:border-b-0 border-gray-200">
                    <div className="text-center lg:text-left ">
                      <Award className="w-8 h-8 lg:w-9 lg:h-9 text-[#4B63B8] mb-2 mx-auto lg:mx-0" />
                      <h3 className="font-semibold text-sm lg:text-base text-black">
                        Made in India
                      </h3>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-col items-center lg:items-start justify-center py-5 lg:py-6 border-r border-b lg:border-b-0 border-gray-200">
                    <div className="text-center lg:text-left px-2">
                      <BadgeCheck className="w-8 h-8 lg:w-9 lg:h-9 text-[#4B63B8] mb-2 mx-auto lg:mx-0" />
                      <h3 className="font-semibold text-sm lg:text-base text-black">
                        IATF Certified
                      </h3>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex flex-col items-center lg:items-start justify-center py-5 lg:py-6 border-r border-gray-200">
                    <div className="text-center lg:text-left px-3">
                      <Globe2 className="w-8 h-8 lg:w-9 lg:h-9 text-[#4B63B8] mb-2 mx-auto lg:mx-0" />
                      <h3 className="font-semibold text-sm lg:text-base text-black">
                        Global Delivery
                      </h3>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex flex-col items-center lg:items-start justify-center py-5 lg:py-6">
                    <div className="text-center lg:text-left px-2">
                      <Settings className="w-8 h-8 lg:w-9 lg:h-9 text-[#4B63B8] mb-2 mx-auto lg:mx-0" />
                      <h3 className="font-semibold text-sm lg:text-base text-black whitespace-nowrap">
                        Custom Solutions
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center items-center  lg:mt-0">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                speed={700}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="w-full max-w-[620px] h-[280px] sm:h-[380px] md:h-[500px] lg:h-[620px]"
              >
                {bearingImages.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={img}
                      alt={`Bearing ${index + 1}`}
                      width={620}
                      height={620}
                      priority={index === 0}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>


            {isFormOpen && (
        <Catpopup
          Onpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}