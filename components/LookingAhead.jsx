
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    Factory,
    ShieldCheck,
    FlaskConical,
    Microscope,
    Lightbulb,
    Headset,
    Globe2,
    ArrowUpRight,
} from "lucide-react";

const focusAreas = [
    {
        number: "01",
        title: "Technology & Automation",
        icon: Cpu,
    },
    {
        number: "02",
        title: "Manufacturing Capacity",
        icon: Factory,
    },
    {
        number: "03",
        title: "Quality & Process Control",
        icon: ShieldCheck,
    },
    {
        number: "04",
        title: "Research & Development",
        icon: FlaskConical,
    },
    {
        number: "05",
        title: "Testing & Validation",
        icon: Microscope,
    },
    {
        number: "06",
        title: "Product Innovation",
        icon: Lightbulb,
    },
    {
        number: "07",
        title: "Customer Service",
        icon: Headset,
    },
    {
        number: "08",
        title: "Global Market Expansion",
        icon: Globe2,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.09,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function LookingAhead() {
    return (
        <section className="relative overflow-hidden bg-[#F8F9FC] py-10 lg:py-14">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#28186E]/5 blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D72412]/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-4xl text-center lg:mb-18"
                >
                    <div className="mb-6 inline-flex items-center gap-3">
                        <span className="h-[2px] w-8 bg-[#D72412]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D72412]">
                            The Road Ahead
                        </span>

                        <span className="h-[2px] w-8 bg-[#D72412]" />
                    </div>

                    <h2 className="mb-7 text-4xl font-bold tracking-tight text-[#28186E] sm:text-5xl lg:text-6xl">
                        LOOKING <span className="text-[#D72412]">AHEAD</span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                        From a modest manufacturing beginning in{" "}
                        <strong className="font-bold text-[#28186E]">
                            1990
                        </strong>{" "}
                        to an expanding global bearing business, ARB&apos;s
                        journey has been shaped by continuous investment in:
                    </p>
                </motion.div>

                {/* Focus Areas */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {focusAreas.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.number}
                                variants={cardVariants}
                                whileHover={{ y: -7 }}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#D72412]/30 hover:shadow-[0_20px_50px_rgba(40,24,110,0.10)]"
                            >
                                {/* Hover Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D72412]/[0.04] to-[#28186E]/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative z-10">
                                    <div className="mb-9 flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#28186E]/[0.07] text-[#28186E] transition-all duration-300 group-hover:bg-[#D72412] group-hover:text-white">
                                            <Icon size={26} strokeWidth={1.7} />
                                        </div>

                                        <span className="text-sm font-semibold tracking-wider text-slate-300">
                                            {item.number}
                                        </span>
                                    </div>

                                    <div className="flex min-h-[65px] items-end justify-between gap-3">
                                        <h3 className="text-lg font-bold leading-snug text-[#28186E]">
                                            {item.title}
                                        </h3>

                                        <ArrowUpRight
                                            size={20}
                                            className="shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D72412]"
                                        />
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D72412] transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="relative mt-8 overflow-hidden rounded-[28px] bg-[#28186E] px-7 py-8 text-center sm:px-12 lg:mt-10 lg:px-20 lg:py-10"
                >
                    {/* Decorative Circles */}
                    <div className="pointer-events-none absolute -right-28 -top-36 h-80 w-80 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-14 -top-20 h-60 w-60 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#D72412]/20 blur-[90px]" />

                    <div className="relative z-10 mx-auto max-w-4xl">
                        <div className="mx-auto mb-7 h-1 w-14 rounded-full bg-[#D72412]" />

                        <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                            Our Commitment To The Future
                        </span>

                        <h3 className="text-2xl font-semibold leading-relaxed text-white sm:text-3xl lg:text-4xl">
                            As ARB enters its next phase of growth, our focus
                            remains on{" "}
                            <span className="text-[#FF776A]">
                                building stronger manufacturing capabilities,
                                expanding our global presence
                            </span>{" "}
                            and delivering reliable bearing solutions for an
                            evolving world.
                        </h3>

                        <div className="mx-auto mt-9 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-white/30" />
                            <span className="h-2 w-2 rotate-45 bg-[#D72412]" />
                            <span className="h-px w-10 bg-white/30" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
