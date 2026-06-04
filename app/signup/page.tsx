"use client";
import { useState } from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { COURSES } from "@/lib/fft-data";

const STEPS = ["Basic Info", "OTP Verify", "Choose Course", "Complete Profile"];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [form, setForm] = useState({ name: "", email: "", mobile: "", dob: "", gender: "", city: "" });

  const next = () => step < 3 && setStep(step + 1);
  const prev = () => step > 0 && setStep(step - 1);

  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-1">Create Your Account</h1>
          <p className="text-slate-400 text-sm">Join 15,000+ students at Future Fly Tech</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center gap-1 mb-8">
          {STEPS.map((s, i) => (
            <div key={i} className="flex items-center gap-1 flex-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < step ? "bg-cyan-500 text-white" :
                i === step ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg" :
                "bg-white/10 text-slate-500"
              }`}>
                {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              {i < STEPS.length - 1 && <div className={`flex-1 h-0.5 ${i < step ? "bg-cyan-500" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <div className="text-white font-semibold">{STEPS[step]}</div>
          <div className="text-slate-500 text-xs mt-0.5">Step {step + 1} of {STEPS.length}</div>
        </div>

        {/* Card */}
        <div className="glass-card rounded-3xl p-7">
          {/* Step 0: Basic Info */}
          {step === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-medium text-slate-400 mb-1.5 block">Full Name *</label>
                  <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-xs font-medium text-slate-400 mb-1.5 block">Email *</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-xs font-medium text-slate-400 mb-1.5 block">Mobile *</label>
                  <input type="tel" value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} placeholder="+91 XXXXXXXXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all" />
                </div>
              </div>
              <p className="text-xs text-slate-600">By signing up, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          )}

          {/* Step 1: OTP */}
          {step === 1 && (
            <div className="space-y-5">
              <p className="text-slate-400 text-sm text-center">We sent a 6-digit OTP to <span className="text-cyan-400">{form.mobile || "+91 XXXXXXXXXX"}</span></p>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, i) => (
                  <input key={i} id={`sotp-${i}`} type="text" inputMode="numeric" value={digit}
                    onChange={e => { const n = [...otp]; n[i] = e.target.value.slice(-1); setOtp(n); if (e.target.value && i < 5) (document.getElementById(`sotp-${i+1}`) as HTMLInputElement)?.focus(); }}
                    className="w-11 h-12 bg-white/5 border border-white/10 rounded-xl text-center text-white text-lg font-bold focus:outline-none focus:border-cyan-500 transition-all"
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="text-center text-xs text-slate-500">Didn&apos;t get it? <button className="text-cyan-400">Resend OTP</button></div>
            </div>
          )}

          {/* Step 2: Choose Course */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">Which category interests you most?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                {COURSES.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCourse(c.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                      selectedCourse === c.id
                        ? "border-cyan-500/60 bg-cyan-500/10 shadow-lg"
                        : "border-white/10 bg-white/3 hover:border-white/20"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center text-lg flex-shrink-0`}>{c.icon}</div>
                    <div className="min-w-0">
                      <div className="text-white text-xs font-semibold truncate">{c.title}</div>
                      <div className="text-slate-500 text-xs">{c.duration} · {c.fee}</div>
                    </div>
                    {selectedCourse === c.id && <Check className="w-4 h-4 text-cyan-400 ml-auto flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Complete Profile */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-400 mb-1.5 block">Date of Birth</label>
                  <input type="date" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400 mb-1.5 block">Gender</label>
                  <select value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all">
                    <option value="" className="bg-slate-900">Select</option>
                    <option value="male" className="bg-slate-900">Male</option>
                    <option value="female" className="bg-slate-900">Female</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-medium text-slate-400 mb-1.5 block">City</label>
                  <input type="text" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Your city" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all" />
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 border-cyan-500/20">
                <div className="text-xs text-slate-400 mb-1">Selected Course</div>
                <div className="text-white font-medium text-sm">{COURSES.find(c => c.id === selectedCourse)?.title || "Not selected"}</div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            {step > 0 && (
              <button onClick={prev} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all font-medium">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            )}
            {step < 3 ? (
              <button onClick={next} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all">
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link href="/dashboard" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all">
                Complete Setup <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-center mt-5 text-slate-500 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-400 font-medium hover:text-cyan-300">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
