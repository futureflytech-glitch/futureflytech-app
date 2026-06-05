"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#030712]">

      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>

      {/* Floating AI Particles */}
      <div className="absolute top-[30%] left-[42%] w-2 h-2 rounded-full bg-cyan-300/70 animate-ping"></div>

      <div
        className="absolute top-[33%] right-[42%] w-1.5 h-1.5 rounded-full bg-cyan-300/70 animate-ping"
        style={{ animationDelay: "0.4s" }}
      />

      <div
        className="absolute bottom-[42%] left-[40%] w-1.5 h-1.5 rounded-full bg-cyan-300/70 animate-ping"
        style={{ animationDelay: "0.8s" }}
      />

      <div
        className="absolute bottom-[40%] right-[40%] w-2 h-2 rounded-full bg-cyan-300/70 animate-ping"
        style={{ animationDelay: "1.2s" }}
      />

      {/* Logo */}
      <div className="relative flex items-center justify-center">

        {/* Growing Glow */}
        <div
          className="absolute rounded-full bg-cyan-400/20 blur-3xl"
          style={{
            width: 240,
            height: 240,
            animation:
              "glowGrow 1.8s ease-out forwards, glowPulse 2.5s ease-in-out infinite 1.8s",
          }}
        />

        {/* Logo Animation */}
        <div
          style={{
            animation:
              "logoGrow 1.8s cubic-bezier(0.22,1,0.36,1) forwards, floatLogo 3s ease-in-out infinite 1.8s",
          }}
        >
          <Image
            src="/logo.png"
            alt="Future Fly Tech"
            width={250}
            height={250}
            priority
          />
        </div>

      </div>

      {/* Title */}
      <h1 className="mt-5 text-white text-[42px] font-bold tracking-[1px] whitespace-nowrap text-center px-4">
        FUTURE FLY TECH
      </h1>

      {/* Tagline */}
      <p className="mt-3 text-cyan-300 text-[28px] font-medium text-center">
        Turning Dreams Into Reality
      </p>

      {/* Journey */}
      <div className="mt-7 flex items-center gap-4">

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

        <span className="text-cyan-400 text-2xl">→</span>

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

        <span className="text-cyan-400 text-2xl">→</span>

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

      {/* Animations */}
      <style jsx>{`
        @keyframes logoGrow {
          0% {
            transform: scale(0.55);
            opacity: 0;
          }

          40% {
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes floatLogo {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes glowGrow {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }

          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.45;
          }

          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}