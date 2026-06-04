import Link from "next/link";
import { Award, Download, Share2, QrCode, ChevronLeft, ExternalLink } from "lucide-react";

const CERTIFICATES = [
  {
    id: "CERT-FFT-2024-0821",
    title: "Python & Automation – Foundation",
    issueDate: "November 15, 2024",
    validUntil: "Lifetime",
    grade: "A (Distinction)",
    score: "87%",
    issued: true,
  },
  {
    id: "CERT-FFT-2024-0765",
    title: "Python & Automation – Advanced",
    issueDate: "Pending",
    validUntil: "—",
    grade: "—",
    score: "In Progress",
    issued: false,
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen mesh-bg">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">My Certificates</h1>
            <p className="text-slate-500 text-sm">Verifiable digital certificates</p>
          </div>
        </div>

        <div className="space-y-6">
          {CERTIFICATES.map((cert, i) => (
            <div key={i} className={`glass-card rounded-3xl overflow-hidden ${!cert.issued ? "opacity-60" : ""}`}>
              {/* Certificate Preview */}
              <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] p-8 border-b border-white/5">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl" />

                <div className="relative flex flex-col sm:flex-row items-center gap-6">
                  {/* Certificate badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-xl">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    {cert.issued && (
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-[#0a1628]">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Certificate of Completion</div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{cert.title}</h2>
                    <div className="text-slate-400 text-sm mb-2">Arjun Reddy · Future Fly Tech</div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-slate-500">
                      <span>ID: <span className="text-cyan-400 font-mono">{cert.id}</span></span>
                      <span>Issued: <span className="text-slate-300">{cert.issueDate}</span></span>
                      {cert.issued && <span>Grade: <span className="text-emerald-400 font-semibold">{cert.grade}</span></span>}
                    </div>
                  </div>

                  {cert.issued && (
                    <div className="flex-shrink-0 glass-card rounded-xl p-3 border-cyan-500/20">
                      <QrCode className="w-16 h-16 text-cyan-400" />
                      <div className="text-cyan-400 text-[10px] text-center mt-1">Scan to verify</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="p-5">
                {cert.issued ? (
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium rounded-xl btn-glow hover:opacity-90 transition-all text-sm">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:border-cyan-500/30 hover:text-cyan-400 transition-all text-sm">
                      <Share2 className="w-4 h-4" />
                      Share on LinkedIn
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 rounded-xl hover:border-cyan-500/30 hover:text-cyan-400 transition-all text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Verify Online
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full progress-glow" />
                    </div>
                    <span className="text-slate-500 text-sm">68% complete</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Info */}
        <div className="mt-8 glass-card rounded-2xl p-5 border-cyan-500/10">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><QrCode className="w-4 h-4 text-cyan-400" />Certificate Verification</h3>
          <p className="text-slate-400 text-sm">All Future Fly Tech certificates are blockchain-verified and can be authenticated by employers at <span className="text-cyan-400">verify.futureflytech.com</span></p>
        </div>
      </div>
    </div>
  );
}
