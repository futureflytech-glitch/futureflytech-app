"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#030712]">

      {/* Background Glow */}
      <div className="absolute w-[380px] h-[380px] rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute top-[32%] left-[42%] w-2 h-2 rounded-full bg-cyan-300/60 animate-ping"></div>

      <div
        className="absolute top-[35%] right-[42%] w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-ping"
        style={{ animationDelay: "0.4s" }}
      ></div>

      <div
        className="absolute bottom-[42%] left-[40%] w-1.5 h-1.5 rounded-full bg-cyan-300/60 animate-ping"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div
        className="absolute bottom-[40%] right-[40%] w-2 h-2 rounded-full bg-cyan-300/60 animate-ping"
        style={{ animationDelay: "1.2s" }}
      ></div>

      {/* Logo Glow */}
      <div className="rounded-full p-6 bg-black/20 shadow-[0_0_90px_rgba(34,211,238,0.35)]">

        <div
          style={{
            animation: "floatLogo 3s ease-in-out infinite",
          }}
        >
          <Image
            src="/logo.png"
            alt="Future Fly Tech"
            width={170}
            height={170}
            priority
          />
        </div>

      </div>

      {/* Title */}
      <h1 className="mt-6 text-white text-5xl font-bold tracking-[2px]">
        FUTURE FLY TECH
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-cyan-300 text-2xl">
        Turning Dreams Into Reality
      </p>

      {/* Journey Icons */}
      <div className="mt-10 flex items-center gap-3">

        <div
          className="animate-pulse"
          style={{ animationDelay: "0s" }}
        >
          <Image
            src="/graduation.png"
            alt="Education"
            width={30}
            height={30}
          />
        </div>

        <span className="text-cyan-400 text-xl">→</span>

        <div
          className="animate-pulse"
          style={{ animationDelay: "0.4s" }}
        >
          <Image
            src="/brain.png"
            alt="AI"
            width={30}
            height={30}
          />
        </div>

        <span className="text-cyan-400 text-xl">→</span>

        <div
          className="animate-pulse"
          style={{ animationDelay: "0.8s" }}
        >
          <Image
            src="/airplane.png"
            alt="Aviation"
            width={30}
            height={30}
          />
        </div>

      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes floatLogo {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>

    </div>
  );
}