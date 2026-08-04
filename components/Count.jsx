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
    title: "Global",
    subtitle: "Customers",
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
    title: "Technical ",
    subtitle: "Support",
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section style={{backgroundImage:"url(/count.avif)"}} className="bg-center bg-cover bg-fixed py-20">

      <div
        ref={ref}
        className="max-w-6xl mx-auto border border-[#17314d] rounded-xl bg-[#081829]/90 overflow-hidden"
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`relative flex items-center gap-6 px-8 py-10 hover:bg-[#0d2238] transition duration-300 ${
                  index !== stats.length - 1
                    ? "lg:border-r border-[#17314d]"
                    : ""
                }`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/5 to-transparent" />

                {/* Icon */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-blue-500/20 bg-blue-500/5">
                  <Icon
                    className="text-[#1f7dff]"
                    size={34}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[48px] leading-none font-bold text-white">
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

                  <p className="text-white text-lg font-medium mt-2">
                    {item.title}
                  </p>

                  <p className="text-gray-400">
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