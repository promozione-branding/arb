"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Double Row Angular Contact Ball Bearings",
    image: "/arb-images/DOUBLE POINT ANGULAR CONTACT.png",
    desc: "Designed to accommodate combined radial and axial loads in both directions, offering high rigidity and reliable performance for demanding industrial applications.",

link:"/products/ball-bearing/double-row-angular-contact-ball-bearings"

  },
  {
    title: "Four Point Contact Ball Bearings",
    image: "/arb-images/FOUR POINT ANGULAR CONTACT.png",
    desc: "Engineered to support axial loads in both directions while occupying minimal space, making them ideal for gearboxes, pumps, and industrial machinery.",
    link:"/products/ball-bearing/four-point-contact-ball-bearings"
  },
  {
    title: "Ball Bearings",
    image: "/arb-images/BALL BEARING 62208 2RS.png",
    desc: "Precision-engineered ball bearings deliver smooth rotation, low friction, high-speed operation, and extended service life across automotive and industrial applications.",
    link:"/products/ball-bearing/ball-bearings"
  },
  {
    title: "Wheel Bearings",
    image: "/arb-images/Wheel Bearing.png",
    desc: "High-performance wheel bearings provide smooth wheel rotation, reduced friction, and enhanced durability for reliable automotive performance and safety.",
    link:"/products/wheel-bearing/wheel-bearings"
  },
  {
    title: "Cylindrical Roller Bearings",
    image: "/arb-images/CYLINDRICAL BEARING NU-212 E.png",
    desc: "Built to handle heavy radial loads with exceptional rigidity, ensuring efficient performance in electric motors, gearboxes, and heavy industrial equipment.",
    link:"/products/roller-bearings/cylindrical-roller-bearings"
  },
  {
    title: "Mix Cylindrical Roller Bearings",
    image: "/arb-images/CYLINDRICAL BEARING JC 8003.png",
    desc: "Manufactured for high load capacity and dependable operation, these bearings offer superior strength and durability for demanding industrial and automotive applications.",
    link:"/products/roller-bearings/mix-cylindrical-roller-bearings"
  },
];
export default function ProductCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto ">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={700}
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center p-4">
                <div className="flex justify-center items-center h-[140px]">
                <div className="flex items-center justify-center h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    width={600}
    height={600}
    className="w-auto h-full max-w-full md:h-full md:w-full object-cover transition-transform duration-300 hover:scale-110"
  />  
</div>
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-black leading-7 text-sm">{item.desc}</p>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 mt-5 font-medium text-red-700 hover:text-red-800"
                >
                  View More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
