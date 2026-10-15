import React from "react";
import { Airplay, Cpu, Award, UserCheck, Sparkles, Coffee } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Airplay className="w-6 h-6 text-brand-400" />,
      title: "Cleanroom Ber-AC & Dust-Free",
      desc: "Pemasangan PPF dilakukan di dalam ruangan khusus bertekanan positif, ber-AC, dan bebas debu untuk hasil pemasangan bening 100% tanpa gelembung kotoran.",
      borderColor: "hover:border-brand-500/40",
      iconBg: "bg-brand-500/10 border-brand-500/20",
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-accent" />,
      title: "Software Precision Pre-Cut",
      desc: "Pola PPF dipotong menggunakan mesin plotter digital akurat sesuai lekuk spesifik tipe mobil/motor Anda. Pisau tidak pernah menyentuh langsung cat mobil!",
      borderColor: "hover:border-brand-500/40",
      iconBg: "bg-brand-accent/10 border-brand-accent/20",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Garansi Resmi Terdaftar Online",
      desc: "Garansi hingga 10 tahun untuk PPF (mengelupas, gelembung, menguning) dan hingga 5 tahun untuk Coating dengan e-warranty card yang bisa dicek online kapan pun.",
      borderColor: "hover:border-brand-500/40",
      iconBg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
      title: "Teknisi Bersertifikasi Global",
      desc: "Dikerjakan oleh installer berpengalaman ratusan jam terbang yang tersertifikasi pengerjaan supercar, mobil mewah, dan moge premium.",
      borderColor: "hover:border-brand-500/40",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-400" />,
      title: "Material Original TPU Jerman & USA",
      desc: "Hanya menggunakan material Aliphatic Thermoplastic Polyurethane (TPU) kualitas premium dengan optical clarity tertinggi tanpa efek kulit jeruk (orange peel).",
      borderColor: "hover:border-brand-500/40",
      iconBg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: <Coffee className="w-6 h-6 text-purple-400" />,
      title: "VIP Customer Lounge & Live CCTV",
      desc: "Pantau proses pengerjaan mobil kesayangan Anda melalui monitor CCTV langsung di lounge VIP berfasilitas WiFi kencang, free coffee, dan kenyamanan hotel.",
      borderColor: "hover:border-brand-500/40",
      iconBg: "bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section id="mengapa-kami" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-400 text-xs uppercase font-bold tracking-widest">
            Standar Internasional
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Mengapa Ribuan Pemilik Kendaraan Percaya Pada Kami?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Bukan sekadar pasang stiker atau salon mobil biasa. Kami menggunakan standar pengerjaan laboratorium steril.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-brand-card border border-slate-800 ${item.borderColor} transition-all`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.iconBg} border flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
