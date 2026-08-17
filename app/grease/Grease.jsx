"use client"
import { useState } from "react";
import Image from "next/image";
import Enquiry from "@/components/Enquiry";
const greaseVariants = [
  {
    title: "Crystal Red Gel Grease",
    image: "/greasered.webp",
  },
  {
    title: "Red Gel Grease",
    image: "/greaseblue.webp",
  },
  {
    title: "Lithium Base AP-3 Grease",
    image: "/greaseap.webp",
  },
];

const usedIn = [
  "Industrial Bearings",
  "Electric Motors",
  "Automotive Components",
  "Construction Equipment",
  "Agricultural Machinery",
  "Mining Equipment",
  "Manufacturing Plants",
  "Pumps and Compressors",
  "Conveyor Systems",
  "Heavy Engineering Applications",
];

const whyChoose = [
  "Premium Quality Lubricants",
  "Excellent Wear and Friction Protection",
  "High Temperature Resistance",
  "Water and Corrosion Resistant",
  "Longer Lubrication Life",
  "Reduces Maintenance Costs",
  "Ideal for Heavy-Duty Applications",
  "Multiple Packaging Options",
  "Trusted Industrial Lubrication Solutions",
];

const applications = [
  "Ball Bearings",
  "Roller Bearings",
  "Wheel Bearings",
  "Electric Motors",
  "Gear Assemblies",
  "Pumps",
  "Crushers",
  "Conveyor Rollers",
  "Agricultural Equipment",
  "Industrial Machinery",
];

export default function GreasePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);


  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        style={{ backgroundImage: "url(/Grease-Bearing.jpg)" }}
        className="relative bg-cover bg-center text-white"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative mx-auto  px-6 py-24 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold md:text-6xl leading-snug text-center">
              Grease Manufacturer
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-15">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-5 text-4xl font-bold text-gray-900">
                Grease Manufacturer
              </h2>

              <p className="text-lg leading-8 text-black">
                ARB Bearings is a trusted <strong>grease manufacturer.</strong>  We provide high-quality industrial and automotive greases for bearings, gears, bushings, and other moving parts. Basically, this high-performance grease helps reduce friction, reduce abrasion, keep corrosion at bay, and extend equipment service life, even when things get rough under heavy loads and demanding operating conditions.
                ARB Bearings grease is manufactured using quality base oils, advanced thickeners, and performance additives; it helps deliver reliable lubrication, solid water resistance, plus sturdy protection from contaminants. Go with ARB Bearings for <strong>dependable industrial and automotive grease solutions across Russia,</strong>  made to boost equipment performance and reduce maintenance costs- yeah, that simple.

                <strong>
                  Looking for a reliable grease manufacturer in Russia? Contact ARB Bearings for your lubrication requirements.

                </strong>

              </p>
            </div>

            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/there-are-two-gears-that-are-water-with-some-liquid_1034997-124995.avif"
                alt="Grease"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Widely Used */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            The grease is widely used in:
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {usedIn.map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-white p-6 text-center font-medium shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Variants */}
      <section className="py-10">
        <div className="mx-auto w-full px-16">
          <h2 className=" text-center text-4xl font-bold text-gray-900">
            The Grease Variants
          </h2>

          <div className="">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative h-[520px] overflow-hidden rounded-2xl">
                <Image
                  src={greaseVariants[0].image}
                  alt={greaseVariants[0].title}
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="mb-6 text-3xl font-bold text-gray-900">
                  Crystal Red Gel Grease
                </h3>

                <p className="text-lg leading-8 text-gray-700">
                  <strong>Crystal Red Gel Grease</strong>    is a high-performance, multi-purpose lubricant made to handle high-speed bearings and industrial machinery. It has really good thermal stability, plus strong bonding, water resistance, and it keeps lubricating for a long time so you get steady protection even when the conditions are tough.
                  It’s a great fit for <strong> industrial equipment, bearings, and those high-speed duties</strong> , because Crystal Red Gel Grease helps lower friction, reduces abrasion, and stretches the life of your components.

                </p>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <h3 className="mb-6 text-3xl font-bold text-gray-900">
                  Blue Gel Grease
                </h3>

                <p className="text-lg leading-8 text-gray-700">
                  <strong>ARB Blue Gel Grease,</strong>   basically a high-performance lubricant meant for the kind of heavy-load work and high-heat situations where regular stuff just gives up. It helps cut down friction, shields parts from rust and corrosion, and keeps things moving in a smoother, more dependable way.
                  It’s a good fit for bearings, industrial machinery, and those demanding settings where you really need reliable lubrication. With <strong>ARB Red Gel Grease, you usually get less wear, stronger component performance, and a longer service life than you’d expect.</strong>

                </p>
              </div>

              <div className="relative order-1 h-[520px] overflow-hidden rounded-2xl lg:order-2">
                <Image
                  src={greaseVariants[1].image}
                  alt={greaseVariants[1].title}
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative h-[520px] overflow-hidden rounded-2xl">
                <Image
                  src={greaseVariants[2].image}
                  alt={greaseVariants[2].title}
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="mb-6 text-3xl font-bold text-gray-900">
                  Lithium Base AP-3 Grease
                </h3>

                <p className="text-lg leading-8 text-gray-700">
                  <strong>Lithium Base AP-3 Grease</strong>  is a high-performance lube meant for  <strong>automotive, industrial, and agricultural equipment.</strong>  It provides outstanding resistance to oxidation, solid mechanical stability, and solid load-bearing strength, so it keeps performing when conditions get demanding.
                  Great for bearings and other moving parts, it helps cut <strong>down friction, reduce abrasion, and keeps the service life of your equipment longer</strong> . At the same time, it supports a smooth, dependable operation, like really steady and dependable in daily use.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* CTA */}
      <section className="bg-gray-900 py-14 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-8 text-4xl font-bold">
            Looking for a Reliable Grease manufacturer?
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-gray-300">
            ARB Bearings is committed to delivering premium-quality lubricants
            that improve machine efficiency reduce downtime and enhance
            equipment life. Whether you need grease bearing grease, lithium
            grease or red gel grease ARB Bearings provides reliable lubrication
            solutions for industries, across India.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:scale-105"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>





      {/* Why Choose */}
      <section className="bg-red-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            Why Choose ARB Grease?
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item} className="rounded-xl bg-white p-6 shadow-sm">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-5 text-center text-3xl font-bold text-gray-900">
            Applications
          </h2>

          <p className="mb-10 text-center text-lg text-gray-700">
            ARB Industrial Grease is ideal for lubricating:
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-white p-6 text-center shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>



      {isFormOpen && (
        <Enquiry
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}

    </main>
  );
}
