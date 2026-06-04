"use client";
import { useState } from "react";
import Link from "next/link";
import { Clock, ChevronLeft, Trophy, CheckCircle, Play } from "lucide-react";

const TESTS = [
  { id: 1, title: "Module 1 Final Test", subject: "Python Basics", duration: "60 min", questions: 30, type: "MCQ", status: "completed", score: 87, maxScore: 100, date: "Dec 10" },
  { id: 2, title: "OOP Concepts Quiz", subject: "Python OOP", duration: "30 min", questions: 15, type: "MCQ", status: "completed", score: 72, maxScore: 100, date: "Dec 15" },
  { id: 3, title: "Module 2 Assessment", subject: "Functions & Decorators", duration: "45 min", questions: 20, type: "Mixed", status: "upcoming", score: null, maxScore: 100, date: "Dec 22" },
  { id: 4, title: "Coding Challenge #1", subject: "Problem Solving", duration: "90 min", questions: 3, type: "Coding", status: "live", score: null, maxScore: 100, date: "Today" },
];

const LEADERBOARD = [
  { rank: 1, name: "Priya S.", score: 96, avatar: "PS" },
  { rank: 2, name: "Rahul M.", score: 92, avatar: "RM" },
  { rank: 3, name: "You (Arjun)", score: 87, avatar: "AR", isMe: true },
  { rank: 4, name: "Ananya P.", score: 85, avatar: "AP" },
  { rank: 5, name: "Karthik R.", score: 82, avatar: "KR" },
];

const SAMPLE_QUESTIONS = [
  { q: "What is the output of print(type([]))?", options: ["<class 'tuple'>", "<class 'list'>", "<class 'array'>", "<class 'dict'>"], correct: 1 },
  { q: "Which keyword is used to define a function in Python?", options: ["function", "def", "func", "define"], correct: 1 },
  { q: "What does len('hello') return?", options: ["4", "5", "6", "Error"], correct: 1 },
];

type View = "list" | "test";

export default function TestsPage() {
  const [view, setView] = useState<View>("list");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft] = useState(1800);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  if (view === "test" && !submitted) {
    return (
      <div className="min-h-screen mesh-bg">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Test Header */}
          <div className="glass-card rounded-2xl p-4 mb-6 flex items-center justify-between">
            <div>
              <div className="text-white font-semibold">Coding Challenge #1</div>
              <div className="text-slate-500 text-xs">Question {current + 1} of {SAMPLE_QUESTIONS.length}</div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-xl">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-mono font-bold">{String(mins).padStart(2,"0")}:{String(secs).padStart(2,"0")}</span>
            </div>
          </div>

          {/* Progress */}
          <div className="flex gap-1.5 mb-6">
            {SAMPLE_QUESTIONS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`flex-1 h-1.5 rounded-full transition-all ${i === current ? "bg-cyan-400" : answers[i] !== undefined ? "bg-emerald-400" : "bg-white/15"}`} />
            ))}
          </div>

          {/* Question */}
          <div className="glass-card rounded-2xl p-6 mb-5">
            <div className="text-slate-400 text-sm mb-1">Question {current + 1}</div>
            <div className="text-white text-lg font-medium mb-6">{SAMPLE_QUESTIONS[current].q}</div>
            <div className="space-y-3">
              {SAMPLE_QUESTIONS[current].options.map((opt, i) => (
                <button key={i} onClick={() => setAnswers({ ...answers, [current]: i })}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all text-sm ${
                    answers[current] === i ? "border-cyan-500/60 bg-cyan-500/15 text-white" : "border-white/10 bg-white/3 text-slate-300 hover:border-white/20"
                  }`}>
                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold flex-shrink-0 ${answers[current] === i ? "border-cyan-400 bg-cyan-500/30 text-cyan-400" : "border-white/20 text-slate-500"}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => current > 0 && setCurrent(current - 1)}
              className="flex-1 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/10 transition-all disabled:opacity-40" disabled={current === 0}>
              Previous
            </button>
            {current < SAMPLE_QUESTIONS.length - 1 ? (
              <button onClick={() => setCurrent(current + 1)}
                className="flex-1 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-xl font-semibold text-sm btn-glow hover:opacity-90 transition-all">
                Next Question
              </button>
            ) : (
              <button onClick={() => setSubmitted(true)}
                className="flex-1 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-semibold text-sm btn-glow hover:opacity-90 transition-all">
                Submit Test
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (view === "test" && submitted) {
    const score = Object.entries(answers).filter(([i, a]) => a === SAMPLE_QUESTIONS[+i].correct).length;
    return (
      <div className="min-h-screen mesh-bg flex items-center justify-center px-4">
        <div className="max-w-md w-full glass-card rounded-3xl p-8 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-1">Test Submitted!</h2>
          <p className="text-slate-400 text-sm mb-6">Coding Challenge #1</p>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center mx-auto mb-6">
            <div>
              <div className="text-2xl font-bold text-white">{score}/{SAMPLE_QUESTIONS.length}</div>
              <div className="text-xs text-cyan-200">{Math.round(score / SAMPLE_QUESTIONS.length * 100)}%</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/results" className="flex-1 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow text-sm text-center">View Results</Link>
            <button onClick={() => { setView("list"); setSubmitted(false); setAnswers({}); setCurrent(0); }}
              className="flex-1 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/10 transition-all">Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mesh-bg">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Tests & Quizzes</h1>
            <p className="text-slate-500 text-sm">Python & Automation Program</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tests List */}
          <div className="lg:col-span-2 space-y-4">
            {TESTS.map(test => (
              <div key={test.id} className="glass-card rounded-2xl p-5 hover:border-white/15 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium ${test.type === "MCQ" ? "bg-cyan-500/20 text-cyan-400" : test.type === "Coding" ? "bg-indigo-500/20 text-indigo-400" : "bg-purple-500/20 text-purple-400"}`}>{test.type}</span>
                      {test.status === "live" && <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-red-500/20 text-red-400 text-xs font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />LIVE</span>}
                    </div>
                    <h3 className="text-white font-semibold">{test.title}</h3>
                    <div className="text-slate-500 text-xs mt-0.5">{test.subject} · {test.questions} questions · {test.duration}</div>
                  </div>
                  <div className="text-right">
                    {test.score !== null ? (
                      <div>
                        <div className={`text-xl font-bold ${test.score >= 75 ? "text-emerald-400" : "text-amber-400"}`}>{test.score}%</div>
                        <div className="text-slate-500 text-xs">Score</div>
                      </div>
                    ) : (
                      <div className="text-slate-500 text-xs">{test.date}</div>
                    )}
                  </div>
                </div>
                {test.score !== null && (
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-3">
                    <div className={`h-full rounded-full progress-glow ${test.score >= 75 ? "bg-gradient-to-r from-emerald-500 to-cyan-500" : "bg-gradient-to-r from-amber-500 to-orange-500"}`} style={{ width: `${test.score}%` }} />
                  </div>
                )}
                <div className="flex gap-2">
                  {test.status === "live" && (
                    <button onClick={() => setView("test")} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-xl text-xs font-semibold btn-glow hover:opacity-90 transition-all">
                      <Play className="w-3.5 h-3.5" /> Start Test
                    </button>
                  )}
                  {test.status === "completed" && (
                    <Link href="/results" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-slate-400 rounded-xl text-xs hover:text-white hover:border-white/20 transition-all">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> View Result
                    </Link>
                  )}
                  {test.status === "upcoming" && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 text-slate-500 rounded-xl text-xs">
                      <Clock className="w-3.5 h-3.5" /> Scheduled: {test.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="glass-card rounded-2xl p-5 h-fit">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Trophy className="w-4 h-4 text-amber-400" />Batch Leaderboard</h3>
            <div className="space-y-3">
              {LEADERBOARD.map((l) => (
                <div key={l.rank} className={`flex items-center gap-3 p-2.5 rounded-xl ${l.isMe ? "bg-cyan-500/10 border border-cyan-500/20" : "bg-white/3"}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${l.rank === 1 ? "bg-amber-500 text-black" : l.rank === 2 ? "bg-slate-400 text-black" : l.rank === 3 ? "bg-amber-700 text-white" : "bg-white/10 text-slate-400"}`}>{l.rank}</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">{l.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-medium ${l.isMe ? "text-cyan-400" : "text-white"}`}>{l.name}</div>
                  </div>
                  <div className={`text-sm font-bold ${l.rank === 1 ? "text-amber-400" : l.isMe ? "text-cyan-400" : "text-slate-400"}`}>{l.score}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
