"use client";

import Image from "next/image";

export default function TrustedBrands() {
  const brands = [
    "/client/25.webp",
    "/client/2.webp",
    "/client/4.webp",
    "/client/24.webp",
    "/client/7.webp",
    "/client/8.webp",
    "/client/9.webp",
    "/client/10.webp",
    "/client/11.webp",
    "/client/12.webp",
    "/client/13.webp",
    "/client/14.webp",
    "/client/15.webp",
    "/client/16.webp",
    "/client/17.webp",
    "/client/18.webp",
    "/client/19.webp",
    "/client/20.webp",
    "/client/22.webp",
    "/client/21.webp",
    "/client/23.webp",
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="relative overflow-hidden border-y border-cyan-200 bg-white py-3 md:py-10">
      <div className="mx-auto w-full px-4 md:px-10">
        <h3 className="mb-10 text-center text-sm font-bold tracking-[0.25em] text-[#D9251C]">
          TRUSTED BY LEADING INDUSTRIES
        </h3>

        {/* Marquee */}
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-[brandScroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {duplicatedBrands.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="mr-5 w-[145px] shrink-0 sm:mr-6 sm:w-[160px] md:mr-8 md:w-[180px]"
              >
                <div className="flex h-[90px]  items-center justify-center rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl  md:h-38 md:rounded-2xl md:p-4">
                  <Image
                    src={logo}
                    alt={`Trusted brand ${index + 1}`}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-7 text-center text-xs">
        *The logos used in the creative are properties/copyrights of the
        respective companies*
      </p>

      {/* Tailwind/JSX animation */}
      <style jsx>{`
        @keyframes brandScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
