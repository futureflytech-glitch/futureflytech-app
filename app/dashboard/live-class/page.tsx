"use client";
import { useState } from "react";
import Link from "next/link";
import { Mic, MicOff, Video as VideoIcon, VideoOff, Hand, MessageSquare, Monitor, Users, Settings, Phone, Send, ChevronLeft } from "lucide-react";

const CHAT_MESSAGES = [
  { user: "Prof. Anand", text: "Good morning everyone! Let's start with a quick recap of yesterday's session.", isTeacher: true, time: "10:02" },
  { user: "Priya S.", text: "Good morning sir!", time: "10:02" },
  { user: "Rahul M.", text: "Present sir! 🙌", time: "10:03" },
  { user: "Prof. Anand", text: "Today we'll cover Python decorators in depth. Please open your notebooks.", isTeacher: true, time: "10:04" },
  { user: "Ananya P.", text: "Sir, can you share the slides?", time: "10:05" },
  { user: "Prof. Anand", text: "Yes, sharing screen now.", isTeacher: true, time: "10:06" },
];

const PARTICIPANTS = ["Priya S.", "Rahul M.", "Ananya P.", "Karthik R.", "Sneha G.", "Arjun R. (You)", "Vikram B.", "Pooja N."];

type Panel = "chat" | "participants";

export default function LiveClassPage() {
  const [micOn, setMicOn] = useState(false);
  const [camOn, setCamOn] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [panel, setPanel] = useState<Panel>("chat");
  const [msg, setMsg] = useState("");

  return (
    <div className="min-h-screen bg-[#060a10] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#0a0f1e]/80 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="text-white text-sm font-semibold">Python Basics – Decorators & Functions</div>
            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-red-400"><span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />LIVE</span>
              <span className="text-slate-500">Prof. Anand Kumar · Batch A</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg text-xs text-slate-400">
            <Users className="w-3 h-3" />
            <span>32</span>
          </div>
          <span className="text-slate-500 text-xs">10:02 AM</span>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Main Video */}
          <div className="flex-1 relative bg-gradient-to-br from-[#0a0f1e] to-[#060a14] flex items-center justify-center">
            {/* Teacher video placeholder */}
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">AK</div>
                  <div className="text-white font-semibold text-sm">Prof. Anand Kumar</div>
                  <div className="text-slate-400 text-xs mt-0.5">Faculty · Sharing Screen</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2.5 py-1 bg-red-500/20 border border-red-500/30 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-red-400 text-xs font-semibold">LIVE</span>
              </div>
            </div>

            {/* Screen Share indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur rounded-lg">
              <Monitor className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs text-slate-300">Screen Sharing Active</span>
            </div>

            {/* Self video */}
            <div className="absolute bottom-4 right-4 w-24 h-18 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center overflow-hidden">
              {camOn ? (
                <div className="text-white text-xs">Camera On</div>
              ) : (
                <div className="text-center p-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold mx-auto mb-1">AR</div>
                  <div className="text-slate-400 text-[10px]">You</div>
                </div>
              )}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-center gap-3 p-4 bg-[#0a0f1e]/90 border-t border-white/5">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${micOn ? "bg-white/10 text-white hover:bg-white/15" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}
            >
              {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setCamOn(!camOn)}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${camOn ? "bg-white/10 text-white hover:bg-white/15" : "bg-red-500/20 text-red-400 border border-red-500/30"}`}
            >
              {camOn ? <VideoIcon className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setHandRaised(!handRaised)}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${handRaised ? "bg-amber-500/30 text-amber-400 border border-amber-500/40" : "bg-white/10 text-white hover:bg-white/15"}`}
            >
              <Hand className="w-5 h-5" />
            </button>
            <button
              onClick={() => setPanel(panel === "chat" ? "participants" : "chat")}
              className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-all">
              <Settings className="w-5 h-5" />
            </button>
            <Link href="/dashboard" className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-all">
              <Phone className="w-5 h-5 rotate-[135deg]" />
            </Link>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-72 border-l border-white/5 flex flex-col hidden lg:flex">
          {/* Panel Tabs */}
          <div className="flex border-b border-white/5">
            {(["chat", "participants"] as Panel[]).map(p => (
              <button key={p} onClick={() => setPanel(p)}
                className={`flex-1 py-3 text-xs font-semibold capitalize transition-all ${panel === p ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-500 hover:text-white"}`}>
                {p === "participants" ? `Participants (${PARTICIPANTS.length})` : "Chat"}
              </button>
            ))}
          </div>

          {panel === "chat" ? (
            <>
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {CHAT_MESSAGES.map((m, i) => (
                  <div key={i} className={`${m.isTeacher ? "bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-3" : ""}`}>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-xs font-semibold ${m.isTeacher ? "text-indigo-400" : "text-cyan-400"}`}>{m.user}</span>
                      <span className="text-slate-700 text-[10px]">{m.time}</span>
                    </div>
                    <p className="text-slate-300 text-xs">{m.text}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-white/5">
                <div className="flex gap-2">
                  <input type="text" value={msg} onChange={e => setMsg(e.target.value)} placeholder="Type a message…"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all" />
                  <button className="w-9 h-9 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center text-white hover:opacity-90 transition-all">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {PARTICIPANTS.map((p, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/3 hover:bg-white/5 transition-all">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    {p.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <span className={`text-xs ${p.includes("You") ? "text-cyan-400 font-semibold" : "text-slate-300"}`}>{p}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
