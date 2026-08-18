"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Maintenance Manager",

    text: "The bearings deliver smooth operation and consistent performance even in demanding conditions. We've seen a noticeable improvement in equipment efficiency",
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Plant Engineer",
    image: "/testimonial2.jpg",

    text: "These bearings have significantly reduced downtime thanks to their exceptional durability and long service life. A reliable choice for industrial applications.",
  },
  {
    id: 3,
    name: "Sandeep Mehta",
    role: "Production SupervIATFr",

    image: "/testimonial2.jpg",
    text: "The precision and build quality of these bearings are outstanding. They fit perfectly and perform reliably under continuous operation",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Operations Head",
    image: "/testimonial2.jpg",
    text: "We've used these bearings in heavy-duty machinery, and they consistently deliver excellent load-carrying performance with minimal wear.",
  },
  {
    id: 5,
    name: "Neeraj Gupta",
    role: "Procurement Manager",
    image: "/testimonial2.jpg",
    text: "Every bearing we've received has met our quality expectations. The consistency in manufacturing gives us complete confidence in the product.",
  },

  {
    id: 6,
    name: "Rohit Kulkarni",
    role: "Factory Manager",
    image: "/testimonial2.jpg",
    text: "These bearings perform exceptionally well in challenging industrial environments. Their strength, reliability, and durability make them our preferred choice.",
  },

  {
    id: 7,
    name: "Anil Desai",
    role: "Mechanical Engineer",
    image: "/testimonial2.jpg",
    text: "The long operational life and dependable performance of these bearings have helped us lower maintenance costs and improve equipment reliability.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#edf1f4] md:pt-15 pb-5 pt-10 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none ">
        <Image
          src="/imgi_49_bg-map.png"
          alt=""
          width={1100}
          height={500}
          className="mt-15"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-5">
            <span className="uppercase tracking-wide text-[#DA251C] font-semibold">
              What our client say
            </span>
          </div>

          <h2 className="mt-3 text-3xl md:text-5xl  font-black text-[#16110b] tracking-tight">
            Happy With Customers & Clients
          </h2>
        </div>

        <div className="md:mt-10 mt-5">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={900}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="testimonialSwiper pb-12!"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative flex h-full min-h-60 flex-col overflow-hidden bg-white p-5 sm:p-7 md:p-9 lg:p-11">
                  {/* Quote */}
                  <div className="absolute left-3 top-1 select-none font-serif text-[90px] leading-none text-[#28186C] sm:left-4 sm:top-2 sm:text-[110px] md:left-5 md:text-[125px] lg:left-6 lg:top-3 lg:text-[140px]">
                    “
                  </div>

                  {/* Red Line */}
                  <div className="absolute left-5 top-20 h-24 w-[4px] bg-[#DA251C] sm:left-7 sm:top-24 sm:h-28 md:left-9 md:top-28 md:h-32 lg:left-12 lg:top-20 lg:h-32" />

                  {/* Text */}
                  <div className="relative flex-1 pl-7 sm:pl-9 md:pl-10 lg:pl-12">
                    <p className="text-base italic leading-7 text-[#171717] sm:text-lg sm:leading-8 md:text-[19px] md:leading-[1.8] lg:text-[20px] lg:leading-[2]">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-2 border-t border-gray-100 pt-5 sm:mt-10 sm:pt-6 md:mt-12 lg:mt-14 lg:border-0 lg:pt-0">
                    <h3 className="text-xl font-black leading-tight text-[#28186C] sm:text-2xl md:text-3xl">
                      {item.name}
                    </h3>

                    <p className="mt-1.5 text-sm font-semibold text-[#DA251C] sm:text-base md:mt-2">
                      {item.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
