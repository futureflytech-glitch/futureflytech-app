"use client";
import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Eye, EyeOff, ArrowRight, Phone, Mail, Chrome } from "lucide-react";

type Tab = "email" | "mobile" | "otp";

export default function LoginPage() {
  const [tab, setTab] = useState<Tab>("email");
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtp = (val: string, idx: number) => {
    const n = [...otp];
    n[idx] = val.slice(-1);
    setOtp(n);
    if (val && idx < 5) {
      const next = document.getElementById(`otp-${idx + 1}`) as HTMLInputElement;
      next?.focus();
    }
  };

  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-1.5">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Sign in to your Future Fly Tech account</p>
        </div>

        {/* Card */}
        <div className="glass-card rounded-3xl p-7">
          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-white/5 rounded-xl mb-6">
            {([["email", "Email", Mail], ["mobile", "Mobile", Phone], ["otp", "OTP Login", ArrowRight]] as const).map(([t, label, Icon]) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium rounded-lg transition-all ${tab === t ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>

          {/* Email Login */}
          {tab === "email" && (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
              <div>
                <label className="text-xs font-medium text-slate-400 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-400 mb-1.5 block">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    required
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <Link href="/forgot-password" className="text-xs text-cyan-400 hover:text-cyan-300">Forgot password?</Link>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Sign In <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Mobile Login */}
          {tab === "mobile" && (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setTab("otp"); }}>
              <div>
                <label className="text-xs font-medium text-slate-400 mb-1.5 block">Mobile Number</label>
                <div className="flex gap-2">
                  <div className="w-16 bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white text-sm text-center">+91</div>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                    placeholder="98765 43210"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                    maxLength={10}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all">
                Send OTP
              </button>
            </form>
          )}

          {/* OTP Login */}
          {tab === "otp" && (
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
              <p className="text-slate-400 text-sm text-center">Enter the 6-digit OTP sent to your registered mobile</p>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={e => handleOtp(e.target.value, i)}
                    className="w-11 h-12 bg-white/5 border border-white/10 rounded-xl text-center text-white text-lg font-bold focus:outline-none focus:border-cyan-500 transition-all"
                    maxLength={1}
                  />
                ))}
              </div>
              <div className="text-center text-xs text-slate-500">Didn&apos;t receive? <button type="button" className="text-cyan-400">Resend in 30s</button></div>
              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl btn-glow hover:opacity-90 transition-all">
                Verify & Login
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-600 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all">
            <Chrome className="w-4 h-4" />
            Continue with Google
          </button>

          {/* Role Selector */}
          <div className="mt-5 flex gap-2">
            {["Student", "Faculty", "Admin"].map(role => (
              <Link key={role} href={`/login?role=${role.toLowerCase()}`} className="flex-1 text-center py-2 text-xs text-slate-500 rounded-lg border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-all">
                {role}
              </Link>
            ))}
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-5 text-slate-500 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-cyan-400 font-medium hover:text-cyan-300">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
