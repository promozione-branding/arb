

"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import { useState } from "react";
import EnquiryA from "./EnquiryA";

export default function ABoutA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const gallery = ["/about 11.webp", "/about 22.webp", "/about 33.webp"];

  const industries = [
    "Maquinaria de movimiento de tierras",
    "Industria automotriz",
    "Maquinaria agrícola",
    "Equipos industriales",
    "Equipos ferroviarios",
    "Industria minera",
    "ATV/UTV",
    "Maquinaria de construcción",
    "Y mucho más",
  ];

  const whatsappNumber = "9968373086";
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-14 sm:py-16"
    >
      {/* Background Blur */}
      <div className="pointer-events-none absolute -left-32 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-20 -right-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 md:gap-16 lg:grid-cols-2 lg:gap-20">
        {/* =========================================================
            LEFT - IMAGE / SLIDER
        ========================================================== */}
        <div className="relative mx-auto w-full max-w-[650px]">
          {/* Decorative Background Card */}
          <div
            className="
              absolute
              -left-2
              -top-2
              h-full
              w-full
              rounded-2xl
              border
              border-blue-500/20
              bg-[#CC1C15]/5
              backdrop-blur-xl
              sm:-left-4
              sm:-top-4
              sm:rounded-3xl
              lg:-left-6
              lg:-top-6
            "
          />

          {/* Image Container */}
          <div className="relative overflow-visible">
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-xl
                sm:rounded-3xl
                lg:shadow-2xl
              "
            >
              <Swiper
                modules={[Autoplay]}
                loop
                speed={1000}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                className="w-full"
              >
                {gallery.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="
                        relative
                        flex
                        h-[360px]
                        w-full
                        items-center
                        sm:h-[450px]
                        md:h-[520px]
                        lg:h-[620px]
                      "
                    >
                      <Image
                        src={image}
                        alt={`ARB Bearings — diapositiva ${index + 1}`}
                        width={100}
                        height={100}
                        priority={index === 0}
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 80vw,
                          50vw
                        "
                        className="h-[60%] w-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Experience Card */}
            <div
              className="
                absolute
                -bottom-7
                left-4
                z-20
                max-w-[230px]
                rounded-xl
                border
                border-blue-500/20
                bg-[#0d2036]/95
                px-5
                py-4
                shadow-[0_15px_45px_rgba(0,0,0,.35)]
                backdrop-blur-xl
                sm:-bottom-9
                sm:left-8
                sm:max-w-none
                sm:rounded-2xl
                sm:px-7
                sm:py-5
                lg:left-10
                lg:px-8
                lg:py-6
              "
            >
              <h3 className="text-3xl font-extrabold leading-none text-white sm:text-4xl lg:text-5xl">
                60+
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-300 sm:text-sm">
                años de experiencia en ingeniería y excelencia en fabricación
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT - CONTENT
        ========================================================== */}
        <div className="w-full">
          {/* Label */}
          <span
            className="
              inline-block
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-4
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[2px]
              text-[#CC1C15]
              sm:px-5
              sm:text-xs
              sm:tracking-[3px]
            "
          >
            Sobre ARB Bearings
          </span>

          {/* Heading */}
          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-[1.15]
              text-black
              sm:text-4xl
            "
          >
            Un legado de
            <span className="mt-1 block text-[#2d1c88]">
              excelencia en ingeniería
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              text-sm
              leading-6
              text-gray-800
              sm:text-base
              sm:leading-7
            "
          >
            Con más de 60 años de experiencia en la industria de los
            rodamientos y unas instalaciones de fabricación operativas desde
            1990, ARB Bearings se ha consolidado como un fabricante confiable
            de rodamientos de alta calidad para clientes de todo el mundo.
            Nuestros rodamientos de precisión están diseñados para ofrecer
            durabilidad, confiabilidad y un rendimiento constante en
            condiciones exigentes y en diversas industrias.
          </p>

          {/* Industries */}
          <div
            className="
              mt-6
              grid
              gap-2.5
              grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:mt-7
              lg:gap-3
            "
          >
            {industries.map((item) => (
              <div
                key={item}
                className="
                  flex
                  min-h-[48px]
                  w-full
                  min-w-0
                  items-start
                  gap-2.5
                  rounded-lg
                  border
                  border-black/20
                  bg-black/5
                  px-3
                  py-2.5
                  backdrop-blur
                  transition
                  hover:border-[#CC1C15]/40
                  hover:bg-[#CC1C15]/5
                  sm:rounded-xl
                  sm:p-3
                "
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#CC1C15]"
                  size={18}
                />

                <span
                  className="
                    min-w-0
                    flex-1
                    break-words
                    whitespace-normal
                    text-xs
                    font-medium
                    leading-5
                    text-black
                    sm:text-[15px]
                    sm:leading-6
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3
              sm:flex-row
              sm:flex-wrap
              sm:gap-4
              lg:mt-8
            "
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-[#26196D]
                to-blue-600
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition
                hover:scale-[1.02]
                sm:w-auto
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              Solicitar cotización
            </button>

            {/* WhatsApp */}
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#CC1C15]
                bg-[#CC1C15]/5
                px-6
                py-3.5
                text-sm
                font-semibold
                text-black
                transition
                hover:border-[#CC1C15]
                hover:bg-[#CC1C15]/10
                sm:w-auto
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              <FaWhatsapp size={19} />
              Escríbanos
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <EnquiryA
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </section>
  );
}

