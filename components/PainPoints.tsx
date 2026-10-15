import React from "react";
import { AlertTriangle, CloudRain, Sun, Scissors } from "lucide-react";

export default function PainPoints() {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      title: "Kerikil di Jalan Tol",
      desc: "Lontaran kerikil (stone chips) dari truk depan menusuk pernis hingga ke plat bodi, menyebabkan bintik putih permanen.",
      borderColor: "hover:border-red-500/40",
      bgColor: "bg-red-500/10",
      borderIconColor: "border-red-500/20",
    },
    {
      icon: <CloudRain className="w-6 h-6 text-amber-400" />,
      title: "Jamur & Water Spot",
      desc: "Air hujan asam dan panas terik membakar mineral air ke pori cat, membuat warna menjadi buram dan bercak pulau.",
      borderColor: "hover:border-amber-500/40",
      bgColor: "bg-amber-500/10",
      borderIconColor: "border-amber-500/20",
    },
    {
      icon: <Sun className="w-6 h-6 text-yellow-400" />,
      title: "Oksidasi & Sinar UV",
      desc: "Sinar matahari tropis membuat warna putih menguning (yellowing) dan warna hitam/merah tampak memudar kusam.",
      borderColor: "hover:border-yellow-500/40",
      bgColor: "bg-yellow-500/10",
      borderIconColor: "border-yellow-500/20",
    },
    {
      icon: <Scissors className="w-6 h-6 text-purple-400" />,
      title: "Goresan Parkir & Kucing",
      desc: "Senggolan helm motor di parkiran, cakar hewan peliharaan, dan kuku gagang pintu merusak estetika mobil mewah Anda.",
      borderColor: "hover:border-purple-500/40",
      bgColor: "bg-purple-500/10",
      borderIconColor: "border-purple-500/20",
    },
  ];

  return (
    <section className="py-16 bg-brand-card/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-2">
            Mengapa Kendaraan Butuh Proteksi Sejak Dini?
          </h2>
          <p className="text-2xl sm:text-4xl font-extrabold text-white">
            Musuh Nyata Cat Mobil &amp; Motor di Jalanan Indonesia
          </p>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Cat bawaan pabrik tipis dan rentan. Sekali rusak, biaya cat ulang sangat mahal dan menurunkan harga jual drastis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-brand-dark border border-slate-800 ${item.borderColor} transition-colors group`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.bgColor} border ${item.borderIconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
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
