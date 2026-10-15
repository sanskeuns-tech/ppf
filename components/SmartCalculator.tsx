"use client";

import React, { useState, useMemo } from "react";
import { MessageCircle } from "lucide-react";

export default function SmartCalculator() {
  const [vehicle, setVehicle] = useState("mobil-medium");
  const [priority, setPriority] = useState("kombinasi");

  const vehicleOptions = [
    { value: "mobil-small", label: "Mobil Kecil / City Car (Brio, Yaris, Raize, dll)" },
    { value: "mobil-medium", label: "Mobil Medium / Sedan / MPV (Innova, CR-V, Civic, HR-V)" },
    { value: "mobil-large", label: "Mobil Besar / SUV / Luxury (Pajero, Fortuner, Alphard, BMW, Mercy)" },
    { value: "motor-matic", label: "Motor Matic Biasa (Scoopy, Vario, Beat, dll)" },
    { value: "motor-bigmatic", label: "Motor Big Matic / Retro (NMAX, PCX, XMAX, Vespa Sprint)" },
    { value: "motor-sport", label: "Motor Sport / Moge (Ninja, CBR, ZX, Harley, Ducati)" },
  ];

  const priorityOptions = [
    { value: "kombinasi", label: "Kombinasi Sempurna (PPF Bagian Depan + Coating di Sisa Bodi)" },
    { value: "anti-baret", label: "Proteksi Total Anti Baret Kerikil & Senggolan (PPF)" },
    { value: "kilap-jamur", label: "Cat Selalu Basah Mengkilap & Bebas Jamur Air (Coating)" },
  ];

  const recommendation = useMemo(() => {
    const isMotor = vehicle.startsWith("motor");
    const currentVehicleObj = vehicleOptions.find((v) => v.value === vehicle);
    const vehicleText = currentVehicleObj ? currentVehicleObj.label : "";

    let title = "";
    let desc = "";
    let price = "";

    if (isMotor) {
      if (priority === "anti-baret") {
        title = "Full Body PPF Self-Healing Motor";
        desc = "Proteksi 100% seluruh panel bodi halus dari senggolan parkir dan gesekan kuku/resleting.";
        price =
          vehicle === "motor-sport"
            ? "Rp 4.500.000"
            : vehicle === "motor-bigmatic"
            ? "Rp 3.500.000"
            : "Rp 2.800.000";
      } else if (priority === "kilap-jamur") {
        title = "Ceramic Coating Motor 9H Complete";
        desc = "Kilap kaca pekat, restorasi trim bodi kasar, dan efek daun talas agar mudah dibersihkan.";
        price =
          vehicle === "motor-sport"
            ? "Rp 1.200.000"
            : vehicle === "motor-bigmatic"
            ? "Rp 950.000"
            : "Rp 750.000";
      } else {
        title = "PPF Essential (Tangki/Tameng) + Full Coating";
        desc = "PPF di bagian kontak gesekan utama + Coating Ceramic di sisa panel lainnya. Paling pas di kantong!";
        price =
          vehicle === "motor-sport"
            ? "Rp 2.200.000"
            : vehicle === "motor-bigmatic"
            ? "Rp 1.450.000"
            : "Rp 1.100.000";
      }
    } else {
      if (priority === "anti-baret") {
        title = "Full Body PPF Self-Healing Mobil";
        desc = "Seluruh panel bodi mobil terbungkus film TPU 8.5 Mil. Garansi 10 tahun bebas resiko baret kerikil tol.";
        price =
          vehicle === "mobil-large"
            ? "Rp 28.500.000"
            : vehicle === "mobil-medium"
            ? "Rp 23.500.000"
            : "Rp 19.500.000";
      } else if (priority === "kilap-jamur") {
        title = "Ceramic Coating 9H+ Diamond (3 Layer)";
        desc = "Multi-stage paint correction menghilangkan swirl marks, ditambah 3 layer nano ceramic bergaransi 3 tahun.";
        price =
          vehicle === "mobil-large"
            ? "Rp 4.200.000"
            : vehicle === "mobil-medium"
            ? "Rp 3.500.000"
            : "Rp 2.990.000";
      } else {
        title = "PPF Front Shield + Ceramic Coating Full Body";
        desc = "Solusi terbaik: PPF anti-baret kerikil di Bumper Depan, Kap Mesin, Spion + Ceramic Coating di sisa bodi.";
        price =
          vehicle === "mobil-large"
            ? "Rp 12.500.000"
            : vehicle === "mobil-medium"
            ? "Rp 9.850.000"
            : "Rp 8.200.000";
      }
    }

    const message = encodeURIComponent(
      `Halo GlossArmor, saya ingin konsultasi promo untuk:\n- Kendaraan: ${vehicleText}\n- Rekomendasi Paket: ${title} (${price})\nMohon info ketersediaan slot pengerjaannya.`
    );

    return {
      title,
      desc,
      price,
      waLink: `https://wa.me/6281234567890?text=${message}`,
    };
  }, [vehicle, priority]);

  return (
    <section id="kalkulator" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-brand-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-brand-card to-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
              Fitur Pintar
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Cek Rekomendasi &amp; Estimasi Khusus Kendaraan Anda
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Pilih kendaraan &amp; keluhan Anda untuk mendapatkan paket dan estimasi pengerjaan yang paling pas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Input 1: Jenis Kendaraan */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Jenis Kendaraan
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500"
                >
                  {vehicleOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Input 2: Kebutuhan Utama */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Fokus Kebutuhan Anda
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500"
                >
                  {priorityOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dynamic Result Box */}
            <div className="p-5 rounded-2xl bg-brand-dark border border-brand-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs text-brand-400 font-semibold uppercase">
                  Rekomendasi Paket Terbaik:
                </span>
                <h4 className="font-extrabold text-white text-lg">{recommendation.title}</h4>
                <p className="text-xs text-slate-400">{recommendation.desc}</p>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <span className="text-xs text-slate-400 block">Estimasi Investasi Mulai:</span>
                <span className="text-2xl font-black text-brand-400">{recommendation.price}</span>
              </div>
            </div>

            {/* Direct WA CTA with dynamic message */}
            <div className="text-center pt-2">
              <a
                href={recommendation.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white font-extrabold text-base shadow-xl shadow-brand-500/25 transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Klaim Slot Promo Untuk Kendaraan Ini via WhatsApp</span>
              </a>
              <p className="text-[11px] text-slate-400 mt-2">
                Tanpa komitmen, Anda bebas konsultasi &amp; tanya-tanya terlebih dahulu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
