import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const outlets = [
    {
        id: 1,
        city: "Jalna",
        state: "Maharashtra",
        images: [
            "/outlet/1.jpg",
            "/outlet/2.jpg",
            "/outlet/3.jpg",
        ],
    },
    {
        id: 2,
        city: "Durgapur",
        state: "West Bengal",
        images: [
            "/outlet/4.jpg",
            "/outlet/5.jpg",
            "/outlet/6.jpg",
        ],
    },
    {
        id: 3,
        city: "Khanna",
        state: "Punjab",
        images: [
            "/outlet/7.jpg",
            "/outlet/8.jpg",
            "/outlet/9.jpg",
        ],
    },
    {
        id: 4,
        city: "Raipur",
        state: "Chhattisgarh",
        images: [
            "/outlet/10.jpg",
            "/outlet/11.jpg",
            "/outlet/12.jpg",
        ],
    },
    {
        id: 5,
        city: "Bhubaneswar",
        state: "Odisha",
        images: [
            "/outlet/13.jpg",
            "/outlet/14.jpg",
            "/outlet/15.jpg",
        ],
    },
    {
        id: 6,
        city: "Bengaluru",
        state: "Karnataka",
        images: [
            "/outlet/16.jpg",
            "/outlet/17.jpg",
            "/outlet/18.jpg",
        ],
    },
    {
        id: 7,
        city: "Ahmedabad",
        state: "Gujarat",
        images: [
            "/outlet/19.jpg",
            "/outlet/20.jpg",
            "/outlet/21.jpg",
        ],
    },
    {
        id: 8,
        city: "Boisar",
        state: "Maharashtra",
        images: [
            "/outlet/22.jpg",
            "/outlet/23.jpg",
            "/outlet/24.jpg",
        ],
    },
    {
        id: 9,
        city: "Jaipur",
        state: "Rajasthan",
        images: [
            "/outlet/25.jpg",
            "/outlet/26.jpg",
        ],
    },
    {
        id: 10,
        city: "Jamshedpur",
        state: "Jharkhand",
        images: [
            "/outlet/27.jpg",
            "/outlet/28.jpg",
        ],
    },
    {
        id: 11,
        city: "Hyderabad",
        state: "Telangana",
        images: [
            "/outlet/29.jpg",
            "/outlet/30.jpg",
        ],
    },
];

const OutletCard = ({ outlet, onOpen }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <button
                type="button"
                onClick={() => onOpen(outlet)}
                className="relative block h-[260px] w-full overflow-hidden text-left"
            >
                <img
                    src={`${outlet.images[0]}?auto=format&fit=crop&w=1000&q=85`}
                    alt={`${outlet.city}, ${outlet.state} 24/7 outlet`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* 24/7 Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-900 shadow-lg">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    OPEN 24/7
                </div>

                {/* Image count */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <Maximize2 size={13} />
                    {outlet.images.length} Photos
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                        <div className="mb-1 flex items-center gap-1.5 text-white/80">
                            <MapPin size={15} />
                            <span className="text-xs font-medium">24/7 Outlet</span>
                        </div>

                        <h3 className="text-xl font-bold text-white">
                            {outlet.city}
                        </h3>

                        <p className="text-sm text-white/80">{outlet.state}</p>
                    </div>

                    <span className="rounded-full bg-white/15 p-2 text-white backdrop-blur-md transition group-hover:bg-white group-hover:text-gray-900">
                        <Maximize2 size={17} />
                    </span>
                </div>
            </button>
        </motion.div>
    );
};

const GalleryModal = ({ outlet, onClose }) => {
    if (!outlet) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 20 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full max-w-6xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Modal Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-sm text-white/60">
                                <MapPin size={16} />
                                <span>24/7 Outlet</span>
                            </div>

                            <h2 className="mt-1 text-2xl font-bold text-white">
                                {outlet.city}, {outlet.state}
                            </h2>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close gallery"
                            className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white hover:text-black"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Main Slider */}
                    <div className="relative overflow-hidden rounded-2xl bg-black">
                        <Swiper
                            modules={[Navigation, Pagination, Keyboard]}
                            navigation={{
                                nextEl: ".outlet-next",
                                prevEl: ".outlet-prev",
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            keyboard={{
                                enabled: true,
                            }}
                            loop={outlet.images.length > 1}
                            className="outlet-gallery-swiper"
                        >
                            {outlet.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex h-[70vh] max-h-[750px] items-center justify-center">
                                        <img
                                            src={`${image}?auto=format&fit=crop&w=1800&q=90`}
                                            alt={`${outlet.city} outlet ${index + 1}`}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation */}
                        <button
                            type="button"
                            className="outlet-prev absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            type="button"
                            className="outlet-next absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default function TwentyFourSevenOutlets() {
    const [selectedOutlet, setSelectedOutlet] = useState(null);

    const closeModal = () => setSelectedOutlet(null);

    return (
        <section className="bg-gray-50 px-5 py-10 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                        24/7 Available
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Our 24/7 Outlets
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Find our round-the-clock outlets across India. Click on any
                        location to explore the complete photo gallery.
                    </p>
                </motion.div>

                {/* Outlet Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {outlets.map((outlet) => (
                        <OutletCard
                            key={outlet.id}
                            outlet={outlet}
                            onOpen={setSelectedOutlet}
                        />
                    ))}
                </div>
            </div>

            {/* Gallery Popup */}
            <AnimatePresence>
                {selectedOutlet && (
                    <GalleryModal
                        outlet={selectedOutlet}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}