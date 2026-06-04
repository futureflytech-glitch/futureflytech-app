import { STATS } from "@/lib/fft-data";
import { TrendingUp } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 stat-shine">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          <span>Trusted by students across India since 2018</span>
        </div>
      </div>
    </section>
  );
}
