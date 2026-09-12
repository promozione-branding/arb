"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  
  PhoneCall,
  ArrowRight,
  FileText,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EnquiryU from "./EnquiryU";
import TranslatorU from "./TranslatorU";

export default function NavbarA() {
  const [isFormOpen, setIsFormOpen] = useState(false);


  // WhatsApp
  const whatsappNumber = "9968373086";
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="sticky top-0 z-[999] h-[110px] w-full">
      <div className="relative z-[200] backdrop-blur-2xl py-5 bg-[#081B2E]/90 border-b border-white/10 shadow-[0_17px_40px_rgba(0,0,0,.18)]">
        <div className="max-w-7xl mx-auto px-3">
          <div className="h-18 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="الشعار"
                width={210}
                height={80}
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center px-5 gap-10">
              {/* Inicio */}
              <Link
                href="#home"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                الرئيسية
              </Link>

              {/* Sobre Nosotros */}
              <Link href="#about" className="relative">
                <button className="flex items-center gap-2 text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]">
                  من نحن
                </button>
              </Link>

              {/* Rodamientos */}
              <Link
                href="#product"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                المحامل
              </Link>

              {/* Contacto */}
              <Link
                href="#contact"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                اتصل بنا
              </Link>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              {/* <a
                href={phoneHref}
                className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-5 py-3 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-[#C52C1D] flex items-center justify-center text-white">
                  <PhoneCall size={18} />
                </div>

                <div>
                  <p className="text-white font-semibold text-sm">
                    {phoneNumber}
                  </p>
                </div>
              </a> */}

              {/* WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="تواصل معنا عبر واتساب"
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <FaWhatsapp size={22} />
              </a>

              {/* Obtener Cotización */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="group relative overflow-hidden rounded-full bg-white px-5 py-3 border border-blue-700 text-red-600 font-semibold shadow-[0_17px_40px_rgba(255,106,43,.45)] transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  احصل على عرض سعر
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>

                {/* Button Shine Animation */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="px-2 flex justify-center items-center gap-2">
              {/* Mobile Enquiry */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="text-white md:hidden"
                aria-label="طلب معلومات"
              >
                <FileText size={35} />
              </button>

              {/* WhatsApp Mobile */}
              <TranslatorU />
            </div>
          </div>
        </div>
      </div>

      {/* نموذج الاستفسار */}
      {isFormOpen && (
        <EnquiryU
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </header>
  );
}