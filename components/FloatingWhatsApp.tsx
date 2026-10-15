"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Pill */}
      <div className="hidden md:flex items-center gap-2 bg-slate-900 text-white text-xs py-2 px-3.5 rounded-full border border-brand-500/40 shadow-xl animate-bounce">
        <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
        <span>Konsultasi Bebas Antri via WA</span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20mau%20konsultasi%20PPF%20dan%20Coating"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-2xl shadow-green-500/50 hover:scale-110 active:scale-95 transition-all"
      >
        <MessageCircle className="w-7 h-7 stroke-[2.2]" />
      </a>
    </div>
  );
}
