
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
        className="
          relative
          flex
          min-h-[720px]
          w-full
          items-center
          overflow-hidden
          py-12
          sm:min-h-[760px]
          sm:py-14
          md:min-h-[800px]
          lg:min-h-[700px]
          lg:py-0
          xl:min-h-[760px]
        "
      >
        {/* Main Container */}
        <div
          className="
            relative
            z-20
            mx-auto
            w-full
            max-w-[1600px]
            px-5
            sm:px-8
            md:px-10
            lg:px-12
            xl:px-16
            2xl:px-20
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-8
              lg:grid-cols-2
              lg:gap-6
              xl:gap-10
              2xl:gap-16
            "
          >
            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}

            <div className="w-full text-center lg:text-left">
              <p
                className="
                  mb-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-red-600
                  sm:mb-5
                  sm:text-xs
                  md:text-sm
                "
              >
                RUSSIAN PRECISION, GLOBAL TRUST
              </p>

              <h1
                className="
                  text-3xl
                  font-bold
                  leading-[1.1]
                  text-black
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[48px]
                  xl:text-[55px]
                  2xl:text-[62px]
                "
              >
                PRECISION THAT

                <span className="block text-[#29166F]">
                  POWER PROGRESS
                </span>
              </h1>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-black
                  sm:mt-5
                  sm:text-base
                  sm:leading-7
                  md:text-lg
                  lg:mx-0
                "
              >
                High-quality ball and roller bearings
                <br className="hidden sm:block" />
                manufactured in Russia for industries worldwide.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-7
                  flex
                  w-full
                  flex-col
                  justify-center
                  gap-3
                  sm:mt-8
                  sm:flex-row
                  sm:gap-4
                  lg:justify-start
                "
              >
                <Link
                  href="/about-us"
                  className="w-full sm:w-auto"
                >
                  <button
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-gradient-to-r
                      from-[#26196D]
                      to-blue-600
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-xl
                      transition-all
                      duration-300
                      hover:scale-105
                      sm:px-7
                      sm:text-base
                    "
                  >
                    EXPLORE MORE
                    <MoveRight size={18} />
                  </button>
                </Link>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-[#CC1C15]
                    bg-[#CC1C15]/5
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-red-600
                    transition-all
                    duration-300
                    hover:bg-red-600
                    hover:text-white
                    sm:w-auto
                    sm:px-7
                    sm:text-base
                  "
                >
                  DOWNLOAD CATALOGUE
                  <ArrowBigRight size={18} />
                </button>
              </div>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div
                className="
                  mt-8
                  hidden
                  overflow-hidden
                  rounded-xl
                  md:block
                  lg:mt-10
                "
              >
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {/* Card 1 */}
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      border-b
                      border-gray-200
                      py-5
                      lg:items-start
                      lg:border-b-0
                      lg:border-r
                      lg:py-6
                    "
                  >
                    <div className="px-2 text-center lg:px-0 lg:text-left">
                      <Award className="mx-auto mb-2 h-8 w-8 text-[#4B63B8] lg:mx-0 lg:h-9 lg:w-9" />

                      <h3 className="text-sm font-semibold text-black lg:text-base">
                        Made in India
                      </h3>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      border-b
                      border-gray-200
                      py-5
                      lg:items-start
                      lg:border-b-0
                      lg:border-r
                      lg:py-6
                    "
                  >
                    <div className="px-2 text-center lg:text-left">
                      <BadgeCheck className="mx-auto mb-2 h-8 w-8 text-[#4B63B8] lg:mx-0 lg:h-9 lg:w-9" />

                      <h3 className="text-sm font-semibold text-black lg:text-base">
                        IATF Certified
                      </h3>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      border-r
                      border-gray-200
                      py-5
                      lg:items-start
                      lg:py-6
                    "
                  >
                    <div className="px-2 text-center lg:text-left">
                      <Globe2 className="mx-auto mb-2 h-8 w-8 text-[#4B63B8] lg:mx-0 lg:h-9 lg:w-9" />

                      <h3 className="text-sm font-semibold text-black lg:text-base">
                        Global Delivery
                      </h3>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      py-5
                      lg:items-start
                      lg:py-6
                    "
                  >
                    <div className="px-2 text-center lg:text-left">
                      <Settings className="mx-auto mb-2 h-8 w-8 text-[#4B63B8] lg:mx-0 lg:h-9 lg:w-9" />

                      <h3 className="whitespace-nowrap text-sm font-semibold text-black lg:text-base">
                        Custom Solutions
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT CONTENT / SLIDER
            ====================================================== */}

            <div
              className="
                relative
                flex
                w-full
                items-center
                justify-center
                lg:mt-0
              "
            >
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                loop
                speed={700}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="
                  h-[280px]
                  w-full
                  max-w-[420px]
                  sm:h-[360px]
                  sm:max-w-[500px]
                  md:h-[460px]
                  md:max-w-[580px]
                  lg:h-[560px]
                  lg:max-w-[620px]
                  xl:h-[620px]
                  2xl:h-[680px]
                  2xl:max-w-[700px]
                "
              >
                {bearingImages.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={img}
                      alt={`Bearing ${index + 1}`}
                      width={700}
                      height={700}
                      priority={index === 0}
                      sizes="
                        (max-width: 640px) 90vw,
                        (max-width: 1024px) 50vw,
                        45vw
                      "
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Popup */}

      {isFormOpen && (
        <Catpopup
          Onpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}

