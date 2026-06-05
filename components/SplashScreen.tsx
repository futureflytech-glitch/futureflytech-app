"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#030712] overflow-hidden z-50">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute top-[38%] left-[42%] w-2 h-2 rounded-full bg-cyan-300/70 animate-ping"></div>
      <div
        className="absolute top-[34%] right-[42%] w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-ping"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-[38%] left-[40%] w-2 h-2 rounded-full bg-cyan-300/60 animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-[35%] right-[40%] w-1.5 h-1.5 rounded-full bg-cyan-400/70 animate-ping"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Logo Glow */}
      <div className="rounded-full p-4 bg-white/5 shadow-[0_0_70px_rgba(34,211,238,0.35)] animate-pulse">
        <div
          className="animate-bounce"
          style={{
            animationDuration: "3s",
          }}
        >
          <Image
            src="/logo.png"
            alt="Future Fly Tech"
            width={185}
            height={185}
            priority
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-8 text-white text-4xl font-bold tracking-[4px]">
        FUTURE FLY TECH
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-cyan-300 text-lg tracking-wide">
        Turning Dreams Into Reality
      </p>

      {/* AI → Aviation Animation */}
      <div className="mt-10 flex items-center gap-4">
        <div className="text-3xl animate-pulse">
          🧠
        </div>

        <div className="flex gap-2">
          <span
            className="w-2 h-2 rounded-full bg-cyan-300 animate-ping"
            style={{ animationDuration: "1.6s" }}
          ></span>

          <span
            className="w-2 h-2 rounded-full bg-cyan-300 animate-ping"
            style={{
              animationDelay: "0.25s",
              animationDuration: "1.6s",
            }}
          ></span>

          <span
            className="w-2 h-2 rounded-full bg-cyan-300 animate-ping"
            style={{
              animationDelay: "0.5s",
              animationDuration: "1.6s",
            }}
          ></span>
        </div>

        <div
          className="text-3xl animate-bounce"
          style={{
            animationDuration: "1.6s",
          }}
        >
          ✈️
        </div>
      </div>
    </div>
  );
}