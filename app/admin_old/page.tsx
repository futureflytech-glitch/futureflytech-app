import Link from "next/link";
import { Users, CreditCard, BookOpen, BarChart3, Bell, Award, TrendingUp, ClipboardList, FileText, Settings, ChevronRight, UserCheck, AlertTriangle, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const REVENUE_DATA = [
  { month: "Jul", revenue: 2.8, admissions: 24 },
  { month: "Aug", revenue: 3.2, admissions: 31 },
  { month: "Sep", revenue: 4.1, admissions: 38 },
  { month: "Oct", revenue: 3.8, admissions: 35 },
  { month: "Nov", revenue: 4.6, admissions: 44 },
  { month: "Dec", revenue: 5.2, admissions: 52 },
];

const PIE_DATA = [
  { name: "Technology", value: 62, color: "#06b6d4" },
  { name: "Vocational", value: 38, color: "#6366f1" },
];

const RECENT_ADMISSIONS = [
  { name: "Priya Sharma", course: "AI & ML", status: "confirmed", fee: "₹45,000", date: "Today" },
  { name: "Rahul Singh", course: "Cabin Crew", status: "pending", fee: "₹28,000", date: "Today" },
  { name: "Ananya Patel", course: "Data Science", status: "confirmed", fee: "₹38,000", date: "Yesterday" },
  { name: "Karthik R.", course: "Web Dev", status: "review", fee: "₹32,000", date: "Yesterday" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen mesh-bg">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen border-r border-white/5 p-5 fixed left-0 top-0 bottom-0 bg-[#0a0f1e]/80 backdrop-blur z-40">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold">FF</div>
            <div>
              <div className="text-white text-sm font-bold">Future Fly Tech</div>
              <div className="text-rose-400 text-xs">Admin ERP</div>
            </div>
          </div>
          <nav className="space-y-0.5 flex-1">
            {[
              { icon: BarChart3, label: "Dashboard", active: true },
              { icon: UserCheck, label: "Admissions", href: "/admin/admissions" },
              { icon: CreditCard, label: "Payments", href: "/admin/payments" },
              { icon: Users, label: "Students", href: "/admin/students" },
              { icon: Users, label: "Faculty", href: "/admin/faculty" },
              { icon: BookOpen, label: "Courses", href: "/admin/courses" },
              { icon: ClipboardList, label: "Batches", href: "/admin/batches" },
              { icon: Activity, label: "Attendance", href: "/admin/attendance" },
              { icon: FileText, label: "Tests", href: "/admin/tests" },
              { icon: Award, label: "Certificates", href: "/certificates" },
              { icon: TrendingUp, label: "Placements", href: "/placement" },
              { icon: Bell, label: "Notices", href: "/notices" },
              { icon: BarChart3, label: "Reports", href: "/admin/reports" },
              { icon: Settings, label: "Settings", href: "/admin/settings" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} href={item.href || "#"}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${item.active ? "bg-rose-500/20 text-rose-400 border border-rose-500/20" : "text-slate-500 hover:text-white hover:bg-white/5"}`}>
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="glass-card rounded-2xl p-3 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold">SA</div>
              <div>
                <div className="text-white text-xs font-semibold">Super Admin</div>
                <div className="text-slate-500 text-xs">Full Access</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 lg:ml-64 p-5 sm:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-slate-500 text-sm">Admin ERP</div>
              <h1 className="text-2xl font-bold text-white">Operations Dashboard</h1>
            </div>
            <div className="flex gap-3">
              <Link href="/notices" className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 text-sm hover:text-white transition-all flex items-center gap-2">
                <Bell className="w-4 h-4" /> Send Notice
              </Link>
              <Link href="/admin/admissions" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium rounded-xl btn-glow text-sm">
                + New Admission
              </Link>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Students", value: "1,284", change: "+52 this month", icon: Users, color: "text-cyan-400", bg: "bg-cyan-500/10" },
              { label: "Revenue (Dec)", value: "₹52L", change: "+12% vs Nov", icon: CreditCard, color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { label: "New Admissions", value: "52", change: "+8 this week", icon: UserCheck, color: "text-indigo-400", bg: "bg-indigo-500/10" },
              { label: "Pending Fees", value: "₹8.4L", change: "38 students", icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-500/10" },
            ].map((k, i) => {
              const Icon = k.icon;
              return (
                <div key={i} className="glass-card rounded-2xl p-5 stat-shine">
                  <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${k.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${k.color}`}>{k.value}</div>
                  <div className="text-white text-sm font-medium mt-0.5">{k.label}</div>
                  <div className="text-slate-600 text-xs mt-0.5">{k.change}</div>
                </div>
              );
            })}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Revenue Chart */}
            <div className="glass-card rounded-2xl p-5 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Revenue & Admissions Trend</h3>
                <span className="text-xs text-slate-500">Last 6 months</span>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={REVENUE_DATA}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `₹${v}L`} />
                  <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff", fontSize: 12 }} />
                  <Area type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={2} fill="url(#rev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4">Enrollment Split</h3>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={50} outerRadius={70} dataKey="value">
                    {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-2">
                {PIE_DATA.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                      <span className="text-slate-400 text-xs">{d.name}</span>
                    </div>
                    <span className="text-white text-xs font-semibold">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Admissions */}
          <div className="glass-card rounded-2xl p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Recent Admissions</h3>
              <Link href="/admin/admissions" className="text-cyan-400 text-xs flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 text-xs">
                    <th className="text-left pb-3 font-medium">Student</th>
                    <th className="text-left pb-3 font-medium">Program</th>
                    <th className="text-left pb-3 font-medium">Fee</th>
                    <th className="text-left pb-3 font-medium">Status</th>
                    <th className="text-left pb-3 font-medium">Date</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {RECENT_ADMISSIONS.map((a, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="py-3 text-white font-medium">{a.name}</td>
                      <td className="py-3 text-slate-400">{a.course}</td>
                      <td className="py-3 text-slate-300">{a.fee}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium ${
                          a.status === "confirmed" ? "bg-emerald-500/20 text-emerald-400" :
                          a.status === "pending" ? "bg-amber-500/20 text-amber-400" :
                          "bg-blue-500/20 text-blue-400"
                        }`}>
                          {a.status}
                        </span>
                      </td>
                      <td className="py-3 text-slate-500">{a.date}</td>
                      <td className="py-3">
                        <button className="px-3 py-1 text-xs bg-white/5 text-slate-400 rounded-lg hover:text-white hover:bg-white/10 transition-all">Review</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Manage Students", href: "/admin/students", desc: "1,284 active", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/20" },
              { icon: CreditCard, label: "Fee Collection", href: "/admin/payments", desc: "₹52L collected", color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20" },
              { icon: BookOpen, label: "Course Manager", href: "/admin/courses", desc: "11 programs", color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/20" },
              { icon: Award, label: "Certificates", href: "/certificates", desc: "234 issued", color: "from-amber-500/20 to-orange-500/20 border-amber-500/20" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} href={item.href} className={`glass-card rounded-2xl p-5 border bg-gradient-to-br ${item.color} hover:opacity-80 transition-all group`}>
                  <Icon className="w-6 h-6 text-white mb-3" />
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{item.desc}</div>
                  <ChevronRight className="w-4 h-4 text-slate-500 mt-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
