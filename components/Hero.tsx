import React from "react";
import { ArrowRight, HelpCircle, Sparkles, Car, CheckCircle2, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-brand-accent/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/70 text-xs sm:text-sm text-slate-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span>Garansi Resmi Hingga 10 Tahun &amp; Bersertifikat Jerman</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Cat Asli Bebas Baret Kerikil,{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-brand-accent bg-clip-text text-transparent">
                Kilap Seperti Baru
              </span>{" "}
              Bertahun-tahun.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Lindungi investasi mobil dan motor kesayangan Anda dari{" "}
              <span className="text-white font-semibold">
                baret kerikil tol, goresan kuku/kunci, sengatan UV, dan jamur air
              </span>{" "}
              dengan teknologi{" "}
              <strong className="text-brand-300 font-semibold">Self-Healing PPF</strong> &amp;{" "}
              <strong className="text-brand-accent font-semibold">Ceramic Coating 10H</strong>.
            </p>

            {/* Action CTA & Trust */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#paket-harga"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white font-bold text-base shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Pilih Paket Kendaraan Anda</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#edukasi-ppf-coating"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-brand-400" />
                <span>Bingung Pilih PPF vs Coating?</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">1,500+</div>
                <div className="text-xs sm:text-sm text-slate-400">Mobil &amp; Motor Terlindungi</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-400">10 Thn</div>
                <div className="text-xs sm:text-sm text-slate-400">Garansi Gelembung &amp; Retak</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent">100%</div>
                <div className="text-xs sm:text-sm text-slate-400">Cleanroom Ber-AC Steril</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-1 bg-gradient-to-b from-brand-500/30 via-slate-700/40 to-transparent shadow-2xl">
              <div className="bg-brand-card rounded-[22px] p-6 sm:p-8 overflow-hidden relative">
                {/* Floating Glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-500/20 rounded-full blur-2xl" />

                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Self-Healing TPU Film</h3>
                      <p className="text-xs text-slate-400">Baret halus hilang dengan paparan panas</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-500/20 text-brand-400 border border-brand-500/30">
                    Grade A+
                  </span>
                </div>

                {/* Simulated Vehicle Surface */}
                <div className="py-6 space-y-4">
                  <div className="rounded-xl overflow-hidden relative group aspect-video bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-pulse" />

                    <div className="relative z-10 text-center px-4">
                      <Car className="w-16 h-16 mx-auto text-slate-400 mb-2 stroke-[1.2]" />
                      <p className="text-sm font-semibold text-slate-200">Ultimate Hydrophobic &amp; Anti-Scratch</p>
                      <span className="inline-block mt-1 text-xs text-brand-400 font-mono">
                        Ketebalan: 8.5 Mil (215 Micron)
                      </span>
                    </div>
                  </div>

                  {/* Checklist Highlights */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>Tahan Lontaran Kerikil Aspal (Stone Chip Protection)</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>Efek Daun Talas (Hydrophobic) cegah water spot &amp; jamur</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>Cat Original Terjaga Utuh = Nilai Jual Kembali Tinggi</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>Tidak Menguning (Anti-Yellowing UV Protection)</span>
                    </div>
                  </div>
                </div>

                {/* Quick Trigger */}
                <div className="pt-4 border-t border-slate-800">
                  <a
                    href="#kalkulator"
                    className="flex items-center justify-between text-xs sm:text-sm text-brand-400 font-bold hover:text-brand-300"
                  >
                    <span>Cek Estimasi Biaya Kendaraan Anda</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
