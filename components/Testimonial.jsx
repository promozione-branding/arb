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
    <section className="relative bg-[#edf1f4] py-15 overflow-hidden">
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

          <h2 className="mt-3 text-4xl md:text-5xl  font-black text-[#16110b] tracking-tight">
            Happy With Customers & Clients
          </h2>
        </div>

        <div className="mt-10">
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
            className="testimonialSwiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative bg-white p-11 h-full">
                  {/* Quote */}

                  <div className="absolute left-6 top-3 text-[140px] text-[#28186C] leading-none font-serif select-none">
                    “
                  </div>

                  {/* Yellow Line */}

                  <div className="absolute left-12 top-20 w-[5px] h-32 bg-[#DA251C]" />

                  {/* Text */}

                  <div className="relative pl-12">
                    <p className="text-[20px] italic leading-[2] text-[#171717]">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="flex items-center gap-6 mt-14">
                    <div>
                      <h3 className="text-3xl  font-black text-[#28186C]">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-[#DA251C] text-md font-semibold">
                        {item.role}
                      </p>
                    </div>
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
