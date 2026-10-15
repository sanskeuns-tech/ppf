"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Berapa lama waktu pengerjaan PPF dan Coating?",
      a: "Untuk pengerjaan Ceramic Coating membutuhkan waktu 1-2 hari kerja (termasuk tahap Paint Correction & curing infra merah). Sedangkan untuk PPF Full Body membutuhkan waktu 3-5 hari kerja karena membutuhkan ketelitian tingkat tinggi, wrapping tepian bodi, dan proses curing di cleanroom ber-AC agar tidak ada gelembung air.",
    },
    {
      q: "Apakah cat orisinil mobil/motor saya aman saat PPF dilepas nanti?",
      a: "Sangat aman 100%! Kami hanya menggunakan material Aliphatic TPU berlem khusus (Pressure Sensitive Adhesive) standar otomotif internasional yang tidak meninggalkan sisa lem membandel atau merusak pernis asli pabrik saat dilepas, bahkan setelah 5-10 tahun terpasang.",
    },
    {
      q: "Bagaimana cara kerja teknologi Self-Healing pada PPF?",
      a: "Lapisan atas TPU kami memiliki memori polimer elastis. Ketika terjadi baret halus (seperti akibat lap cuci kotor atau kuku), paparan panas hangat dari sinar matahari atau siraman air panas akan merapatkan kembali ikatan polimer tersebut sehingga permukaan kembali mulus tanpa baret secara otomatis.",
    },
    {
      q: "Apa saja yang di-cover oleh Garansi Resmi GlossArmor?",
      a: "Garansi kami mencakup: pengelupasan (peeling), gelembung udara, retak pada film (cracking), dan perubahan warna film menjadi kuning (yellowing) akibat sinar UV. Jika terjadi hal tersebut selama masa garansi, kami ganti panel tersebut secara GRATIS tanpa biaya tambahan.",
    },
    {
      q: "Apakah ada layanan antar jemput (towing) kendaraan?",
      a: "Ya! Khusus untuk pemesanan paket PPF Full Body atau PPF Front Shield, kami menyediakan fasilitas FREE Towing Tertutup (Enclosed Carrier) untuk area Jabodetabek/Kota Anda sehingga kendaraan Anda aman dari kerikil jalanan saat menuju studio kami.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-400 text-xs uppercase font-bold tracking-widest">
            Punya Pertanyaan?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Kami merangkum jawaban jujur &amp; transparan untuk semua keraguan Anda.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-brand-card border border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className={`w-full p-5 text-left font-bold text-white flex items-center justify-between gap-4 transition-colors ${
                    isOpen ? "text-brand-400" : "hover:text-brand-400"
                  }`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-brand-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
