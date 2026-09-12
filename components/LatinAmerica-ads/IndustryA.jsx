
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
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const industries = [
  {
    title: "Agricultura",
    image: "/industry/5 Agriculture.webp",
    icon: Tractor,
    applications: [
      { name: "Tractores", icon: Tractor },
      { name: "Cosechadoras", icon: Combine },
      { name: "Sembradoras y máquinas de siembra", icon: Sprout },
      { name: "Cultivadores rotativos", icon: Settings2 },
      { name: "Arados y rastras de discos", icon: Shovel },
      { name: "Equipos de riego", icon: Droplets },
      { name: "Remolques e implementos agrícolas", icon: Truck },
      { name: "Cajas de engranajes y sistemas de toma de fuerza agrícolas", icon: Settings2 },
      { name: "Empacadoras", icon: PackageCheck },
    ],
  },

  {
    title: "Industria automotriz",
    image: "/industry/2 Automotive.webp",
    icon: Car,
    applications: [
      { name: "Automóviles", icon: Car },
      { name: "SUV / Monovolúmenes", icon: Car },
      { name: "Vehículos comerciales ligeros y pesados", icon: Truck },
      { name: "Camiones", icon: Truck },
      { name: "Remolques y semirremolques", icon: Truck },
      { name: "Autobuses", icon: Bus },
      { name: "Pick-ups", icon: Truck },
      { name: "Vehículos eléctricos", icon: CarFront },
    ],
  },

  {
    title: "Maquinaria de construcción",
    image: "/const.jpg",
    icon: Building2,
    applications: [
      { name: "Excavadoras", icon: Construction },
      { name: "Cargadoras frontales", icon: Truck },
      { name: "Retroexcavadoras", icon: Construction },
      { name: "Bulldozers", icon: Construction },
      { name: "Motoniveladoras", icon: Construction },
      { name: "Volquetes y camiones mineros", icon: Truck },
      { name: "Grúas", icon: Construction },
      { name: "Carretillas elevadoras", icon: Forklift },
      { name: "Mezcladoras de concreto", icon: Construction },
      { name: "Bombas de concreto", icon: Construction },
      { name: "Rodillos compactadores y equipos de compactación", icon: Construction },
      { name: "Trituradoras", icon: Settings2 },
      { name: "Equipos mineros y de cantera", icon: Pickaxe },
    ],
  },

  {
    title: "Motores eléctricos",
    image: "/industry/4.jpg",
    icon: Zap,
    applications: [
      { name: "Motores eléctricos industriales", icon: Zap },
      { name: "Motores de corriente alterna", icon: Zap },
      { name: "Motores de corriente continua", icon: Zap },
      { name: "Motores de alta velocidad", icon: Gauge },
      { name: "Motorreductores", icon: Settings2 },
      { name: "Servomotores", icon: Settings2 },
      { name: "Motores de tracción", icon: Zap },
      { name: "Motores para bombas", icon: Fuel },
      { name: "Motores para ventiladores y sopladores", icon: Wind },
      { name: "Motores para compresores", icon: Settings2 },
      { name: "Sistemas de generación y sistemas alternativos", icon: Zap },
    ],
  },

  {
    title: "Transportadores y manipulación de materiales",
    image: "/industry/5.jpg",
    icon: Settings2,
    applications: [
      { name: "Transportadores de banda", icon: Settings2 },
      { name: "Transportadores de rodillos", icon: Settings2 },
      { name: "Transportadores de cadena", icon: Settings2 },
      { name: "Transportadores para minería", icon: Pickaxe },
      { name: "Transportadores aéreos", icon: Settings2 },
      { name: "Transportadores de placas", icon: Settings2 },
      { name: "Transportadores de rasquetas", icon: Settings2 },
      { name: "Transportadores de palés", icon: Settings2 },
      { name: "Transportadores telescópicos", icon: Settings2 },
      { name: "Equipos de manipulación de materiales", icon: PackageCheck },
      { name: "Grúas y polipastos", icon: Construction },
      { name: "Sistemas de almacenamiento y logística", icon: Warehouse },
    ],
  },

  {
    title: "Industria pesada",
    image: "/industry/1 Heavy Industry Steel Rolling Mills.webp",
    icon: Factory,
    applications: [
      { name: "Trenes de laminación", icon: Factory },
      { name: "Industria del cemento", icon: Factory },
      { name: "Industria de pulpa y papel", icon: Factory },
      { name: "Plantas azucareras", icon: Factory },
      { name: "Energía eólica", icon: Wind },
      { name: "Reductores industriales", icon: Settings2 },
      { name: "Maquinaria pesada y estructuras metálicas", icon: Factory },
    ],
  },

  {
    title: "Equipos ferroviarios",
    image: "/railway.jpg",
    icon: Train,
    applications: [
      { name: "Motores", icon: Train },
      { name: "Vagones ferroviarios", icon: Train },
    ],
  },

  {
    title: "Vehículos de 2 y 3 ruedas",
    image: "/industry/2 and 3 Wheeler.webp",
    icon: Bike,
    applications: [
      { name: "Motocicletas", icon: Bike },
      { name: "Scooters", icon: Bike },
      { name: "Vehículos eléctricos de 2 ruedas", icon: Bike },
      { name: "Vehículos de 3 ruedas", icon: Truck },
      { name: "Vehículos eléctricos de 3 ruedas", icon: Truck },
      { name: "Conjuntos de ruedas y bujes", icon: CircleDot },
      { name: "Ciclomotores", icon: Bike },
      { name: "Vehículos comerciales de 3 ruedas", icon: Truck },
    ],
  },

  {
    title: "Cajas de engranajes y transmisiones",
    image: "/industry/3 Gear Box.webp",
    icon: Settings2,
    applications: [
      { name: "Reductores industriales", icon: Settings2 },
      { name: "Transmisiones automotrices", icon: Car },
      { name: "Reductores agrícolas", icon: Tractor },
      { name: "Reductores para maquinaria de construcción", icon: Construction },
      { name: "Reductores para minería", icon: Pickaxe },
      { name: "Sistemas de accionamiento de transportadores", icon: Settings2 },
      { name: "Reductores planetarios", icon: Settings2 },
      { name: "Motorreductores eléctricos", icon: Zap },
      { name: "Sistemas de transmisión de potencia", icon: Settings2 },
      { name: "Reductores para trenes de laminación", icon: Settings2 },
    ],
  },

  {
    title: "ATV / UTV",
    image: "/industry/4 ATV and UTV.webp",
    icon: Bike,
    applications: [
      { name: "ATV (vehículos todoterreno)", icon: Bike },
      { name: "UTV (vehículos utilitarios multifunción)", icon: Truck },
      { name: "ATV deportivos", icon: Bike },
      { name: "ATV utilitarios", icon: Bike },
      { name: "Vehículos recreativos todoterreno", icon: Bike },
      { name: "ATV / UTV agrícolas", icon: Tractor },
      { name: "UTV de trabajo y utilitarios", icon: Truck },
      { name: "ATV y UTV eléctricos", icon: Zap },
      { name: "Karts todoterreno y vehículos recreativos", icon: Bike },
      { name: "Motocicletas de motocross", icon: Bike },
    ],
  },
];

export default function IndustryA() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <>
      <section className="bg-[#EDF4FE] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-0">

          <span className="text-[#D9251C] uppercase tracking-[4px] text-sm font-semibold">
            Industrias a las que prestamos servicio
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-3 mb-12">
            <span className="text-black">Industria</span> en todo el mundo
          </h2>

          {/* Industries Slider */}
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
                      width={100}
                      height={100}
                      className="
                        w-full
                        h-full
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
                      aria-label={`Ver aplicaciones de ${item.title}`}
                      className="
                        absolute
                        md:right-4 right-1
                        top-1
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
                            sm:h-11
                            h-5
                            w-5
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

                        <h3 className="md:text-xl text-[10px] line-clamp-1 font-semibold text-white">
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

      {/* INDUSTRY MODAL */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
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
                  aria-label="Cerrar"
                  className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#D9251C]"
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
                    <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">
                      {selectedIndustry.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="max-h-[65vh] overflow-y-auto p-5 md:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedIndustry.applications.map(
                    (application, index) => {
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
                          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50 hover:shadow-md"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1f0f59] text-white transition duration-300 group-hover:bg-[#D9251C]">
                            <ApplicationIcon className="h-5 w-5" />
                          </div>

                          <span className="text-sm font-semibold text-gray-800 md:text-base">
                            {application.name}
                          </span>
                        </motion.div>
                      );
                    }
                  )}
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

