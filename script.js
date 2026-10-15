/**
 * GLOSSARMOR Landing Page Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a nav link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Tab Switcher for Packages (Mobil vs Motor)
  const tabMobil = document.getElementById('tab-mobil');
  const tabMotor = document.getElementById('tab-motor');
  const pricingMobil = document.getElementById('pricing-mobil');
  const pricingMotor = document.getElementById('pricing-motor');

  if (tabMobil && tabMotor && pricingMobil && pricingMotor) {
    tabMobil.addEventListener('click', () => {
      tabMobil.classList.add('active');
      tabMobil.classList.remove('text-slate-400');
      tabMotor.classList.remove('active');
      tabMotor.classList.add('text-slate-400');

      pricingMobil.classList.remove('hidden');
      pricingMotor.classList.add('hidden');
    });

    tabMotor.addEventListener('click', () => {
      tabMotor.classList.add('active');
      tabMotor.classList.remove('text-slate-400');
      tabMobil.classList.remove('active');
      tabMobil.classList.add('text-slate-400');

      pricingMotor.classList.remove('hidden');
      pricingMobil.classList.add('hidden');
    });
  }

  // 3. Before/After Comparison Slider (Touch & Mouse Support)
  const sliderContainer = document.getElementById('slider-container');
  const beforeWrapper = document.getElementById('before-image-wrapper');
  const sliderHandle = document.getElementById('slider-handle');

  if (sliderContainer && beforeWrapper && sliderHandle) {
    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = sliderContainer.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      
      // Clamp between 5% and 95%
      const minX = rect.width * 0.05;
      const maxX = rect.width * 0.95;
      offsetX = Math.max(minX, Math.min(offsetX, maxX));

      const percentage = (offsetX / rect.width) * 100;
      beforeWrapper.style.width = `${percentage}%`;
      sliderHandle.style.left = `${percentage}%`;
    };

    // Mouse Events
    sliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      setPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });

    // Touch Events for Mobile
    sliderContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches.length > 0) {
        setPosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        setPosition(e.touches[0].clientX);
      }
    }, { passive: true });
  }

  // 4. Interactive Recommendation Calculator
  const vehicleSelect = document.getElementById('calc-vehicle-type');
  const prioritySelect = document.getElementById('calc-priority');
  const recTitle = document.getElementById('calc-recommendation-title');
  const recDesc = document.getElementById('calc-recommendation-desc');
  const recPrice = document.getElementById('calc-price-est');
  const waBtn = document.getElementById('calc-wa-btn');

  const updateRecommendation = () => {
    if (!vehicleSelect || !prioritySelect) return;

    const vehicle = vehicleSelect.value;
    const priority = prioritySelect.value;
    const vehicleText = vehicleSelect.options[vehicleSelect.selectedIndex].text;

    let title = '';
    let desc = '';
    let price = '';

    const isMotor = vehicle.startsWith('motor');

    if (isMotor) {
      if (priority === 'anti-baret') {
        title = 'Full Body PPF Self-Healing Motor';
        desc = 'Proteksi 100% seluruh panel bodi halus dari senggolan parkir dan gesekan kuku/resleting.';
        price = vehicle === 'motor-sport' ? 'Rp 4.500.000' : (vehicle === 'motor-bigmatic' ? 'Rp 3.500.000' : 'Rp 2.800.000');
      } else if (priority === 'kilap-jamur') {
        title = 'Ceramic Coating Motor 9H Complete';
        desc = 'Kilap kaca pekat, restorasi trim bodi kasar, dan efek daun talas agar mudah dibersihkan.';
        price = vehicle === 'motor-sport' ? 'Rp 1.200.000' : (vehicle === 'motor-bigmatic' ? 'Rp 950.000' : 'Rp 750.000');
      } else {
        // Kombinasi
        title = 'PPF Essential (Tangki/Tameng) + Full Coating';
        desc = 'PPF di bagian kontak gesekan utama + Coating Ceramic di sisa panel lainnya. Paling pas di kantong!';
        price = vehicle === 'motor-sport' ? 'Rp 2.200.000' : (vehicle === 'motor-bigmatic' ? 'Rp 1.450.000' : 'Rp 1.100.000');
      }
    } else {
      // Mobil
      if (priority === 'anti-baret') {
        title = 'Full Body PPF Self-Healing Mobil';
        desc = 'Seluruh panel bodi mobil terbungkus film TPU 8.5 Mil. Garansi 10 tahun bebas resiko baret kerikil tol.';
        price = vehicle === 'mobil-large' ? 'Rp 28.500.000' : (vehicle === 'mobil-medium' ? 'Rp 23.500.000' : 'Rp 19.500.000');
      } else if (priority === 'kilap-jamur') {
        title = 'Ceramic Coating 9H+ Diamond (3 Layer)';
        desc = 'Multi-stage paint correction menghilangkan swirl marks, ditambah 3 layer nano ceramic bergaransi 3 tahun.';
        price = vehicle === 'mobil-large' ? 'Rp 4.200.000' : (vehicle === 'mobil-medium' ? 'Rp 3.500.000' : 'Rp 2.990.000');
      } else {
        // Kombinasi / Hybrid
        title = 'PPF Front Shield + Ceramic Coating Full Body';
        desc = 'Solusi terbaik: PPF anti-baret kerikil di Bumper Depan, Kap Mesin, Spion + Ceramic Coating di sisa bodi.';
        price = vehicle === 'mobil-large' ? 'Rp 12.500.000' : (vehicle === 'mobil-medium' ? 'Rp 9.850.000' : 'Rp 8.200.000');
      }
    }

    if (recTitle) recTitle.textContent = title;
    if (recDesc) recDesc.textContent = desc;
    if (recPrice) recPrice.textContent = price;

    if (waBtn) {
      const message = encodeURIComponent(
        `Halo GlossArmor, saya ingin konsultasi promo untuk:\n- Kendaraan: ${vehicleText}\n- Rekomendasi Paket: ${title} (${price})\nMohon info ketersediaan slot pengerjaannya.`
      );
      waBtn.href = `https://wa.me/6281234567890?text=${message}`;
    }
  };

  if (vehicleSelect && prioritySelect) {
    vehicleSelect.addEventListener('change', updateRecommendation);
    prioritySelect.addEventListener('change', updateRecommendation);
    updateRecommendation(); // Init
  }

  // 5. FAQ Accordion
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = !content.classList.contains('hidden');

      // Close all other FAQs
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-toggle').forEach(b => b.classList.remove('active'));

      if (!isOpen) {
        content.classList.remove('hidden');
        btn.classList.add('active');
      }
    });
  });

  // 6. Navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('shadow-xl', 'bg-brand-darker/95');
      } else {
        navbar.classList.remove('shadow-xl');
      }
    });
  }
});
