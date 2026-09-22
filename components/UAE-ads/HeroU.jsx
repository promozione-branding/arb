import Image from "next/image";
import {
  BadgeCheck,
  Award,
  Globe2,
  Settings,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import HeroInteractive from "./HeroInteractive";

const features = [
  {
    icon: Award,
    title: "صنع في الهند",
    number: "01",
  },
  {
    icon: BadgeCheck,
    title: "شهادة IATF",
    number: "02",
  },
  {
    icon: Globe2,
    title: "شحن عالمي",
    number: "03",
  },
  {
    icon: Settings,
    title: "حلول مخصصة",
    number: "04",
  },
];

export default function HeroU() {
  return (
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
          AMBIENT GLOW
      ====================================================== */}

      <div
        className="
          hero-orb
          pointer-events-none
          absolute
          -left-40
          top-[15%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-blue-500/10
          blur-[60px]
        "
      />

      <div
        className="
          hero-orb-reverse
          pointer-events-none
          absolute
          -right-40
          bottom-[-10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-500/10
          blur-[70px]
        "
      />

      {/* =====================================================
          LIGHT SWEEP
      ====================================================== */}

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
          blur-lg
        "
      />

      {/* =====================================================
          DECORATIVE LINES
      ====================================================== */}

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
          MAIN CONTENT
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
              hero-content
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
                دقة عالية. ثقة حول العالم.
              </p>
            </div>

            {/* =================================================
                HEADING
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
                دقة تصنع
              </span>

              {/* Interactive typewriter */}
              <HeroInteractive typewriterOnly />
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
              محامل كروية وأسطوانية عالية الجودة، مصممة للتطبيقات الصناعية
              وتطبيقات السيارات الصعبة، ويتم توريدها من الهند إلى العملاء من
              جميع أنحاء العالم.
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
                  سنوات
                </p>
              </div>

              <div className="h-9 w-px bg-gray-300" />

              <div className="text-left">
                <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                  6
                </p>

                <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                  قارات
                </p>
              </div>

              <div className="h-9 w-px bg-gray-300" />

              <div className="text-left">
                <p className="text-xl font-bold text-[#29166F] sm:text-2xl">
                  100%
                </p>

                <p className="text-[10px] uppercase tracking-[1.5px] text-gray-500 sm:text-xs">
                  دقة
                </p>
              </div>
            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <HeroInteractive buttonsOnly />

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
              order-1
              relative
              flex
              w-full
              items-center
              justify-center
              lg:order-2
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
                blur-[50px]
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

            {/* Floating Labels */}

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
                backdrop-blur-md
                lg:flex
                lg:items-center
                lg:gap-2
              "
            >
              <ShieldCheck size={15} className="text-blue-600" />

              <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                دقة عالية
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
                backdrop-blur-md
                lg:flex
                lg:items-center
                lg:gap-2
              "
            >
              <Globe2 size={15} className="text-blue-600" />

              <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                انتشار عالمي
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
                backdrop-blur-md
                lg:flex
                lg:items-center
                lg:gap-2
              "
            >
              <Sparkles size={15} className="text-red-600" />

              <span className="text-[10px] font-bold tracking-[1.5px] text-gray-700">
                مصمم ليدوم
              </span>
            </div>

            {/* =================================================
                PRODUCT SLIDER
            ================================================== */}

            <HeroInteractive sliderOnly />

            {/* Technical Badge */}

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
                backdrop-blur-md
                lg:block
              "
            >
              <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-400">
                الهندسة
              </p>

              <p className="mt-1 text-sm font-bold text-[#29166F]">
                الدقة • الأداء
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
          مرر لمعرفة المزيد
        </span>

        <span className="h-px w-8 bg-gray-400/60" />
      </div>
    </section>
  );
}