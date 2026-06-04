"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Upload, CheckCircle, Clock, AlertCircle, FileText, X } from "lucide-react";

const ASSIGNMENTS = [
  { id: 1, title: "OOP Concepts – Class & Objects", subject: "Python OOP", dueDate: "Dec 20, 2024", maxMarks: 100, status: "submitted", submittedOn: "Dec 18", marks: null, feedback: null },
  { id: 2, title: "Python Decorators Practice", subject: "Functions & Decorators", dueDate: "Dec 22, 2024", maxMarks: 50, status: "pending", submittedOn: null, marks: null, feedback: null },
  { id: 3, title: "Data Structures Implementation", subject: "Python DSA", dueDate: "Dec 15, 2024", maxMarks: 100, status: "graded", submittedOn: "Dec 13", marks: 87, feedback: "Excellent work on linked lists. Minor issues with binary tree traversal. Overall very good!" },
  { id: 4, title: "Web Scraping Mini Project", subject: "Python Automation", dueDate: "Dec 10, 2024", maxMarks: 100, status: "late", submittedOn: "Dec 12", marks: 72, feedback: "Good effort but submitted late. Penalty of 10 marks applied. Good use of BeautifulSoup." },
];

type ActiveAssignment = typeof ASSIGNMENTS[0] | null;

export default function AssignmentsPage() {
  const [active, setActive] = useState<ActiveAssignment>(null);

  const statusConfig = {
    submitted: { color: "text-cyan-400", bg: "bg-cyan-500/15", label: "Submitted", icon: CheckCircle },
    pending: { color: "text-amber-400", bg: "bg-amber-500/15", label: "Pending", icon: Clock },
    graded: { color: "text-emerald-400", bg: "bg-emerald-500/15", label: "Graded", icon: CheckCircle },
    late: { color: "text-red-400", bg: "bg-red-500/15", label: "Late", icon: AlertCircle },
  };

  return (
    <div className="min-h-screen mesh-bg">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Assignments</h1>
            <p className="text-slate-500 text-sm">Python & Automation Program</p>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: ASSIGNMENTS.length, color: "text-white" },
            { label: "Submitted", value: ASSIGNMENTS.filter(a => a.status === "submitted" || a.status === "graded").length, color: "text-cyan-400" },
            { label: "Graded", value: ASSIGNMENTS.filter(a => a.status === "graded").length, color: "text-emerald-400" },
            { label: "Pending", value: ASSIGNMENTS.filter(a => a.status === "pending").length, color: "text-amber-400" },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 text-center">
              <div className={`text-3xl font-bold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-slate-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {ASSIGNMENTS.map(a => {
            const sc = statusConfig[a.status as keyof typeof statusConfig];
            const Icon = sc.icon;
            return (
              <div key={a.id} className="glass-card rounded-2xl p-5 hover:border-white/15 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold truncate">{a.title}</h3>
                      <div className="text-slate-500 text-xs mt-0.5">{a.subject} · Max {a.maxMarks} marks</div>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />Due: {a.dueDate}</span>
                        {a.submittedOn && <span>Submitted: {a.submittedOn}</span>}
                        {a.marks !== null && <span className={`font-semibold ${a.marks >= 75 ? "text-emerald-400" : "text-amber-400"}`}>Marks: {a.marks}/{a.maxMarks}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium ${sc.bg} ${sc.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {sc.label}
                    </span>
                  </div>
                </div>

                {a.feedback && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <div className="text-xs text-slate-500 mb-1">Faculty Feedback</div>
                    <p className="text-slate-400 text-sm italic">&ldquo;{a.feedback}&rdquo;</p>
                  </div>
                )}

                {a.status === "pending" && (
                  <button
                    onClick={() => setActive(a)}
                    className="mt-3 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium rounded-xl btn-glow hover:opacity-90 transition-all text-sm"
                  >
                    <Upload className="w-4 h-4" />
                    Submit Assignment
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Submission Modal */}
        {active && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-card rounded-3xl p-7 max-w-lg w-full">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-lg">Submit Assignment</h3>
                <button onClick={() => setActive(null)} className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-slate-400 text-sm mb-5">{active.title}</div>
              <div className="p-5 rounded-2xl border border-dashed border-white/20 text-center mb-4 hover:border-cyan-500/40 transition-all cursor-pointer">
                <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <div className="text-white text-sm font-medium mb-0.5">Drop your file here</div>
                <div className="text-slate-500 text-xs">PDF, DOCX, ZIP — max 20MB</div>
              </div>
              <textarea placeholder="Add a note for your faculty (optional)…" rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm resize-none focus:outline-none focus:border-cyan-500/50 transition-all mb-4" />
              <div className="flex gap-3">
                <button onClick={() => setActive(null)} className="flex-1 py-3.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 transition-all">Cancel</button>
                <button onClick={() => setActive(null)} className="flex-1 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all text-sm">Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
