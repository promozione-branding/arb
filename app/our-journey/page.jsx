"use client";

import {
  CalendarDays,
} from "lucide-react";

import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";

import {
  useEffect,
  useRef,
} from "react";
import LookingAhead from "@/components/LookingAhead";

export default function OurHistory() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const dotRefs = useRef([]);
  const dotPositions = useRef([]);

  const stopTimer = useRef(null);

  /*
   * Bearing vertical position
   */
  const bearingY = useMotionValue(0);

  /*
   * Bearing rotation
   */
  const bearingRotation = useMotionValue(0);

  /*
   * Scroll progress of the complete history section
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 20%", "end 80%"],
  });



  const history = [
    {
      year: "2026",
      title: "Accelerating Growth & Global Expansion",
      points: [
        "Expanded Plant-II through additional land acquisition and construction of a new 115,000+ sq. ft. production area, scheduled for operationalization by December 2026.",
        "Added one more Bearing Life Testing facility.",
        "Expanded ARB's international presence with the opening of a new International Office in the UAE.",
        "Continued investment in manufacturing capacity, technology, testing and global market development.",
      ],
    },
    {
      year: "2025",
      title: "Advancing Testing & Quality Assurance",
      points: [
        "Added advanced Grease Leakage Testing facilities.",
        "Added Torque Testing capabilities for enhanced product validation.",
        "Added one more Bearing Life Testing facility.",
      ],
    },
    {
      year: "2024",
      title: "Strengthening Heat Treatment & Metallurgical Capabilities",
      points: [
        "Commissioned a dedicated Heat Treatment Plant at Jhundpur, Haryana.",
        "Added new heat treatment production lines.",
        "Developed approximately 40,000 sq. ft. of advanced metallurgical infrastructure.",
        "Strengthened laboratory capabilities with advanced equipment, including a spectrometer.",
      ],
    },
    {
      year: "2023",
      title: "Meeting Growing Market Demand",
      points: [
        "Added four new Automatic Ball Bearing production lines.",
      ],
    },
    {
      year: "2022",
      title: "Scaling Manufacturing & Customer Service",
      points: [
        "Added another Taper Roller Bearing production line.",
        "Increased TRB capacity to 3.5 million bearings per annum.",
        "Expanded customer support with 24×7 company-owned outlets in major industrial cities for emergency industrial requirements.",
      ],
    },
    {
      year: "2021",
      title: "Preparing for the Future of Mobility",
      points: [
        "Expanded the product portfolio with bearings for Electric Vehicle (EV) applications.",
        "Began supporting the evolving requirements of the next generation of mobility.",
      ],
    },
    {
      year: "2020",
      title: "Expanding Manufacturing Infrastructure",
      points: [
        "Expanded ARB Plant-II with approximately 42,000 sq. ft. of new built-up area.",
        "Added a new workshop to strengthen manufacturing infrastructure.",
      ],
    },
    {
      year: "2018",
      title: "Expanding Capacity & Process Control",
      points: [
        "Added 1 fully automatic Taper Roller Bearing production line.",
        "Introduced high-performance Red Gel Grease.",
        "Implemented 100% Magnetic Particle Inspection (MPI).",
        "Added 2 Automatic Ball Bearing production lines.",
      ],
    },
    {
      year: "2017",
      title: "Advancing Quality Standards",
      points: [
        "Upgraded the Quality Management System.",
        "Achieved IATF 16949:2016 certification.",
      ],
    },
    {
      year: "2015",
      title: "25 Years of ARB",
      points: [
        "Celebrated 25 years of ARB — Silver Jubilee.",
        "Installed automatic transfer lines for Taper Roller Bearings.",
        "Added three fully automatic TRB production lines to enhance manufacturing efficiency and capacity.",
      ],
    },
    {
      year: "2014",
      title: "Product Innovation",
      points: [
        "Introduced PRO Clutch to the Indian market.",
        "Expanded capabilities into automotive clutch applications.",
      ],
    },
    {
      year: "2013",
      title: "Investing in R&D",
      points: [
        "Strengthened R&D capabilities with Bearing Life Testing equipment.",
        "Introduced Romax software for advanced bearing analysis, design and customer-specific engineering solutions.",
      ],
    },
    {
      year: "2012",
      title: "Strengthening Quality & Process Technology",
      points: [
        "Achieved Integrated Management System (IMS) covering Quality, Occupational Health & Safety and Environmental Management.",
        "Introduced a fully automatic, continuous mesh-belt type atmospheric-controlled heat treatment furnace.",
      ],
    },
    {
      year: "2011",
      title: "Dedicated Taper Roller Bearing Facility",
      points: [
        "Established a dedicated Taper Roller Bearing manufacturing facility in 75,000 sq. ft. at Kundli, Haryana.",
        "Installed fully automatic TRB production lines.",
        "Achieved a capacity of 2.5 million bearings per annum.",
      ],
    },
    {
      year: "2010",
      title: "Expanding Beyond Bearings",
      points: [
        "Launched Universal Joint Crosses for automotive and agricultural applications.",
        "Expanded ARB's product portfolio beyond bearings.",
      ],
    },
    {
      year: "2009",
      title: "Advancing Quality & Process Technology",
      points: [
        "Achieved IATF / ISO TS 16949:2009 certification.",
        "Established an in-house metallurgical laboratory.",
        "Introduced Multi-Purpose Grease for automotive and industrial applications.",
        "Expanded and relocated the ARB Badli Plant to Kundli, Haryana, increasing the manufacturing footprint from 2,000 sq. ft. to 40,000 sq. ft.",
        "Established in-house salt-bath heat treatment capability.",
      ],
    },
    {
      year: "2007",
      title: "Expanding Manufacturing Footprint",
      points: [
        "Established a new manufacturing plant in Himachal Pradesh.",
      ],
    },
    {
      year: "2005",
      title: "Recognition in International Trade",
      points: [
        "Received Star Export House recognition from the Ministry of Commerce, Government of India.",
      ],
    },
    {
      year: "2003",
      title: "Entering Heavy-Duty Applications",
      points: [
        "Established a dedicated manufacturing facility for large-diameter bearings serving heavy industrial applications.",
      ],
    },
    {
      year: "2000",
      title: "Strategic Expansion",
      points: [
        "Acquired NYK Bearings, New Delhi, significantly enhancing manufacturing capacity.",
        "Commenced production of Self-Aligning Ball Bearings.",
      ],
    },
    {
      year: "1999",
      title: "Strengthening the Product Range",
      points: [
        "Added Pillow Block Bearings and Double Row Angular Contact Ball Bearings to the product portfolio.",
      ],
    },
    {
      year: "1998",
      title: "Expanding Manufacturing & Exports",
      points: [
        "Commenced Ball Bearing production at ARB Badli.",
        "Expanded exports to international markets, including the USA and Sri Lanka.",
      ],
    },
    {
      year: "1997",
      title: "Expanding Our Product Portfolio",
      points: [
        "Expanded manufacturing into Spherical Roller, Cylindrical Roller and Ball Bearings.",
        "Achieved ISO 9002 certification, awarded by KPMG.",
      ],
    },
    {
      year: "1996",
      title: "Entering Global Markets",
      points: [
        "Entered the export market, marking the beginning of ARB's international journey.",
      ],
    },
    {
      year: "1991",
      title: "Building Technological Capability",
      points: [
        "Imported advanced machinery and precision testing equipment from Europe.",
        "Established a strong foundation for precision manufacturing and quality.",
      ],
    },
    {
      year: "1990",
      title: "The Beginning",
      points: [
        "Founded by the Goel family, with the corporate office in New Delhi.",
        "Commenced manufacturing operations with Taper Roller Bearings (TRBs).",
      ],
    },
  ];



  /*
   * -----------------------------------------
   * CALCULATE DOT POSITIONS
   * -----------------------------------------
   */
  const calculateDotPositions = () => {
    if (!timelineRef.current) return;

    const timelineRect = timelineRef.current.getBoundingClientRect();

    const positions = dotRefs.current
      .filter(Boolean)
      .map((dot) => {
        const rect = dot.getBoundingClientRect();

        return (
          rect.top -
          timelineRect.top +
          rect.height / 2 -
          46 // Half of bearing height (92px)
        );
      });

    dotPositions.current = positions;

    if (positions.length > 0) {
      bearingY.set(positions[0]);
    }
  };

  /*
   * -----------------------------------------
   * INITIAL MEASUREMENT
   * -----------------------------------------
   */

  useEffect(() => {
    calculateDotPositions();

    /*
     * Recalculate when window changes
     */
    const handleResize = () => {
      calculateDotPositions();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    /*
     * Observe timeline size changes.
     *
     * Important because cards can change height
     * depending on screen size/content.
     */
    let resizeObserver;

    if (timelineRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateDotPositions();
      });

      resizeObserver.observe(
        timelineRef.current
      );
    }

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      resizeObserver?.disconnect();

      if (stopTimer.current) {
        clearTimeout(stopTimer.current);
      }
    };
  }, []);

  /*
   * -----------------------------------------
   * SCROLL → BEARING
   * -----------------------------------------
   */
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const positions = dotPositions.current;

    if (positions.length < 2) return;

    const safeProgress = Math.max(0, Math.min(1, progress));

    const firstY = positions[0];
    const lastY = positions[positions.length - 1];

    // Move along the actual timeline height
    const currentY = firstY + (lastY - firstY) * safeProgress;

    // Keep the bearing within the first and last dots
    const clampedY = Math.max(firstY, Math.min(lastY, currentY));

    bearingY.set(clampedY);

    // Rotate proportionally to scroll distance
    bearingRotation.set(safeProgress * 360 * 12);

    if (stopTimer.current) {
      clearTimeout(stopTimer.current);
    }

    stopTimer.current = setTimeout(() => {
      // Find the nearest actual dot
      let nearestIndex = 0;
      let nearestDistance = Infinity;

      positions.forEach((position, index) => {
        const distance = Math.abs(position - clampedY);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      animate(bearingY, positions[nearestIndex], {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      });
    }, 180);
  });


  return (<>
    <section
      ref={sectionRef}
      className="
        relative
        py-15
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100
        overflow-hidden
      "
    >
      {/* ============================== */}
      {/* BACKGROUND */}
      {/* ============================== */}

      <div className="absolute inset-0">
        <div
          className="
            absolute
            left-0
            top-0
            h-96
            w-96
            rounded-full
            bg-blue-100
            blur-[140px]
            opacity-50
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-96
            w-96
            rounded-full
            bg-indigo-100
            blur-[140px]
            opacity-50
          "
        />
      </div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
        "
      >
        {/* ============================== */}
        {/* HEADING */}
        {/* ============================== */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-15
          "
        >
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-red-100
              text-red-700
              font-semibold
              text-sm
              tracking-wide
            "
          >
            OUR HISTORY
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
            "
          >
            Our Journey Through the Years
          </h2>

          <div
            className="
              w-24
              h-1
              bg-red-600
              rounded-full
              mx-auto
              mt-6
            "
          />
        </div>

        {/* ============================== */}
        {/* TIMELINE */}
        {/* ============================== */}

        <div
          ref={timelineRef}
          className="relative"
        >
          {/* ============================== */}
          {/* CENTER LINE */}
          {/* ============================== */}

          <div
            className="
              hidden
              lg:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-[3px]
              -translate-x-1/2
              bg-[#D72412]
              rounded-full
            "
          />

          {/* ============================== */}
          {/* BALL BEARING */}
          {/* ============================== */}
          <motion.div
            className="
    hidden lg:flex
    absolute
    left-1/2
    top-0
    w-[92px]
    h-[92px]
    items-center
    justify-center
    z-50
    pointer-events-none
  "
            style={{
              x: "-50%",
              y: bearingY,
            }}
          >
            <motion.div
              className="relative flex h-full w-full items-center justify-center"
              style={{ rotate: bearingRotation }}
            >
              {/* Soft glow */}
              <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl" />

              {/* Bearing image */}
              <img
                src="/1.webp"
                alt="ARB Ball Bearing"
                draggable={false}
                className="
        relative z-10
        w-[92px]
        h-[92px]
        object-contain
        drop-shadow-[0_8px_10px_rgba(0,0,0,0.30)]
      "
              />
            </motion.div>
          </motion.div>


          {/* ============================== */}
          {/* HISTORY CARDS */}
          {/* ============================== */}

          <div className="space-y-7">
            {history.map((item, index) => (
              <div
                key={`${item.year}-${index}`}
                className={`
                  relative
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  ${index % 2 === 0
                    ? ""
                    : "lg:flex-row-reverse"
                  }
                `}
              >
                {/* ============================== */}
                {/* CONTENT CARD */}
                {/* ============================== */}

                <div
                  className="
                    w-full
                    lg:w-1/2
                    px-0
                    lg:px-10
                  "
                >
                  <div
                    className="
                      bg-white
                      rounded-3xl
                      shadow-xl
                      border
                      border-slate-200
                      hover:shadow-2xl
                      transition-all
                      duration-500
                      p-4
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                        mb-2
                      "
                    >
                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-gradient-to-r
                          from-[#D72412]
                          to-[#28186E]
                          text-white
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <CalendarDays
                          size={26}
                        />
                      </div>

                      <div>
                        <span
                          className="
                            text-sm
                            uppercase
                            tracking-widest
                            text-slate-500
                          "
                        >
                          Year
                        </span>

                        <h3
                          className="
                            text-3xl
                            font-bold
                            text-slate-900
                          "
                        >
                          {item.year}
                        </h3>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#28186E] mb-2 leading-snug">
                        {item.title}
                      </h4>

                      <ul className="space-y-2">
                        {item.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 text-slate-700 text-sm leading-7"
                          >
                            <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#D72412]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* ============================== */}
                {/* CENTER DOT */}
                {/* ============================== */}

                <div
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                  className="
                    hidden
                    lg:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-7
                    h-7
                    rounded-full
                    bg-white
                    border-[6px]
                    border-[#28186E]
                    shadow-xl
                    z-20
                    items-center
                    justify-center
                  "
                >
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#D72412]
                    "
                  />
                </div>

                {/* ============================== */}
                {/* SPACER */}
                {/* ============================== */}
                <div
                  className="
                    hidden
                    lg:block
                    w-1/2
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <LookingAhead />
  </>
  );
}