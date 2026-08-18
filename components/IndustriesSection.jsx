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
    image: "/industry/5 Agriculture.webp",
    icon: Tractor,
    applications: [
      { name: "Tractors", icon: Tractor },
      { name: "Combine Harvesters", icon: Combine },
      { name: "Seeders & Planters", icon: Sprout },
      { name: "Rotavators", icon: Settings2 },
      { name: "Ploughs & Disc Harrows", icon: Shovel },
      { name: "Irrigation Equipment", icon: Droplets },
      { name: "Agricultural Trailers & Implements", icon: Truck },
      { name: "Agricultural Gearboxes & PTO Systems", icon: Settings2 },
      { name: "Balers", icon: PackageCheck },
    ],
  },

  {
    title: "Automotive",
    image: "/industry/2 Automotive.webp",
    icon: Car,
    applications: [
      { name: "Cars", icon: Car },
      { name: "SUVs / MPVs", icon: Car },
      { name: "LCV & HCV", icon: Truck },
      { name: "Trucks", icon: Truck },
      { name: "Trailers & Semi Trailers", icon: Truck },
      { name: "Buses", icon: Bus },
      { name: "Pick up Trucks", icon: Truck },
      { name: "Electric Vehicles", icon: CarFront },
    ],
  },

  {
    title: "Construction",
    image: "/const.jpg",
    icon: Building2,
    applications: [
      { name: "Excavators", icon: Construction },
      { name: "Wheel Loaders", icon: Truck },
      { name: "Backhoe Loaders", icon: Construction },
      { name: "Bulldozers", icon: Construction },
      { name: "Motor Graders", icon: Construction },
      { name: "Dump Trucks & Haul Trucks", icon: Truck },
      { name: "Cranes", icon: Construction },
      { name: "Forklifts", icon: Forklift },
      { name: "Concrete Mixers", icon: Construction },
      { name: "Concrete Pumps", icon: Construction },
      { name: "Road Rollers & Compactors", icon: Construction },
      { name: "Crushers", icon: Settings2 },
      { name: "Mining & Quarry Equipments", icon: Pickaxe },
    ],
  },

  {
    title: "Electric Motors",
    image: "/industry/4.jpg",
    icon: Zap,
    applications: [
      { name: "Industrial Electric Motors", icon: Zap },
      { name: "AC Motors", icon: Zap },
      { name: "DC Motors", icon: Zap },
      { name: "High-Speed Motors", icon: Gauge },
      { name: "Gear Motors", icon: Settings2 },
      { name: "Servo Motors", icon: Settings2 },
      { name: "Traction Motors", icon: Zap },
      { name: "Pump Motors", icon: Fuel },
      { name: "Fan & Blower Motors", icon: Wind },
      { name: "Compressor Motors", icon: Settings2 },
      { name: "Generator & Alternator Systems", icon: Zap },
    ],
  },

  {
    title: "Conveyor / Material Handling",
    image: "/industry/5.jpg",
    icon: Settings2,
    applications: [
      { name: "Belt Conveyors", icon: Settings2 },
      { name: "Roller Conveyors", icon: Settings2 },
      { name: "Chain Conveyors", icon: Settings2 },
      { name: "Mining Conveyors", icon: Pickaxe },
      { name: "Overhead Conveyors", icon: Settings2 },
      { name: "Slat Conveyors", icon: Settings2 },
      { name: "Drag Conveyors", icon: Settings2 },
      { name: "Pallet Conveyors", icon: Settings2 },
      { name: "Telescopic Conveyors", icon: Settings2 },
      { name: "Material Handling Equipment", icon: PackageCheck },
      { name: "Cranes & Hoists", icon: Construction },
      { name: "Warehouse & Logistics Systems", icon: Warehouse },
    ],
  },

  {
    title: "Heavy Industries",
    image: "/industry/1 Heavy Industry Steel Rolling Mills.webp",
    icon: Factory,
    applications: [
      { name: "Rolling Mills", icon: Factory },
      { name: "Cement Industry", icon: Factory },
      { name: "Paper & Pulp Industry", icon: Factory },
      { name: "Sugar Mills", icon: Factory },
      { name: "Wind Power", icon: Wind },
      { name: "Industrial Gearboxes", icon: Settings2 },
      { name: "Heavy Fabrication & Machinery", icon: Factory },
    ],
  },

  {
    title: "Railways",
    image: "/railway.jpg",
    icon: Train,
    applications: [
      { name: "Engines", icon: Train },
      { name: "Wagon", icon: Train },
      // { name: "Mopeds", icon: Bike },
    ],
  },

  {
    title: "2 & 3 Wheelers",
    image: "/industry/2 and 3 Wheeler.webp",
    icon: Bike,
    applications: [
      { name: "Motor Cycles", icon: Bike },
      { name: "Scooters", icon: Bike },
      { name: "EV 2 Wheelers", icon: Bike },
      { name: "3 Wheelers", icon: Truck },
      { name: "EV 3 Wheelers", icon: Truck },
      { name: "Wheel & Hub Assembly", icon: CircleDot },
      { name: "Mopeds", icon: Bike },

      { name: "Cargo 3-Wheelers", icon: Truck },
    ],
  },

  {
    title: "Gear Box & Power Transmission",
    image: "/industry/3 Gear Box.webp",
    icon: Settings2,
    applications: [
      { name: "Industrial Gearboxes", icon: Settings2 },
      { name: "Automotive Transmissions", icon: Car },
      { name: "Agricultural Gearboxes", icon: Tractor },
      { name: "Construction Equipment Gearboxes", icon: Construction },
      { name: "Mining Gearboxes", icon: Pickaxe },
      { name: "Conveyor Drive Systems", icon: Settings2 },
      { name: "Planetary Gearboxes", icon: Settings2 },
      { name: "Electric Gear Motors", icon: Zap },
      { name: "Power Transmission Systems", icon: Settings2 },
      { name: "Rolling Mill Gearboxes", icon: Settings2 },
    ],
  },

  {
    title: "ATV / UTV",
    image: "/industry/4 ATV and UTV.webp",
    icon: Bike,
    applications: [
      { name: "ATV (All-Terrain Vehicles)", icon: Bike },
      { name: "UTV (Utility Task Vehicles)", icon: Truck },
      { name: "Sport ATVs", icon: Bike },
      { name: "Utility ATVs", icon: Bike },
      { name: "Recreational Off-Road Vehicles", icon: Bike },
      { name: "Agricultural ATVs / UTVs", icon: Tractor },
      { name: "Work & Utility UTVs", icon: Truck },
      { name: "Electric ATVs & UTVs", icon: Zap },
      { name: "Off-Road Go-Karts & Recreational Vehicles", icon: Bike },
      { name: "Dirt Bike", icon: Bike },
    ],
  },
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <>
      <section className="bg-[#EDF4FE] py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-0">

          {/* Heading */}
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D9251C]">
            Industries We Serve
          </span>

          <h2 className="mb-5 mt-3 text-3xl font-bold text-[#29166F] md:mb-12 md:text-5xl">
            <span className="text-black">Powering Industries</span> Worldwide
          </h2>

          {/* Slider */}
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={900}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
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
                      sm:h-80 h-56
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
                      // fill
                      width={100}
                      height={100}
                      className="w-full h-full
                        object-cove
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
                        md:right-4 right-1 top-1
                        md:top-4
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
                        lg:opacity-0
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
                    <div className="absolute bottom-2 left-2 md:bottom-6 md:left-6 md:right-6 z-10">
                      <div className="flex items-center md:gap-3 gap-1">
                        <div
                          className="
                            flex
                            sm:h-11 h-5 w-5
                            sm:w-11
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
                          <Icon className="md:h-5 md:w-5 h-3 w-3 text-white" />
                        </div>

                        <h3 className="md:text-xl text-[10px] text- line-clamp-1 font-semibold text-white">
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
                    {/* <p className="text-xs font-semibold uppercase tracking-[3px] text-red-400">
                      Industry Applications
                    </p> */}

                    <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                      {selectedIndustry.title} Applications
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