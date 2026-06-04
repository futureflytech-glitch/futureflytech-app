import Link from "next/link";
import Navbar from "@/components/fft/Navbar";
import { COURSES } from "@/lib/fft-data";
import { Clock, Star, Users, CheckCircle, Play, Download, Award, Briefcase, ArrowRight, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

const CURRICULUM: Record<string, { module: string; topics: string[] }[]> = {
  default: [
    { module: "Module 1: Foundations", topics: ["Introduction & Setup", "Core Concepts", "Hands-on Practice", "Assessment"] },
    { module: "Module 2: Intermediate", topics: ["Advanced Techniques", "Real-world Projects", "Industry Standards", "Peer Review"] },
    { module: "Module 3: Advanced", topics: ["Expert Strategies", "Capstone Project", "Industry Mentorship", "Certification Prep"] },
  ],
};

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = COURSES.find(c => c.id === id);
  if (!course) return notFound();

  const curriculum = CURRICULUM[id] || CURRICULUM.default;

  return (
    <div className="min-h-screen mesh-bg">
      <Navbar />

      {/* Hero */}
      <section className={`pt-28 pb-12 px-4 bg-gradient-to-b ${course.color} bg-opacity-20`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              {course.badge && <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">{course.badge}</span>}
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-8">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-400" />{course.duration}</div>
                <div className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-amber-400 text-amber-400" />{course.rating} rating</div>
                <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-400" />{course.students.toLocaleString()} students</div>
                <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-emerald-400" />Certificate Included</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/admission" className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-2xl btn-glow hover:opacity-90 transition-all">
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/admission" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                  Book Counseling
                </Link>
              </div>
            </div>

            {/* Fee Card */}
            <div className="glass-card rounded-3xl p-7">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-5xl mx-auto mb-5`}>
                {course.icon}
              </div>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-1">{course.fee}</div>
                <div className="text-slate-500 text-sm">Total Program Fee</div>
                <div className="text-cyan-400 text-xs mt-1">EMI options available from ₹3,000/month</div>
              </div>
              <div className="space-y-3 mb-6">
                {["Live Classes + Recordings", "PDF Notes & Resources", "Hands-on Projects", "Placement Support", "Industry Certificate", "Doubt Sessions"].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Link href="/admission" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all text-sm">
                  Enroll Now
                </Link>
                <button className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum + Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Curriculum */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white">Curriculum</h2>
            <div className="space-y-4">
              {curriculum.map((mod, i) => (
                <div key={i} className="glass-card rounded-2xl p-5">
                  <div className="font-semibold text-white mb-3">{mod.module}</div>
                  <div className="space-y-2">
                    {mod.topics.map((t, j) => (
                      <div key={j} className="flex items-center gap-2.5 text-slate-400 text-sm">
                        <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center text-xs text-slate-600">{j + 1}</div>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Briefcase className="w-4 h-4 text-cyan-400" />Placement Support</h3>
              {["Resume Building", "Mock Interviews", "Job Referrals", "LinkedIn Optimization", "50+ Hiring Partners"].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 text-sm py-1.5 border-b border-white/5 last:border-0">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />{p}
                </div>
              ))}
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Download className="w-4 h-4 text-indigo-400" />Resources Provided</h3>
              {["Video Lectures (HD)", "PDF Study Materials", "Code Repositories", "Practice Datasets", "Question Banks"].map((r, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 text-sm py-1.5 border-b border-white/5 last:border-0">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />{r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
