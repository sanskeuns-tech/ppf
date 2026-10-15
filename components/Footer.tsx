import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black py-10 border-t border-slate-900 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-white text-sm">
            GLOSS<span className="text-brand-400">ARMOR</span>
          </span>
          <span>&copy; {new Date().getFullYear()}. Hak Cipta Dilindungi. Automotive Paint Protection Studio.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#edukasi-ppf-coating" className="hover:text-slate-300 transition-colors">
            PPF vs Coating
          </a>
          <a href="#paket-harga" className="hover:text-slate-300 transition-colors">
            Harga
          </a>
          <a href="#faq" className="hover:text-slate-300 transition-colors">
            FAQ
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-400 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </footer>
  );
}
