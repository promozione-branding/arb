
"use client";

import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import {
  handleCallClick,
  handleWhatsappClick,
} from "@/lib/tracking";

export default function StickyFooter({
  whatsappNumber,
  phoneNumber,
  email,
}) {
  const hasWhatsapp = Boolean(whatsappNumber?.trim());
  const hasPhone = Boolean(phoneNumber?.trim());
  const hasEmail = Boolean(email?.trim());

  // Hide footer if no contact details provided
  if (!hasWhatsapp && !hasPhone && !hasEmail) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden">
      <div className="mx-auto flex h-[60px] w-full items-stretch shadow-[0_-5px_20px_rgba(0,0,0,0.12)]">

        {/* WhatsApp - Green */}
        {hasWhatsapp && (
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleWhatsappClick({ source: "Website" })
            }
            className="flex flex-1 flex-col items-center justify-center gap-1 bg-[#25D366] text-white transition-colors active:bg-[#1DA851]"
          >
            <MessageCircle size={21} strokeWidth={2.2} />
            <span className="text-[11px] font-semibold">
              WhatsApp Us
            </span>
          </a>
        )}

        {/* Email - Blue */}
        {hasEmail && (
          <a
            href={`mailto:${email.trim()}`}
            className="flex flex-1 flex-col items-center justify-center gap-1 bg-[#2563EB] text-white transition-colors active:bg-[#1D4ED8]"
          >
            <Mail size={21} strokeWidth={2.2} />
            <span className="text-[11px] font-semibold">
              Email Us
            </span>
          </a>
        )}

        {/* Call - Dark Navy */}
        {hasPhone && (
          <a
            href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}
            onClick={() =>
              handleCallClick({ source: "Website" })
            }
            className="flex flex-1 flex-col items-center justify-center gap-1 bg-[#071A3D] text-white transition-colors active:bg-[#0D2858]"
          >
            <Phone size={20} strokeWidth={2.2} />
            <span className="text-[11px] font-semibold">
              Call Now
            </span>
          </a>
        )}

      </div>
    </div>
  );
}
