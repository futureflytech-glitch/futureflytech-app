"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, GraduationCap } from "lucide-react";

const SLIDES = [
  {
    emoji: "🤖",
    tag: "Technology Division",
    title: "Launch Your Tech Career",
    subtitle: "From AI & Machine Learning to Full Stack Development — master the skills shaping tomorrow's world.",
    points: ["AI / ML / Data Science", "Web Development", "Python & Automation", "Prompt Engineering & NLP"],
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.3)",
    bg: "from-cyan-500/10 via-blue-500/5 to-transparent",
  },
  {
    emoji: "✈️",
    tag: "Aviation & Vocational Division",
    title: "Soar into Aviation Careers",
    subtitle: "Dream of the skies? Our cabin crew and ground staff programs open doors to the world's leading airlines.",
    points: ["Cabin Crew Training", "Ground Staff & Airport Ops", "Personality Development", "Spoken English Mastery"],
    gradient: "from-indigo-500 to-purple-600",
    glow: "rgba(99,102,241,0.3)",
    bg: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },
  {
    emoji: "🚀",
    tag: "Complete Platform",
    title: "One Platform, Total Success",
    subtitle: "From admission to placement — every step of your academic journey powered by Future Fly Tech.",
    points: ["Live Classes & Recordings", "Smart Tests & Assignments", "Digital Certificates", "Dedicated Placement Support"],
    gradient: "from-emerald-500 to-cyan-600",
    glow: "rgba(16,185,129,0.3)",
    bg: "from-emerald-500/10 via-cyan-500/5 to-transparent",
  },
];

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];

  return (
    <div className="min-h-screen mesh-bg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-sm">Future Fly Tech</span>
        </div>
        <Link href="/login" className="text-slate-400 text-sm hover:text-white transition-colors">
          Skip
        </Link>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-lg mx-auto w-full">
        {/* Glow BG */}
        <div
          className="w-48 h-48 rounded-full mb-8 relative flex items-center justify-center"
          style={{ background: `radial-gradient(circle, ${slide.glow} 0%, transparent 70%)` }}
        >
          <div className={`w-36 h-36 rounded-3xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center text-7xl shadow-2xl animate-float`}>
            {slide.emoji}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium mb-4">
          {slide.tag}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4 leading-tight">
          {slide.title}
        </h1>
        <p className="text-slate-400 text-center text-base leading-relaxed mb-8">
          {slide.subtitle}
        </p>

        {/* Feature points */}
        <div className="grid grid-cols-2 gap-3 w-full mb-10">
          {slide.points.map((p, i) => (
            <div key={i} className="glass-card rounded-xl px-4 py-3 text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 max-w-lg mx-auto w-full">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-cyan-400" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          {current > 0 && (
            <button
              onClick={() => setCurrent(current - 1)}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 text-white font-medium rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          )}

          {current < SLIDES.length - 1 ? (
            <button
              onClick={() => setCurrent(current + 1)}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-2xl btn-glow hover:opacity-90 transition-all"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <Link
              href="/login"
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-2xl btn-glow hover:opacity-90 transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
