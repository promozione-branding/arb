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
        title: "Сельское хозяйство",
        image: "/industry/12.jpg",
        icon: Tractor,
        applications: [
            { name: "Тракторы", icon: Tractor },
            { name: "Зерноуборочные комбайны", icon: Combine },
            { name: "Сеялки и посадочные машины", icon: Sprout },
            { name: "Ротационные культиваторы", icon: Settings2 },
            { name: "Плуги и дисковые бороны", icon: Shovel },
            { name: "Ирригационное оборудование", icon: Droplets },
            { name: "Сельскохозяйственные прицепы и орудия", icon: Truck },
            {
                name: "Сельскохозяйственные редукторы и системы ВОМ",
                icon: Settings2,
            },
            { name: "Пресс-подборщики", icon: PackageCheck },
        ],
    },

    {
        title: "Автомобильная промышленность",
        image: "/industry/13.avif",
        icon: Car,
        applications: [
            { name: "Легковые автомобили", icon: Car },
            { name: "Внедорожники / минивэны", icon: Car },
            { name: "Лёгкие и тяжёлые коммерческие автомобили", icon: Truck },
            { name: "Грузовые автомобили", icon: Truck },
            { name: "Прицепы и полуприцепы", icon: Truck },
            { name: "Автобусы", icon: Bus },
            { name: "Пикапы", icon: Truck },
            { name: "Электромобили", icon: CarFront },
        ],
    },

    {
        title: "Строительная техника",
        image: "/const.jpg",
        icon: Building2,
        applications: [
            { name: "Экскаваторы", icon: Construction },
            { name: "Фронтальные погрузчики", icon: Truck },
            { name: "Экскаваторы-погрузчики", icon: Construction },
            { name: "Бульдозеры", icon: Construction },
            { name: "Автогрейдеры", icon: Construction },
            { name: "Самосвалы и карьерные самосвалы", icon: Truck },
            { name: "Краны", icon: Construction },
            { name: "Погрузчики", icon: Forklift },
            { name: "Бетоносмесители", icon: Construction },
            { name: "Бетононасосы", icon: Construction },
            { name: "Дорожные катки и уплотнители", icon: Construction },
            { name: "Дробилки", icon: Settings2 },
            {
                name: "Горнодобывающее и карьерное оборудование",
                icon: Pickaxe,
            },
        ],
    },

    {
        title: "Электродвигатели",
        image: "/industry/4.jpg",
        icon: Zap,
        applications: [
            { name: "Промышленные электродвигатели", icon: Zap },
            { name: "Двигатели переменного тока", icon: Zap },
            { name: "Двигатели постоянного тока", icon: Zap },
            { name: "Высокоскоростные двигатели", icon: Gauge },
            { name: "Мотор-редукторы", icon: Settings2 },
            { name: "Сервоприводы", icon: Settings2 },
            { name: "Тяговые двигатели", icon: Zap },
            { name: "Двигатели насосов", icon: Fuel },
            {
                name: "Двигатели вентиляторов и воздуходувок",
                icon: Wind,
            },
            { name: "Двигатели компрессоров", icon: Settings2 },
            {
                name: "Генераторные и альтернативные системы",
                icon: Zap,
            },
        ],
    },

    {
        title: "Конвейеры / грузоперемещение",
        image: "/industry/5.jpg",
        icon: Settings2,
        applications: [
            { name: "Ленточные конвейеры", icon: Settings2 },
            { name: "Роликовые конвейеры", icon: Settings2 },
            { name: "Цепные конвейеры", icon: Settings2 },
            { name: "Горнодобывающие конвейеры", icon: Pickaxe },
            { name: "Подвесные конвейеры", icon: Settings2 },
            { name: "Пластинчатые конвейеры", icon: Settings2 },
            { name: "Скребковые конвейеры", icon: Settings2 },
            { name: "Паллетные конвейеры", icon: Settings2 },
            { name: "Телескопические конвейеры", icon: Settings2 },
            {
                name: "Оборудование для перемещения грузов",
                icon: PackageCheck,
            },
            { name: "Краны и тали", icon: Construction },
            {
                name: "Складские и логистические системы",
                icon: Warehouse,
            },
        ],
    },

    {
        title: "Тяжёлая промышленность",
        image: "/industry/2.jpeg",
        icon: Factory,
        applications: [
            { name: "Прокатные станы", icon: Factory },
            { name: "Цементная промышленность", icon: Factory },
            {
                name: "Целлюлозно-бумажная промышленность",
                icon: Factory,
            },
            { name: "Сахарные заводы", icon: Factory },
            { name: "Ветроэнергетика", icon: Wind },
            { name: "Промышленные редукторы", icon: Settings2 },
            {
                name: "Тяжёлое машиностроение и металлоконструкции",
                icon: Factory,
            },
        ],
    },

    {
        title: "Железнодорожная техника",
        image: "/railway.jpg",
        icon: Train,
        applications: [
            { name: "Двигатели", icon: Train },
            { name: "Вагоны", icon: Train },
        ],
    },

    {
        title: "2- и 3-колёсная техника",
        image: "/industry/6.jpg",
        icon: Bike,
        applications: [
            { name: "Мотоциклы", icon: Bike },
            { name: "Скутеры", icon: Bike },
            {
                name: "Электрические 2-колёсные транспортные средства",
                icon: Bike,
            },
            {
                name: "3-колёсные транспортные средства",
                icon: Truck,
            },
            {
                name: "Электрические 3-колёсные транспортные средства",
                icon: Truck,
            },
            { name: "Колёсные и ступичные узлы", icon: CircleDot },
            { name: "Мопеды", icon: Bike },
            {
                name: "Грузовые 3-колёсные транспортные средства",
                icon: Truck,
            },
        ],
    },

    {
        title: "Редукторы и силовые передачи",
        image: "/industry/7.jpg",
        icon: Settings2,
        applications: [
            { name: "Промышленные редукторы", icon: Settings2 },
            { name: "Автомобильные трансмиссии", icon: Car },
            { name: "Сельскохозяйственные редукторы", icon: Tractor },
            {
                name: "Редукторы строительной техники",
                icon: Construction,
            },
            { name: "Горнодобывающие редукторы", icon: Pickaxe },
            {
                name: "Приводные системы конвейеров",
                icon: Settings2,
            },
            { name: "Планетарные редукторы", icon: Settings2 },
            {
                name: "Электрические мотор-редукторы",
                icon: Zap,
            },
            {
                name: "Системы передачи мощности",
                icon: Settings2,
            },
            {
                name: "Редукторы прокатных станов",
                icon: Settings2,
            },
        ],
    },

    {
        title: "ATV / UTV",
        image: "/industry/8.jpg",
        icon: Bike,
        applications: [
            {
                name: "ATV (вездеходы)",
                icon: Bike,
            },
            {
                name: "UTV (многоцелевые транспортные средства)",
                icon: Truck,
            },
            { name: "Спортивные ATV", icon: Bike },
            { name: "Утилитарные ATV", icon: Bike },
            {
                name: "Рекреационные внедорожные транспортные средства",
                icon: Bike,
            },
            {
                name: "Сельскохозяйственные ATV / UTV",
                icon: Tractor,
            },
            {
                name: "Рабочие и утилитарные UTV",
                icon: Truck,
            },
            {
                name: "Электрические ATV и UTV",
                icon: Zap,
            },
            {
                name: "Внедорожные картинги и рекреационные транспортные средства",
                icon: Bike,
            },
            {
                name: "Мотоциклы для мотокросса",
                icon: Bike,
            },
        ],
    },
];

export default function IndustriesSection() {
    const [selectedIndustry, setSelectedIndustry] = useState(null);

    return (
        <>
            <section className="bg-[#EDF4FE] py-10">
                <div className="max-w-7xl mx-auto px-4 md:px-0">

                    <span className="text-[#D9251C] uppercase tracking-[4px] text-sm font-semibold">
                        Отрасли, которые мы обслуживаем
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-3 mb-12">
                        <span className="text-black">Промышленность</span> по всему миру
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
                                        sm:h-90 h-56
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