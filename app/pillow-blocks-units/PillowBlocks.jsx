"use client"
import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Boxes,
    CheckCircle2,
    Cog,
    Factory,
    Forklift,
    Gauge,
    Hammer,
    Settings2,
    ShieldCheck,
    Tractor,
    Truck,
    Wrench,
} from "lucide-react";

const widelyUsed = [
    { title: "Conveyor Systems", icon: Settings2 },
    { title: "Agricultural Machinery", icon: Tractor },
    { title: "Industrial Equipment", icon: Factory },
    { title: "Material Handling Systems", icon: Forklift },
    { title: "Construction Machinery", icon: Hammer },
    { title: "Food Processing Equipment", icon: Boxes },
    { title: "Textile Machinery", icon: Cog },
    { title: "Manufacturing Plants", icon: Factory },
    { title: "Mining Equipment", icon: Truck },
    { title: "Power Transmission Systems", icon: Gauge },
];

const benefits = [
    { title: "Easy Installation", icon: Wrench },
    { title: "Reliable Shaft Support", icon: ShieldCheck },
    { title: "High Load Capacity", icon: Truck },
    { title: "Smooth Rotation", icon: Cog },
    { title: "Durable Housing Design", icon: Settings2 },
    { title: "Reduced Maintenance", icon: Wrench },
    { title: "Long Service Life", icon: ShieldCheck },
];

const whyChoose = [
    { title: "Precision-Engineered Quality", icon: Settings2 },
    { title: "Durable Construction", icon: Factory },
    { title: "Reliable Performance", icon: CheckCircle2 },
    { title: "Easy Installation & Maintenance", icon: Wrench },
    { title: "High Load Handling", icon: Truck },
    { title: "Smooth & Stable Operation", icon: Gauge },
    { title: "Long Service Life", icon: ShieldCheck },
    { title: "Suitable for Industrial Applications", icon: Factory },
    { title: "Consistent Quality", icon: CheckCircle2 },
];

const applications = [
    "Conveyor Systems",
    "Agricultural Equipment",
    "Industrial Machinery",
    "Construction Equipment",
    "Mining Machinery",
    "Material Handling",
    "Manufacturing Equipment",
    "Power Transmission Systems",
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function PillowBlocks() {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}
            <section className="relative min-h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=2000&q=85"
                    alt="Pillow Block Units"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-slate-950/75" />

                <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                            <Settings2 size={17} />
                            Pillow Block Units
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Pillow Block Units
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                            ARB Bearings offers high-quality pillow block units designed for
                            reliable shaft support, smooth rotation, and long-lasting
                            performance in industrial applications. Precision-engineered for
                            easy installation and dependable operation, these units help
                            reduce friction, accommodate demanding loads, and support
                            efficient machinery performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Widely Used */}
            <section className="bg-slate-50 px-6 py-16 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                            Pillow Block Units
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Pillow Block Units Are Widely Used In:
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {widelyUsed.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.05,
                                    }}
                                    whileHover={{ y: -7 }}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors group-hover:bg-slate-700">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="font-bold leading-6">{item.title}</h3>

                                    <div className="mt-5 h-1 w-8 rounded-full bg-slate-900 transition-all duration-300 group-hover:w-14" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pillow Block Unit Solutions */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                        Pillow Block Unit Solutions
                    </span>

                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Pillow Block Unit Solutions
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
                >
                    <div className="flex flex-col gap-8 lg:flex-row">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                            <Settings2 size={30} />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">
                                Premium Pillow Block Units
                            </h3>

                            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                                ARB Pillow Block Units combine durable bearing inserts with
                                robust housings to provide secure shaft support and reliable
                                operation. Designed for demanding environments, they offer
                                smooth rotation, easy maintenance, and extended service life.
                            </p>

                            <h4 className="mt-8 text-lg font-bold">Key Benefits:</h4>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                {benefits.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                                        >
                                            <Icon size={19} className="shrink-0 text-slate-700" />
                                            <span className="text-sm font-semibold">
                                                {item.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Why Choose */}
            <section className="bg-slate-950 px-6 py-16 text-white lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                            Why Choose ARB Pillow Block Units?
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Why Choose ARB Pillow Block Units?
                        </h2>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {whyChoose.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                    }}
                                    whileHover={{ y: -5 }}
                                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                        <Icon size={20} />
                                    </div>

                                    <span className="font-medium text-white/90">
                                        {item.title}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                            Applications
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Applications
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            ARB Pillow Block Units are suitable for:
                        </p>
                    </motion.div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {applications.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                            >
                                <CheckCircle2
                                    size={19}
                                    className="shrink-0 text-slate-700"
                                />
                                <span className="font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-16 lg:px-8 lg:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16"
                >
                    <div className="max-w-4xl">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                            Looking for Reliable Pillow Block Units?
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Looking for Reliable Pillow Block Units?
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
                            Choose{" "}
                            <strong className="text-white">ARB Bearings</strong> for
                            dependable pillow block units designed to provide smooth
                            operation, reliable shaft support, and long-lasting performance.
                        </p>

                        <a href="tel:+917834872136"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-200"
                        >
                            Enquire Now
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}