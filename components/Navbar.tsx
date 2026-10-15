"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-brand-600 via-emerald-600 to-brand-accent text-white text-xs md:text-sm py-2 px-4 text-center font-medium shadow-md flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-black/20 text-white">
          PROMO SPESIAL
        </span>
        <span>Diskon s/d 25% + Free Detailing Interior untuk 10 Booking Pertama Minggu Ini!</span>
        <a href="#booking" className="underline font-bold hover:text-slate-200 ml-2">
          Ambil Promo &rarr;
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? "bg-brand-darker/95 border-slate-800 shadow-xl"
            : "bg-brand-darker/80 border-slate-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-brand-accent flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-brand-darker stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-brand-accent bg-clip-text text-transparent">
                GLOSS<span className="text-brand-400">ARMOR</span>
              </span>
              <span className="block text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                PPF &amp; Coating Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#mengapa-kami" className="hover:text-brand-400 transition-colors">
              Keunggulan
            </a>
            <a href="#edukasi-ppf-coating" className="hover:text-brand-400 transition-colors">
              PPF vs Coating
            </a>
            <a href="#before-after" className="hover:text-brand-400 transition-colors">
              Hasil Nyata
            </a>
            <a href="#paket-harga" className="hover:text-brand-400 transition-colors">
              Paket &amp; Harga
            </a>
            <a href="#testimoni" className="hover:text-brand-400 transition-colors">
              Testimoni
            </a>
            <a href="#faq" className="hover:text-brand-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Consultation Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20mau%20tanya%20paket%20PPF%20dan%20Coating%20untuk%20kendaraan%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-emerald-700 text-white font-semibold text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-dark border-b border-slate-800 px-6 py-5 space-y-4">
            <a
              href="#mengapa-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-brand-400 font-medium"
            >
              Keunggulan
            </a>
            <a
              href="#edukasi-ppf-coating"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-brand-400 font-medium"
            >
              Beda PPF vs Coating
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-brand-400 font-medium"
            >
              Hasil Nyata
            </a>
            <a
              href="#paket-harga"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-brand-400 font-medium"
            >
              Paket &amp; Harga
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-brand-400 font-medium"
            >
              Testimoni
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-brand-400 font-medium"
            >
              Tanya Jawab (FAQ)
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-500 text-white font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp Langsung</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
