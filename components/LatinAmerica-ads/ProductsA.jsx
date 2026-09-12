
"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "swiper/css";
import { useState } from "react";
import EnquiryA from "./EnquiryA";

// Ball bearing products
const ballBearingProducts = [
  {
    name: "Rodamiento rígido de bolas",
    image: "/arb-images/Ball-Bearing-Final.webp",
    link: "/products/ball-bearing/deep-groove-ball-bearing",
  },
  {
    name: "Rodamiento de bolas de contacto angular",
    image: "/russia/angular.webp",
    link: "/products/ball-bearing/angular-contact-ball-bearing",
  },
  {
    name: "Rodamiento de bolas de cuatro puntos de contacto",
    image: "/russia/four.webp",
    link: "/products/ball-bearing/four-point-contact-ball-bearings",
  },
  {
    name: "Rodamiento de buje de rueda",
    image: "/russia/wheel.webp",
    link: "/products/wheel-bearing/wheel-bearings",
  },
  {
    name: "Rodamiento axial de bolas",
    image: "/russia/thrust.webp",
    link: "/products/ball-bearing/thrust-ball-bearing",
  },
  {
    name: "Rodamiento de bolas autoalineable",
    image: "/russia/self.webp",
    link: "/products/ball-bearing/self-aligning-ball-bearing",
  },
];

// Roller bearing products
const rollerBearingProducts = [
  {
    name: "Rodamiento de rodillos cilíndricos",
    image: "/russia/cylinder.webp",
    link: "/products/roller-bearings/cylindrical-roller-bearings",
  },
  {
    name: "Rodamiento de rodillos cónicos",
    image: "/russia/taper.webp",
    link: "/products/roller-bearings/tapered-roller-bearings",
  },
  {
    name: "Rodamiento de rodillos esféricos",
    image: "/russia/spherical.webp",
    link: "/products/roller-bearings/spherical-roller-bearings",
  },
  {
    name: "Rodamiento de agujas",
    image: "/russia/needle.webp",
    link: "/products/roller-bearings/needle-roller-bearings",
  },
  {
    name: "Rodamiento axial de rodillos",
    image: "/russia/thrust.webp",
    link: "/products/roller-bearings/thrust-roller-bearings",
  },
];

// Mixed bearing products
const mixedBearingProducts = [
  {
    name: "Rodamiento de buje de rueda",
    image: "/russia/wheel.webp",
    link: "/products/wheel-bearing/wheel-bearings",
  },
  {
    name: "Rodamiento de bolas autoalineable",
    image: "/russia/self.webp",
    link: "/products/ball-bearing/self-aligning-ball-bearing",
  },
  {
    name: "Rodamiento axial de bolas",
    image: "/russia/thrust.webp",
    link: "/products/ball-bearing/thrust-ball-bearing",
  },
  {
    name: "Rodamiento de bolas de contacto angular",
    image: "/russia/angular.webp",
    link: "/products/ball-bearing/angular-contact-ball-bearing",
  },
  {
    name: "Rodamiento rígido de bolas",
    image: "/arb-images/Ball-Bearing-Final.webp",
    link: "/products/ball-bearing/deep-groove-ball-bearing",
  },
];

const whatsappNumber = "9968373086";
const whatsappHref = `https://wa.me/${whatsappNumber}`;

// Reusable product slider
function ProductSlider({ title, subtitle, products }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative">
      {/* Slider Header */}
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-red-600" />

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-red-600 sm:text-xs">
              ARB BEARINGS
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {title}
          </h3>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
            {subtitle}
          </p>
        </div>

        {/* WhatsApp */}
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="
            group
            hidden
            shrink-0
            items-center
            gap-2
            text-sm
            font-bold
            text-[#1D4ED8]
            sm:inline-flex
          "
        >
          <FaWhatsapp size={17} />
          Escríbanos
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>

      {/* Product Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={products.length > 4}
        speed={700}
        spaceBetween={10}
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="overflow-hidden"
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={`${product.name}-${index}`}
            className="h-auto"
          >
            <div
              className="
                group
                relative
                flex
                h-auto
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
                hover:shadow-[0_25px_65px_rgba(15,23,42,0.14)]
                sm:min-h-[410px]
                lg:min-h-[435px]
              "
            >
              {/* Product Number */}
              <div className="absolute left-4 top-4 z-20">
                <span className="text-[10px] font-bold tracking-[2px] text-slate-300 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Precision Badge */}
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
                  Alta precisión
                </span>
              </div>

              {/* Product Image */}
              <div
                className="
                  relative
                  flex
                  h-[195px]
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
                  sm:h-[225px]
                  sm:px-6
                  lg:h-[245px]
                "
              >
                {/* Product Glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-32
                    w-32
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

                {/* Outer Ring */}
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
                  "
                />

                {/* Inner Ring */}
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
                  "
                />

                <Image
                  src={product.image}
                  alt={product.name}
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
                    h-[130px]
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    sm:h-[155px]
                    lg:h-[180px]
                  "
                />

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-2 sm:p-5">
                <h4
                  className="
                    min-h-[42px]
                    text-sm
                    font-bold
                    leading-5
                    text-slate-900
                    wrap-break-word
                    transition-colors
                    duration-300
                    group-hover:text-[#1D4ED8]
                    sm:min-h-[48px]
                    sm:text-lg
                    sm:leading-6
                  "
                >
                  {product.name}
                </h4>

                {/* CTA Buttons */}
                <div className="mt-auto pt-5">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Get Quote */}
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="
                        flex
                        items-center
                        justify-center
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
                        hover:bg-[#211157]
                        sm:px-3
                        sm:py-3
                        sm:text-xs
                      "
                    >
                      Solicitar cotización
                    </button>

                    {/* WhatsApp */}
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contactar por WhatsApp"
                      className="
                        flex
                        items-center
                        justify-center
                        gap-1.5
                        rounded-xl
                        bg-[#CC1C15]
                        px-2
                        py-2.5
                        text-[10px]
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#a81712]
                        sm:gap-2
                        sm:px-3
                        sm:py-3
                        sm:text-xs
                      "
                    >
                      <FaWhatsapp size={13} />
                      Escríbanos
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
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

      {isFormOpen && (
        <EnquiryR
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}

export default function ProductsA() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="product"
      className="relative overflow-hidden bg-[#f7f9fc] py-7 sm:py-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-[40%] h-[420px] w-[420px] rounded-full bg-red-100/40 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-100/40 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Main Header */}
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-red-600" />

            <span className="text-xs font-bold uppercase tracking-[4px] text-red-600">
              ARB BEARINGS
            </span>

            <span className="h-[2px] w-10 bg-red-600" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Nuestros productos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore nuestra gama completa de rodamientos de alta precisión,
            diseñados para aplicaciones automotrices, industriales, agrícolas,
            ferroviarias, de construcción y maquinaria pesada.
          </p>
        </div>

        {/* 01. Ball Bearings */}
        <ProductSlider
          title="Rodamientos de bolas"
          subtitle="Rodamientos de bolas de alto rendimiento, diseñados para un funcionamiento suave, baja fricción, alta velocidad y una larga vida útil."
          products={ballBearingProducts}
        />

        {/* 02. Roller Bearings */}
        <div className="mt-5 border-t border-slate-200 pt-4 sm:mt-7 sm:pt-7">
          <ProductSlider
            title="Rodamientos de rodillos"
            subtitle="Rodamientos de rodillos fiables, diseñados para soportar cargas elevadas, condiciones exigentes y un funcionamiento industrial continuo."
            products={rollerBearingProducts}
          />
        </div>

        {/* 03. Mixed Bearings */}
        <div className="mt-5 border-t border-slate-200 pt-4 sm:mt-7 sm:pt-7">
          <ProductSlider
            title="Otros rodamientos"
            subtitle="Una amplia selección de rodamientos para maquinaria automotriz, minera, agrícola, ferroviaria, de construcción e industrial."
            products={mixedBearingProducts}
          />
        </div>

        {/* Final CTA */}
        <div className="mt-14 rounded-3xl bg-[#081829] px-6 py-8 text-center shadow-2xl sm:px-10 sm:py-10 lg:mt-20">
          <p className="text-xs font-bold uppercase tracking-[3px] text-blue-400">
            ARB BEARINGS
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Precisión. Rendimiento. Fiabilidad.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            Encuentre la solución adecuada para su aplicación. Nuestros
            especialistas le ayudarán a seleccionar el rodamiento adecuado y
            preparar una cotización.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Get Quote */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-white
                px-7
                py-3.5
                text-sm
                font-bold
                text-[#29166F]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Solicitar cotización
            </button>

            {/* WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#CC1C15]
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#a81712]
              "
            >
              <FaWhatsapp size={16} />
              Escríbanos
            </a>
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
