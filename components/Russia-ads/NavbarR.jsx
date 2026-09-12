"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, PhoneCall, ArrowRight, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Enquiry from "@/components/Enquiry";
import Translator from "./TranslatorR";
import EnquiryR from "./EnquiryR";

export default function NavbarR() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const pathname = usePathname();



  const phoneNumber = 
     "+7-9859834837";

  const phoneHref = "tel:+79859834837";

 

  return (
    <header className="sticky top-0 z-[999] h-[110px]  w-full">
      <div className="relative z-[200] backdrop-blur-2xl py-5 bg-[#081B2E]/90 border-b border-white/10 shadow-[0_17px_40px_rgba(0,0,0,.18)]">
        <div className="max-w-7xl mx-auto px-3">
          <div className="h-18 flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Логотип"
                width={210}
                height={80}
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center px-5 gap-10">

              {/* Home */}
              <Link
                href="#home"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                Главная
              </Link>

              {/* About Us Dropdown */}
              <Link
              href="#about"
                className="relative"

              >
                <button className="flex items-center gap-2 text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]">
                  О компании

                 
                </button>

               
              </Link>

              {/* News & Events */}
              <Link
                href="#product"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                Подшипники

              </Link>

              {/* Contact */}
              <Link
                href="#contact"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                Контакты
              </Link>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-4">

              {/* Phone */}
              <a
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
              </a>

              {/* WhatsApp */}
              {/* <a
                href="https://wa.me/917834872136"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <FaWhatsapp size={20} />
              </a> */}

              {/* Get Quote Button */}
              <button
                onClick={() => setIsFormOpen(true)}
                className="group relative overflow-hidden rounded-full bg-white px-5 py-3 border border-blue-700 text-red-600 font-semibold shadow-[0_17px_40px_rgba(255,106,43,.45)] transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Получить предложение

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>

                {/* Button Shine Animation */}
                <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />
              </button>
            </div>

           

            <div className="px-2 flex justify-center items-center gap-2"><button  onClick={() => setIsFormOpen(true)} className="text-white md:hidden"><FileText size={35} /></button> <Translator /></div>

          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      {isFormOpen && (
        <EnquiryR
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </header>
  );
}