import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import EducationComparison from "@/components/EducationComparison";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Features from "@/components/Features";
import PricingPackages from "@/components/PricingPackages";
import SmartCalculator from "@/components/SmartCalculator";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-darker text-slate-100">
      <Navbar />
      <Hero />
      <PainPoints />
      <EducationComparison />
      <BeforeAfterSlider />
      <Features />
      <PricingPackages />
      <SmartCalculator />
      <Testimonials />
      <FAQAccordion />
      <BookingCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
