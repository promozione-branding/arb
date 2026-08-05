// page.jsx
"use client";

import Image from "next/image";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Enquiry from "@/components/Enquiry";

import Catpopup from "@/components/Catpopup";
import { useState } from "react";
export default function AboutPage() {
  const why = [
    "70+ Years of Industry Expertise",
    "Established in 1990",
    "Leading Bearing supplier in India",
    "Six Advanced Manufacturing Facilities",
    "2,500+ Bearing Sizes",
    "800+ Dealers & Distribution Network",
    "Presence in 50+ Countries",
    "Trusted Across Six Continents",
    "Precision-Engineered Industrial Bearings",
  ];


 const [isFormOpen, setIsFormOpen] = useState(false);
const [FormOpen, setFormOpen] = useState(false);

  return (
    <main className="bg-white text-slate-800">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/count.avif"
          alt="About ARB Bearings"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative z-10 max-w-6xl px-6 text-center text-white">
          <p className="uppercase tracking-[0.3em] text-red-500 ">
            About ARB Bearings
          </p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Leading Bearing supplier Since 1990
          </h2>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 py-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-5">About ARB Bearings</h2>
          <p className="text-md leading-relaxed ">
            Established in 1990 and headquartered in Delhi, India, ARB Bearings
            is a leading bearing supplier in India with over 60+ years of
            collective expertise in the bearing industry. Built on a foundation
            of engineering excellence, innovation, and customer trust, we
            specialize in manufacturing high-quality industrial bearings and
            precision bearing solutions for customers worldwide. From its
            beginnings as a private enterprise to becoming a public limited
            company, ARB Bearings has grown into a globally recognized bearing
            company, serving 50+ countries across six continents through a
            strong network of 800+ dealers, distributors, and OEM partners. With
            six state-of-the-art manufacturing facilities and a portfolio of
            2,500+ bearing sizes, ARB Bearings manufactures a comprehensive
            range of ball bearings, roller bearings, taper roller bearings,
            spherical roller bearings, needle roller bearings, and customized
            bearing solutions for industries including automotive, agriculture,
            construction, mining, railways, steel, cement, paper, textile, power
            generation, and industrial machinery. Driven by continuous
            innovation, advanced manufacturing technologies, and stringent
            quality standards, we remain committed to delivering reliable,
            high-performance bearings that enhance operational efficiency and
            reinforce our position as a trusted global bearing supplier.
          </p>
        </div>
        <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/ab1.webp" alt="" fill className="object-cover" />
        </div>
      </section>

      <section className="bg-blue-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Our Legacy</h2>
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <p className="text-lg leading-8">
              For more than three decades, ARB Bearings has been committed to
              engineering excellence and continuous innovation. Built on over
              60+ years of industry knowledge, our journey reflects a passion
              for developing high-performance bearing solutions that support the
              evolving needs of global industries.
            </p>
            <p className="text-lg leading-8 mt-6">
              Through consistent investment in technology, manufacturing
              infrastructure, and skilled professionals, we have established
              ourselves as a trusted bearing supplier known for quality,
              precision, and long-term customer relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <Image src="/test4.jfif" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-blue-950/80" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Engineered to Keep Industries Moving
          </h2>
          <p className="text-lg leading-8">
            Discover a comprehensive range of precision bearings and industrial
            bearing solutions designed to deliver exceptional performance,
            reliability, and long service life across diverse applications.
            Explore our products and find the right bearing solution for your
            business.
          </p>
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <Link href="/products/ball-bearing" className="bg-white text-slate-900 px-7 py-4 rounded-full font-semibold flex items-center gap-2">
              Explore Products <ArrowRight size={18} />
            </Link>
            <button onClick={()=> setFormOpen(true)}  className="border border-white px-7 py-4 rounded-full font-semibold flex items-center gap-2">
              Download Catalogue <Download size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <Image src="/aboutpage.jpeg" alt="" fill className="object-contain" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-8">Manufacturing Excellence</h2>
          <p className="text-lg leading-8">
            As a leading bearing supplier, ARB Bearings combines advanced
            manufacturing technologies with precision engineering to produce
            world-class bearing solutions. Our modern production facilities are
            equipped with cutting-edge machinery, precision machining systems,
            heat treatment processes, automated inspection technologies, and
            advanced testing laboratories.
          </p>
          <p className="text-lg leading-8 mt-6">
            Every bearing undergoes rigorous quality checks throughout the
            manufacturing process to ensure exceptional accuracy, durability,
            and long service life. Our continuous investment in technology and
            process improvement enables us to deliver products that consistently
            meet global quality standards.
          </p>
        </div>
      </section>

      <section className="bg-[#281968] text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Global Presence</h2>
          <p className="text-lg leading-8">
            ARB Bearings has established a strong global footprint, serving
            customers across 50+ countries and six continents. Supported by a
            network of 800+ dealers, distributors, and OEM partners, we continue
            to deliver reliable bearing solutions that meet the diverse
            requirements of industries worldwide.
          </p>
          <p className="text-lg leading-8 mt-6">
            Our growing international presence reflects our commitment to
            quality, innovation, and customer satisfaction, making ARB Bearings
            a trusted partner for businesses around the world.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why ARB Bearings?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {why.map((i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 flex gap-3 items-start shadow-sm"
            >
              <CheckCircle2 className="text-blue-700 mt-1" />
              <span>{i}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#28186E] to-slate-900 text-white py-10">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-5">
            Ready to Partner with a Trusted Bearing supplier?
          </h2>
          <p className="text-lg leading-8">
            Whether you're looking for high-quality industrial bearings,
            customized bearing solutions, or a reliable manufacturing partner,
            ARB Bearings is here to support your business with precision,
            innovation, and engineering excellence. Connect with our experts to
            discuss your requirements and discover how we can help keep your
            operations running smoothly.
          </p>
          <p className="text-2xl font-semibold mt-5">
            Let's Build the Future of Motion Together.
          </p>
          <div className="flex justify-center gap-5 mt-6">
            <Link href="/contact-us" className="bg-white text-slate-900 px-7 py-4 rounded-full font-semibold">
              Contact Us
            </Link>
            <button onClick={()=> setIsFormOpen(true)} className="border border-white px-7 py-4 rounded-full font-semibold">
              Request a Quote
            </button>
          </div>
        </div>
      </section>


 {isFormOpen && (
        <Enquiry IATFpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}


      {FormOpen && (
  <Catpopup
    Onpen={FormOpen}
    onClose={() => setFormOpen(false)}
  />
)}


    </main>
  );
}
