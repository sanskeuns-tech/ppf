import React from "react";
import { Shield, Droplet, Check, Layers } from "lucide-react";

export default function EducationComparison() {
  return (
    <section id="edukasi-ppf-coating" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-xs font-bold text-brand-accent uppercase tracking-wider mb-3">
            Panduan Cerdas Konsumen
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            PPF vs Ceramic Coating: <br />
            <span className="text-slate-400 font-semibold">Mana yang Tepat untuk Kendaraan Anda?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Banyak orang mengira keduanya sama. Padahal fungsi utamanya berbeda dan saling melengkapi!
          </p>
        </div>

        {/* Comparative Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* CARD 1: PPF */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-brand-card to-slate-900 border-2 border-brand-500/40 relative shadow-xl flex flex-col justify-between">
            <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-brand-500 text-white font-black text-xs uppercase tracking-wider shadow-md">
              Armor Fisik Anti-Baret
            </div>

            <div>
              <div className="flex items-center justify-between mt-2 mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white">PPF (Paint Protection Film)</h3>
                  <p className="text-xs text-brand-400 font-semibold mt-1">
                    Lembaran Film TPU Elastis Transparan Tebal
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                  <Shield className="w-7 h-7" />
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Ibarat <strong className="text-white">&quot;Tempered Glass / Antigores Tebal&quot;</strong> untuk bodi
                kendaraan. Menahan benturan fisik nyata dan memiliki kemampuan memperbaiki baret sendiri saat terkena
                suhu hangat matahari.
              </p>

              <ul className="space-y-3.5 text-sm mb-8 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Anti-Baret Ekstrem:</strong> Melindungi dari kerikil tol, goresan
                    kunci, serempetan ringan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Self-Healing Magic:</strong> Baret halus (swirl mark) hilang sendiri
                    saat terjemur matahari / disiram air hangat.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Daya Tahan Lama:</strong> Bertahan 5 hingga 10 tahun tanpa perlu
                    lepas pasang ulang.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Bisa Dilepas Tanpa Bekas:</strong> Saat bosan atau mau jual mobil,
                    cat asli di bawahnya masih 100% mulus orisinil.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-2">
                Sangat Direkomendasikan Untuk:
              </span>
              <p className="text-xs text-brand-300 bg-brand-500/10 p-3 rounded-xl border border-brand-500/20">
                Mobil/motor baru turun dealer, kendaraan yang sering lewat jalan tol, mobil hobi/koleksi, dan bagian
                rawan (bumper, kap mesin, spion, tangki motor).
              </p>
            </div>
          </div>

          {/* CARD 2: CERAMIC COATING */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-brand-card to-slate-900 border border-slate-700/80 relative shadow-xl flex flex-col justify-between">
            <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-brand-accent text-white font-black text-xs uppercase tracking-wider shadow-md">
              Kilap Kaca &amp; Anti-Jamur
            </div>

            <div>
              <div className="flex items-center justify-between mt-2 mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white">Ceramic / Graphene Coating</h3>
                  <p className="text-xs text-brand-accent font-semibold mt-1">
                    Lapisan Cair Kristal Nano Meresap ke Pori Cat
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                  <Droplet className="w-7 h-7" />
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Ibarat <strong className="text-white">&quot;Skincare Pelindung UV &amp; Pengkilap Ekstrem&quot;</strong>.
                Menutup pori-pori pernis cat sehingga air dan kotoran tidak bisa menempel dan cat terlihat basah
                mengkilap (<em>deep wet-look</em>).
              </p>

              <ul className="space-y-3.5 text-sm mb-8 text-slate-300">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Kilap Ekstrem (Deep Gloss):</strong> Warna cat terlihat jauh lebih
                    pekat, berkilau seperti dilapisi kaca bening.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Super Hydrophobic:</strong> Efek daun talas tingkat tinggi; air
                    langsung meluncur, mencegah jamur air.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Mudah Dicuci (Easy Clean):</strong> Debu, kotoran burung, dan aspal
                    tidak mengendap di pori-pori cat.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Biaya Lebih Terjangkau:</strong> Cocok untuk yang ingin proteksi
                    kilap menyeluruh dengan budget bersahabat.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold mb-2">
                Sangat Direkomendasikan Untuk:
              </span>
              <p className="text-xs text-brand-accent bg-brand-accent/10 p-3 rounded-xl border border-brand-accent/20">
                Kendaraan harian yang ingin selalu tampil kinclong bersih, perlindungan anti-jamur saat musim hujan, dan
                budget efisien.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Summary Combo Box */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-dark to-slate-900 border border-slate-700/60 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Bisa Dikombinasikan? Tentu Saja (Kombinasi Terbaik)!</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Gunakan PPF pada area rawan benturan (Bumper, Kap Mesin, Spion) &amp; Coating Ceramic di sisa bodi lainnya.
              </p>
            </div>
          </div>
          <a
            href="#kalkulator"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-400 border border-brand-500/30 text-xs sm:text-sm font-bold shrink-0 transition-colors"
          >
            Konsultasi Kombinasi
          </a>
        </div>
      </div>
    </section>
  );
}
