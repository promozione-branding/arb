"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";

import "swiper/css";
import EnquiryR from "./EnquiryR";
import { useState } from "react";

const products = [
  {
    title: "Радиально-упорные шарикоподшипники",
    image: "/arb-images/DOUBLE POINT ANGULAR1.webp",
    desc: "Разработаны для одновременной работы с радиальными и осевыми нагрузками, обеспечивая высокую жёсткость и стабильную производительность в промышленных системах.",
    link: "/products/ball-bearing/double-row-angular-contact-bearings",
  },
  {
    title: "Четырёхточечные шарикоподшипники",
    image: "/arb-images/FOUR POINT ANGULAR CONTACT1.webp",
    desc: "Рассчитаны на осевые нагрузки в обоих направлениях при компактных размерах. Идеальны для редукторов, насосов и промышленного оборудования.",
    link: "/products/ball-bearing/four-point-contact-ball-bearings",
  },
  {
    title: "Радиальные шарикоподшипники",
    image: "/arb-images/BALL BEARING 62208 2RS1.webp",
    desc: "Высокоточные подшипники обеспечивают плавное вращение, низкое трение, высокую скорость работы и длительный срок службы.",
    link: "/products/ball-bearing/deep-groove-ball-bearing",
  },
  {
    title: "Подшипники ступиц колёс",
    image: "/arb-images/Wheel Bearing1.webp",
    desc: "Высокопроизводительные подшипники для плавного вращения колёс, снижения трения и надёжной эксплуатации автомобильных систем.",
    link: "/products/wheel-bearing/wheel-bearings",
  },
  {
    title: "Цилиндрические роликоподшипники",
    image: "/arb-images/CYLINDRICAL1.webp",
    desc: "Предназначены для работы с высокими радиальными нагрузками и обеспечивают жёсткость и эффективность в электродвигателях, редукторах и тяжёлом оборудовании.",
    link: "/products/roller-bearings/cylindrical-roller-bearings",
  },
  {
    title: "Конические роликоподшипники",
    image: "/arb-images/TAPER ROLLER.webp",
    desc: "Надёжные подшипники для комбинированных радиальных и осевых нагрузок с высокой прочностью, точностью и длительным сроком службы.",
    link: "/products/roller-bearings/tapered-roller-bearings",
  },
];

export default function CaetgoryR() {
    const [isFormOpen, setIsFormOpen] = useState(false);

  const whatsappNumber = "917834872136";

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-10 md:py-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-red-100/40 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end">

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-red-600" />

              <span className="text-xs font-bold uppercase tracking-[4px] text-red-600">
                ARB BEARINGS
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Наши подшипники
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Высокоточные подшипники для промышленного и автомобильного оборудования.
            </p>
          </div>

          <div className="hidden shrink-0 md:block">
            <div className="border-l border-slate-300 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-slate-400">
                Ассортимент
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-800">
                Высокоточные компоненты
              </p>
            </div>
          </div>
        </div>

        {/* Product Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={700}
            spaceBetween={14}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="overflow-hidden!"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    
                    flex-col
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_10px_35px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-blue-200
                    hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]
                    sm:min-h-[345px]
                    
                  "
                >
                  {/* Number */}
                  <div className="absolute left-4 top-4 z-20">
                    <span className="text-[10px] font-bold tracking-[2px] text-slate-300 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Product label */}
                  <div className="absolute right-4 top-4 z-20">
                    <span
                      className="
                        rounded-full
                        border
                        border-blue-100
                        bg-white/85
                        px-2.5
                        py-1
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[1px]
                        text-blue-600
                        backdrop-blur-md
                        sm:px-3
                        sm:text-[9px]
                      "
                    >
                      Высокая точность
                    </span>
                  </div>

                  {/* Product Image */}
                  <div
                    className="
                      relative
                      flex
                      h-auto
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      bg-gradient-to-br
                      from-slate-50
                      via-white
                      to-blue-50
                      px-4
                      pt-6
                      sm:h-[235px]
                      sm:px-5
                      md:h-[245px]
                      lg:h-[255px]
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-28
                        w-28
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-blue-500/10
                        blur-2xl
                        transition-all
                        duration-500
                        group-hover:scale-150
                      "
                    />

                    {/* Outer ring */}
                    <div
                      className="
                        absolute
                        h-32
                        w-32
                        rounded-full
                        border
                        border-blue-100
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:border-blue-200
                        sm:h-40
                        sm:w-40
                        lg:h-44
                        lg:w-44
                      "
                    />

                    {/* Inner ring */}
                    <div
                      className="
                        absolute
                        h-24
                        w-24
                        rounded-full
                        border
                        border-dashed
                        border-slate-200
                        transition-all
                        duration-700
                        group-hover:rotate-90
                        sm:h-28
                        sm:w-28
                        lg:h-32
                        lg:w-32
                      "
                    />

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={600}
                      sizes="
                        (max-width: 640px) 42vw,
                        (max-width: 1024px) 30vw,
                        22vw
                      "
                      className="
                        relative
                        z-10
                        h-[135px]
                        w-full
                        object-contain
                        transition-transform
                        duration-700
                        group-hover:scale-110
                        sm:h-[160px]
                        md:h-[175px]
                        lg:h-[185px]
                      "
                    />

                    {/* Bottom shine */}
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                  </div>

                  {/* Product Content */}
                  <div className="flex flex-1 flex-col p-2 sm:p-5">

                    <h3
                      className="
                        text-sm
                        font-bold
                        leading-5
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-[#1D4ED8]
                        sm:min-h-[50px]
                        sm:text-lg
                        sm:leading-6
                      "
                    >
                      {item.title}
                    </h3>

                    

                    {/* Buttons */}
                    <div className=" pt-4">

                     

                      {/* Quote + WhatsApp */}
                      <div className="grid grid-cols-2 gap-2">

                        {/* Get Quote */}
                        <button
                          onClick={() => setIsFormOpen(true)}
                          className="
                            flex
                            items-center
                            justify-center
                            gap-1.5
                            rounded-xl
                            bg-[#29166F]
                            px-2
                            py-2.5
                            text-[10px]
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[#1f105a]
                            sm:gap-2
                            sm:px-3
                            sm:py-3
                            sm:text-xs
                          "
                        >
                          <ArrowRight size={13} />
                          Цитировать
                        </button>

                        {/* WhatsApp */}
                        <a
                          href="tel:+79859834837"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            justify-center
                            gap-1.5
                            rounded-xl
                            bg-red-500
                            px-2
                            py-2.5
                            text-[10px]
                            font-bold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-red-600
                            sm:gap-2
                            sm:px-3
                            sm:py-3
                            sm:text-xs
                          "
                        >
                          <Phone size={14} />
                          Вызов

                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hover Accent */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-gradient-to-r
                      from-[#29166F]
                      via-blue-500
                      to-red-600
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 sm:text-sm">
            Высокоточные подшипники для сложных промышленных задач.
          </p>

          <button
            href="/products/ball-bearing"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8]"
          >
           Цитировать



            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>

       {isFormOpen && (
        <EnquiryR
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </section>
  );
}