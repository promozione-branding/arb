"use client";

import Image from "next/image";
import {
  Factory,
  Pickaxe,
  Fuel,
  Building2,
  Train,
  Eye,
  X,
  Tractor,
  Combine,
  Sprout,
  Shovel,
  Droplets,
  Truck,
  Settings2,
  PackageCheck,
  Car,
  Bus,
  CarFront,
  Construction,
  Forklift,
  Zap,
  Gauge,
  Wind,
  Warehouse,
  Bike,
  CircleDot,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import { useState } from "react";

const industries = [
  {
    title: "Agriculture",
    image: "/industry/12.jpg",
    icon: Tractor,
    applications: [
      { name: "Tractors Bearings", icon: Tractor },
      { name: "Combine Harvesters Bearings", icon: Combine },
      { name: "Seeders & Planters Bearings", icon: Sprout },
      { name: "Rotavators Bearings", icon: Settings2 },
      { name: "Ploughs & Disc Harrows Bearings", icon: Shovel },
      { name: "Irrigation Equipment Bearings", icon: Droplets },
      { name: "Agricultural Trailers & Implements Bearings", icon: Truck },
      { name: "Agricultural Gearboxes & PTO Systems Bearings", icon: Settings2 },
      { name: "Balers Bearings", icon: PackageCheck },
    ],
  },

  {
    title: "Automotive",
    image: "/industry/13.avif",
    icon: Car,
    applications: [
      { name: "Cars Bearings", icon: Car },
      { name: "SUVs / MPVs Bearings", icon: Car },
      { name: "LCV Bearings", icon: Truck },
      { name: "Trucks Bearings", icon: Truck },
      { name: "Trailers & Semi Trailers Bearings", icon: Truck },
      { name: "Buses Bearings", icon: Bus },
      { name: "Pick up Trucks Bearings", icon: Truck },
      { name: "Electric Vehicles Bearings", icon: CarFront },
    ],
  },

  {
    title: "Construction",
    image: "/const.jpg",
    icon: Building2,
    applications: [
      { name: "Excavators Bearings", icon: Construction },
      { name: "Wheel Loaders Bearings", icon: Truck },
      { name: "Backhoe Loaders Bearings", icon: Construction },
      { name: "Bulldozers Bearings", icon: Construction },
      { name: "Motor Graders Bearings", icon: Construction },
      { name: "Dump Trucks & Haul Trucks Bearings", icon: Truck },
      { name: "Cranes Bearings", icon: Construction },
      { name: "Forklifts Bearings", icon: Forklift },
      { name: "Concrete Mixers Bearings", icon: Construction },
      { name: "Concrete Pumps Bearings", icon: Construction },
      { name: "Road Rollers & Compactors Bearings", icon: Construction },
      { name: "Crushers Bearings", icon: Settings2 },
      { name: "Mining & Quarry Equipments Bearings", icon: Pickaxe },
    ],
  },

  {
    title: "Electric Motors",
    image: "/industry/4.jpg",
    icon: Zap,
    applications: [
      { name: "Industrial Electric Motors Bearings", icon: Zap },
      { name: "AC Motors Bearings", icon: Zap },
      { name: "DC Motors Bearings", icon: Zap },
      { name: "High-Speed Motors Bearings", icon: Gauge },
      { name: "Gear Motors Bearings", icon: Settings2 },
      { name: "Servo Motors Bearings", icon: Settings2 },
      { name: "Traction Motors Bearings", icon: Zap },
      { name: "Pump Motors Bearings", icon: Fuel },
      { name: "Fan & Blower Motors Bearings", icon: Wind },
      { name: "Compressor Motors Bearings", icon: Settings2 },
      { name: "Generator & Alternator Systems Bearings", icon: Zap },
    ],
  },

  {
    title: "Conveyor / Material Handling",
    image: "/industry/5.jpg",
    icon: Settings2,
    applications: [
      { name: "Belt Conveyors Bearings", icon: Settings2 },
      { name: "Roller Conveyors Bearings", icon: Settings2 },
      { name: "Chain Conveyors Bearings", icon: Settings2 },
      { name: "Mining Conveyors Bearings", icon: Pickaxe },
      { name: "Overhead Conveyors Bearings", icon: Settings2 },
      { name: "Slat Conveyors Bearings", icon: Settings2 },
      { name: "Drag Conveyors Bearings", icon: Settings2 },
      { name: "Pallet Conveyors Bearings", icon: Settings2 },
      { name: "Telescopic Conveyors Bearings", icon: Settings2 },
      { name: "Material Handling Equipment Bearings", icon: PackageCheck },
      { name: "Cranes & Hoists Bearings", icon: Construction },
      { name: "Warehouse & Logistics Systems Bearings", icon: Warehouse },
    ],
  },

  {
    title: "Heavy Industries",
    image: "/industry/2.jpeg",
    icon: Factory,
    applications: [
      { name: "Rolling Mills Bearings", icon: Factory },
      { name: "Cement Industry Bearings", icon: Factory },
      { name: "Paper & Pulp Industry Bearings", icon: Factory },
      { name: "Sugar Mills Bearings", icon: Factory },
      { name: "Wind Power Bearings", icon: Wind },
      { name: "Industrial Gearboxes Bearings", icon: Settings2 },
      { name: "Heavy Fabrication & Machinery Bearings", icon: Factory },
    ],
  },

  {
    title: "Railways",
    image: "/railway.jpg",
    icon: Train,
    applications: [
      { name: "Engines Bearings", icon: Train },
      { name: "Wagon Bearings", icon: Train },
      { name: "Mopeds Bearings", icon: Bike },
    ],
  },

  {
    title: "2 & 3 Wheelers",
    image: "/industry/6.jpg",
    icon: Bike,
    applications: [
      { name: "Motor Cycles Bearings", icon: Bike },
      { name: "Scooters Bearings", icon: Bike },
      { name: "EV 2 Wheelers Bearings", icon: Bike },
      { name: "3 Wheelers Bearings", icon: Truck },
      { name: "EV 3 Wheelers Bearings", icon: Truck },
      { name: "Wheel & Hub Assembly Bearings", icon: CircleDot },
      { name: "Rolling Mill Gearboxes Bearings", icon: Settings2 },
      { name: "Cargo 3-Wheelers Bearings", icon: Truck },
    ],
  },

  {
    title: "Gear Box & Power Transmission",
    image: "/industry/7.jpg",
    icon: Settings2,
    applications: [
      { name: "Industrial Gearboxes Bearings", icon: Settings2 },
      { name: "Automotive Transmissions Bearings", icon: Car },
      { name: "Agricultural Gearboxes Bearings", icon: Tractor },
      { name: "Construction Equipment Gearboxes Bearings", icon: Construction },
      { name: "Mining Gearboxes Bearings", icon: Pickaxe },
      { name: "Conveyor Drive Systems Bearings", icon: Settings2 },
      { name: "Planetary Gearboxes Bearings", icon: Settings2 },
      { name: "Electric Gear Motors Bearings", icon: Zap },
      { name: "Power Transmission Systems Bearings", icon: Settings2 },
    ],
  },

  {
    title: "ATV / UTV",
    image: "/industry/8.jpg",
    icon: Bike,
    applications: [
      { name: "ATV (All-Terrain Vehicles) Bearings", icon: Bike },
      { name: "UTV (Utility Task Vehicles) Bearings", icon: Truck },
      { name: "Sport ATVs Bearings", icon: Bike },
      { name: "Utility ATVs Bearings", icon: Bike },
      { name: "Recreational Off-Road Vehicles Bearings", icon: Bike },
      { name: "Agricultural ATVs / UTVs Bearings", icon: Tractor },
      { name: "Work & Utility UTVs Bearings", icon: Truck },
      { name: "Electric ATVs & UTVs Bearings", icon: Zap },
      { name: "Off-Road Go-Karts & Recreational Vehicles Bearings", icon: Bike },
      { name: "Dirt Bike Bearings", icon: Bike },
    ],
  },
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <>
      <section className="bg-[#EDF4FE] py-10">
        <div className="mx-auto max-w-7xl px-5 md:px-0">

          {/* Heading */}
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D9251C]">
            Industries We Serve
          </span>

          <h2 className="mb-9 mt-3 text-3xl font-bold text-[#29166F] md:mb-12 md:text-5xl">
            <span className="text-black">Powering Industries</span> Worldwide
          </h2>

          {/* Slider */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={900}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index}>
                  <div
                    className="
                      group
                      relative
                      h-[360px]
                      cursor-pointer
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/10
                      bg-[#09192d]
                    "
                  >
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061322] via-[#061322]/20 to-transparent" />

                    {/* Hover Blue */}
                    <div className="absolute inset-0 bg-blue-500/0 transition duration-500 group-hover:bg-blue-500/10" />

                    {/* Eye Button */}
                    <button
                      onClick={() => setSelectedIndustry(item)}
                      aria-label={`View ${item.title} applications`}
                      className="
                        absolute
                        right-4
                        top-4
                        z-20
                        flex
                        h-11
                        w-11
                        scale-75
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        opacity-0
                        shadow-xl
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-[#D9251C]
                        group-hover:scale-100
                        group-hover:opacity-100
                      "
                    >
                      <Eye className="h-5 w-5" />
                    </button>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-white/10
                            backdrop-blur
                            transition
                            duration-300
                            group-hover:bg-[#D9251C]
                          "
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Border */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-xl
                        border
                        border-transparent
                        transition-all
                        duration-500
                        group-hover:border-blue-400/60
                      "
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/70
              p-4
              backdrop-blur-sm
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-3xl
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
              "
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Header */}
              <div className="relative overflow-hidden bg-[#1f0f59] px-6 py-7 md:px-8">
                <div className="absolute -right-10 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    transition
                    hover:bg-[#D9251C]
                  "
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
                    {(() => {
                      const Icon = selectedIndustry.icon;
                      return <Icon className="h-7 w-7" />;
                    })()}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[3px] text-red-400">
                      Industry Applications
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                      {selectedIndustry.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="max-h-[65vh] overflow-y-auto p-5 md:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedIndustry.applications.map((application, index) => {
                    const ApplicationIcon = application.icon;

                    return (
                      <motion.div
                        key={application.name}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-gray-200
                          bg-gray-50
                          p-4
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-red-200
                          hover:bg-red-50
                          hover:shadow-md
                        "
                      >
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#1f0f59]
                            text-white
                            transition
                            duration-300
                            group-hover:bg-[#D9251C]
                          "
                        >
                          <ApplicationIcon className="h-5 w-5" />
                        </div>

                        <span className="text-sm font-semibold text-gray-800 md:text-base">
                          {application.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-[#D9251C] via-[#1f0f59] to-blue-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}