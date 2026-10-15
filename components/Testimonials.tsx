import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Bambang Raditya",
      vehicle: "Owner Toyota Innova Zenix Hybrid",
      initial: "BR",
      comment:
        "Kemarin Innova Zenix baru keluar dealer langsung saya bawa pasang PPF Front Shield. Pas lewat tol Cipali kena lemparan kerikil dari truk, alhamdulillah film PPF-nya nahan benturan dan gak tembus ke cat asli sama sekali. Worth every penny!",
    },
    {
      name: "Fajar Ardiansyah",
      vehicle: "Owner Vespa Sprint S 150",
      initial: "FA",
      comment:
        "Vespa Sprint saya sering kepentok gagang pintu dan resleting jaket. Pasang PPF bodi di GlossArmor hasilnya super rapi, gak kelihatan sambungannya karena pakai pre-cut. Sudah 1 tahun catnya tetap mulus kinclong kayak baru beli.",
    },
    {
      name: "Hendro Wicaksono",
      vehicle: "Owner Honda CR-V Turbo",
      initial: "HW",
      comment:
        "Ceramic coating di sini beda sama salon biasa. Efek daun talasnya beneran awet, kena hujan lebat gak ada water spot atau kerak air. Nyucinya jadi gampang banget tinggal bilas langsung rontok kotorannya.",
    },
  ];

  return (
    <section id="testimoni" className="py-20 bg-brand-card/40 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-400 text-xs uppercase font-bold tracking-widest">
            Pengalaman Nyata
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Kata Mereka yang Sudah Membuktikan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Dari mobil keluarga hingga supercar dan moge kesayangan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-card border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed mb-6">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-brand-400">
                  {rev.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
