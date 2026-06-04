import { BookOpen, Video, ClipboardList, Award, BarChart3, Bell, Briefcase, CreditCard, Users, Shield } from "lucide-react";

const FEATURES = [
  { icon: Video, title: "Live Classes", desc: "HD live sessions with screen sharing, polls, chat, and auto attendance.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: ClipboardList, title: "Smart Assessments", desc: "MCQ, coding, subjective tests with auto-evaluation and leaderboards.", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: BookOpen, title: "Notes Library", desc: "Organized PDFs, presentations, and resources downloadable offline.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track attendance, performance trends, dropout risk, and batch health.", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Award, title: "Digital Certificates", desc: "QR-verified certificates shareable on LinkedIn and downloadable.", color: "text-rose-400", bg: "bg-rose-500/10" },
  { icon: Briefcase, title: "Placement Portal", desc: "Job listings, resume uploads, interview scheduling, and offer letters.", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: CreditCard, title: "Payment System", desc: "UPI, EMI, Razorpay integration with invoices and payment history.", color: "text-sky-400", bg: "bg-sky-500/10" },
  { icon: Bell, title: "Smart Notices", desc: "Push notifications for exams, fees, workshops, and placements.", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Users, title: "Multi-Role Access", desc: "Student, Faculty, Admin, Parent, and Applicant roles with custom views.", color: "text-teal-400", bg: "bg-teal-500/10" },
  { icon: Shield, title: "Admin ERP", desc: "Complete operational control — admissions, batches, revenue, reports.", color: "text-violet-400", bg: "bg-violet-500/10" },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
            Everything in One Place
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Replace 10 Tools with <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No more WhatsApp groups, Google Forms, or Excel sheets. Future Fly Tech runs your entire institute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.slice(0, 8).map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="glass-card rounded-2xl p-5 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1">
                <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-cyan-300 transition-colors">{f.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Full-width feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {FEATURES.slice(8).map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="glass-card rounded-2xl p-5 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1 flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-300 transition-colors">{f.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
