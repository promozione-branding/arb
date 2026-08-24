"use client";

import Image from "next/image";
import Link from "next/link";
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

const bearingImages = [
  "/hero/11.webp",
  "/hero/22.webp",
  "/hero/33.webp",
  "/hero/44.webp",
  "/hero/Image 11.webp",
];

const typedTexts = ["DRIVES PROGRESS", "POWERS PERFORMANCE"];

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
    title: "Customized Solutions",
    number: "04",
  },
];

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  /* Product slider */
  const [currentSlide, setCurrentSlide] = useState(0);

  /* Typewriter */
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /*
   * Product slider autoplay
   */
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bearingImages.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  /*
   * Typewriter effect
   */
  useEffect(() => {
    const startDelay = setTimeout(() => {
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
    }, 100);

    return () => clearTimeout(startDelay);
  }, [typedText, isDeleting, textIndex]);

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
          lg:py-0
          xl:min-h-[760px]
        "
      >
        {/* =====================================================
            LCP HERO BACKGROUND
        ====================================================== */}

        <Image
          src="/banner1.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="
            absolute
            inset-0
            -z-20
            object-cover
            object-center
          "
        />

        {/* =====================================================
            BACKGROUND OVERLAY
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 -z-10 bg-white/10" />

        <div
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
            ANIMATED GRID
        ====================================================== */}

        <div
          className="
            hero-grid
            pointer-events-none
            absolute
            inset-0
            opacity-[0.18]
          "
        />

        {/* =====================================================
            AMBIENT GLOWS
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
            blur-[100px]
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
            blur-[110px]
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
            blur-[70px]
          "
        />

        {/* Light sweep */}
        <div
          className="
            hero-light
            pointer-events-none
            absolute
            top-0
            h-full
            w-[160px]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            blur-xl
          "
        />

        {/* Decorative lines */}

        <div
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

            <div className="hero-content w-full text-center lg:text-left">
              {/* Eyebrow */}

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
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-red-600
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-red-600
                    "
                  />
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

              {/* =================================================
                  LCP HEADING
              ================================================== */}

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
                  {typedText || "DRIVES PROGRESS"}

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

              {/* Underline */}

              <div
                className="
                  hero-underline
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

              {/* Stats */}

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

              {/* Buttons */}

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
                      transition-transform
                      duration-300
                      hover:-translate-y-1
                      sm:px-7
                      sm:text-base
                    "
                  >
                    <span
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

                    <span className="relative">EXPLORE MORE</span>

                    <MoveRight
                      size={18}
                      className="
                        relative
                        transition-transform
                        duration-300
                        group-hover:translate-x-2
                      "
                    />
                  </button>
                </Link>

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
                    border
                    border-[#CC1C15]
                    bg-white/50
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-red-600
                    backdrop-blur-md
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                    hover:bg-red-600
                    hover:text-white
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
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />
                </button>
              </div>

              {/* =================================================
                  FEATURES
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
                  {features.map((feature) => {
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
                        <span
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
                          {feature.number}
                        </span>

                        <div className="relative">
                          <Icon
                            className="
                              relative
                              mx-auto
                              mb-2
                              h-8
                              w-8
                              text-[#4B63B8]
                              lg:mx-0
                              lg:h-9
                              lg:w-9
                            "
                          />
                        </div>

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
                          {feature.title}
                        </h3>

                        <span
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
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT PRODUCT
            ================================================== */}

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
              {/* Glow */}

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
                  blur-[70px]
                  sm:h-[400px]
                  sm:w-[400px]
                "
              />

              {/* Rings */}

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

              {/* Floating labels */}

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

              {/* =================================================
                  PRODUCT SLIDER
                  NO SWIPER
                  TAILWIND + REACT ONLY
              ================================================== */}

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
                  2xl:max-w-[350px]
                "
              >
                {bearingImages.map((img, index) => {
                  const isActive = index === currentSlide;

                  const isPrevious =
                    index < currentSlide ||
                    (currentSlide === 0 &&
                      index === bearingImages.length - 1);

                  return (
                    <div
                      key={img}
                      className={`
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-700
                        ease-in-out
                        ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : isPrevious
                              ? "-translate-x-full opacity-0"
                              : "translate-x-full opacity-0"
                        }
                      `}
                    >
                      <Image
                        src={img}
                        alt={`Bearing ${index + 1}`}
                        width={500}
                        height={500}
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        sizes="
                          (max-width: 640px) 90vw,
                          (max-width: 1024px) 50vw,
                          45vw
                        "
                        quality={75}
                        className="
                          bearing-image
                          h-full
                          w-full
                          object-contain
                        "
                      />
                    </div>
                  );
                })}
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
                    aria-label={`Go to bearing ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
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

              {/* Technical badge */}

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

        {/* Scroll indicator */}

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
        <LazyCataloguePopup
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}

/*
 * Load catalogue popup only when user opens it.
 * This keeps popup JavaScript out of the initial render.
 */
function LazyCataloguePopup({ onClose }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    let mounted = true;

    import("@/components/Catpopup").then((mod) => {
      if (mounted) {
        setComponent(() => mod.default);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!Component) {
    return null;
  }

  return (
    <Component
      Onpen={true}
      onClose={onClose}
    />
  );
}