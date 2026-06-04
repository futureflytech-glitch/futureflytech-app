import Link from "next/link";
import { Video, Users, ClipboardList, BarChart3, Bell, Upload, CheckCircle, Clock, TrendingUp, BookOpen, FileText, Star, ChevronRight } from "lucide-react";

const MY_CLASSES = [
  { time: "10:00 AM", subject: "Python Basics – Functions", batch: "Batch A · 32 students", status: "live" },
  { time: "01:00 PM", subject: "Data Structures", batch: "Batch B · 28 students", status: "upcoming" },
  { time: "03:30 PM", subject: "Problem Solving", batch: "Batch A · 32 students", status: "upcoming" },
];

const PENDING_EVALS = [
  { type: "assignment", title: "OOP Concepts Assignment", batch: "Batch A", pending: 14, due: "Today" },
  { type: "test", title: "Module 2 Test Evaluation", batch: "Batch B", pending: 8, due: "Tomorrow" },
  { type: "assignment", title: "Python Project Submission", batch: "Batch C", pending: 22, due: "Dec 20" },
];

export default function FacultyDashboard() {
  return (
    <div className="min-h-screen mesh-bg">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen border-r border-white/5 p-5 fixed left-0 top-0 bottom-0 bg-[#0a0f1e]/80 backdrop-blur z-40">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold">FF</div>
            <div>
              <div className="text-white text-sm font-bold">Future Fly Tech</div>
              <div className="text-indigo-400 text-xs">Faculty Portal</div>
            </div>
          </div>
          <nav className="space-y-1 flex-1">
            {[
              { icon: BarChart3, label: "Dashboard", active: true },
              { icon: Video, label: "Live Classes", href: "/faculty/live-class" },
              { icon: ClipboardList, label: "Assignments", href: "/faculty/assignments" },
              { icon: FileText, label: "Tests", href: "/faculty/tests" },
              { icon: Users, label: "Attendance", href: "/faculty/attendance" },
              { icon: BarChart3, label: "Analytics", href: "/faculty/analytics" },
              { icon: Upload, label: "Upload Notes", href: "/faculty/notes" },
              { icon: Bell, label: "Notices", href: "/notices" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${item.active ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/20" : "text-slate-500 hover:text-white hover:bg-white/5"}`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="glass-card rounded-2xl p-3 mt-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">AK</div>
              <div>
                <div className="text-white text-xs font-semibold">Prof. Anand Kumar</div>
                <div className="text-slate-500 text-xs">Python & Data Science</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 lg:ml-64 p-5 sm:p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="text-slate-500 text-sm">Faculty Dashboard</div>
              <h1 className="text-2xl font-bold text-white mt-0.5">Prof. Anand Kumar</h1>
              <div className="text-slate-500 text-sm mt-0.5">Python & Data Science · 3 Active Batches</div>
            </div>
            <Link href="/faculty/live-class" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all text-sm">
              <Video className="w-4 h-4" /> Start Class
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Students", value: "92", icon: Users, color: "text-cyan-400", bg: "bg-cyan-500/10" },
              { label: "Pending Evals", value: "44", icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10" },
              { label: "Avg Attendance", value: "84%", icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { label: "Avg Rating", value: "4.8★", icon: Star, color: "text-rose-400", bg: "bg-rose-500/10" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="glass-card rounded-2xl p-4">
                  <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Today Classes */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2"><Video className="w-4 h-4 text-cyan-400" />Today&apos;s Classes</h3>
              </div>
              <div className="space-y-3">
                {MY_CLASSES.map((cls, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/3">
                    <div className="text-white text-xs font-bold min-w-[60px]">{cls.time}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-medium truncate">{cls.subject}</div>
                      <div className="text-slate-500 text-xs">{cls.batch}</div>
                    </div>
                    {cls.status === "live" ? (
                      <Link href="/faculty/live-class" className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold rounded-lg btn-glow">
                        <Video className="w-3 h-3" /> Start
                      </Link>
                    ) : (
                      <span className="px-2.5 py-1 bg-white/5 text-slate-500 text-xs rounded-lg">Scheduled</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Evaluations */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2"><ClipboardList className="w-4 h-4 text-amber-400" />Pending Evaluations</h3>
                <Link href="/faculty/assignments" className="text-cyan-400 text-xs">View all <ChevronRight className="w-3 h-3 inline" /></Link>
              </div>
              <div className="space-y-3">
                {PENDING_EVALS.map((e, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${e.type === "assignment" ? "bg-amber-500/20" : "bg-rose-500/20"}`}>
                      {e.type === "assignment" ? "📝" : "📊"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-medium truncate">{e.title}</div>
                      <div className="text-slate-500 text-xs">{e.batch} · {e.pending} submissions pending</div>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${e.due === "Today" ? "bg-red-500/20 text-red-400" : "bg-amber-500/20 text-amber-400"}`}>{e.due}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Upload, label: "Upload Notes", href: "/faculty/notes", color: "bg-cyan-500/20 text-cyan-400" },
                { icon: FileText, label: "Create Test", href: "/faculty/tests/new", color: "bg-indigo-500/20 text-indigo-400" },
                { icon: ClipboardList, label: "New Assignment", href: "/faculty/assignments/new", color: "bg-amber-500/20 text-amber-400" },
                { icon: TrendingUp, label: "View Analytics", href: "/faculty/analytics", color: "bg-emerald-500/20 text-emerald-400" },
              ].map((a) => {
                const Icon = a.icon;
                return (
                  <Link key={a.label} href={a.href} className={`flex items-center gap-3 p-4 rounded-xl ${a.color} hover:opacity-80 transition-all`}>
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium text-white">{a.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
