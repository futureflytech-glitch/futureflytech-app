import { TESTIMONIALS } from "@/lib/fft-data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            Student Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Hear From Our <span className="gradient-text">Alumni</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real transformations, real careers. Our students&apos; success is our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-cyan-500/30 mb-4" />

              {/* Rating */}
              <div className="flex mb-3">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.course} · {t.company}</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-cyan-400">
                  {t.company.slice(0, 2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
