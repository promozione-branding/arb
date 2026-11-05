"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { handleCallClick, handleWhatsappClick } from "@/lib/tracking";

export default function WhatsApp({ whatsappNumber, phoneNumber }) {
  return (
    <div className="fixed bottom-6 right-6 z-[9998] hidden flex-col gap-3 md:flex">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        title="WhatsApp"
        onClick={() => handleWhatsappClick({ source: "Website" })}
        className="relative flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping motion-reduce:animate-none"
          aria-hidden="true"
        />
        <FaWhatsapp className="relative" size={25} aria-hidden="true" />
      </a>
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us"
        title="Call us"
        onClick={() => handleCallClick({ source: "Website" })}
        className="flex size-12 items-center justify-center rounded-full bg-[#071a3d] text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone size={22} strokeWidth={2.2} aria-hidden="true" />
      </a>
    </div>
  );
}