import Link from "next/link";
import { BookOpen, Video, ClipboardList, BarChart3, Bell, Award, Calendar, TrendingUp, CheckCircle, Clock, Flame, CreditCard, Play, FileText, ChevronRight, Users, Star, ArrowRight } from "lucide-react";

const QUICK_ACTIONS = [
  { icon: Video, label: "Join Class", href: "/dashboard/live-class", color: "bg-cyan-500/20 text-cyan-400" },
  { icon: ClipboardList, label: "Assignments", href: "/assignments", color: "bg-indigo-500/20 text-indigo-400" },
  { icon: BarChart3, label: "My Results", href: "/results", color: "bg-emerald-500/20 text-emerald-400" },
  { icon: BookOpen, label: "Notes", href: "/dashboard/notes", color: "bg-amber-500/20 text-amber-400" },
  { icon: Calendar, label: "Attendance", href: "/attendance", color: "bg-rose-500/20 text-rose-400" },
  { icon: Award, label: "Certificates", href: "/certificates", color: "bg-purple-500/20 text-purple-400" },
  { icon: Bell, label: "Notices", href: "/notices", color: "bg-orange-500/20 text-orange-400" },
  { icon: TrendingUp, label: "Placements", href: "/placement", color: "bg-teal-500/20 text-teal-400" },
];

const TODAY_CLASSES = [
  { time: "10:00 AM", subject: "Python Basics – Functions & OOP", faculty: "Prof. Anand Kumar", status: "live", room: "Batch A" },
  { time: "01:00 PM", subject: "Data Structures in Python", faculty: "Prof. Anand Kumar", status: "upcoming", room: "Batch A" },
  { time: "03:30 PM", subject: "Problem Solving Practice", faculty: "Prof. Riya Shah", status: "upcoming", room: "Batch A" },
];

const RECENT_NOTICES = [
  { type: "exam", title: "Module 2 Test – This Friday", time: "2 hours ago" },
  { type: "holiday", title: "Holiday: December 25", time: "1 day ago" },
  { type: "placement", title: "Campus Drive: TechCorp – Jan 5", time: "2 days ago" },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen mesh-bg">
      {/* Sidebar + Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen border-r border-white/5 p-5 fixed left-0 top-0 bottom-0 bg-[#0a0f1e]/80 backdrop-blur z-40">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">FF</div>
            <div>
              <div className="text-white text-sm font-bold">Future Fly Tech</div>
              <div className="text-cyan-400 text-xs">Student Portal</div>
            </div>
          </div>

          <nav className="space-y-1 flex-1">
            {[
              { icon: BarChart3, label: "Dashboard", href: "/dashboard", active: true },
              { icon: Video, label: "Live Classes", href: "/dashboard/live-class" },
              { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
              { icon: ClipboardList, label: "Assignments", href: "/assignments" },
              { icon: FileText, label: "Tests", href: "/tests" },
              { icon: BarChart3, label: "Results", href: "/results" },
              { icon: Calendar, label: "Attendance", href: "/attendance" },
              { icon: Bell, label: "Notices", href: "/notices" },
              { icon: Award, label: "Certificates", href: "/certificates" },
              { icon: TrendingUp, label: "Placements", href: "/placement" },
              { icon: CreditCard, label: "Fee Payment", href: "/payment" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                    item.active
                      ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/20"
                      : "text-slate-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Profile at bottom */}
          <div className="glass-card rounded-2xl p-3 mt-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">AR</div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-semibold truncate">Arjun Reddy</div>
                <div className="text-slate-500 text-xs">Python & Automation</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-5 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="text-slate-500 text-sm">Good morning ☀️</div>
              <h1 className="text-2xl font-bold text-white mt-0.5">Arjun Reddy</h1>
              <div className="text-slate-500 text-sm mt-0.5">Python & Automation · Batch A · Semester 2</div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/notices" className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 text-white text-[10px] flex items-center justify-center font-bold">3</span>
              </Link>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">AR</div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Attendance", value: "87%", icon: CheckCircle, color: "text-emerald-400", sub: "18/21 classes", bg: "bg-emerald-500/10" },
              { label: "Current Streak", value: "12 days", icon: Flame, color: "text-orange-400", sub: "Keep going! 🔥", bg: "bg-orange-500/10" },
              { label: "Pending Tasks", value: "3", icon: Clock, color: "text-amber-400", sub: "2 assignments, 1 test", bg: "bg-amber-500/10" },
              { label: "Course Progress", value: "68%", icon: TrendingUp, color: "text-cyan-400", sub: "Module 2 of 3", bg: "bg-cyan-500/10" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="glass-card rounded-2xl p-4 stat-shine">
                  <div className={`w-9 h-9 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div className={`text-xl font-bold ${stat.color} mb-0.5`}>{stat.value}</div>
                  <div className="text-white text-xs font-medium">{stat.label}</div>
                  <div className="text-slate-600 text-xs mt-0.5">{stat.sub}</div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-white font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {QUICK_ACTIONS.map((a) => {
                const Icon = a.icon;
                return (
                  <Link key={a.label} href={a.href} className="flex flex-col items-center gap-2 group">
                    <div className={`w-12 h-12 rounded-2xl ${a.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-500 text-xs text-center group-hover:text-white transition-colors leading-tight">{a.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Grid: Today's classes + Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Today's Classes */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2"><Video className="w-4 h-4 text-cyan-400" />Today&apos;s Classes</h3>
                <Link href="/dashboard/live-class" className="text-cyan-400 text-xs flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></Link>
              </div>
              <div className="space-y-3">
                {TODAY_CLASSES.map((cls, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/6 transition-all">
                    <div className="text-center min-w-[56px]">
                      <div className="text-white text-xs font-bold">{cls.time}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-medium truncate">{cls.subject}</div>
                      <div className="text-slate-500 text-xs">{cls.faculty}</div>
                    </div>
                    {cls.status === "live" ? (
                      <Link href="/dashboard/live-class" className="flex items-center gap-1 px-3 py-1.5 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        LIVE
                      </Link>
                    ) : (
                      <span className="px-3 py-1.5 bg-white/5 text-slate-500 text-xs rounded-lg">{cls.room}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Course Progress */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-indigo-400" />Course Progress</h3>
                <Link href="/dashboard/courses" className="text-cyan-400 text-xs flex items-center gap-1">View <ChevronRight className="w-3 h-3" /></Link>
              </div>
              <div className="space-y-4">
                {[
                  { module: "Module 1: Python Basics", progress: 100, topics: 12 },
                  { module: "Module 2: OOP & Functions", progress: 68, topics: 10 },
                  { module: "Module 3: Automation", progress: 0, topics: 8 },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300">{m.module}</span>
                      <span className={m.progress === 100 ? "text-emerald-400" : m.progress > 0 ? "text-cyan-400" : "text-slate-600"}>{m.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${m.progress === 100 ? "bg-emerald-400" : "bg-gradient-to-r from-cyan-500 to-indigo-600"} progress-glow`}
                        style={{ width: `${m.progress}%` }}
                      />
                    </div>
                    <div className="text-slate-600 text-xs mt-0.5">{m.topics} topics</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid: Notices + Fee */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Notices */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2"><Bell className="w-4 h-4 text-orange-400" />Recent Notices</h3>
                <Link href="/notices" className="text-cyan-400 text-xs flex items-center gap-1">All <ChevronRight className="w-3 h-3" /></Link>
              </div>
              <div className="space-y-3">
                {RECENT_NOTICES.map((n, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${n.type === "exam" ? "bg-red-500/20" : n.type === "holiday" ? "bg-green-500/20" : "bg-blue-500/20"}`}>
                      {n.type === "exam" ? "📝" : n.type === "holiday" ? "🎉" : "💼"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-medium">{n.title}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee Status */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2"><CreditCard className="w-4 h-4 text-emerald-400" />Fee Status</h3>
                <Link href="/payment" className="text-cyan-400 text-xs flex items-center gap-1">Pay <ChevronRight className="w-3 h-3" /></Link>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Installment 1", amount: "₹11,000", status: "Paid", date: "Nov 1" },
                  { label: "Installment 2", amount: "₹11,000", status: "Paid", date: "Dec 1" },
                  { label: "Installment 3", amount: "₹11,000", status: "Due", date: "Jan 1" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/3">
                    <div>
                      <div className="text-white text-xs font-medium">{f.label}</div>
                      <div className="text-slate-500 text-xs">{f.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white text-xs font-semibold">{f.amount}</div>
                      <span className={`text-xs font-medium ${f.status === "Paid" ? "text-emerald-400" : "text-amber-400"}`}>{f.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/payment" className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium rounded-xl text-sm hover:opacity-90 transition-all btn-glow">
                Pay Installment 3 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
