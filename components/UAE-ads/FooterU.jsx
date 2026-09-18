"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { russiaLocations } from "@/lib/russiaLocations";
import { FaWhatsapp } from "react-icons/fa";

export default function FooterU() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  const adminLayout = pathname.startsWith("/admin");

  if (adminLayout) return null;

  const currentSlug = pathname.split("/").filter(Boolean).pop();

  const isRussiaLocation = russiaLocations.includes(currentSlug);

  const whatsappNumber = "9968373086";
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="relative overflow-hidden pt-10 pb-5 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/20250507130744862683.webp')",
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(0,0,0,0.85) 0%,
              rgba(0,0,0,0.72) 35%,
              rgba(0,0,0,0.82) 100%
            )
          `,
        }}
      />

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-600 to-red-600" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div>
            <Link href="#home">
              <Image
                src="/logo.png"
                width={270}
                height={250}
                alt="شعار ARB Bearings"
                className="object-cover"
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white">
              بصفتها شركة موثوقة لتصنيع المحامل، تلتزم ARB Bearings بتوريد
              منتجات تلبي أعلى معايير الجودة والدقة والموثوقية. يخضع كل محمل
              لاختبارات صارمة ومراقبة دقيقة للجودة في جميع مراحل التصنيع.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold">
              روابط سريعة
            </h3>

            <ul className="space-y-3 text-sm tracking-wider">
              {[
                ["الرئيسية", "#home"],
                ["من نحن", "#about-us"],
                ["المقالات", "#articles"],
                ["اتصل بنا", "#contact-us"],
                ["سياسة الخصوصية", "#privacy-policy"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-red-600 hover:underline hover:decoration-red-600 hover:underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold">منتجاتنا</h3>

            <ul className="space-y-3 text-sm tracking-wider">
              {[
                ["المحامل الكروية", "#ball-bearings"],
                ["محامل محور العجلة", "#wheel-bearings"],
                ["المحامل الأسطوانية", "#roller-bearings"],
                ["وحدات محور العجلة", "#wheel-bearing-hub"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-red-600 hover:underline hover:decoration-red-600 hover:underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div id="contact-us">
            <h3 className="mb-4 font-serif text-xl font-semibold">اتصل بنا</h3>

            <div className="space-y-4 text-sm">
              {/* DIRECCIÓN */}
              <div className="flex  gap-3 items-start">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />

                <p className="leading-relaxed whitespace-pre-line">
                  إتش-22، أوديوغ ناجار، نيودلهي 110041، الهند
                </p>
              </div>


              <div className="flex  pb-3 gap-3 items-center">
    <Phone className="w-5 h-5 text-red-600 shrink-0" />

    <a
      href="tel:+919968373086"
      className="hover:text-red-600 transition-colors"
    >
      +91-9968373086
    </a>
  </div>
            </div>

            <div className="space-y-4 text-sm">
              {/* WHATSAPP */}
              <div className="flex items-center gap-3">
                <FaWhatsapp className="h-5 w-5 shrink-0 text-red-600" />

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-red-600 hover:underline hover:decoration-red-600 hover:underline-offset-4"
                >
                  تواصل معنا عبر واتساب
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:export@arb-bearings.com"
                    className="transition-colors hover:text-red-600 hover:underline hover:decoration-red-600 hover:underline-offset-4"
                  >
                    export@arb-bearings.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST ELITE */}
          <div>
            <h3 className="mb-3 font-serif text-xl font-semibold text-white">
              شهادة TrustElite
            </h3>

            <p className="mb-3 text-sm leading-relaxed text-white">
              نفخر بحصول ARB Bearings على شهادة TrustElite للتميز، تقديرًا
              لمستوى خدمة العملاء المتميز، والممارسات التجارية الناجحة،
              والالتزام بتعزيز ثقة عملائنا.
            </p>

            <div className="flex justify-center md:justify-end">
              <img
                src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726401/trustseal_vltgii.webp"
                alt="شهادة TrustElite"
                className="h-28 w-28 cursor-pointer object-contain transition hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              />

              {/* Certificate Modal */}
              {isModalOpen && (
                <div
                  className="fixed inset-0 z-[9999999] mt-20 flex items-center justify-center bg-white/10 p-4 backdrop-blur-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute right-2 top-2 text-2xl font-bold text-white"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </button>

                    <img
                      src="/trustElite.webp"
                      alt="شهادة TrustElite الكاملة"
                      className="h-[75vh] w-[60vw] rounded-lg object-contain shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-sm">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <p>© 2026 ARB Bearings. جميع الحقوق محفوظة.</p>

            <p>
              تم تطوير الموقع بواسطة Inquiry Bazaar Pvt. Ltd.{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://inquirybazaar.com/"
                className="text-red-600 hover:underline"
              >
                سوق B2B
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
