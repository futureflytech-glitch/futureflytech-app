"use client";
import { useState } from "react";
import Navbar from "@/components/fft/Navbar";
import { COURSES } from "@/lib/fft-data";
import { CheckCircle, Upload, Clock, ArrowRight, ArrowLeft, FileText, CreditCard, User } from "lucide-react";

const STEPS = ["Select Course", "Personal Details", "Upload Documents", "Fee Payment", "Confirmation"];

const STATUS_STEPS = [
  { label: "Application Submitted", done: true, icon: "✅" },
  { label: "Under Review", done: true, icon: "✅" },
  { label: "Payment Pending", done: false, active: true, icon: "🟡" },
  { label: "Admission Confirmed", done: false, icon: "⬜" },
  { label: "Account Activated", done: false, icon: "⬜" },
];

export default function AdmissionPage() {
  const [step, setStep] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  if (showStatus) {
    return (
      <div className="min-h-screen mesh-bg">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 pt-28 pb-20">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">📋</div>
            <h1 className="text-3xl font-bold text-white mb-2">Track Your Admission</h1>
            <p className="text-slate-400">Application ID: <span className="text-cyan-400 font-mono">FFT-2024-09821</span></p>
          </div>
          <div className="glass-card rounded-3xl p-8">
            <div className="space-y-4">
              {STATUS_STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${s.done ? "bg-emerald-500/20 border border-emerald-500/40" : s.active ? "bg-amber-500/20 border border-amber-500/40" : "bg-white/5 border border-white/10"}`}>
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${s.done ? "text-emerald-400" : s.active ? "text-amber-400" : "text-slate-500"}`}>{s.label}</div>
                    {s.active && <div className="text-xs text-slate-500 mt-0.5">Waiting for payment confirmation</div>}
                  </div>
                  {s.active && (
                    <button onClick={() => setStep(3)} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold rounded-lg btn-glow">
                      Pay Now
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => setShowStatus(false)} className="mt-8 w-full py-3.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm hover:bg-white/10 transition-all">
              Back to Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mesh-bg">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            Admissions Open 2024-25
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Start Your Journey
          </h1>
          <p className="text-slate-400">Complete your application in 5 simple steps</p>
          <button onClick={() => setShowStatus(true)} className="mt-3 text-sm text-cyan-400 underline underline-offset-2">Track existing application →</button>
        </div>

        {/* Stepper */}
        <div className="flex items-center mb-8 overflow-x-auto pb-2">
          {STEPS.map((s, i) => (
            <div key={i} className="flex items-center shrink-0">
              <div className="flex flex-col items-center gap-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i < step ? "bg-cyan-500 text-white" : i === step ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white" : "bg-white/10 text-slate-500"}`}>
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-[10px] whitespace-nowrap ${i === step ? "text-cyan-400" : "text-slate-600"}`}>{s}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`w-8 sm:w-12 h-0.5 mx-1 mb-4 ${i < step ? "bg-cyan-500" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="glass-card rounded-3xl p-7">
          {/* Step 0: Select Course */}
          {step === 0 && (
            <div>
              <h2 className="text-white font-bold text-xl mb-5 flex items-center gap-2"><FileText className="w-5 h-5 text-cyan-400" />Choose Your Program</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COURSES.map(c => (
                  <button key={c.id} onClick={() => setSelectedCourse(c.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${selectedCourse === c.id ? "border-cyan-500/60 bg-cyan-500/10" : "border-white/10 hover:border-white/20"}`}>
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center text-lg flex-shrink-0`}>{c.icon}</div>
                    <div className="min-w-0">
                      <div className="text-white text-xs font-semibold truncate">{c.title}</div>
                      <div className="text-slate-500 text-xs">{c.duration} · {c.fee}</div>
                    </div>
                    {selectedCourse === c.id && <CheckCircle className="w-4 h-4 text-cyan-400 ml-auto flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div>
              <h2 className="text-white font-bold text-xl mb-5 flex items-center gap-2"><User className="w-5 h-5 text-indigo-400" />Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                {[["First Name", "text"], ["Last Name", "text"], ["Email", "email"], ["Mobile", "tel"], ["Date of Birth", "date"], ["City", "text"]].map(([label, type]) => (
                  <div key={label} className={label === "Email" || label === "City" ? "col-span-2" : ""}>
                    <label className="text-xs text-slate-400 mb-1.5 block">{label} *</label>
                    <input type={type} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all" />
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="text-xs text-slate-400 mb-1.5 block">Highest Qualification *</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all">
                    <option className="bg-slate-900">10th</option>
                    <option className="bg-slate-900">12th</option>
                    <option className="bg-slate-900">Graduation</option>
                    <option className="bg-slate-900">Post Graduation</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Documents */}
          {step === 2 && (
            <div>
              <h2 className="text-white font-bold text-xl mb-5 flex items-center gap-2"><Upload className="w-5 h-5 text-emerald-400" />Upload Documents</h2>
              <div className="space-y-4">
                {["Passport Photo (JPG, max 1MB)", "Aadhaar Card (PDF/JPG)", "10th Marksheet", "12th / Graduation Certificate"].map((doc, i) => (
                  <div key={i} className="p-4 rounded-xl border border-dashed border-white/15 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-medium">{doc.split(" (")[0]}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{doc.includes("(") ? doc.split("(")[1].replace(")", "") : ""}</div>
                      </div>
                      <label className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-slate-400 text-xs cursor-pointer hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                        <Upload className="w-3.5 h-3.5" />
                        Upload
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h2 className="text-white font-bold text-xl mb-5 flex items-center gap-2"><CreditCard className="w-5 h-5 text-cyan-400" />Fee Payment</h2>
              <div className="glass-card rounded-2xl p-5 mb-5 border-cyan-500/20">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400 text-sm">Program Fee</span>
                  <span className="text-white font-semibold">{COURSES.find(c => c.id === selectedCourse)?.fee || "₹22,000"}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400 text-sm">Admission Fee</span>
                  <span className="text-white font-semibold">₹2,000</span>
                </div>
                <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-cyan-400 font-bold text-lg">{COURSES.find(c => c.id === selectedCourse)?.fee || "₹24,000"}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {["UPI", "Card", "Net Banking", "EMI", "Google Pay", "PhonePe"].map(m => (
                  <button key={m} className="py-3 px-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 text-xs font-medium hover:border-cyan-500/30 hover:text-cyan-400 transition-all text-center">
                    {m}
                  </button>
                ))}
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block">UPI ID</label>
                <input type="text" placeholder="yourname@upi" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all mb-3" />
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-4xl mx-auto mb-5">✅</div>
              <h2 className="text-2xl font-bold text-white mb-2">Application Submitted!</h2>
              <p className="text-slate-400 text-sm mb-3">Your application has been received successfully.</p>
              <div className="glass-card rounded-xl p-4 mb-6">
                <div className="text-cyan-400 font-mono text-lg font-bold">FFT-2024-09821</div>
                <div className="text-slate-500 text-xs mt-1">Your Application ID — save this for tracking</div>
              </div>
              <div className="space-y-2 text-left">
                {["Application is under review", "Counselor will call within 24 hours", "Payment link will be sent to your email"].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />{s}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            {step > 0 && step < 4 && (
              <button onClick={() => setStep(step - 1)} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            )}
            {step < 4 && (
              <button
                onClick={() => { if (step === 3) setShowStatus(true); else setStep(step + 1); }}
                disabled={step === 0 && !selectedCourse}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all disabled:opacity-40"
              >
                {step === 3 ? "Pay & Submit" : step === 4 ? "Go to Dashboard" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {step === 4 && (
              <a href="/dashboard" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all">
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
