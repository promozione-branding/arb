"use client";

import Image from "next/image";
import Link from "next/link";
import Catpopup from "@/components/Catpopup";
import { useEffect, useState } from "react";

import {
  MoveRight,
  ArrowBigRight,
  BadgeCheck,
  Award,
  Globe2,
  Settings,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const bearingImages = [
    "/bearinghero.png",
    "/banner/22.png",
    "/banner/3.png",
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);


  const typedTexts = [
    "DRIVES PROGRESS",
    // "MOVES INDUSTRY",
    "POWERS PERFORMANCE",
    
  ];

  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typedTexts[textIndex];

    const typingSpeed = isDeleting ? 40 : 85;

    if (!isDeleting && typedText === currentText) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);

      return () => clearTimeout(timer);
    }

    if (isDeleting && typedText === "") {
      setIsDeleting(false);

      setTextIndex((prev) => (prev + 1) % typedTexts.length);

      return;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentText.substring(0, typedText.length - 1)
          : currentText.substring(0, typedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  // =========================================================
  // FEATURES
  // =========================================================

  const features = [
    {
      icon: Award,
      title: "Made in India",
      number: "01",
    },
    {
      icon: BadgeCheck,
      title: "IATF Certified",
      number: "02",
    },
    {
      icon: Globe2,
      title: "Global Delivery",
      number: "03",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      number: "04",
    },
  ];

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/banner1.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="
          hero-section
          relative
          flex
          min-h-[720px]
          w-full
          items-center
          overflow-hidden
          py-14
          sm:min-h-[760px]
          md:min-h-[800px]
          lg:min-h-[700px]
          lg:py-0
          xl:min-h-[760px]
        "
      >
        {/* =====================================================
            BACKGROUND OVERLAY
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 bg-white/10" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-blue-50/20" />

        {/* =====================================================
            ANIMATED GRID
        ====================================================== */}

        <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

        {/* =====================================================
            LARGE AMBIENT GLOWS
        ====================================================== */}

        <div
          className="
            hero-orb
            pointer-events-none
            absolute
            -left-40
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/10
            blur-[130px]
          "
        />

        <div
          className="
            hero-orb-reverse
            pointer-events-none
            absolute
            -right-40
            bottom-[-10%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-indigo-500/10
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[30%]
            top-[10%]
            h-[180px]
            w-[180px]
            rounded-full
            bg-cyan-400/5
            blur-[90px]
          "
        />

     

        <div className="hero-light pointer-events-none absolute top-0 h-full w-[160px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-2xl" />

     

        <div className="pointer-events-none absolute left-[5%] top-[18%] hidden h-px w-32 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent lg:block" />

        <div className="pointer-events-none absolute right-[8%] top-[25%] hidden h-px w-40 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent lg:block" />

        <div className="pointer-events-none absolute bottom-[18%] left-[15%] hidden h-px w-28 bg-gradient-to-r from-transparent via-red-500/30 to-transparent lg:block" />

    

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
              lg:gap-4
              xl:gap-10
              2xl:gap-16
            "
          >
      

            <div className="hero-content w-full text-center lg:text-left">
        

              <div
                className="
                  hero-item
                  mb-5
                  inline-flex
                  items-center
                  gap-3
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
                </span>

                <span className="h-[1px] w-8 bg-red-600 sm:w-12" />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-red-600
                    sm:text-xs
                    md:text-sm
                  "
                >
                  PRECISION ENGINEERED. GLOBALLY TRUSTED.
                </p>
              </div>

        

              <h1
                className="
                  hero-heading
                  text-3xl
                  font-bold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-black
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[48px]
                  xl:text-[57px]
                  2xl:text-[64px]
                "
              >
                <span className="hero-heading-line block">
                  PRECISION THAT
                </span>

        

                <span
                  className="
                    typewriter-text
                    relative
                    mt-2
                    block
                    min-h-[1.12em]
                    bg-gradient-to-r
                    from-[#241260]
                    via-[#3C2A9E]
                    to-[#2563EB]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {typedText}

                  <span
                    className="
                      type-cursor
                      ml-1
                      inline-block
                      h-[0.78em]
                      w-[3px]
                      translate-y-[2px]
                      rounded-full
                      bg-[#29166F]
                      align-middle
                    "
                  />
                </span>
              </h1>


              <div className="hero-underline mx-auto mt-5 h-[3px] w-20 overflow-hidden rounded-full bg-blue-100 lg:mx-0">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#29166F] to-blue-500" />
              </div>

       

              <p
                className="
                  hero-item
                  mx-auto
                  mt-5
                  max-w-xl
                  text-sm
                  leading-6
                  text-black/80
                  sm:text-base
                  sm:leading-7
                  md:text-lg
                  lg:mx-0
                "
              >
                High-quality ball and roller bearings engineered for demanding
                industrial and automotive applications, supplied from India to
                customers worldwide.
              </p>


              <div
                className="
                  hero-stats
                  mx-auto
                  mt-6
                  flex
                  max-w-xl
                  items-center
                  justify-center
                  gap-5
                  sm:gap-8
                  lg:mx-0
                  lg:justify-start
                "
              >
                <div className="text-left">
                  <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                    60+
                  </p>
                  <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                    Years
                  </p>
                </div>

                <div className="h-9 w-px bg-gray-300" />

                <div className="text-left">
                  <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                    6
                  </p>
                  <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                    continents
                  </p>
                </div>

                <div className="h-9 w-px bg-gray-300" />

                <div className="text-left">
                  <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                    100%
                  </p>
                  <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                    Precision
                  </p>
                </div>
              </div>

            

              <div
                className="
                  hero-buttons
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
                <Link href="/about-us" className="w-full sm:w-auto">
                  <button
                    className="
                      group
                      relative
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      rounded-xl
                      bg-gradient-to-r
                      from-[#26196D]
                      via-[#35258B]
                      to-blue-600
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_15px_40px_rgba(38,25,109,0.25)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_20px_50px_rgba(38,25,109,0.35)]
                      sm:px-7
                      sm:text-base
                    "
                  >
                    {/* BUTTON SHINE */}

                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative">
                      EXPLORE MORE
                    </span>

                    <MoveRight
                      size={18}
                      className="relative transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </button>
                </Link>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#CC1C15]
                    bg-white/50
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-red-600
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:bg-red-600
                    hover:text-white
                    hover:shadow-[0_15px_35px_rgba(204,28,21,0.25)]
                    sm:w-auto
                    sm:px-7
                    sm:text-base
                  "
                >
                  <span className="relative">
                    DOWNLOAD CATALOGUE
                  </span>

                  <ArrowBigRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </div>

              {/* =================================================
                  FEATURE CARDS
              ================================================== */}

              <div
                className="
                  hero-features
                  mt-9
                  hidden
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/5
                  bg-white/30
                  backdrop-blur-md
                  md:block
                  lg:mt-10
                "
              >
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="
                          feature-card
                          group
                          relative
                          flex
                          min-h-[110px]
                          flex-col
                          items-center
                          justify-center
                          border-gray-200/70
                          py-5
                          lg:items-start
                          lg:border-r
                          lg:px-4
                          lg:py-5
                        "
                      >
                        {/* Number */}

                        <span className="absolute right-3 top-2 text-[9px] font-bold tracking-widest text-gray-300">
                          {feature.number}
                        </span>

                        <div className="relative">
                          <div className="absolute inset-0 scale-50 rounded-full bg-blue-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                          <Icon
                            className="
                              relative
                              mx-auto
                              mb-2
                              h-8
                              w-8
                              text-[#4B63B8]
                              transition-all
                              duration-500
                              group-hover:-translate-y-1
                              group-hover:scale-110
                              group-hover:text-[#29166F]
                              lg:mx-0
                              lg:h-9
                              lg:w-9
                            "
                          />
                        </div>

                        <h3 className="text-center text-sm font-semibold text-black transition-colors group-hover:text-[#29166F] lg:text-left lg:text-base">
                          {feature.title}
                        </h3>

                        {/* Bottom line */}

                        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#29166F] to-blue-500 transition-all duration-500 group-hover:w-2/3" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

         

            <div
              className="
                hero-product
                relative
                flex
                w-full
                items-center
                justify-center
                lg:mt-0
              "
            >
         

              <div
                className="
                  product-glow
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[280px]
                  w-[280px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/15
                  blur-[90px]
                  sm:h-[400px]
                  sm:w-[400px]
                "
              />

            

              <div
                className="
                  product-ring
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[300px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-blue-500/20
                  sm:h-[450px]
                  sm:w-[450px]
                  lg:h-[520px]
                  lg:w-[520px]
                "
              />

      

              <div
                className="
                  product-ring-outer
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[360px]
                  w-[360px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-blue-500/10
                  sm:h-[520px]
                  sm:w-[520px]
                  lg:h-[620px]
                  lg:w-[620px]
                "
              />


              <div
                className="
                  floating-label
                  absolute
                  left-[3%]
                  top-[18%]
                  z-30
                  hidden
                  rounded-full
                  border
                  border-white/80
                  bg-white/70
                  px-4
                  py-2
                  shadow-lg
                  backdrop-blur-xl
                  lg:flex
                  lg:items-center
                  lg:gap-2
                "
              >
                <ShieldCheck size={15} className="text-blue-600" />
                <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                  HIGH PRECISION
                </span>
              </div>

              <div
                className="
                  floating-label-2
                  absolute
                  right-[2%]
                  top-[28%]
                  z-30
                  hidden
                  rounded-full
                  border
                  border-white/80
                  bg-white/70
                  px-4
                  py-2
                  shadow-lg
                  backdrop-blur-xl
                  lg:flex
                  lg:items-center
                  lg:gap-2
                "
              >
                <Globe2 size={15} className="text-blue-600" />
                <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                  GLOBAL REACH
                </span>
              </div>

              <div
                className="
                  floating-label-3
                  absolute
                  bottom-[17%]
                  left-[8%]
                  z-30
                  hidden
                  rounded-full
                  border
                  border-white/80
                  bg-white/70
                  px-4
                  py-2
                  shadow-lg
                  backdrop-blur-xl
                  lg:flex
                  lg:items-center
                  lg:gap-2
                "
              >
                <Sparkles size={15} className="text-red-600" />
                <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                  ENGINEERED TO LAST
                </span>
              </div>

              {/* Swiper */}

              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                loop
                speed={1100}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="
                  product-slider
                  relative
                  z-10
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
                        bearing-image
                        h-full
                        w-full
                        object-contain
                       
                      "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Bottom technical badge */}

              <div
                className="
                  absolute
                  bottom-[4%]
                  right-[4%]
                  z-30
                  hidden
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/65
                  px-5
                  py-3
                  shadow-xl
                  backdrop-blur-xl
                  lg:block
                "
              >
                <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-400">
                  ENGINEERING
                </p>

                <p className="mt-1 text-sm font-bold text-[#29166F]">
                  PRECISION • PERFORMANCE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 lg:flex">
          <span className="h-px w-8 bg-gray-400/60" />

          <span className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500">
            SCROLL TO EXPLORE
          </span>

          <span className="h-px w-8 bg-gray-400/60" />
        </div>
      </section>

      {/* =====================================================
          CATALOGUE POPUP
      ====================================================== */}

      {isFormOpen && (
        <Catpopup
          Onpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}


    
    </>
  );
}