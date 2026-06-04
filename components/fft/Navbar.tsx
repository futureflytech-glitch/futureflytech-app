"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admission" },
  { label: "Placements", href: "/placement" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-3">
        <nav className="glass-card rounded-2xl px-5 py-3 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-white">Future Fly Tech</div>
              <div className="text-[10px] text-cyan-400 font-medium tracking-wide">Digital Campus OS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 rounded-xl hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              href="/onboarding"
              className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-xl btn-glow hover:opacity-90 transition-all duration-200 flex items-center gap-1.5"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="glass-card rounded-2xl mt-2 p-4 max-w-7xl mx-auto">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-3 mt-1 flex flex-col gap-2">
                <Link href="/login" className="px-4 py-3 text-sm text-center font-medium text-slate-300 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all" onClick={() => setOpen(false)}>Login</Link>
                <Link href="/onboarding" className="px-4 py-3 text-sm text-center font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-xl" onClick={() => setOpen(false)}>Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
