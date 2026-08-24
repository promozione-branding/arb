"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Award,
  BadgeCheck,
  Globe2,
  Cog,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 60,
    suffix: "+",
    title: "Years of",
    subtitle: "Excellence",
  },
  {
    icon: BadgeCheck,
    value: 2500,
    suffix: "+",
    title: "",
    subtitle: "Products",
  },
  {
    icon: Globe2,
    value: 50,
    suffix: "+",
    title: "Countries",
    subtitle: "Served",
  },
  {
    icon: Cog,
    value: 24,
    suffix: "/7",
    title: "Technical",
    subtitle: "Support",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      style={{
        backgroundImage: "url(/count22.webp)",
      }}
      className="
        relative
        bg-cover
        bg-center
        bg-no-repeat
        py-10
        sm:py-14
        lg:bg-fixed
        lg:py-20
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#06111f]/50" />

      {/* Container */}
      <div
        ref={ref}
        className="
          relative
          mx-4
          overflow-hidden
          rounded-2xl
          border
          border-[#17314d]
          bg-[#081829]/95
          shadow-2xl
          backdrop-blur-md

          sm:mx-6
          sm:rounded-3xl

          lg:mx-auto
          lg:max-w-6xl
        "
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  flex
                  min-w-0
                  items-center
                  gap-3
                  px-4
                  py-6
                  transition-all
                  duration-300
                  hover:bg-[#0d2238]

                  sm:gap-4
                  sm:px-6
                  sm:py-8

                  lg:gap-5
                  lg:px-7
                  lg:py-10
                "
              >
                {/* Responsive borders */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    bg-[#17314d]

                    /* Mobile: vertical divider */
                    ${index % 2 === 0 ? "right-0 top-0 h-full w-px" : "hidden"}

                    /* Mobile: horizontal divider */
                    ${index < 2 ? "bottom-0 left-0 h-px w-full" : "hidden"}

                    /* Desktop */
                    lg:hidden
                  `}
                />

                {/* Desktop vertical divider */}
                {index < stats.length - 1 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      hidden
                      h-full
                      w-px
                      bg-[#17314d]
                      lg:block
                    "
                  />
                )}

                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-blue-500/10
                    via-blue-500/5
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-500/20
                    bg-blue-500/5
                    transition-all
                    duration-300
                    group-hover:border-blue-500/40
                    group-hover:bg-blue-500/10

                    sm:h-14
                    sm:w-14

                    lg:h-16
                    lg:w-16
                  "
                >
                  <Icon
                    className="
                      text-[#1f7dff]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    size={24}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Content */}
                <div className="relative min-w-0 flex-1">
                  <h3
                    className="
                      whitespace-nowrap
                      text-2xl
                      font-bold
                      leading-none
                      tracking-tight
                      text-white

                      sm:text-3xl

                      lg:text-[44px]
                    "
                  >
                    {inView ? (
                      <CountUp
                        end={item.value}
                        duration={2.2}
                        separator=","
                      />
                    ) : (
                      0
                    )}

                    {item.suffix}
                  </h3>

                  {item.title && (
                    <p
                      className="
                        mt-2
                        truncate
                        text-xs
                        font-semibold
                        leading-tight
                        text-white

                        sm:text-sm

                        lg:text-lg
                      "
                    >
                      {item.title}
                    </p>
                  )}

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[11px]
                      leading-tight
                      text-gray-400

                      sm:text-xs

                      lg:text-sm
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}