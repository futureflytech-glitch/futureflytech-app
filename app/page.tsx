"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

import Navbar from "@/components/fft/Navbar";
import HeroSection from "@/components/fft/HeroSection";
import StatsSection from "@/components/fft/StatsSection";
import CoursesSection from "@/components/fft/CoursesSection";
import FeaturesSection from "@/components/fft/FeaturesSection";
import TestimonialsSection from "@/components/fft/TestimonialsSection";
import CTASection from "@/components/fft/CTASection";
import FooterSection from "@/components/fft/FooterSection";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <main className="min-h-screen mesh-bg">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
