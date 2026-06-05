"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#030712] overflow-hidden z-50">
      
      {/* Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute top-[35%] left-[40%] w-2 h-2 rounded-full bg-cyan-300/60 animate-ping"></div>

      <div
        className="absolute top-[33%] right-[40%] w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-ping"
        style={{ animationDelay: "0.4s" }}
      ></div>

      <div
        className="absolute bottom-[37%] left-[42%] w-2 h-2 rounded-full bg-cyan-300/60 animate-ping"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div
        className="absolute bottom-[35%] right-[42%] w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-ping"
        style={{ animationDelay: "1.2s" }}
      ></div>

      {/* Logo */}
      <div className="rounded-full p-4 bg-white/5 shadow-[0_0_70px_rgba(34,211,238,0.35)] animate-pulse">
        <div
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <Image
            src="/logo.png"
            alt="Future Fly Tech"
            width={145}
            height={145}
            priority
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-8 text-white text-4xl font-bold tracking-[2px]">
        FUTURE FLY TECH
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-cyan-300 text-lg">
        Turning Dreams Into Reality
      </p>

      {/* Education → AI → Aviation */}
      <div className="mt-10 flex items-center gap-4">
        <Image
          src="/graduation.png"
          alt="Education"
          width={28}
          height={28}
          className="animate-pulse"
        />

        <div
          className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></div>

        <Image
          src="/brain.png"
          alt="AI"
          width={28}
          height={28}
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        <div
          className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
          style={{ animationDelay: "0.7s" }}
        ></div>

        <Image
          src="/airplane.png"
          alt="Aviation"
          width={28}
          height={28}
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}