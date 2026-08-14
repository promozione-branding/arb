
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
        backgroundImage: "url(/count.avif)",
      }}
      className="
        relative
        bg-cover
        bg-center
        bg-no-repeat
        bg-scroll
        py-12
        sm:py-16
        lg:bg-fixed
        lg:py-20
      "
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06111f]/40" />

      {/* Content */}
      <div
        ref={ref}
        className="
          relative
          mx-auto
          w-full
          max-w-6xl
          overflow-hidden
          rounded-2xl
          border
          border-[#17314d]
          bg-[#081829]/95
          shadow-2xl
          backdrop-blur-md
          sm:rounded-3xl
          mx-4
          sm:mx-auto
        "
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  px-6
                  py-7
                  transition-all
                  duration-300
                  hover:bg-[#0d2238]

                  sm:gap-5
                  sm:px-7
                  sm:py-8

                  lg:px-7
                  lg:py-10

                  ${
                    index !== stats.length - 1
                      ? "border-b border-[#17314d] sm:border-r"
                      : ""
                  }

                  ${
                    index === 1
                      ? "sm:border-r-0 lg:border-r"
                      : ""
                  }

                  ${
                    index === 2
                      ? "sm:border-b-0 lg:border-b-0"
                      : ""
                  }

                  ${
                    index === 3
                      ? "border-b-0"
                      : ""
                  }
                `}
              >
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
                    h-14
                    w-14
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

                    sm:h-16
                    sm:w-16
                  "
                >
                  <Icon
                    className="
                      text-[#1f7dff]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    size={30}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Content */}
                <div className="relative min-w-0">
                  <h3
                    className="
                      whitespace-nowrap
                      text-3xl
                      font-bold
                      leading-none
                      tracking-tight
                      text-white

                      sm:text-4xl

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

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      leading-tight
                      text-white

                      sm:text-base
                      lg:text-lg
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      leading-tight
                      text-gray-400

                      sm:text-sm
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

