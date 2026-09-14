
"use client";

import React from "react";
import { MessageCircle, Send, Phone } from "lucide-react";

export default function StickyFooter({ whatsappNumber, phoneNumber }) {

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden">
            <div className="mx-auto flex h-[60px] w-full items-stretch bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.12)]">

                {/* WhatsApp */}
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 flex-col items-center justify-center gap-1 border-r border-gray-200 text-green-600 active:bg-green-50"
                >
                    <MessageCircle size={21} strokeWidth={2.2} />
                    <span className="text-[11px] font-semibold">
                        WhatsApp Us
                    </span>
                </a >

                {/* Inquiry */}
                {/* < a
                    href="/contact"
                    className="flex flex-1 flex-col items-center justify-center gap-1 bg-[#071a3d] text-white active:bg-[#0d2858]"
                >
                    <Send size={20} strokeWidth={2.2} />
                    <span className="text-[11px] font-semibold">
                        Inquiry Now
                    </span>
                </ a> */}

                {/* Call */}
                < a
                    href={`tel:${phoneNumber}`}
                    className="flex flex-1 flex-col items-center justify-center gap-1 border-l border-gray-200 text-[#071a3d] active:bg-gray-50"
                >
                    <Phone size={20} strokeWidth={2.2} />
                    <span className="text-[11px] font-semibold">
                        Call Now
                    </span>
                </ a>

            </div >
        </div >
    );
}