import Link from "next/link";
import { CheckCircle, XCircle, Clock, Download, ChevronLeft, ChevronRight } from "lucide-react";

// Simple calendar data for demo
const CALENDAR_DATA: Record<number, "present" | "absent" | "leave" | null> = {
  1: "present", 2: "present", 3: "absent", 4: "present", 5: "present",
  8: "present", 9: "leave", 10: "present", 11: "present", 12: "present",
  15: "present", 16: "absent", 17: "present", 18: "present", 19: "present",
  22: "present", 23: "present", 24: "present", 25: null, 26: null,
};

export default function AttendancePage() {
  const totalDays = Object.keys(CALENDAR_DATA).length;
  const presentDays = Object.values(CALENDAR_DATA).filter(v => v === "present").length;
  const absentDays = Object.values(CALENDAR_DATA).filter(v => v === "absent").length;
  const leaveDays = Object.values(CALENDAR_DATA).filter(v => v === "leave").length;
  const percentage = Math.round((presentDays / totalDays) * 100);

  return (
    <div className="min-h-screen mesh-bg">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Attendance</h1>
            <p className="text-slate-500 text-sm">December 2024 · Python & Automation</p>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Present", value: presentDays, icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/10" },
            { label: "Absent", value: absentDays, icon: XCircle, color: "text-red-400", bg: "bg-red-500/10" },
            { label: "Leave", value: leaveDays, icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10" },
            { label: "Percentage", value: `${percentage}%`, icon: CheckCircle, color: percentage >= 75 ? "text-emerald-400" : "text-red-400", bg: percentage >= 75 ? "bg-emerald-500/10" : "bg-red-500/10" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="glass-card rounded-2xl p-4 text-center">
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-2`}>
                  <Icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Attendance Status Bar */}
        <div className="glass-card rounded-2xl p-5 mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white font-medium">Attendance Progress</span>
            <span className={percentage >= 75 ? "text-emerald-400 font-semibold" : "text-red-400 font-semibold"}>{percentage}%</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div className={`h-full rounded-full progress-glow ${percentage >= 75 ? "bg-gradient-to-r from-emerald-500 to-cyan-500" : "bg-gradient-to-r from-red-500 to-orange-500"}`} style={{ width: `${percentage}%` }} />
          </div>
          <div className="text-slate-500 text-xs mt-1.5">Minimum 75% required · {percentage >= 75 ? "✅ You are safe" : "⚠️ Below minimum"}</div>
        </div>

        {/* Calendar */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="text-white font-semibold">December 2024</h3>
            <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
              <div key={d} className="text-center text-xs text-slate-600 font-medium">{d}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Dec 1, 2024 is Sunday - no offset needed */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
              const status = CALENDAR_DATA[day];
              const isWeekend = [1, 7, 8, 14, 15, 21, 22, 28, 29].includes(day);
              return (
                <div
                  key={day}
                  className={`aspect-square rounded-xl flex items-center justify-center text-xs font-medium transition-all ${
                    status === "present" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                    status === "absent" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                    status === "leave" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                    isWeekend ? "bg-white/3 text-slate-700" :
                    day > 24 ? "bg-white/5 text-slate-600 border border-dashed border-white/10" :
                    "bg-white/5 text-slate-500"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/5">
            {[
              { color: "bg-emerald-500/20 border border-emerald-500/30", label: "Present" },
              { color: "bg-red-500/20 border border-red-500/30", label: "Absent" },
              { color: "bg-amber-500/20 border border-amber-500/30", label: "Leave" },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className={`w-4 h-4 rounded ${l.color}`} />
                {l.label}
              </div>
            ))}
          </div>
        </div>

        {/* Download */}
        <button className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:border-cyan-500/30 hover:text-cyan-400 transition-all text-sm font-medium">
          <Download className="w-4 h-4" />
          Download Attendance Report
        </button>
      </div>
    </div>
  );
}
