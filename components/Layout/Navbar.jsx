"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Link from "next/link";
import { ChevronDown, Menu, X, PhoneCall, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Enquiry from "@/components/Enquiry";
import { russiaLocations } from "@/lib/russiaLocations";

export default function Navbar({ categories }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentSlug = pathname.split("/").filter(Boolean).pop();

  const isRussiaLocation = russiaLocations.includes(currentSlug);

  const phoneNumber = isRussiaLocation
    ? "+7-9859834837"
    : "+91-9968373086";

  const phoneHref = isRussiaLocation
    ? "tel:+79859834837"
    : "tel:+919968373086";

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-[999] w-full">
      <div className="relative z-[200] backdrop-blur-2xl bg-[#081B2E]/90 border-b border-white/10 shadow-[0_17px_40px_rgba(0,0,0,.18)]">
        <div className="max-w-7xl mx-auto px-3   ">
          <div className="h-18 flex items-center justify-between">
            <Link
              href="/"
              className="relative flex items-center shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={210}
                height={80}
                priority
                className="object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              <Link
                href="/"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-2 text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]">
                  About Us
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full z-[300] mt-5 w-72 -translate-x-1/2 transition-all duration-300 ${aboutOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                    }`}
                >
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
                    <Link
                      href="/about-us"
                      className="flex items-center justify-between px-6 py-4 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                    >
                      About ARB Bearings
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      href="/our-journey"
                      className="flex items-center justify-between px-6 py-4 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                    >
                      Our Journey
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      href="/our-core-values"
                      className="flex items-center justify-between px-6 py-4 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                    >
                      Our Core Values
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/our-blogs"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                News & Events
              </Link>

              <Link
                href="/contact-us"
                className="relative text-[17px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={phoneHref}
                className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-5 py-3 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-[#C52C1D] flex items-center justify-center text-white">
                  <PhoneCall size={18} />
                </div>

                <div>
                  <p className="text-[11px] text-gray-300">Call Anytime</p>
                  <p className="text-white font-semibold text-sm">
                    {phoneNumber}
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/917834872136"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <FaWhatsapp size={20} />
              </a>

              <button
                onClick={() => setIsFormOpen(true)}
                className="group relative overflow-hidden rounded-full bg-white px-7 py-4 border border-blue-700 text-red-600 font-semibold shadow-[0_17px_40px_rgba(255,106,43,.45)] transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Quote
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12" />
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <a
                href="https://wa.me/+91-7834872136"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"
              >
                <FaWhatsapp size={18} />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block bg-white border-b border-gray-200 relative shadow-sm"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="w-full mx-auto px-18">
          <div className="h-14 flex items-center justify-center gap-10">
            {categories?.map((cat) => (
              <Link href={`/products/${cat.slug}`}
                key={cat.slug}
                type="button"
                onMouseEnter={() => setActiveMenu(cat.slug)}
                onClick={() => setActiveMenu(cat.slug)}
                className="group relative flex items-center gap-1 text-[16px] font-semibold text-gray-800 hover:text-[#C52C1D] transition-all"
              >
                <span>{cat.name}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${activeMenu === cat.slug ? "rotate-180" : ""
                    }`}
                />
                <span className="absolute left-0 -bottom-[20px] h-[3px] w-0 rounded-full bg-[#C52C1D] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-2 text-[17px] font-semibold text-gray-800 hover:text-[#C52C1D] transition">
                Miscellaneous Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full z-[300] mt-5 w-72 -translate-x-1/2 transition-all duration-300 ${open
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
                  }`}
              >
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
                  <Link href=""
                    className="flex items-center justify-between px-6 py-2 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                  >
                    Grease
                    <ArrowRight size={16} />
                  </Link>

                  <Link href=""
                    className="flex items-center justify-between px-6 py-2 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                  >
                    Universal Joints
                    <ArrowRight size={16} />
                  </Link>

                  <Link href=""
                    className="flex items-center justify-between px-6 py-2 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                  >
                    Clutch Bearings
                    <ArrowRight size={16} />
                  </Link>

                  <Link href=""
                    className="flex items-center justify-between px-6 py-2 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                  >
                    Pillow Blocks Units
                    <ArrowRight size={16} />
                  </Link>

                  <Link href=""
                    className="flex items-center justify-between px-6 py-2 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                  >
                    Clutch Plates
                    <ArrowRight size={16} />
                  </Link>

                  <Link href=""
                    className="flex items-center justify-between px-6 py-2 text-[#081B2E] transition hover:bg-gray-50 hover:text-[#ff6a2b]"
                  >
                    Brake Lining
                    <ArrowRight size={16} />
                  </Link>

                </div>
              </div>
            </div>

            {/* <Link href="/grease" className="group relative flex items-center cursor-pointer  text-[16px] font-semibold text-gray-800 hover:text-[#C52C1D] transition-all"> Grease</Link> */}
          </div>
        </div>


        {activeMenu && (

          <div className="absolute left-0 top-full w-full overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white shadow-[0_40px_100px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="w-full  mx-auto px-15 py-5">
              <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-3 ">
                <div>


                  <h2 className=" text-4xl font-black tracking-tight text-slate-900">
                    {categories.find((c) => c.slug === activeMenu)?.name}
                  </h2>

                </div>

                <Link
                  href={`/products/${activeMenu}`}
                  className="group flex items-center gap-3 rounded-full border border-[#C72818] px-7 py-3 font-semibold text-[#C72818] transition-all duration-300 hover:bg-[#C72818] hover:text-white"
                >
                  View All
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="max-h-[70vh] pb-20 pt-10 overflow-y-auto pr-2">
                <div className="grid grid-cols-4 gap-8">
                  {categories
                    .find((c) => c.slug === activeMenu)
                    ?.subCategories?.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/products/${activeMenu}/${sub.slug}`}
                        onClick={closeMenu}
                        className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_35px_rgba(15,23,42,.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C72818]/30 hover:shadow-[0_30px_60px_rgba(199,40,24,.18)]"
                      >
                        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-100">
                          {sub.image ? (
                            <Image
                              src={sub.image}
                              alt={sub.name}
                              width={300}
                              height={300}
                              className="object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-sm text-gray-400">
                              No image available
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <h3 className="font-bold text-gray-900 text-[17px] leading-6 group-hover:text-[#28186D] transition">
                            {sub.name}
                          </h3>

                          <div className="mt-3 flex items-center text-[#C72818] font-semibold text-sm">
                            Explore Products
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                              →
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bottom-0 bg-white z-[999] overflow-y-auto transition-all duration-300">
          <div className="px-6 py-8">
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 font-semibold text-[#081B2E] shadow-sm transition-all hover:border-[#ff6a2b] hover:text-[#ff6a2b] hover:shadow-md"
                >
                  {item.name}
                  <ArrowRight size={18} className="text-gray-400" />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-5">
                Product Categories
              </h4>
              <div className="space-y-3">
                {categories?.map((cat) => (
                  <details
                    key={cat.slug}
                    className="group rounded-2xl border border-gray-200 overflow-hidden bg-white"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4 font-semibold text-[#081B2E]">
                      {cat.name}
                      <ChevronDown
                        size={18}
                        className="transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <div className="border-t bg-gray-50">
                      {cat.subCategories?.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/products/${cat.slug}/${sub.slug}`}
                          onClick={closeMenu}
                          className="block px-6 py-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-[#ff6a2b] transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#081B2E] to-[#10314F] p-6 text-center">
              <h3 className="text-white text-2xl font-bold">
                Need Industrial Solutions?
              </h3>
              <p className="mt-3 text-white/70 text-sm leading-6">
                Speak with our experts and receive the best quotation for your
                industrial requirements.
              </p>
              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C52C1D] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/9999402424"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-green-500 py-4 text-white font-semibold shadow-lg transition hover:bg-green-600"
              >
                <FaWhatsapp size={22} />
                WhatsApp Us
              </a>

              <a
                href="tel:+919999402424"
                className="flex items-center justify-center gap-3 rounded-2xl border-2 border-[#081B2E] py-4 font-semibold text-[#081B2E] transition hover:bg-[#081B2E] hover:text-white"
              >
                <PhoneCall size={20} />
                Call Now
              </a>
            </div>

            <div className="mt-10 border-t pt-6 text-center">
              <p className="text-xs text-gray-500 leading-6">
                © {new Date().getFullYear()} Your Company.
                <br />
                Premium Industrial Solutions • Trusted Across India
              </p>
            </div>
          </div>
        </div>
      )}

      {isFormOpen && (
        <Enquiry
          IATFpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </header>
  );
}