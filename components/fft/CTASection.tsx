import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="relative glass-card rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/20 blur-[60px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-indigo-500/20 blur-[60px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
              🚀 Start Your Journey Today
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Ready to <span className="gradient-text">Take Off?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
              Book a free counseling session and discover which program is right for you. No commitments, just clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admission"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-2xl btn-glow hover:opacity-90 transition-all duration-300"
              >
                Book Free Counseling
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5 text-cyan-400" />
                Call Now: +91 12345 67890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
