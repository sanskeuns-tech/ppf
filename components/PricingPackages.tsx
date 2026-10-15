"use client";

import React, { useState } from "react";
import { Car, Bike, Check } from "lucide-react";

export default function PricingPackages() {
  const [vehicleTab, setVehicleTab] = useState<"mobil" | "motor">("mobil");

  return (
    <section id="paket-harga" className="py-20 bg-brand-card/30 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-brand-400 text-xs uppercase font-bold tracking-widest">
            Pilihan Investasi Perlindungan
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Paket Transparan &amp; Bergaransi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Pilih kategori kendaraan Anda untuk melihat paket yang sesuai kebutuhan.
          </p>

          {/* Toggle Mobil vs Motor Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-inner">
            <button
              onClick={() => setVehicleTab("mobil")}
              className={`px-6 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 ${
                vehicleTab === "mobil"
                  ? "bg-gradient-to-r from-brand-500 via-rose-500 to-brand-accent text-white shadow-lg shadow-brand-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Car className="w-5 h-5" />
              <span>Mobil (Car)</span>
            </button>
            <button
              onClick={() => setVehicleTab("motor")}
              className={`px-6 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 ${
                vehicleTab === "motor"
                  ? "bg-gradient-to-r from-brand-500 via-rose-500 to-brand-accent text-white shadow-lg shadow-brand-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Bike className="w-5 h-5" />
              <span>Motor (Motorcycle)</span>
            </button>
          </div>
        </div>

        {/* MOBIL PACKAGES */}
        {vehicleTab === "mobil" && (
          <div className="grid lg:grid-cols-3 gap-8 items-stretch animate-fadeIn">
            {/* Mobil Paket 1: Coating HydroGloss */}
            <div className="rounded-3xl p-8 bg-brand-card border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                    ENTRY SHIELD
                  </span>
                  <span className="text-xs text-slate-400">Garansi 3 Tahun</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Ceramic Coating 9H+ Diamond</h3>
                <p className="text-xs text-slate-400 mb-6">Proteksi kilap kaca menyeluruh &amp; anti jamur air harian.</p>

                <div className="mb-6">
                  <span className="text-xs text-slate-400">Mulai Dari</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">Rp 2.990.000</span>
                    <span className="text-xs text-slate-400">/ mobil</span>
                  </div>
                  <span className="text-[11px] text-brand-400 font-medium">Tersedia cicilan 0% s/d 12 Bulan</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>3 Layer 9H Nano Ceramic Coating</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Full Multi-Stage Paint Correction</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Glass Coating (Semua Kaca Anti-Jamur)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Free 3x Maintenance Berkala</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20tertarik%20dengan%20Paket%20Ceramic%20Coating%20Mobil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center border border-slate-700 transition-colors"
              >
                Pilih Paket Ini
              </a>
            </div>

            {/* Mobil Paket 2: PPF Front End (Best Value) */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-brand-card to-slate-900 border-2 border-brand-500 relative flex flex-col justify-between shadow-2xl shadow-brand-500/10 scale-105 z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-500 text-brand-darker font-black text-xs uppercase tracking-wider shadow-md">
                Paling Populer &amp; Best Value
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-400 border border-brand-500/30">
                    HYBRID ARMOR
                  </span>
                  <span className="text-xs text-brand-300 font-bold">Garansi 7 Tahun</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">PPF Front Shield + Ceramic Full</h3>
                <p className="text-xs text-slate-400 mb-6">PPF di area rawan benturan + Ceramic Coating di sisa bodi.</p>

                <div className="mb-6">
                  <span className="text-xs text-slate-400">Mulai Dari</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">Rp 9.850.000</span>
                    <span className="text-xs text-slate-400">/ mobil</span>
                  </div>
                  <span className="text-[11px] text-brand-400 font-medium">Solusi paling cerdas &amp; hemat budget</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>
                      <strong className="text-white">PPF TPU Self Healing:</strong> Bumper Depan, Kap Mesin, Spion, Lampu
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>
                      <strong className="text-white">Ceramic Coating 10H:</strong> Pintu, Atap, Bumper Belakang
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Garansi Bebas Gelembung &amp; Retak 7 Tahun</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Free Door Cup &amp; Door Edge PPF Protection</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20tertarik%20dengan%20Paket%20PPF%20Front%20Shield%20Hybrid%20Mobil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-rose-600 hover:from-rose-600 hover:to-brand-700 text-white font-black text-sm text-center shadow-lg shadow-brand-500/30 transition-all"
              >
                Booking Paket Favorit
              </a>
            </div>

            {/* Mobil Paket 3: PPF Full Body Armor */}
            <div className="rounded-3xl p-8 bg-brand-card border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    ULTIMATE SHIELD
                  </span>
                  <span className="text-xs text-amber-300 font-bold">Garansi 10 Tahun</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Full Body PPF Self-Healing</h3>
                <p className="text-xs text-slate-400 mb-6">Proteksi total 360° seluruh panel bodi mobil tanpa kompromi.</p>

                <div className="mb-6">
                  <span className="text-xs text-slate-400">Mulai Dari</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">Rp 23.500.000</span>
                    <span className="text-xs text-slate-400">/ mobil</span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-medium">Pilihan nomor 1 untuk mobil hobi &amp; premium</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>100% Seluruh Bodi Terbungkus TPU Premium</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Instant Self-Healing Technology (8.5 Mil)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Tersedia Finishing Glossy Wet-Look atau Matte/Satin</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Free Full Interior PPF (Speedometer &amp; Center Console)</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20tertarik%20dengan%20Paket%20Full%20Body%20PPF%20Mobil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center border border-slate-700 transition-colors"
              >
                Pilih Paket Ini
              </a>
            </div>
          </div>
        )}

        {/* MOTOR PACKAGES */}
        {vehicleTab === "motor" && (
          <div className="grid lg:grid-cols-3 gap-8 items-stretch animate-fadeIn">
            {/* Motor Paket 1: Coating Nano Glass */}
            <div className="rounded-3xl p-8 bg-brand-card border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                    MOTO GLOSS
                  </span>
                  <span className="text-xs text-slate-400">Garansi 2 Tahun</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Ceramic Coating Motor 9H</h3>
                <p className="text-xs text-slate-400 mb-6">Kilap pekat anti jamur untuk bodi halus, bodi kasar, &amp; velg.</p>

                <div className="mb-6">
                  <span className="text-xs text-slate-400">Mulai Dari</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">Rp 750.000</span>
                    <span className="text-xs text-slate-400">/ motor</span>
                  </div>
                  <span className="text-[11px] text-brand-400 font-medium">Bisa untuk Matic, Naked, s/d Sportbike</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Coating Bodi Halus + Restorasi Trim Bodi Kasar</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Coating Velg &amp; Swingarm</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Hydrophobic Effect (Mudah Cuci Selesai Hujan)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Garansi Maintenance 1 Tahun</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20tertarik%20dengan%20Paket%20Coating%20Motor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center border border-slate-700 transition-colors"
              >
                Pilih Paket Ini
              </a>
            </div>

            {/* Motor Paket 2: PPF Essential */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-brand-card to-slate-900 border-2 border-brand-500 relative flex flex-col justify-between shadow-2xl shadow-brand-500/10 scale-105 z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-500 text-brand-darker font-black text-xs uppercase tracking-wider shadow-md">
                Pilihan Populer Big Matic &amp; Sport
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-400 border border-brand-500/30">
                    MOTO ESSENTIAL
                  </span>
                  <span className="text-xs text-brand-300 font-bold">Garansi 5 Tahun</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">PPF Tangki / Sayap Depan + Coating</h3>
                <p className="text-xs text-slate-400 mb-6">Proteksi anti baret kuku/resleting &amp; helm pada area kontak.</p>

                <div className="mb-6">
                  <span className="text-xs text-slate-400">Mulai Dari</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">Rp 1.450.000</span>
                    <span className="text-xs text-slate-400">/ motor</span>
                  </div>
                  <span className="text-[11px] text-brand-400 font-medium">Cocok untuk Vespa, XMAX, PCX, ZX-25R, dll.</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>
                      <strong className="text-white">PPF TPU:</strong> Tangki Bensin / Tameng Depan &amp; Headlamp
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>
                      <strong className="text-white">Coating 10H:</strong> Seluruh Bagian Bodi Lainnya
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Anti Baret Kunci &amp; Gesekan Celana/Jaket</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Free Screen Protector Spidometer Digital</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20tertarik%20dengan%20Paket%20PPF%20Essential%20Motor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-rose-600 hover:from-rose-600 hover:to-brand-700 text-white font-black text-sm text-center shadow-lg shadow-brand-500/30 transition-all"
              >
                Booking Paket Ini
              </a>
            </div>

            {/* Motor Paket 3: PPF Full Body Motor */}
            <div className="rounded-3xl p-8 bg-brand-card border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    MOTO ARMOR 360
                  </span>
                  <span className="text-xs text-amber-300 font-bold">Garansi 7 Tahun</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Full Body PPF Self-Healing</h3>
                <p className="text-xs text-slate-400 mb-6">Seluruh panel bodi halus motor terlindungi film TPU tebal.</p>

                <div className="mb-6">
                  <span className="text-xs text-slate-400">Mulai Dari</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">Rp 3.500.000</span>
                    <span className="text-xs text-slate-400">/ motor</span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-medium">Perlindungan total tanpa takut senggolan parkir</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>100% Panel Halus &amp; Headlamp Terbungkus Film TPU</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Self-Healing Effect (Baret Halus Pulih Otomatis)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Aman dari Gesekan Helm di Parkiran Sempit</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Tersedia Varian Glossy atau Doff/Matte Sesuai Selera</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo%20GlossArmor,%20saya%20tertarik%20dengan%20Paket%20Full%20Body%20PPF%20Motor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center border border-slate-700 transition-colors"
              >
                Pilih Paket Ini
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
