"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Hospital } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductsSlider from "@/components/ProductsSlider";

import IndustriesSection from "@/components/IndustriesSection";

import { ChevronDown } from "lucide-react";


const Location = () => {
      const [active, setActive] = useState(0);
    const params = useParams();

    const city = params?.location?.includes("-in-")
        ? params.location.split("-in-")[1].split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "India";



const faqs = [
    {
      question: "Who is a reliable Bearings Supplier in {city}?",
      answer:
        "ARB Bearings is an experienced Bearings Supplier supplying high-quality, precision-engineered bearing solutions to customers across {city} and international markets.",
    },
    {
      question: "What types of bearings does ARB Bearings supply?",
      answer:
        "ARB Bearings supplies a wide range of high-quality ball and roller bearings, including deep groove ball, tapered roller, cylindrical roller, spherical roller, needle, and thrust bearings for industrial, automotive, agricultural, railway, mining, and other demanding applications.",
    },
    {
      question: "Does ARB Bearings export bearings to {city}?",
      answer:
        "Yes, ARB Bearings supplies and exports bearing solutions to customers in {city}, with secure packaging and reliable international delivery support.",
    },
    {
      question:
        "Can ARB Bearings provide bearings for specific industrial applications?",
      answer:
        "Yes. Our bearing solutions are suitable for automotive, mining, agriculture, construction, power generation, steel, and various industrial machinery applications.",
    },
    {
      question:
        "How can I request a bearing quotation from ARB Bearings?",
      answer:
        "You can contact the ARB Bearings team with your required bearing type, size, quantity, and application details to receive product information and a quotation.",
    },
  ];


    return (
        <>
        
  
            <div className="">
                <section
                    style={{
                        backgroundImage: "url('/ctabg.jpg')",
                        backgroundSize: "cover",
                        objectPosition: "center",
                    }}
                    className="py-20 relative z-10"
                >
                    <div className="absolute inset-0 bg-gray-900/60" />

                    <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-20 capitalize md:text-6xl">
                       Bearings supplier in  {city}
                    </h1>
                </section>
            </div>





         <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-15">
  <div className="mx-auto max-w-7xl  ">
    <div className="grid items-center gap-16 lg:grid-cols-2">
     
      <div>
        <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-1 text-sm font-semibold tracking-wide text-red-600">
          Trusted Worldwide
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1B2A41] ">
          Leading Bearings Supplier in {city}
        </h2>

        <p className="mt-3 text-lg  text-slate-900">
          ARB Bearings is a globally recognized Bearings Supplier delivering
          high-performance bearing solutions to customers across {city} and
          international markets. With decades of engineering excellence,
          advanced manufacturing capabilities, and an unwavering commitment to
          quality, we manufacture precision-engineered bearings that meet the
          demanding requirements of modern industries.  As an experienced Bearings Supplier, we serve industries including
          automotive, mining, construction, agriculture, power generation,
          steel, and heavy engineering. Our bearings are trusted for their
          exceptional durability, precision, high load-carrying capacity, and
          long service life. Every product is manufactured using premium-grade
          raw materials and advanced production technologies, ensuring
          consistent performance even in the most demanding operating
          environments.
        </p>

    

       
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {[
            "Extensive Product Range",
            "In-House Manufacturing",
          
          ].map((item) => (
            <div
              key={item}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="font-semibold text-[#1B2A41]">{item}</h3>
            </div>
          ))}
        </div>
      </div>


     
      <div className="relative">
        <div className="absolute top-10 -left-10 h-48 w-48 rounded-full bg-red-100 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-blue-100 blur-3xl"></div>

        <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-2xl">
          <div className="mb-6 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
            Precision Engineered
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#1B2A41]">
            Powering Performance with the Right Bearings
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From standard applications to demanding industrial requirements, ARB
            Bearings delivers precision-engineered bearing solutions built for
            performance, durability, and reliability.
          </p>

          <button className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#1B2A41]">
            Get a Bearings Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

           <section className="relative overflow-hidden bg-white py-15">
  
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-50 blur-3xl"></div>
    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl"></div>
  </div>

  <div className="relative mx-auto w-full px-6 lg:px-18">

    <div className="mx-auto max-w-5xl text-center">
      <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold tracking-wide text-red-600">
        Why Choose Us
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#1B2A41] ">
        Why ARB Bearings Is the Right Choice for Your Bearings Needs
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-900">
        Choose ARB Bearings as your trusted Bearings Supplier in {city},
        delivering precision-engineered, reliable, and high-performance bearing
        solutions.
      </p>
    </div>

    
    <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {[
        {
          title: "Superior Quality Materials",
          description:
            "Premium materials deliver durability, strength, and long-lasting bearing performance.",
        },
        {
          title: "Precision Engineering",
          description:
            "Precisely engineered bearings ensure smooth operation, reduced friction, and reliability.",
        },
        {
          title: "Rigorous Quality Control",
          description:
            "Every bearing is thoroughly inspected to maintain consistent quality and performance.",
        },
        {
          title: "Global Export Expertise",
          description:
            "As an experienced Bearings Supplier, we supply quality bearing solutions to global markets.",
        },
     
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl"
        >
      
          <div className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition-all duration-300 group-hover:text-red-100">
            {`0${index + 1}`}
          </div>

         
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

         
          <h3 className="mt-8 text-xl font-bold text-[#1B2A41]">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-800">
            {item.description}
          </p>

       
          <div className="mt-8 h-1 w-16 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>



 <ProductsSlider/>

<section className="relative overflow-hidden bg-gradient-to-r from-[#1B2A41] via-[#23384D] to-[#1B2A41] py-5">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-red-600/20 blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
  </div>

  <div className="relative mx-auto  px-6 lg:px-8">
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl lg:p-10">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
            Get Started Today
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white ">
            Looking for a Reliable Bearings Supplier in {city}?
          </h2>

          <p className="mt-3 text-lg leading-8 text-slate-200">
            Get high-quality, precision-engineered bearings from ARB Bearings.
            Whether you need standard bearings, specialized solutions, or bulk
            requirements, our team is ready to help you find the right bearing
            for your application.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1B2A41]"
          >
            Request a Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

            <IndustriesSection/>

          <section className="bg-white py-14">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      
   
      <div>
        <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
          Manufacturing Excellence
        </span>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#1B2A41] ">
          Precision Manufacturing. Proven Quality.
        </h2>

        <p className="mt-3 text-lg leading-8 text-slate-600">
          As a trusted Bearings Supplier in {city}, ARB Bearings follows a
          precision-focused manufacturing process to deliver reliable, durable,
          and high-performance bearing solutions. From premium raw materials to
          final inspection and packaging, every stage is carefully controlled to
          ensure consistent quality.
        </p>

        <div className="mt-4 space-y-3">
          {[
            {
              title: "Premium Raw Materials",
              desc: "We use carefully selected raw materials to ensure strength, durability, and consistent bearing performance.",
            },
            {
              title: "Precision Manufacturing",
              desc: "As an experienced Bearings Supplier, we use advanced machinery and modern manufacturing processes to achieve dimensional accuracy and consistent production quality.",
            },
            {
              title: "Controlled Heat Treatment",
              desc: "Specialized heat treatment processes enhance bearing strength, durability, and resistance to demanding operating conditions.",
            },
           
          ].map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-red-500 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1B2A41]">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">

        {/* Decorative Border */}
        <div className="absolute -left-6 -top-6 h-full w-full rounded-[32px] border-2 border-red-200"></div>

        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src="/istockphoto-1203599074-612x612.jpg"
            alt="Precision Bearing Manufacturing"
            className="h-[620px] w-full object-contain"
          />

          {/* Floating Stats */}
          <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">
            <p className="text-4xl font-bold text-red-600">60+</p>
            <p className="mt-1 font-medium text-[#1B2A41]">
              Years of Manufacturing Excellence
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

          
        



       
            <section className="w-full bg-[#28186E] text-white py-5">
                <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="md:text-left text-center">
                        <Link href={"/"} className="text-2xl font-semibold">
                          Bearings Supplier in  {city}
                        </Link>
                        <p className="text-2xl md:text-[42px] font-semibold">
                          +91-7834872136
                        </p>
                        <p className="text-lg text-white">
                            For More Details Contact Us Now!
                        </p>
                    </div>

                    <div>
                        <a href="tel:+917834872136" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                            Connect Now
                        </a>
                    </div>
                </div>
            </section>



     <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-12">

         
          <div className="lg:col-span-4 lg:sticky lg:top-35 h-fit">

            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
              FAQs
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#1B2A41]">
              Frequently Asked Questions – Bearings Supplier in {city}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-800">
              Find answers to the most commonly asked questions about ARB Bearings,
              our bearing solutions, manufacturing capabilities, and exports.
            </p>

            <div className="mt-10 h-2 w-40 rounded-full bg-gradient-to-r from-red-600 to-[#28186E]"></div>

          </div>

      
          <div className="space-y-5 lg:col-span-8">

          {faqs.map((faq, index) => (
  <div
    key={index}
    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
      active === index
        ? "border-red-500 bg-white shadow-xl"
        : "border-slate-200 bg-white"
    }`}
  >
    <button
      onClick={() => setActive(active === index ? -1 : index)}
      className="flex w-full items-center justify-between px-8 py-7 text-left"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-lg font-bold text-white">
          {index + 1}
        </div>

        <h3 className="text-xl font-semibold text-[#1B2A41]">
          {faq.question.replaceAll("{city}", city)}
        </h3>
      </div>

      <ChevronDown
        className={`transition duration-300 ${
          active === index ? "rotate-180 text-red-600" : ""
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-500 ${
        active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="border-t border-slate-100 px-8 py-6 pl-[92px] text-slate-600 leading-8">
          {faq.answer.replaceAll("{city}", city)}
        </div>
      </div>
    </div>
  </div>
))}
          </div>

        </div>

      </div>
    </section>

          
    


        </>
    );
};

export default Location;
