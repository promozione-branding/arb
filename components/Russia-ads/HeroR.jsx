
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  MoveRight,
  BadgeCheck,
  Award,
  Globe2,
  Settings,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import EnquiryR from "./EnquiryR";

/* =========================================================
   STATIC DATA
========================================================= */

const bearingImages = [
  "/hero/11.webp",
  "/hero/22.webp",
  "/hero/33.webp",
  "/hero/44.webp",
  // "/hero/Image 11.webp",
];

const typedTexts = [
  "ДВИГАЕТ ПРОГРЕСС",
  "ПОВЫШАЕТ ПРОИЗВОДИТЕЛЬНОСТЬ",
];

const features = [
  {
    icon: Award,
    title: "Сделано в Индии",
    number: "01",
  },
  {
    icon: BadgeCheck,
    title: "Сертификация IATF",
    number: "02",
  },
  {
    icon: Globe2,
    title: "Глобальная доставка",
    number: "03",
  },
  {
    icon: Settings,
    title: "Индивидуальные решения",
    number: "04",
  },
];

/* =========================================================
   TYPEWRITER
   Lightweight CSS-driven version
========================================================= */

function TypewriterText() {
  return (
    <span
      className="
        relative
        mt-2
        block
        min-h-[1.12em]
        overflow-hidden
        bg-gradient-to-r
        from-[#241260]
        via-[#3C2A9E]
        to-[#2563EB]
        bg-clip-text
        text-transparent
      "
    >
      <span className="hero-typewriter">
        {typedTexts[0]}
      </span>

      <span
        aria-hidden="true"
        className="
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
  );
}

/* =========================================================
   PRODUCT SLIDER
   Only one Image component is rendered.
========================================================= */

function ProductSlider({ currentSlide, setCurrentSlide }) {
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bearingImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrentSlide((prev) => (prev + 1) % bearingImages.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [setCurrentSlide]);

  return (
    <>
      <div
        className="
          relative
          z-10
          h-[280px]
          w-full
          max-w-[420px]
          overflow-hidden
          sm:h-[360px]
          sm:max-w-[500px]
          md:h-[460px]
          md:max-w-[580px]
          lg:h-[560px]
          lg:max-w-[620px]
          xl:h-[620px]
          2xl:h-[680px]
          2xl:max-w-[620px]
        "
      >
        <Image
          key={bearingImages[currentSlide]}
          src={bearingImages[currentSlide]}
          alt={`Подшипник ${currentSlide + 1}`}
          width={600}
          height={600}
          priority={currentSlide === 0}
          loading={currentSlide === 0 ? "eager" : "lazy"}
          sizes="
            (max-width: 640px) 90vw,
            (max-width: 1024px) 50vw,
            45vw
          "
          quality={70}
          className="
            h-full
            w-full
            object-contain
            animate-product-fade
          "
        />
      </div>

      {/* Slider dots */}

      <div
        className="
          absolute
          bottom-[8%]
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
      >
        {bearingImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Перейти к подшипнику ${index + 1}`}
            aria-current={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
            className={`
              h-1.5
              rounded-full
              transition-[width,background-color]
              duration-300
              ${
                currentSlide === index
                  ? "w-8 bg-[#29166F]"
                  : "w-1.5 bg-gray-400/60"
              }
            `}
          />
        ))}
      </div>
    </>
  );
}

/* =========================================================
   MAIN HERO
========================================================= */

export default function HeroR() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <section
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
          lg:py-5
          xl:min-h-[760px]
          [contain:layout_paint]
        "
      >
        {/* =====================================================
            HERO BACKGROUND
        ====================================================== */}

        <Image
          src="/banner1.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="
            absolute
            inset-0
            -z-20
            object-cover
            object-center
          "
        />

        {/* =====================================================
            LIGHT OVERLAY
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            bg-gradient-to-r
            from-white/30
            via-transparent
            to-blue-50/20
          "
        />

        {/* =====================================================
            GRID
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            hero-grid
            pointer-events-none
            absolute
            inset-0
            hidden
            opacity-[0.14]
            lg:block
          "
        />

        {/* =====================================================
            DESKTOP AMBIENT GLOW
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-40
            top-[15%]
            hidden
            h-[360px]
            w-[360px]
            rounded-full
            bg-blue-500/10
            blur-[80px]
            lg:block
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-[-10%]
            hidden
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-500/10
            blur-[90px]
            lg:block
          "
        />

        {/* =====================================================
            DECORATIVE LINES
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[5%]
            top-[18%]
            hidden
            h-px
            w-32
            bg-gradient-to-r
            from-transparent
            via-blue-500/40
            to-transparent
            lg:block
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[25%]
            hidden
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            via-blue-500/40
            to-transparent
            lg:block
          "
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}

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
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                order-2
                w-full
                text-center
                lg:order-1
                lg:text-left
              "
            >
              {/* Eyebrow */}

              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-3
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    relative
                    flex
                    h-2
                    w-2
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-red-600
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      h-2
                      w-2
                      rounded-full
                      bg-red-600
                    "
                  />
                </span>

                <span className="h-px w-8 bg-red-600 sm:w-12" />

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
                  ВЫСОКАЯ ТОЧНОСТЬ. ДОВЕРИЕ ВО ВСЁМ МИРЕ.
                </p>
              </div>

              {/* =================================================
                  HEADING
              ================================================== */}

              <h1
                className="
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
                <span className="block">
                  ТОЧНОСТЬ, КОТОРАЯ
                </span>

                <TypewriterText />
              </h1>

              {/* Underline */}

              <div
                aria-hidden="true"
                className="
                  mx-auto
                  mt-5
                  h-[3px]
                  w-20
                  overflow-hidden
                  rounded-full
                  bg-blue-100
                  lg:mx-0
                "
              >
                <div
                  className="
                    h-full
                    w-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-[#29166F]
                    to-blue-500
                  "
                />
              </div>

              {/* Description */}

              <p
                className="
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
                Высококачественные шариковые и роликовые подшипники,
                разработанные для требовательных промышленных и
                автомобильных применений и поставляемые из Индии
                клиентам по всему миру.
              </p>

              {/* =================================================
                  STATS
              ================================================== */}

              <div
                className="
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
                <div>
                  <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                    60+
                  </p>

                  <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                    Лет
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="h-9 w-px bg-gray-300"
                />

                <div>
                  <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                    6
                  </p>

                  <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                    Континентов
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="h-9 w-px bg-gray-300"
                />

                <div>
                  <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                    100%
                  </p>

                  <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                    Точность
                  </p>
                </div>
              </div>

              {/* =================================================
                  BUTTONS
              ================================================== */}

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
                {/* Quote */}

                <button
                  type="button"
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
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                    sm:w-auto
                    sm:px-7
                    sm:text-base
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <span className="relative">
                    Получить предложение
                  </span>

                  <MoveRight
                    size={18}
                    aria-hidden="true"
                    className="
                      relative
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />
                </button>

                {/* Call */}

                <a
                  href="tel:+79859834837"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-[#CC1C15]
                    bg-white/50
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-red-600
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                    hover:bg-red-600
                    hover:text-white
                    sm:w-auto
                    sm:px-7
                    sm:text-lg
                  "
                >
                  <span>ПОЗВОНИТЬ</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>
                </a>
              </div>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div
                className="
                  mt-9
                  hidden
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/5
                  bg-white/30
                  md:block
                  lg:mt-10
                "
              >
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {features.map(
                    ({ icon: Icon, title, number }) => (
                      <div
                        key={title}
                        className="
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
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            right-3
                            top-2
                            text-[9px]
                            font-bold
                            tracking-widest
                            text-gray-300
                          "
                        >
                          {number}
                        </span>

                        <Icon
                          aria-hidden="true"
                          className="
                            mb-2
                            h-8
                            w-8
                            text-[#4B63B8]
                            lg:h-9
                            lg:w-9
                          "
                        />

                        <h3
                          className="
                            text-center
                            text-sm
                            font-semibold
                            text-black
                            lg:text-left
                            lg:text-base
                          "
                        >
                          {title}
                        </h3>

                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            bottom-0
                            left-1/2
                            h-[2px]
                            w-0
                            -translate-x-1/2
                            bg-gradient-to-r
                            from-[#29166F]
                            to-blue-500
                            transition-all
                            duration-500
                            group-hover:w-2/3
                          "
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT PRODUCT
            ================================================== */}

            <div
              className="
                order-1
                relative
                flex
                w-full
                items-center
                justify-center
                lg:order-2
              "
            >
              {/* Product glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[260px]
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/10
                  blur-[60px]
                  sm:h-[380px]
                  sm:w-[380px]
                  lg:h-[450px]
                  lg:w-[450px]
                "
              />

              {/* Ring */}

              <div
                aria-hidden="true"
                className="
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
                  border-blue-500/15
                  sm:h-[450px]
                  sm:w-[450px]
                  lg:h-[520px]
                  lg:w-[520px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  hidden
                  h-[620px]
                  w-[620px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-blue-500/10
                  lg:block
                "
              />

              {/* =================================================
                  FLOATING LABELS
              ================================================== */}

              <div
                className="
                  absolute
                  left-[3%]
                  top-[18%]
                  z-30
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/80
                  bg-white/70
                  px-4
                  py-2
                  shadow-lg
                  lg:flex
                "
              >
                <ShieldCheck
                  size={15}
                  className="text-blue-600"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                  ВЫСОКАЯ ТОЧНОСТЬ
                </span>
              </div>

              <div
                className="
                  absolute
                  right-[2%]
                  top-[28%]
                  z-30
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/80
                  bg-white/70
                  px-4
                  py-2
                  shadow-lg
                  lg:flex
                "
              >
                <Globe2
                  size={15}
                  className="text-blue-600"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                  ГЛОБАЛЬНЫЙ ОХВАТ
                </span>
              </div>

              <div
                className="
                  absolute
                  bottom-[17%]
                  left-[8%]
                  z-30
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/80
                  bg-white/70
                  px-4
                  py-2
                  shadow-lg
                  lg:flex
                "
              >
                <Sparkles
                  size={15}
                  className="text-red-600"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                  СОЗДАНО НА ДОЛГИЕ ГОДЫ
                </span>
              </div>

              {/* Product */}

              <ProductSlider
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
              />

              {/* =================================================
                  TECHNICAL BADGE
              ================================================== */}

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
                  lg:block
                "
              >
                <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-400">
                  ИНЖЕНЕРИЯ
                </p>

                <p className="mt-1 text-sm font-bold text-[#29166F]">
                  ТОЧНОСТЬ • ПРОИЗВОДИТЕЛЬНОСТЬ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            items-center
            gap-3
            lg:flex
          "
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-gray-400/60"
          />

          <span className="text-[9px] font-bold uppercase tracking-[3px] text-gray-500">
            ПРОКРУТИТЕ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ
          </span>

          <span
            aria-hidden="true"
            className="h-px w-8 bg-gray-400/60"
          />
        </div>
      </section>

      {/* =====================================================
          ENQUIRY POPUP
      ====================================================== */}

      {isFormOpen && (
        <EnquiryR
          IATFpen={true}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}
