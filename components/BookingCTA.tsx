import React from "react";
import { ShieldCheck, MessageCircle, MapPin, Clock, Truck } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      id="booking"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-brand-card to-brand-darker border-t border-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-brand-500/20 border border-brand-500/30 text-brand-400 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Lindungi Kendaraan Anda Hari Ini Sebelum Baret Kerikil Pertama Terjadi
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Cat orisinil hanya ada satu kali dari pabrik. Jangan tunggu baret dan jamur merusak nilai jual kendaraan Anda.
          Dapatkan penawaran terbaik dan konsultasi tanpa biaya bersama spesialis kami.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20mau%20ambil%20promo%20booking%20PPF%20/%20Coating%20minggu%20ini"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 via-emerald-600 to-brand-accent hover:from-brand-600 hover:to-emerald-700 text-white font-extrabold text-base shadow-2xl shadow-brand-500/30 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi &amp; Klaim Promo via WhatsApp</span>
          </a>
          <a
            href="#kalkulator"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors"
          >
            Hitung Estimasi Biaya
          </a>
        </div>

        {/* Workshop Location & Info */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
            <span>Workshop: Jl. Otomotif Raya No. 88, Jakarta Selatan</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-brand-400 shrink-0" />
            <span>Buka Setiap Hari: 08.30 - 18.00 WIB</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-brand-400 shrink-0" />
            <span>Free Pick-up Towing Tersedia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
