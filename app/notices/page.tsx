import Link from "next/link";
import { Bell, ChevronLeft, Megaphone, Calendar, Briefcase, FileText, DollarSign, BookOpen } from "lucide-react";

const NOTICE_TYPES = {
  general: { icon: Megaphone, color: "text-cyan-400", bg: "bg-cyan-500/15", label: "General" },
  holiday: { icon: Calendar, color: "text-emerald-400", bg: "bg-emerald-500/15", label: "Holiday" },
  placement: { icon: Briefcase, color: "text-blue-400", bg: "bg-blue-500/15", label: "Placement" },
  exam: { icon: FileText, color: "text-rose-400", bg: "bg-rose-500/15", label: "Exam" },
  fee: { icon: DollarSign, color: "text-amber-400", bg: "bg-amber-500/15", label: "Fee" },
  workshop: { icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/15", label: "Workshop" },
};

const NOTICES = [
  { type: "exam", title: "Module 2 Test – December 22, 2024", content: "Module 2 Assessment covering Functions, Decorators, and OOP will be conducted on December 22nd from 10:00 AM to 11:00 AM. Students must carry their ID cards. No late entry allowed.", date: "Dec 18, 2024", time: "2 hours ago", important: true },
  { type: "placement", title: "Campus Drive: Google – ML Engineer", content: "Google India will be conducting a campus recruitment drive on January 5, 2025. Students from AI/ML, Data Science, and Python batches are eligible. Register by December 30th through the Placement Portal.", date: "Dec 17, 2024", time: "1 day ago", important: false },
  { type: "holiday", title: "Christmas Holiday – December 25", content: "The institute will remain closed on December 25, 2024 on account of Christmas. Classes scheduled for this day will be rescheduled. Check the timetable for updated schedule.", date: "Dec 16, 2024", time: "2 days ago", important: false },
  { type: "workshop", title: "AI Workshop: ChatGPT for Professionals", content: "Exclusive hands-on workshop on practical ChatGPT & Prompt Engineering for industry professionals. Registration is complimentary for all enrolled students. Limited seats — register now!", date: "Dec 15, 2024", time: "3 days ago", important: false },
  { type: "fee", title: "Installment 3 Due – January 1, 2025", content: "Reminder: The 3rd installment of your course fee (₹11,000) is due on January 1, 2025. Pay before the due date to avoid a late fee of ₹500. Payment options available: UPI, Card, Net Banking.", date: "Dec 14, 2024", time: "4 days ago", important: true },
  { type: "general", title: "New Batch Starting: Full Stack Web Dev", content: "A new batch for Full Stack Web Development is starting on January 10, 2025. Limited seats available. Refer your friends and earn a ₹2,000 referral bonus on successful enrollment.", date: "Dec 12, 2024", time: "6 days ago", important: false },
];

export default function NoticesPage() {
  return (
    <div className="min-h-screen mesh-bg">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Notice Board</h1>
            <p className="text-slate-500 text-sm">{NOTICES.length} notices · {NOTICES.filter(n => n.important).length} important</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button className="px-4 py-1.5 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-indigo-600 text-white whitespace-nowrap">All</button>
          {Object.entries(NOTICE_TYPES).map(([key, val]) => {
            const Icon = val.icon;
            return (
              <button key={key} className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm font-medium bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all whitespace-nowrap">
                <Icon className={`w-3.5 h-3.5 ${val.color}`} />
                {val.label}
              </button>
            );
          })}
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {NOTICES.map((notice, i) => {
            const typeConfig = NOTICE_TYPES[notice.type as keyof typeof NOTICE_TYPES];
            const Icon = typeConfig.icon;
            return (
              <div key={i} className={`glass-card rounded-2xl p-5 transition-all hover:border-white/15 ${notice.important ? "border-l-4 border-l-amber-400" : ""}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${typeConfig.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${typeConfig.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-semibold text-sm">{notice.title}</h3>
                        {notice.important && <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-medium">Important</span>}
                      </div>
                      <span className="text-slate-600 text-xs whitespace-nowrap">{notice.time}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{notice.content}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-slate-600">
                      <span className={`px-2 py-0.5 rounded-lg ${typeConfig.bg} ${typeConfig.color} font-medium`}>{typeConfig.label}</span>
                      <span>{notice.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
