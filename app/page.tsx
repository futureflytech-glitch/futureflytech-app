import Navbar from "@/components/fft/Navbar";
import HeroSection from "@/components/fft/HeroSection";
import StatsSection from "@/components/fft/StatsSection";
import CoursesSection from "@/components/fft/CoursesSection";
import FeaturesSection from "@/components/fft/FeaturesSection";
import TestimonialsSection from "@/components/fft/TestimonialsSection";
import CTASection from "@/components/fft/CTASection";
import FooterSection from "@/components/fft/FooterSection";

export default function HomePage() {
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
