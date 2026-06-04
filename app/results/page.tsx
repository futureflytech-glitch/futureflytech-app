import Link from "next/link";
import { ChevronLeft, TrendingUp, TrendingDown, Award, BarChart2, MessageSquare } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const SUBJECT_SCORES = [
  { subject: "Module 1: Basics", score: 87, max: 100, grade: "A", rank: 3 },
  { subject: "OOP Concepts", score: 72, max: 100, grade: "B", rank: 8 },
  { subject: "Functions Quiz", score: 91, max: 100, grade: "A+", rank: 2 },
  { subject: "Data Structures", score: 78, max: 100, grade: "B+", rank: 5 },
];

const BAR_DATA = SUBJECT_SCORES.map(s => ({ name: s.subject.split(":")[0].trim(), score: s.score }));

const RADAR_DATA = [
  { topic: "Python", score: 85 },
  { topic: "OOP", score: 72 },
  { topic: "Functions", score: 91 },
  { topic: "DSA", score: 78 },
  { topic: "Problem Solving", score: 68 },
  { topic: "Automation", score: 60 },
];

export default function ResultsPage() {
  const avg = Math.round(SUBJECT_SCORES.reduce((s, i) => s + i.score, 0) / SUBJECT_SCORES.length);

  return (
    <div className="min-h-screen mesh-bg">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">My Results</h1>
            <p className="text-slate-500 text-sm">Python & Automation · Semester 2</p>
          </div>
        </div>

        {/* Overview Card */}
        <div className="glass-card rounded-3xl p-7 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{avg}%</div>
                <div className="text-cyan-200 text-xs">Overall</div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold text-white mb-1">Arjun Reddy</div>
              <div className="text-slate-400 text-sm mb-4">Grade: <span className="text-cyan-400 font-semibold">A (Distinction)</span> · Class Rank: <span className="text-indigo-400 font-semibold">#3 of 32</span></div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="glass-card rounded-xl p-3">
                  <div className="text-white font-bold">{avg}%</div>
                  <div className="text-slate-500 text-xs">Average</div>
                </div>
                <div className="glass-card rounded-xl p-3">
                  <div className="text-emerald-400 font-bold">91%</div>
                  <div className="text-slate-500 text-xs">Highest</div>
                </div>
                <div className="glass-card rounded-xl p-3">
                  <div className="text-amber-400 font-bold">72%</div>
                  <div className="text-slate-500 text-xs">Lowest</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="glass-card rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><BarChart2 className="w-4 h-4 text-cyan-400" />Score by Module</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={BAR_DATA}>
                <XAxis dataKey="name" tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 12 }} />
                <Bar dataKey="score" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-indigo-400" />Skill Radar</h3>
            <ResponsiveContainer width="100%" height={180}>
              <RadarChart data={RADAR_DATA}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="topic" tick={{ fill: "#475569", fontSize: 10 }} />
                <Radar dataKey="score" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Breakdown */}
        <div className="glass-card rounded-2xl p-5 mb-6">
          <h3 className="text-white font-semibold mb-4">Detailed Scores</h3>
          <div className="space-y-4">
            {SUBJECT_SCORES.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300">{s.subject}</span>
                    <span className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${s.grade.includes("+") ? "bg-cyan-500/20 text-cyan-400" : s.grade === "A" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>{s.grade}</span>
                      <span className="text-white font-semibold">{s.score}%</span>
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full progress-glow ${s.score >= 80 ? "bg-gradient-to-r from-cyan-500 to-emerald-500" : "bg-gradient-to-r from-amber-500 to-orange-500"}`} style={{ width: `${s.score}%` }} />
                  </div>
                  <div className="text-slate-600 text-xs mt-0.5">Class Rank #{s.rank}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Areas + Teacher Comments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass-card rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2"><TrendingDown className="w-4 h-4 text-amber-400" />Areas to Improve</h3>
            {["Object Oriented Programming (72%)", "Problem Solving Logic (68%)", "Automation Scripting (60%)"].map((t, i) => (
              <div key={i} className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{t}</span>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-cyan-400" />Faculty Comment</h3>
            <p className="text-slate-400 text-sm leading-relaxed italic">&ldquo;Arjun shows strong grasp of Python fundamentals. Needs to focus more on OOP design patterns and algorithm optimization. Overall performance is excellent.&rdquo;</p>
            <div className="mt-3 text-slate-600 text-xs">— Prof. Anand Kumar, Dec 2024</div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/certificates" className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium rounded-xl btn-glow text-sm">
            <Award className="w-4 h-4" /> View Certificate
          </Link>
          <Link href="/placement" className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:border-cyan-500/30 hover:text-cyan-400 transition-all text-sm">
            Explore Placements
          </Link>
        </div>
      </div>
    </div>
  );
}
