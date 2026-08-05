"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
export default function AboutSection() {
  const gallery = ["/ab1.webp", "/checkab2.webp", "/abcheck3.webp"];

  return (
    <section className="relative overflow-hidden bg-white py-12">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-3 lg:grid-cols-2">
        {/* Left Image */}

        <div className="relative">
          {/* Background Card */}
          <div className="absolute -left-6 -top-3 h-full w-full rounded-3xl border border-blue-500/20 bg-[#CC1C15]/5 backdrop-blur-xl" />

          <div className="relative">
            {/* Background Card */}

            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl border border-blue-500/20 bg-[#CC1C15]/5 backdrop-blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="slide"
                loop
                speed={1000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                className="h-[620px]"
              >
                {gallery.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`ARB Bearings ${index + 1}`}
                      width={650}
                      height={700}
                      className="h-[620px] bg-white w-full object-contain shadow-2xl border border-gray-300 "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Floating Experience Card */}

            <div className="absolute -bottom-10 left-10 z-20 rounded-2xl border border-blue-500/20 bg-[#0d2036]/95 px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl">
              <h3 className="text-5xl font-extrabold text-white">60+</h3>

              <p className="mt-2 text-sm text-gray-300">
                Years of Engineering Excellence
              </p>
            </div>
          </div>

          {/* Floating Experience Card */}

          <div className="absolute -bottom-10 left-10 rounded-2xl border border-blue-500/20 bg-[#0d2036]/95 px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl">
            <h3 className="text-5xl font-extrabold text-white">60+</h3>

            <p className="mt-2 text-sm text-gray-300">
              Years of Engineering Excellence
            </p>
          </div>
        </div>

        {/* Right */}

        <div>
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#CC1C15]">
            About ARB Bearings
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-black ">
            A Legacy of
            <span className="block text-[#2d1c88]">Engineering Excellence</span>
          </h2>

          <p className="mt-2 text-md leading-7 text-black">
            ARB Bearings, which has accumulated more than 60+ years of
            experience in the bearing industry, began its manufacturing
            operations way back in 1990. Based in Delhi, India, ARB Bearings is
            headed by highly qualified professionals who have extensive
            knowledge of the industry, thanks to which ARB Bearings is known as
            one of the most reliable producers of high-quality bearings. With an
            unwavering focus on quality and durability along with innovative
            thinking, ARB Bearings has managed to earn the trust of customers
            from diverse industries including automotive, agriculture,
            industrial machines, railway, mining, power, construction, and many
            others.
          </p>

          {/* Industries */}

          <div className="mt-3 grid grid-cols-3 gap-3">
            {[
              "Earthmover",
              "Automotive",
              "Agriculture",
              "Industrial",
              "Railway",
              "Mining",
              "Power",
              "Construction",
              "Many More",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-black/30 bg-black/5 p-3 backdrop-blur"
              >
                <CheckCircle2 className="text-[#CC1C15]" size={20} />

                <span className="text-black">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-7 flex flex-wrap gap-5">
            <Link href="/products/ball-bearing" className="group rounded-xl bg-gradient-to-r from-[#26196D] to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
              Explore Products
            </Link>

            <Link href="/contact-us" className="group flex items-center gap-3 rounded-xl border border-[#CC1C15] bg-[#CC1C15]/5 px-8 py-4 font-semibold text-black transition hover:border-[#CC1C15] hover:bg-[#CC1C15]/10">
              Contact Us
              <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
