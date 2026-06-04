import Link from "next/link";
import { ArrowRight, Play, Sparkles, Users, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[120px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>India&apos;s #1 Digital Campus Platform</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          <span className="block">Learn Skills.</span>
          <span className="block gradient-text">Build Careers.</span>
          <span className="block">Transform Futures.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          One platform to run your entire academy — admissions, live classes, assessments, placements, and more. The complete Digital Campus OS for Future Fly Tech.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/courses"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-2xl btn-glow hover:opacity-90 transition-all duration-300 text-base"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/admission"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 text-base"
          >
            Book Free Counseling
          </Link>
          <Link
            href="/onboarding"
            className="flex items-center gap-2 px-8 py-4 text-cyan-400 font-medium hover:text-cyan-300 transition-colors text-base"
          >
            <Play className="w-5 h-5 fill-current" />
            Watch Demo
          </Link>
        </div>

        {/* Social Proof Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex -space-x-2">
            {["PS", "RM", "AP", "KR", "SG"].map((init, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 border-2 border-[#0a0f1e] flex items-center justify-center text-white text-xs font-bold"
              >
                {init}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <span className="font-medium text-white">4.9</span>
            <span className="text-slate-500">from 15,000+ students</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-cyan-400" />
            <span><span className="text-white font-medium">94%</span> placement rate</span>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hidden lg:block">
          <div className="absolute top-32 left-8 glass-card rounded-2xl p-4 text-left animate-float" style={{ animationDelay: "0s" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl">🤖</div>
              <div>
                <div className="text-white text-sm font-semibold">AI & ML</div>
                <div className="text-cyan-400 text-xs">1,240 students enrolled</div>
              </div>
            </div>
          </div>
          <div className="absolute top-48 right-8 glass-card rounded-2xl p-4 text-left animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center text-xl">✈️</div>
              <div>
                <div className="text-white text-sm font-semibold">Cabin Crew</div>
                <div className="text-cyan-400 text-xs">890 placements this year</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-32 left-12 glass-card rounded-2xl p-4 text-left animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="text-green-400 text-2xl font-bold">94%</div>
            <div className="text-slate-400 text-xs">Placement Success</div>
          </div>
        </div>
      </div>
    </section>
  );
}
