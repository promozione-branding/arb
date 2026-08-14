"use client"
import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BusFront,
    CarFront,
    CheckCircle2,
    Cog,
    Factory,
    Gauge,
    Globe2,
    Settings2,
    ShieldCheck,
    Tractor,
    Truck,
    Wrench,
} from "lucide-react";

const usedIn = [
    { title: "Passenger Vehicles", icon: CarFront },
    { title: "Commercial Vehicles", icon: Truck },
    { title: "Trucks & Buses", icon: BusFront },
    { title: "Agricultural Vehicles", icon: Tractor },
    { title: "Heavy-Duty Vehicles", icon: Truck },
    { title: "Automotive Drivetrains", icon: Cog },
    { title: "Vehicle Replacement Applications", icon: Wrench },
    { title: "Industrial Vehicles", icon: Factory },
];

const benefits = [
    { title: "Smooth Clutch Operation", icon: Settings2 },
    { title: "Reduced Friction & Wear", icon: Gauge },
    { title: "High Load Performance", icon: Truck },
    { title: "Precision Engineering", icon: Settings2 },
    { title: "Reliable Operation", icon: CheckCircle2 },
    { title: "Extended Service Life", icon: ShieldCheck },
];

const whyChoose = [
    { title: "Precision-Engineered Quality", icon: Settings2 },
    { title: "Advanced Manufacturing in India", icon: Factory },
    { title: "Reliable Supply to Russia & Global Markets", icon: Globe2 },
    { title: "High Durability", icon: ShieldCheck },
    { title: "Consistent Performance", icon: CheckCircle2 },
    { title: "Reduced Friction & Wear", icon: Gauge },
    { title: "Long Service Life", icon: ShieldCheck },
    { title: "Suitable for Demanding Applications", icon: Wrench },
    { title: "Quality-Focused Production", icon: Factory },
];

const applications = [
    "Passenger Cars",
    "Commercial Vehicles",
    "Trucks",
    "Buses",
    "Agricultural Machinery",
    "Heavy-Duty Vehicles",
    "Automotive Drivetrains",
    "Clutch Replacement Applications",
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function ClutchBearings() {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}
            <section className="relative min-h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=85"
                    alt="Clutch Bearings"
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
                            Clutch Bearings
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Clutch Bearings
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
                            ARB Bearings offers high-quality{" "}
                            <strong className="text-white">clutch bearings</strong> designed
                            for smooth clutch operation, reduced friction, and dependable
                            performance across automotive and commercial vehicle applications.
                            Manufactured with precision and stringent quality standards, our
                            clutch bearings provide excellent durability, reliable operation,
                            and long service life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                            Clutch Bearings
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Precision-engineered clutch bearing solutions
                        </h2>

                        <p className="mt-6 leading-8 text-slate-600">
                            With advanced manufacturing capabilities in India and a strong
                            international supply network, ARB Bearings delivers dependable
                            clutch bearing solutions to customers in{" "}
                            <strong className="text-slate-900">
                                Russia and global markets
                            </strong>
                            .
                        </p>

                        <p className="mt-6 font-semibold text-slate-900">
                            Looking for reliable clutch bearings? Contact ARB Bearings for
                            your requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden rounded-3xl"
                    >
                        <img
                            src="/Clutch Release Bearings image 1.jpeg"
                            alt="Clutch bearing manufacturing"
                            className="h-[380px] w-full object-contain"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Widely Used In */}
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
                            Clutch Bearings
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Clutch Bearings Are Widely Used In:
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {usedIn.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, delay: index * 0.05 }}
                                    whileHover={{ y: -6 }}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors group-hover:bg-slate-700">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="font-bold leading-6">{item.title}</h3>

                                    <div className="mt-5 h-1 w-8 rounded-full bg-slate-900 transition-all group-hover:w-14" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Clutch Bearing Solutions */}
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
                        Clutch Bearings Solutions
                    </span>

                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Clutch Bearings Solutions
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
                            <h3 className="text-2xl font-bold">Premium Clutch Bearings</h3>

                            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                                ARB Clutch Bearings are precision-engineered for smooth
                                engagement, reliable power transmission, and consistent
                                performance. Their durable construction helps reduce friction
                                and wear while supporting efficient clutch operation in
                                demanding conditions.
                            </p>

                            <h4 className="mt-8 text-lg font-bold">Key Benefits:</h4>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                            Why Choose ARB Clutch Bearings?
                        </span>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Why Choose ARB Clutch Bearings?
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
                            ARB Clutch Bearings are suitable for:
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

            {/* Final CTA */}
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
                            Looking for Reliable Clutch Bearings?
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Looking for Reliable Clutch Bearings?
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
                            Choose <strong className="text-white">ARB Bearings</strong> for
                            precision-engineered clutch bearings designed for smooth
                            operation, durability, and dependable performance.
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