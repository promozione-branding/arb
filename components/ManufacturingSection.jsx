"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
    "/hero/Image 1.png",
    "/TAPER ROLLER MULTI ROW - 2.jpg.webp",
];

const ManufacturingSection = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const image1Opacity = useTransform(
        scrollYProgress,
        [0, 0.35, 0.5],
        [1, 1, 0]
    );

    const image2Opacity = useTransform(
        scrollYProgress,
        [0.35, 0.5, 1],
        [0, 1, 1]
    );

    return (
        <section
            ref={sectionRef}
            className="max-w-7xl mx-auto px-4 py-10"
        >
            <div className="grid lg:grid-cols-2 lg:gap-14 gap-5">
                <div className="relative h-[100vh]">
                    <div className="sticky top-10 h-[70vh] rounded-3xl overflow-hidden">

                        <motion.img
                            src={images[0]}
                            alt="Manufacturing"
                            style={{ opacity: image1Opacity }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <motion.img
                            src={images[1]}
                            alt="Bearing manufacturing"
                            style={{ opacity: image2Opacity }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <img
                            src="/logo1.png"
                            alt="ARB Bearings logo"
                            className="absolute bottom-5 right-4 w-20 h-auto z-10"
                        />
                    </div>
                </div>

                {/* STICKY TEXT */}
                <div className="relative">
                    <div className="sticky top-25 h-fit lg:pt-10">

                        <h2 className="text-4xl font-bold mb-4">
                            Manufacturing Excellence
                        </h2>

                        <p className="text-base leading-7">
                            As a leading bearing manufacturer, ARB Bearings
                            combines advanced manufacturing technologies with
                            precision engineering to produce world-class bearing
                            solutions. Our modern production facilities are
                            equipped with cutting-edge machinery, precision
                            machining systems, heat treatment processes,
                            automated inspection technologies, and advanced
                            testing laboratories.
                        </p>

                        <p className="text-base leading-7 mt-4">
                            Every bearing undergoes rigorous quality checks
                            throughout the manufacturing process to ensure
                            exceptional accuracy, durability, and long service
                            life. Our continuous investment in technology and
                            process improvement enables us to deliver products
                            that consistently meet global quality standards.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingSection;