
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  ArrowRight,
  FileText,
} from "lucide-react";

import EnquiryR from "./EnquiryR";
import Translator from "./TranslatorR";

export default function NavbarR() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const phoneNumber = "+7-9859834837";
  const phoneHref = "tel:+79859834837";

  // Close mobile menu after navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Главная", href: "#home" },
    { label: "О компании", href: "#about" },
    { label: "Подшипники", href: "#product" },
    { label: "Контакты", href: "#contact" },
  ];

  const openEnquiry = () => {
    setMobileMenuOpen(false);
    setIsFormOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-[999] w-full">

        {/* Main Navbar */}
        <div className="relative z-[200] border-b border-white/10 bg-[#081B2E]/95 py-3 shadow-[0_17px_40px_rgba(0,0,0,.18)] backdrop-blur-2xl sm:py-4">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex min-h-[58px] items-center justify-between gap-3">

              {/* Logo */}
              <Link
                href="/"
                className="relative flex shrink-0 items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/logo.png"
                  alt="Логотип"
                  width={210}
                  height={80}
                  priority
                  className="h-auto w-[125px] object-contain sm:w-[160px] lg:w-[190px]"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-5 xl:flex">

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="whitespace-nowrap text-[15px] font-semibold text-white transition-colors duration-300 hover:text-[#ff6a2b] 2xl:text-[17px]"
                  >
                    {link.label}
                  </Link>
                ))}

              </nav>

              {/* Desktop Right Actions */}
              <div className="hidden items-center gap-3 lg:flex">

                {/* Phone */}
                <a
                  href={phoneHref}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 transition-all duration-300 hover:bg-white/10 xl:gap-3 xl:px-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C52C1D] text-white">
                    <PhoneCall size={17} />
                  </div>

                  <p className="whitespace-nowrap text-sm font-semibold text-white">
                    {phoneNumber}
                  </p>
                </a>

                {/* Translator - Desktop */}
                <div className="flex shrink-0 items-center">
                  <Translator />
                </div>

                {/* Get Quote Button */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group relative overflow-hidden whitespace-nowrap rounded-full border border-blue-700 bg-white px-4 py-3 text-sm font-semibold text-red-600 shadow-[0_10px_30px_rgba(255,106,43,.3)] transition-all duration-300 hover:scale-105 xl:px-5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Получить предложение

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                  <span className="absolute inset-0 -translate-x-[120%] skew-x-12 bg-white/30 transition-transform duration-700 group-hover:translate-x-[120%]" />
                </button>

              </div>

              {/* Mobile / Tablet Actions */}
              <div className="flex shrink-0 items-center gap-2 lg:hidden">

                {/* Enquiry Button */}
                <button
                  onClick={openEnquiry}
                  aria-label="Получить предложение"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 sm:h-11 sm:w-11"
                >
                  <FileText size={20} />
                </button>

                {/* Translator - Mobile */}
                <div className="flex items-center">
                  <Translator />
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 top-full z-[190] w-full overflow-hidden border-b border-white/10 bg-[#081B2E]/98 shadow-[0_20px_40px_rgba(0,0,0,.3)] backdrop-blur-2xl transition-all duration-300 lg:hidden ${
            mobileMenuOpen
              ? "visible max-h-[500px] translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-2 opacity-0"
          }`}
        >

          <div className="mx-auto max-w-7xl px-5 pb-6 pt-3 sm:px-8">

            {/* Mobile Links */}
            <nav className="flex flex-col">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-[15px] font-semibold text-white transition-colors duration-300 hover:text-[#ff6a2b]"
                >
                  <span>{link.label}</span>

                  <ArrowRight
                    size={17}
                    className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#ff6a2b]"
                  />
                </Link>
              ))}

            </nav>

            {/* Mobile Phone */}
            <a
              href={phoneHref}
              className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C52C1D] text-white">
                <PhoneCall size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-white/50">
                  Свяжитесь с нами
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {phoneNumber}
                </p>
              </div>
            </a>

            {/* Mobile Enquiry Button */}
            <button
              onClick={openEnquiry}
              className="group mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-red-600 shadow-lg transition-all duration-300 hover:bg-gray-100"
            >
              Получить предложение

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>

      </header>

      {/* Enquiry Form */}
      {isFormOpen && (
        <EnquiryR
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}

    </>
  );
}
