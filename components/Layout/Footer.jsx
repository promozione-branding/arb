"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const adminLayout = pathname.startsWith("/admin");
  if (adminLayout) return null;

  return (
    <footer className="relative text-white pt-10 pb-5 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover  bg-center"
        style={{ backgroundImage: "url('/20250507130744862683.webp')" }}
        aria-hidden="true"
      />

      {/* DARK OVERLAY */}
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

      {/* TOP ACCENT */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 to-red-600" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* BRAND */}
          <div>
            <Image
              src="/logo.png"
              width={270}
              height={250}
              alt="arb bearings logo"
              className="object-cover"
            />

            <p className="leading-relaxed text-sm text-white mt-4">
              As a trusted bearing supplier, ARB Bearings is committed to
              delivering products that meet the highest standards of quality,
              precision, and reliability. Every bearing undergoes rigorous
              testing and inspection throughout
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm  tracking-wider">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Articles", "/blogs"],
                ["Contact Us", "/contact-us"],
               
                ["Shipping Policy", "/shipping-policy"],
                ["Return & Refund Policy", "/return-refund-policy"],
                ["Sitemap", "/sitemap"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-red-600 hover:underline underline-offset-4 decoration-red-600"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">
              Our Products
            </h3>
            <ul className="space-y-3 text-sm tracking-wider">
              {[
                { name: "Ball bearing", link: "/products/ball-bearing" },
                { name: "Wheel bearing", link: "/products/wheel-bearing" },
                { name: "Roller bearing", link: "/products/roller-bearings" },
                { name: "Grease", link: "/grease" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-red-600 hover:underline underline-offset-4 decoration-red-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              {/* ADDRESS */}
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                 26th Bakinskikh Komissarov Street
House 9, Flat 9
Moscow 119571, Russia
                </p>
              </div>

              {/* PHONE */}
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <a
                  href="tel:+917834872136"
                  className="hover:text-red-600 hover:underline underline-offset-4 decoration-red-600"
                >
                   +91-7834872136
                </a>
              </div>

                 <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <a
                  href="tel:+79859834837"
                  className="hover:text-red-600 hover:underline underline-offset-4 decoration-red-600"
                >
                 +7-9859834837
                </a>
              </div>

              {/* EMAILS */}
              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:export@arb-bearings.com"
                    className="hover:text-red-600 hover:underline underline-offset-4 decoration-red-600"
                  >
                export@arb-bearings.com
                  </a>
              

                 

                 
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif text-white font-semibold mb-3">
              Trust Elite Certificate
            </h3>
            <p className="text-sm text-white leading-relaxed mb-3">
              We are proud to present the TrustElite Certificate of Excellence
              to ARB Bearings, recognizing their commitment to exceptional customer
              service, outstanding business practices, and a dedication to
              building trust with their customers{" "}
            </p>

            <div className="flex justify-center md:justify-end">
              <img
                src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726401/trustseal_vltgii.webp"
                alt="Trust Elite"
                className="w-28 h-28 object-contain cursor-pointer hover:scale-105 transition"
                onClick={() => setIsModalOpen(true)}
              />

              {isModalOpen && (
                <div
                  className="fixed inset-0 backdrop-blur-md bg-white/10 flex items-center mt-20 justify-center z-9999999"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-white text-2xl font-bold"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </button>
                    <img
                      src="/trustElite.webp"
                      alt="Trust Elite Full"
                      className="w-[60vw] h-[75vh] rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p>© 2026 ARB Bearings All Rights Reserved.</p>
            <p>
              Website Designed By Inquiry Bazaar Pvt. Ltd.{" "}
              <a
                target="_blank"
                href="https://inquirybazaar.com/"
                className="text-red-600 hover:underline"
              >
                B2B Marketplace
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
