"use client";


import { Calendar } from "lucide-react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
const timeline = [
  {
    year: "1990",
    text: "Founded by Goel Family with a small corporate office in New Delhi & Started production of Taper Roller Bearings.",
  },
  {
    year: "2005",
    text: 'Received "Star Export House" recognition from Ministry of Commerce.',
  },
  {
    year: "2015",
    text: "The Company achieved the milestone of 25 Years (Silver Jubilee) Installation of automatic transfer line for TRB.",
  },
  {
    year: "2022",
    text: "Added one more TRB Line to increase plant capacity to 3.5 million Bearings per annum.",
  },
  {
    year: "2026",
    text: "Continuing our commitment to innovation, quality, and excellence while delivering world-class bearing solutions for industries worldwide.",
  },
];

export default function OurJourney() {






const timelineRef = useRef(null);
const bearingRef = useRef(null);

const [maxTravel, setMaxTravel] = useState(0);

useLayoutEffect(() => {
  const updateHeight = () => {
    if (!timelineRef.current || !bearingRef.current) return;

    const timelineHeight = timelineRef.current.offsetHeight;
    const bearingHeight = bearingRef.current.offsetHeight;

    // Stop the bearing exactly at the bottom
    setMaxTravel(Math.max(0, timelineHeight - bearingHeight));
  };

  updateHeight();

  // Recalculate after layout settles
  const timeout = setTimeout(updateHeight, 100);

  window.addEventListener("resize", updateHeight);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener("resize", updateHeight);
  };
}, []);

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start start", "end end"],
});

const bearingY = useTransform(
  scrollYProgress,
  [0, 1],
  [0, maxTravel]
);

const smoothBearingY = useSpring(bearingY, {
  stiffness: 70,
  damping: 25,
  mass: 0.8,
});


  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-10">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-[#28186C]/30 blur-[140px]" />

        <div className="absolute right-0 bottom-20 h-[500px] w-[500px] rounded-full bg-red-100 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}

          className="text-center max-w-3xl mx-auto"

        >

          <span className="inline-flex rounded-full bg-red-50 px-5 py-2 border border-red-200 text-red-600 font-semibold tracking-[0.3em] text-sm">
            OUR JOURNEY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Milestones That Define Our Legacy
          </h2>

          <p className="mt-4 text-slate-500">
            Timeline
          </p>

        </motion.div>

        {/* Timeline */}
<div ref={timelineRef} className="relative mt-4">

  {/* Timeline Line */}
  <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-600 via-[#28186C] to-red-200" />

  {/* Moving Bearing */}
<motion.div
  ref={bearingRef}
  style={{ y: smoothBearingY }}
  animate={{ rotate: 360 }}
  transition={{
    rotate: {
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    },
  }}
  className="absolute left-1/2 top-0 -translate-x-1/2 z-10 hidden lg:block"
>
  <Image
    src="/3.png"
    alt="Bearing"
    width={280}
    height={210}
    className="drop-shadow-2xl animate-spin"
  />
</motion.div>


          

          {timeline.map((item, index) => (

            <motion.div

              key={item.year}

          initial={{
  opacity: 0,
  x: index % 2 ? 70 : -70,
  y: 30,
}}

           whileInView={{
  opacity: 1,
  x: 0,
  y: 0,
}}
              viewport={{ once: true }}

         transition={{
  type: "spring",
  stiffness: 90,
  damping: 18,
  delay: index * 0.08,
}}

              className={`relative flex items-center  ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } flex-col`}

            >

              {/* Card */}

              <div className="w-full lg:w-1/2">

                <motion.div

                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}

                  className={`relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.08)] p-8 ${
                    index % 2 === 0
                      ? "lg:mr-24"
                      : "lg:ml-24"
                  }`}

                >

                  {/* Spotlight */}

                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,.12),transparent_60%)]" />

                  {/* Year */}

                  <motion.div

                    whileHover={{
                      rotate: 6,
                    }}

                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#28186C] to-red-600 text-white px-6 py-3 shadow-xl"

                  >

                    <Calendar size={18} />

                    <span className="font-bold text-xl">
                      {item.year}
                    </span>

                  </motion.div>

                  <p className="mt-5 text-lg leading-9 text-slate-600">
                    {item.text}
                  </p>

                </motion.div>

              </div>

              {/* Timeline Dot */}

              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">

                <motion.div

                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(239,68,68,.4)",
                      "0 0 40px rgba(239,68,68,.7)",
                      "0 0 0 rgba(239,68,68,.4)",
                    ],
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}

                  className="relative h-8 w-8 rounded-full bg-[#28186C] border-[6px] border-white"

                >

                  <span className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-40"></span>

                </motion.div>

              </div>

              {/* Connector */}

              <div
                className={`hidden lg:block absolute top-1/2 h-[2px] w-24 bg-gradient-to-r ${
                  index % 2 === 0
                    ? "left-[calc(50%-96px)] from-transparent to-red-500"
                    : "right-[calc(50%-96px)] from-red-500 to-transparent"
                }`}
              />

              <div className="hidden lg:block w-1/2" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}