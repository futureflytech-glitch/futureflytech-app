import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const FOOTER_LINKS = {
  "Programs": [
    { label: "AI & Machine Learning", href: "/courses/ai-ml" },
    { label: "Data Science", href: "/courses/data-science" },
    { label: "Web Development", href: "/courses/web-dev" },
    { label: "Cabin Crew", href: "/courses/cabin-crew" },
    { label: "Spoken English", href: "/courses/spoken-english" },
  ],
  "Platform": [
    { label: "Student Dashboard", href: "/dashboard" },
    { label: "Live Classes", href: "/dashboard#classes" },
    { label: "Placement Portal", href: "/placement" },
    { label: "Certificates", href: "/certificates" },
    { label: "Notice Board", href: "/notices" },
  ],
  "Quick Links": [
    { label: "Admissions", href: "/admission" },
    { label: "Login", href: "/login" },
    { label: "Sign Up", href: "/signup" },
    { label: "Faculty Login", href: "/login?role=faculty" },
    { label: "Admin Portal", href: "/admin" },
  ],
};

export default function FooterSection() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold">Future Fly Tech</div>
                <div className="text-cyan-400 text-xs font-medium">Digital Campus OS</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              India&apos;s most advanced platform for technology and vocational education. Learn Skills. Build Careers. Transform Futures.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-cyan-400" /> info@futureflytech.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> +91 12345 67890</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> Mumbai, Maharashtra, India</div>
            </div>
            <div className="flex gap-3 mt-5">
              {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-slate-500 text-sm hover:text-cyan-400 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© 2024 Future Fly Tech. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Use</Link>
            <Link href="/refund" className="hover:text-slate-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
