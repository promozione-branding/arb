"use client"
import React from "react";
import {
    ArrowRight,
    CheckCircle2,
    Factory,
    Globe2,
    Settings2,
    ShieldCheck,
    Truck,
    Wrench,
    CarFront,
    Tractor,
    Construction,
    Pickaxe,
    BusFront,
    Mountain,
    Cog,
    Settings,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Universal() {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero Banner */}
            <section className="relative min-h-[480px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
                    alt="Universal Joints"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/70" />

                <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-6 py-20 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                            <Settings2 size={17} />
                            Universal Joints
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Universal Joints
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                            ARB Bearings is a trusted universal joint, offering high-quality
                            universal joints designed for reliable power transmission in
                            automotive, industrial, agricultural, and heavy-duty applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                            Universal Joints
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Reliable power transmission for demanding applications
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            Our universal joints provide smooth torque transfer, flexibility,
                            and dependable performance under demanding operating conditions.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            Designed for durability and consistent operation, ARB universal
                            joints help reduce vibration, minimize wear, and support efficient
                            drivetrain performance. Whether you need standard or
                            application-specific universal joints, ARB Bearings provides
                            reliable solutions for demanding power transmission requirements.
                        </p>

                        <p className="mt-6 font-semibold text-slate-900">
                            Looking for a reliable universal joint? Contact ARB Bearings for
                            your requirements.
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=85"
                            alt="Universal joint application"
                            className="h-[360px] w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Used In */}
            <section className="bg-slate-50 px-6 py-16 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                            Universal Joints
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Universal joints are widely used in:
                        </h2>
                    </motion.div>

                    {/* Applications */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            {
                                title: "Automotive Drivetrains",
                                icon: CarFront,
                            },
                            {
                                title: "Commercial Vehicles",
                                icon: Truck,
                            },
                            {
                                title: "Agricultural Machinery",
                                icon: Tractor,
                            },
                            {
                                title: "Construction Equipment",
                                icon: Construction,
                            },
                            {
                                title: "Industrial Machinery",
                                icon: Factory,
                            },
                            {
                                title: "Mining Equipment",
                                icon: Pickaxe,
                            },
                            {
                                title: "Heavy-Duty Vehicles",
                                icon: BusFront,
                            },
                            {
                                title: "Off-Highway Equipment",
                                icon: Mountain,
                            },
                            {
                                title: "Power Transmission Systems",
                                icon: Cog,
                            },
                            {
                                title: "Mechanical Drive Systems",
                                icon: Settings,
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.06,
                                    }}
                                    whileHover={{
                                        y: -7,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                                >
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.08, rotate: 3 }}
                                        className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors duration-300 group-hover:bg-slate-700"
                                    >
                                        <Icon size={27} strokeWidth={1.8} />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-base font-bold leading-6 text-slate-900">
                                        {item.title}
                                    </h3>

                                    {/* Bottom line */}
                                    <div className="mt-5 h-1 w-8 rounded-full bg-slate-900 transition-all duration-300 group-hover:w-14" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="mb-12">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                        Universal Joint Solutions
                    </span>
                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Universal Joint Solutions
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                            <Truck size={23} />
                        </div>

                        <h3 className="text-2xl font-bold">Automotive Universal Joints</h3>

                        <p className="mt-4 leading-8 text-slate-600">
                            ARB universal joints are designed for smooth and reliable power
                            transmission in automotive and commercial vehicle applications.
                            They offer durability, flexibility, and consistent performance
                            under demanding conditions.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                            <Wrench size={23} />
                        </div>

                        <h3 className="text-2xl font-bold">Heavy-Duty Universal Joints</h3>

                        <p className="mt-4 leading-8 text-slate-600">
                            Engineered for demanding applications, ARB heavy-duty universal
                            joints provide reliable torque transfer and enhanced durability
                            for construction, mining, agricultural, and industrial equipment.
                        </p>
                    </article>
                </div>
            </section>

            {/* Why Choose */}
            <section className="bg-slate-950 px-6 py-16 text-white lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                            Why Choose ARB Universal Joints?
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Why Choose ARB Universal Joints?
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            ["Manufactured in India", Factory],
                            ["Supplied to Russia & Global Markets", Globe2],
                            ["Precision-Engineered Components", Settings2],
                            ["Reliable Power Transmission", Truck],
                            ["High Load Handling", ShieldCheck],
                            ["Reduced Vibration & Wear", CheckCircle2],
                            ["Durable Construction", Wrench],
                            ["Long Service Life", ShieldCheck],
                            ["Suitable for Heavy-Duty Applications", Factory],
                        ].map(([item, Icon]) => (
                            <div
                                key={item}
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                            >
                                <Icon size={21} className="shrink-0 text-white/80" />
                                <span className="font-medium text-white/90">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                            Applications
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Applications
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            ARB Universal Joints are suitable for:
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            "Automotive Drivelines",
                            "Propeller Shafts",
                            "Agricultural Equipment",
                            "Construction Machinery",
                            "Mining Equipment",
                            "Commercial Vehicles",
                            "Industrial Machinery",
                            "Heavy-Duty Equipment",
                            "Off-Highway Applications",
                            "Power Transmission Systems",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                            >
                                <ArrowRight size={18} className="shrink-0" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Russia CTA */}
            <section className="px-6 pb-16 lg:px-8 lg:pb-20">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
                    <div className="max-w-4xl">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                            Looking for a Universal Joints Supplier in Russia?
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Looking for a Universal Joints Supplier in Russia?
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
                            Get{" "}
                            <strong className="text-white">
                                quality universal joints manufactured in India and supplied to
                                Russia
                            </strong>
                            , backed by ARB Bearings' expertise and reliable global supply
                            capabilities.
                        </p>

                        <a href="tel:+917834872136"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-200"
                        >
                            Enquire Now
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}