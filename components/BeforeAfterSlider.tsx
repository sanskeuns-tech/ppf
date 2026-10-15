"use client";

import React, { useState, useRef, useCallback } from "react";
import { ChevronsLeftRight, MousePointer } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;

    const minX = rect.width * 0.05;
    const maxX = rect.width * 0.95;
    offsetX = Math.max(minX, Math.min(offsetX, maxX));

    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="before-after" className="py-20 bg-brand-card/40 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-400 text-xs uppercase font-bold tracking-widest">
            Perbandingan Nyata
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
            Geser &amp; Lihat Perbedaannya Sendiri
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Bandingkan kondisi cat sebelum vs sesudah perlindungan PPF &amp; Ceramic Coating di GlossArmor.
          </p>
        </div>

        {/* Comparison Slider Component */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => isDragging && handleMove(e.clientX)}
            onTouchStart={handleTouchStart}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 select-none cursor-ew-resize"
          >
            {/* Background Layer: AFTER (Protected, Ultra-Glossy) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-rose-950/50 to-slate-950 flex items-center justify-center">
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-500/20 via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] translate-x-20" />

                <div className="absolute inset-0 flex flex-col items-end justify-end p-6 sm:p-10 text-right z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-brand-500 text-brand-darker font-extrabold text-xs uppercase tracking-wider mb-1">
                    SESUDAH (PPF + COATING)
                  </span>
                  <p className="text-white text-base sm:text-xl font-bold">
                    Kilap Basah Mewah, Anti Baret &amp; Air Meluncur
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Baret halus hilang seketika, cat orisinil terlindungi 100%
                  </p>
                </div>
              </div>
            </div>

            {/* Clipped Top Layer: BEFORE (Swirls, Dull, Unprotected) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950 via-slate-900 to-stone-900 flex items-center justify-center"
                style={{ width: "100%", minWidth: "600px" }}
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-10 text-left z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-red-600/90 text-white font-extrabold text-xs uppercase tracking-wider mb-1">
                    SEBELUM (CAT POLOS)
                  </span>
                  <p className="text-slate-300 text-base sm:text-xl font-bold">
                    Kusam, Swirl Mark &amp; Rawan Baret Kerikil
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Mudah berjamur, pori terbuka, nilai jual merosot
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Handle Divider */}
            <div
              className="absolute top-0 bottom-0 z-20 flex items-center justify-center -translate-x-1/2 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-1 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              <div className="w-10 h-10 rounded-full bg-white text-brand-darker flex items-center justify-center shadow-2xl absolute border-2 border-brand-500">
                <ChevronsLeftRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
            <MousePointer className="w-4 h-4 text-brand-400" />
            <span>Geser pegangan di atas ke kiri atau ke kanan untuk membandingkan</span>
          </p>
        </div>
      </div>
    </section>
  );
}
