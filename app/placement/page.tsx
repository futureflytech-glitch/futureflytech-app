import Link from "next/link";
import Navbar from "@/components/fft/Navbar";
import { Briefcase, MapPin, Clock, ArrowRight, Upload, CheckCircle, Star, ChevronRight } from "lucide-react";

const JOBS = [
  { id: 1, company: "Google", role: "ML Engineer", location: "Bangalore", type: "Full Time", package: "₹18 LPA", deadline: "Dec 30", logo: "G", color: "from-blue-500 to-cyan-500", eligible: true },
  { id: 2, company: "IndiGo Airlines", role: "Cabin Crew", location: "Mumbai", type: "Full Time", package: "₹4.5 LPA", deadline: "Dec 25", logo: "IG", color: "from-indigo-500 to-blue-600", eligible: true },
  { id: 3, company: "Razorpay", role: "Full Stack Developer", location: "Bangalore", type: "Full Time", package: "₹12 LPA", deadline: "Jan 5", logo: "RP", color: "from-blue-600 to-indigo-600", eligible: false },
  { id: 4, company: "Amazon", role: "Data Analyst", location: "Hyderabad", type: "Full Time", package: "₹14 LPA", deadline: "Jan 10", logo: "AMZ", color: "from-orange-500 to-amber-500", eligible: true },
  { id: 5, company: "Air Asia", role: "Ground Staff", location: "Chennai", type: "Full Time", package: "₹3.8 LPA", deadline: "Jan 8", logo: "AA", color: "from-red-500 to-rose-600", eligible: true },
  { id: 6, company: "TCS", role: "Python Developer", location: "Pune", type: "Full Time", package: "₹7 LPA", deadline: "Jan 15", logo: "TCS", color: "from-sky-500 to-blue-600", eligible: true },
];

const TIMELINE = [
  { step: "Profile Submitted", done: true, date: "Nov 15" },
  { step: "Resume Shortlisted", done: true, date: "Nov 20" },
  { step: "Technical Round", done: true, date: "Dec 5" },
  { step: "HR Interview", done: false, active: true, date: "Dec 28" },
  { step: "Final Selection", done: false, date: "Pending" },
];

export default function PlacementPage() {
  return (
    <div className="min-h-screen mesh-bg">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
            50+ Hiring Partners
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Placement <span className="gradient-text">Portal</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">94% placement rate. Your dream job is waiting.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: "94%", label: "Placement Rate", color: "text-emerald-400" },
            { value: "₹12 LPA", label: "Avg Package", color: "text-cyan-400" },
            { value: "50+", label: "Hiring Partners", color: "text-indigo-400" },
            { value: "2,800+", label: "Students Placed", color: "text-amber-400" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 text-center">
              <div className={`text-2xl font-bold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-slate-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-bold text-xl">Open Positions</h2>
              <span className="text-slate-500 text-sm">{JOBS.length} jobs</span>
            </div>
            <div className="space-y-4">
              {JOBS.map(job => (
                <div key={job.id} className={`glass-card rounded-2xl p-5 hover:border-white/15 transition-all ${!job.eligible ? "opacity-60" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                      {job.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-white font-semibold">{job.role}</h3>
                          <div className="text-slate-400 text-sm">{job.company}</div>
                        </div>
                        <div className="text-cyan-400 font-bold text-sm whitespace-nowrap">{job.package}</div>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                        <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</div>
                        <div className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.type}</div>
                        <div className="flex items-center gap-1"><Clock className="w-3 h-3" />Apply by {job.deadline}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                    <span className={`text-xs font-medium ${job.eligible ? "text-emerald-400" : "text-slate-500"}`}>
                      {job.eligible ? "✓ You are eligible" : "✗ Course mismatch"}
                    </span>
                    {job.eligible ? (
                      <button className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold rounded-xl btn-glow hover:opacity-90 transition-all">
                        Apply Now <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <span className="text-xs text-slate-600">Not eligible</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* My Status */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Briefcase className="w-4 h-4 text-cyan-400" />My Application</h3>
              <div className="text-slate-400 text-xs mb-4">Google – ML Engineer</div>
              <div className="space-y-3">
                {TIMELINE.map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${t.done ? "bg-emerald-500/20 border border-emerald-500/40" : t.active ? "bg-cyan-500/20 border border-cyan-500/40" : "bg-white/5 border border-white/10"}`}>
                      {t.done ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <div className={`w-2 h-2 rounded-full ${t.active ? "bg-cyan-400" : "bg-slate-700"}`} />}
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-medium ${t.done ? "text-emerald-400" : t.active ? "text-cyan-400" : "text-slate-600"}`}>{t.step}</div>
                      <div className="text-slate-600 text-xs">{t.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2"><Upload className="w-4 h-4 text-indigo-400" />My Resume</h3>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center mb-3">
                <div className="text-slate-400 text-xs">arjun_reddy_resume.pdf</div>
                <div className="text-emerald-400 text-xs mt-0.5">✓ Uploaded · Dec 10</div>
              </div>
              <button className="w-full py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 text-xs hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2">
                <Upload className="w-3.5 h-3.5" /> Update Resume
              </button>
            </div>

            {/* Top Recruiters */}
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" />Top Recruiters</h3>
              <div className="grid grid-cols-3 gap-2">
                {["Google", "Amazon", "Infosys", "IndiGo", "TCS", "Wipro"].map((c, i) => (
                  <div key={i} className="glass-card rounded-xl p-2 text-center text-xs text-slate-400 font-medium">{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
