"use client";
import { PhoneCall, Download, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
export default function SingleProductHero() {
  const features = [
    "Superior Contamination Protection",
    "Reduced Lubrication Requirements",
    "Excellent Misalignment Capability",
    "Extended Bearing Service Life",

  ];

   const [activeTab, setActiveTab] = useState("overview");

  return (

<>


    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center flex-wrap gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>

          <ChevronRight size={15} />

          <Link href="/products" className="hover:text-red-600">
            Bearings
          </Link>

          <ChevronRight size={15} />

          <Link href="/products/ball-bearings" className="hover:text-red-600">
            Ball Bearings
          </Link>

          <ChevronRight size={15} />

          <span className="text-red-600 font-semibold">
            Ball Bearings
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Image */}
          <div>
            <div className="border border-gray-200 rounded-md bg-white overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/1.webp"
                  alt="Ball Bearings"
                  fill
                  className="object-contain p-8 hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-5xl font-bold leading-tight text-[#28186D]">
              Ball Bearings
            </h1>

            <p className="mt-4 text-md leading-8 text-black">
              ARB Ball Bearings are manufactured using premium-grade bearing
              steel to deliver exceptional performance, reduced friction, and
              long service life. Designed for high-speed and heavy-duty
              applications, they are widely used in automotive, industrial,
              agricultural, and engineering machinery.
            </p>

            <h3 className="mt-6 text-3xl font-bold text-[#28186D]">
              Key Features
            </h3>

            <ul className="mt-6 space-y-4">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-md text-slate-700"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>


<div className="mt-10 flex w-full gap-3">

  {/* Enquire */}
  <button className="group relative flex-1 overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-red-500/30">
    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
    <span className="relative flex items-center justify-center gap-2 whitespace-nowrap text-sm">
      <PhoneCall size={18} />
      ENQUIRE NOW
    </span>
  </button>

  {/* WhatsApp */}
  <button className="group relative flex-1 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/30">
    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
    <span className="relative flex items-center justify-center gap-2 whitespace-nowrap text-sm">
      <MessageCircle size={18} />
      WHATSAPP NOW
    </span>
  </button>

  {/* Brochure */}
  <button className="group flex-1 rounded-lg border-2 border-slate-300 bg-white px-4 py-4 font-semibold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#28186C] hover:bg-[#28186C] hover:text-white">
    <span className="flex items-center justify-center gap-2 whitespace-nowrap text-sm">
      <Download size={18} />
      DOWNLOAD BROCHURE
    </span>
  </button>

</div>
          
          </div>
        </div>
      </div>
    </section>

     <section className="bg-[#eef2f5] py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}
        <div className="flex flex-wrap gap-10 border-b border-gray-300">

          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-4 text-[19px] font-medium transition ${
              activeTab === "overview"
                ? "border-b-4 border-red-600 text-black font-semibold"
                : "text-black hover:text-red-600"
            }`}
          >
            Product Overview
          </button>

          <button
            onClick={() => setActiveTab("dimensions")}
            className={`pb-4 text-[19px] font-medium transition ${
              activeTab === "dimensions"
                ? "border-b-4 border-red-600 text-black font-semibold"
                : "text-black hover:text-red-600"
            }`}
          >
            Dimensions
          </button>

          <button
            onClick={() => setActiveTab("downloads")}
            className={`pb-4 text-[19px] font-medium transition ${
              activeTab === "downloads"
                ? "border-b-4 border-red-600 text-black font-semibold"
                : "text-black hover:text-red-600"
            }`}
          >
            Downloads
          </button>

        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="pt-10">

            <p className="text-[18px] leading-8 text-gray-800">
              <strong>QCB®</strong> Sealed spherical roller bearings are designed
              to deliver reliable performance in demanding operating conditions.
              Combining high load capacity with effective contamination
              protection, they are well suited to applications such as
              conveyors, mining equipment, quarry machinery, and steel
              processing plants where dirt, dust, and moisture are common.
            </p>

            <h2 className="text-[#28186D] text-[44px] font-bold mt-8">
              Key Features
            </h2>

            <ul className="mt-5 space-y-3 list-disc pl-7 text-[18px] leading-8 text-gray-800">
              <li>Interchangeable with other brands</li>
              <li>
                Sheet steel reinforced HNBR seal standard (Equivalent to SKF
                2RS5 seal)
              </li>
              <li>CA style brass cage design standard</li>
              <li>Annular groove and 3 lubrication holes standard (W33)</li>
              <li>Lithium EP2 general purpose grease (VT143)</li>
              <li>Taper bore versions available (K)</li>
            </ul>

            <h2 className="text-[#28186D] text-[44px] font-bold mt-10">
              What are the Typical Uses for Sealed Sphericals?
            </h2>

            <ul className="mt-5 space-y-3 list-disc pl-7 text-[18px] leading-8 text-gray-800">
              <li>Mining and Quarrying</li>
              <li>Aggregates</li>
              <li>Conveyors</li>
              <li>Steel processing plants</li>
            </ul>

          </div>
        )}

        {/* DIMENSIONS */}
        {activeTab === "dimensions" && (
          <div className="py-16">
            <h2 className="text-4xl font-bold text-[#003B7A] mb-6">
              Dimensions
            </h2>

            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead className="bg-[#003B7A] text-white">
                  <tr>
                    <th className="p-4 text-left">Parameter</th>
                    <th className="p-4 text-left">Value</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Bore Diameter</td>
                    <td className="p-4">50 mm</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-4">Outer Diameter</td>
                    <td className="p-4">90 mm</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-4">Width</td>
                    <td className="p-4">23 mm</td>
                  </tr>

                  <tr>
                    <td className="p-4">Weight</td>
                    <td className="p-4">0.75 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DOWNLOADS */}
        {activeTab === "downloads" && (
          <div className="py-16">

            <h2 className="text-4xl font-bold text-[#003B7A] mb-8">
              Downloads
            </h2>

            <div className="space-y-4">

              <a
                href="#"
                className="block bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
              >
                📄 Product Catalogue.pdf
              </a>

              <a
                href="#"
                className="block bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
              >
                📄 Technical Datasheet.pd f
              </a>

            </div>

          </div>
        )}

      </div>
    </section>
</>

  );
}