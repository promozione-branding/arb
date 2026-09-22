"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const EnquiryU = dynamic(() => import("./EnquiryU"), {
  ssr: false,
  loading: () => null,
});

const bearingImages = [
  "/hero/11.webp",
  "/hero/22.webp",
  "/hero/33.webp",
  "/hero/44.webp",
  // "/hero/Image 11.webp",
];

const typedTexts = [
  "ادفع عجلة التقدم",
  "زد الإنتاجية",
];

export default function HeroInteractive({
  typewriterOnly = false,
  buttonsOnly = false,
  sliderOnly = false,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* =========================================================
      TYPEWRITER
  ========================================================= */

  useEffect(() => {
    if (!typewriterOnly) return;

    const currentText = typedTexts[textIndex];

    // Finished typing
    if (!isDeleting && typedText === currentText) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);

      return () => clearTimeout(pauseTimer);
    }

    // Finished deleting
    if (isDeleting && typedText === "") {
      setIsDeleting(false);

      setTextIndex((prev) => {
        return (prev + 1) % typedTexts.length;
      });

      return;
    }

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setTypedText(currentText.slice(0, -1));
        } else {
          setTypedText(
            currentText.slice(0, typedText.length + 1)
          );
        }
      },
      isDeleting ? 40 : 85
    );

    return () => clearTimeout(timer);
  }, [
    typewriterOnly,
    typedText,
    textIndex,
    isDeleting,
  ]);

  /* =========================================================
      SLIDER AUTOPLAY
  ========================================================= */

  useEffect(() => {
    if (!sliderOnly) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        return (prev + 1) % bearingImages.length;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [sliderOnly]);

  /* =========================================================
      TYPEWRITER ONLY
  ========================================================= */

  if (typewriterOnly) {
    return (
      <span
        className="
          typewriter-text
          relative
          mt-2
          block
          min-h-[1.12em]
          bg-gradient-to-r
          from-[#241260]
          via-[#3C2A9E]
          to-[#2563EB]
          bg-clip-text
          text-transparent
        "
      >
        {typedText || typedTexts[0]}

        <span
          className="
            type-cursor
            ml-1
            inline-block
            h-[0.78em]
            w-[3px]
            translate-y-[2px]
            rounded-full
            bg-[#29166F]
            align-middle
          "
        />
      </span>
    );
  }

  /* =========================================================
      BUTTONS ONLY
  ========================================================= */

  if (buttonsOnly) {
    return (
      <>
        <div
          className="
            hero-buttons
            mt-7
            flex
            w-full
            flex-col
            justify-center
            gap-3
            sm:mt-8
            sm:flex-row
            sm:gap-4
            lg:justify-start
          "
        >
          {/* Get Quote */}

          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="
              group
              relative
              flex
              w-full
              items-center
              justify-center
              gap-3
              overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-[#26196D]
              via-[#35258B]
              to-blue-600
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_15px_40px_rgba(38,25,109,0.25)]
              transition-transform
              duration-300
              hover:-translate-y-1
              sm:w-auto
              sm:px-7
              sm:text-base
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative">
              طلب عرض سعر
            </span>

            <span
              className="
                relative
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>

          {/* WhatsApp */}

          <a
            href="https://wa.me/9968373086"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا عبر WhatsApp"
            className="
              group
              relative
              flex
              w-full
              items-center
              justify-center
              gap-3
              overflow-hidden
              rounded-xl
              border
              border-green-600
              bg-white/50
              px-6
              py-3.5
              text-sm
              font-semibold
              text-green-600
              backdrop-blur-md
              transition-transform
              duration-300
              hover:-translate-y-1
              hover:bg-green-600
              hover:text-white
              sm:w-auto
              sm:px-7
              sm:text-base
            "
          >
            <span className="relative">
              WhatsApp
            </span>

            {/* Lightweight inline WhatsApp icon */}

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              aria-hidden="true"
              className="
                relative
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
              <path d="M20.52 3.449A11.845 11.845 0 0 0 12.05.002C5.495.002.162 5.335.162 11.891c0 2.096.547 4.143 1.586 5.949L.1 23.9l6.2-1.626a11.88 11.88 0 0 0 5.745 1.464h.005c6.555 0 11.887-5.333 11.887-11.888a11.82 11.82 0 0 0-3.417-8.401ZM12.05 21.72h-.004a9.87 9.87 0 0 1-5.03-1.377l-.36-.214-3.68.965.982-3.59-.235-.368a9.86 9.86 0 0 1-1.515-5.245c.001-5.433 4.423-9.854 9.86-9.854a9.8 9.8 0 0 1 6.975 2.891 9.8 9.8 0 0 1 2.886 6.979c-.003 5.433-4.425 9.854-9.86 9.854Z" />
            </svg>
          </a>
        </div>

        {/* Popup is loaded only after click */}

        {isFormOpen && (
          <EnquiryU
            IATFpen={true}
            onClose={() => setIsFormOpen(false)}
          />
        )}
      </>
    );
  }

  /* =========================================================
      SLIDER ONLY
  ========================================================= */

  if (sliderOnly) {
    return (
      <>
        <div
          className="
            relative
            z-10
            h-[280px]
            w-full
            max-w-[420px]
            overflow-hidden
            sm:h-[360px]
            sm:max-w-[500px]
            md:h-[460px]
            md:max-w-[580px]
            lg:h-[560px]
            lg:max-w-[620px]
            xl:h-[620px]
            2xl:h-[680px]
            2xl:max-w-[350px]
          "
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              key={bearingImages[currentSlide]}
              src={bearingImages[currentSlide]}
              alt={`محمل ${currentSlide + 1}`}
              width={500}
              height={500}
              priority={currentSlide === 0}
              loading={currentSlide === 0 ? "eager" : "lazy"}
              fetchPriority={
                currentSlide === 0 ? "high" : "auto"
              }
              sizes="
                (max-width: 640px) 90vw,
                (max-width: 1024px) 50vw,
                45vw
              "
              quality={70}
              className="
                bearing-image
                h-full
                w-full
                object-contain
              "
            />
          </div>
        </div>

        {/* Slider dots */}

        <div
          className="
            absolute
            bottom-[8%]
            left-1/2
            z-30
            flex
            -translate-x-1/2
            items-center
            gap-2
          "
        >
          {bearingImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`الانتقال إلى المحمل ${index + 1}`}
              aria-current={
                currentSlide === index
                  ? "true"
                  : undefined
              }
              onClick={() => setCurrentSlide(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  currentSlide === index
                    ? "w-8 bg-[#29166F]"
                    : "w-1.5 bg-gray-400/60"
                }
              `}
            />
          ))}
        </div>
      </>
    );
  }

  return null;
}