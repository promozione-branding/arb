
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
    title: "الزراعة",
    image: "/industry/5 Agriculture.webp",
    icon: Tractor,
    applications: [
      { name: "الجرارات", icon: Tractor },
      { name: "آلات الحصاد", icon: Combine },
      { name: "آلات البذر والزراعة", icon: Sprout },
      { name: "المزارع الدوارة", icon: Settings2 },
      { name: "المحاريث والأمشاط القرصية", icon: Shovel },
      { name: "معدات الري", icon: Droplets },
      { name: "المقطورات والمعدات الزراعية", icon: Truck },
      {
        name: "علب التروس وأنظمة نقل الحركة الزراعية",
        icon: Settings2,
      },
      { name: "آلات كبس المحاصيل", icon: PackageCheck },
    ],
  },

  {
    title: "صناعة السيارات",
    image: "/industry/2 Automotive.webp",
    icon: Car,
    applications: [
      { name: "السيارات", icon: Car },
      { name: "سيارات SUV / الميني فان", icon: Car },
      { name: "المركبات التجارية الخفيفة والثقيلة", icon: Truck },
      { name: "الشاحنات", icon: Truck },
      { name: "المقطورات ونصف المقطورات", icon: Truck },
      { name: "الحافلات", icon: Bus },
      { name: "الشاحنات الصغيرة", icon: Truck },
      { name: "المركبات الكهربائية", icon: CarFront },
    ],
  },

  {
    title: "آلات البناء",
    image: "/const.jpg",
    icon: Building2,
    applications: [
      { name: "الحفارات", icon: Construction },
      { name: "اللوادر الأمامية", icon: Truck },
      { name: "الحفارات ذات اللوادر الخلفية", icon: Construction },
      { name: "الجرافات", icon: Construction },
      { name: "مُمهدات الطرق", icon: Construction },
      { name: "شاحنات القلاب والتعدين", icon: Truck },
      { name: "الرافعات", icon: Construction },
      { name: "الرافعات الشوكية", icon: Forklift },
      { name: "خلاطات الخرسانة", icon: Construction },
      { name: "مضخات الخرسانة", icon: Construction },
      { name: "مداحل الضغط ومعدات الدمك", icon: Construction },
      { name: "الكسارات", icon: Settings2 },
      { name: "معدات التعدين والمحاجر", icon: Pickaxe },
    ],
  },

  {
    title: "المحركات الكهربائية",
    image: "/industry/4.jpg",
    icon: Zap,
    applications: [
      { name: "المحركات الكهربائية الصناعية", icon: Zap },
      { name: "محركات التيار المتردد", icon: Zap },
      { name: "محركات التيار المستمر", icon: Zap },
      { name: "المحركات عالية السرعة", icon: Gauge },
      { name: "المحركات ذات علب التروس", icon: Settings2 },
      { name: "المحركات المؤازرة", icon: Settings2 },
      { name: "محركات الجر", icon: Zap },
      { name: "محركات المضخات", icon: Fuel },
      { name: "محركات المراوح والنافخات", icon: Wind },
      { name: "محركات الضواغط", icon: Settings2 },
      {
        name: "أنظمة التوليد والأنظمة البديلة",
        icon: Zap,
      },
    ],
  },

  {
    title: "الناقلات ومناولة المواد",
    image: "/industry/5.jpg",
    icon: Settings2,
    applications: [
      { name: "الناقلات الحزامية", icon: Settings2 },
      { name: "الناقلات الأسطوانية", icon: Settings2 },
      { name: "ناقلات السلسلة", icon: Settings2 },
      { name: "ناقلات التعدين", icon: Pickaxe },
      { name: "الناقلات العلوية", icon: Settings2 },
      { name: "الناقلات اللوحية", icon: Settings2 },
      { name: "الناقلات ذات الكاشطات", icon: Settings2 },
      { name: "ناقلات المنصات", icon: Settings2 },
      { name: "الناقلات التلسكوبية", icon: Settings2 },
      { name: "معدات مناولة المواد", icon: PackageCheck },
      { name: "الرافعات والونشات", icon: Construction },
      { name: "أنظمة التخزين والخدمات اللوجستية", icon: Warehouse },
    ],
  },

  {
    title: "الصناعة الثقيلة",
    image: "/industry/1 Heavy Industry Steel Rolling Mills.webp",
    icon: Factory,
    applications: [
      { name: "مصانع درفلة الصلب", icon: Factory },
      { name: "صناعة الأسمنت", icon: Factory },
      { name: "صناعة اللب والورق", icon: Factory },
      { name: "مصانع السكر", icon: Factory },
      { name: "طاقة الرياح", icon: Wind },
      { name: "علب التروس الصناعية", icon: Settings2 },
      { name: "الآلات الثقيلة والهياكل المعدنية", icon: Factory },
    ],
  },

  {
    title: "المعدات والأنظمة الحديدية",
    image: "/railway.jpg",
    icon: Train,
    applications: [
      { name: "المحركات", icon: Train },
      { name: "عربات السكك الحديدية", icon: Train },
    ],
  },

  {
    title: "المركبات ذات العجلتين والثلاث عجلات",
    image: "/industry/2 and 3 Wheeler.webp",
    icon: Bike,
    applications: [
      { name: "الدراجات النارية", icon: Bike },
      { name: "السكوترات", icon: Bike },
      { name: "المركبات الكهربائية ذات العجلتين", icon: Bike },
      { name: "المركبات ذات الثلاث عجلات", icon: Truck },
      { name: "المركبات الكهربائية ذات الثلاث عجلات", icon: Truck },
      { name: "مجموعات العجلات والمحاور", icon: CircleDot },
      { name: "الدراجات البخارية", icon: Bike },
      { name: "المركبات التجارية ذات الثلاث عجلات", icon: Truck },
    ],
  },

  {
    title: "علب التروس وأنظمة نقل الحركة",
    image: "/industry/3 Gear Box.webp",
    icon: Settings2,
    applications: [
      { name: "علب التروس الصناعية", icon: Settings2 },
      { name: "ناقلات الحركة للسيارات", icon: Car },
      { name: "علب التروس الزراعية", icon: Tractor },
      { name: "علب تروس آلات البناء", icon: Construction },
      { name: "علب تروس التعدين", icon: Pickaxe },
      { name: "أنظمة تشغيل الناقلات", icon: Settings2 },
      { name: "علب التروس الكوكبية", icon: Settings2 },
      { name: "المحركات الكهربائية ذات علب التروس", icon: Zap },
      { name: "أنظمة نقل القدرة", icon: Settings2 },
      { name: "علب تروس مصانع الدرفلة", icon: Settings2 },
    ],
  },

  {
    title: "ATV / UTV",
    image: "/industry/4 ATV and UTV.webp",
    icon: Bike,
    applications: [
      { name: "ATV (مركبات لجميع التضاريس)", icon: Bike },
      {
        name: "UTV (مركبات متعددة الاستخدامات)",
        icon: Truck,
      },
      { name: "مركبات ATV الرياضية", icon: Bike },
      { name: "مركبات ATV متعددة الاستخدامات", icon: Bike },
      { name: "مركبات الطرق الوعرة الترفيهية", icon: Bike },
      { name: "مركبات ATV / UTV الزراعية", icon: Tractor },
      { name: "مركبات UTV للعمل والاستخدامات المتعددة", icon: Truck },
      { name: "مركبات ATV وUTV الكهربائية", icon: Zap },
      {
        name: "عربات الطرق الوعرة والمركبات الترفيهية",
        icon: Bike,
      },
      { name: "دراجات الموتوكروس", icon: Bike },
    ],
  },
];

export default function IndustryU() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <>
      <section className="bg-[#EDF4FE] py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-0">

          <span className="text-[#D9251C] uppercase tracking-[4px] text-sm font-semibold">
            الصناعات التي نخدمها
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-3 mb-12">
            <span className="text-black">الصناعة</span> حول العالم
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
                      aria-label={`عرض تطبيقات ${item.title}`}
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
                  aria-label="إغلاق"
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

