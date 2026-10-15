# GLOSSARMOR - Next.js Landing Page (PPF & Coating Mobil & Motor)

Landing page responsif berkonversi tinggi yang dibangun menggunakan **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, dan **TypeScript**.

---

## 🚀 Fitur Utama & Struktur Komponen

Halaman ini dirancang secara modular dengan komponen-komponen terpisah:

- **[`app/layout.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/app/layout.tsx)**: Root layout dengan font Google *Plus Jakarta Sans* & metadata SEO otomotif lengkap.
- **[`components/Navbar.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/Navbar.tsx)**: Top notice promo, menu navigasi sticky dengan deteksi scroll, dan mobile drawer responsive.
- **[`components/Hero.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/Hero.tsx)**: Headline persuasif, badge garansi 10 tahun, simulasi visual TPU film, & CTA langsung.
- **[`components/PainPoints.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/PainPoints.tsx)**: 4 masalah nyata cat kendaraan di Indonesia (kerikil tol, jamur/hujan asam, UV matahari, baret kucing/helm).
- **[`components/EducationComparison.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/EducationComparison.tsx)**: Modul edukasi komparasi langsung: **PPF vs Ceramic Coating** dan opsi paket kombinasi hybrid.
- **[`components/BeforeAfterSlider.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/BeforeAfterSlider.tsx)**: Interaktif slider perbandingan Before/After yang bisa digeser via mouse maupun touch di smartphone.
- **[`components/Features.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/Features.tsx)**: 6 keunggulan standar laboratorium (Cleanroom ber-AC, Software Precision Pre-Cut, Garansi e-warranty online, dll).
- **[`components/PricingPackages.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/PricingPackages.tsx)**: Tab switcher paket transparan untuk **Mobil** dan **Motor** dengan sorotan *Best Value*.
- **[`components/SmartCalculator.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/SmartCalculator.tsx)**: Kalkulator pintar untuk estimasi harga berdasarkan tipe kendaraan dan kebutuhan, langsung terhubung ke WhatsApp dengan pesan dinamis.
- **[`components/Testimonials.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/Testimonials.tsx)**: Ulasan nyata pemilik kendaraan (Innova Zenix, Vespa Sprint, CR-V Turbo).
- **[`components/FAQAccordion.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/FAQAccordion.tsx)**: Accordion tanya-jawab yang meredam keraguan konsumen (keamanan cat orisinil, self-healing, garansi).
- **[`components/BookingCTA.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/BookingCTA.tsx)**: Ajakan bertindak penutup dengan info studio workshop & free towing.
- **[`components/FloatingWhatsApp.tsx`](file:///C:/Users/ihsan/.gemini/antigravity/scratch/ppf-coating-landing-page/components/FloatingWhatsApp.tsx)**: Tombol WhatsApp mengambang dengan tooltip animasi untuk konversi instan.

---

## 🛠️ Cara Menjalankan Project

### 1. Mode Development
Jalankan server development lokal:
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 2. Build untuk Production
```bash
npm run build
npm run start
```

---

## ⚙️ Kustomisasi Kontak & Brand

1. **Nomor WhatsApp**:
   - Ganti nomor `6281234567890` di `components/Navbar.tsx`, `components/SmartCalculator.tsx`, `components/BookingCTA.tsx`, `components/Footer.tsx`, dan `components/FloatingWhatsApp.tsx`.

2. **Nama Brand & Logo**:
   - Ganti tulisan `GLOSSARMOR` di `components/Navbar.tsx`, `components/Footer.tsx`, dan `app/layout.tsx`.

3. **Harga & Paket**:
   - Sesuaikan di `components/PricingPackages.tsx` dan logika harga di `components/SmartCalculator.tsx`.
