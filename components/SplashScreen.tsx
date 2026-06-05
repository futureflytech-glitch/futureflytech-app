"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <>
      <style jsx>{`
        @keyframes logoIntro {
          0% {
            opacity: 0;
            transform: scale(0.65);
          }
          60% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glowPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }

        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            letter-spacing: 12px;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 3px;
          }
        }

        @keyframes taglineReveal {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(-2px);
          }
          50% {
            transform: translateY(3px);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes particle {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#030712]">

        {/* Floating particles */}

        <div
          className="absolute w-2 h-2 rounded-full bg-cyan-300"
          style={{
            top: "28%",
            left: "38%",
            animation: "particle 2s ease-in-out infinite alternate",
          }}
        />

        <div
          className="absolute w-3 h-3 rounded-full bg-cyan-400"
          style={{
            top: "32%",
            right: "38%",
            animation: "particle 2.5s ease-in-out infinite alternate",
          }}
        />

        <div
          className="absolute w-2 h-2 rounded-full bg-cyan-300"
          style={{
            top: "58%",
            left: "32%",
            animation: "particle 2.2s ease-in-out infinite alternate",
          }}
        />

        <div
          className="absolute w-3 h-3 rounded-full bg-cyan-400"
          style={{
            top: "61%",
            right: "30%",
            animation: "particle 2.4s ease-in-out infinite alternate",
          }}
        />

        {/* Glow */}

        <div
          className="absolute rounded-full bg-cyan-400/40 blur-[100px]"
          style={{
            width: 320,
            height: 320,
            animation: "glowPulse 2.5s ease-in-out infinite",
          }}
        />

        {/* Logo */}

        <div
          style={{
            animation: "logoIntro 1.2s ease forwards",
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

        {/* Title */}

        <h1
          className="mt-8 text-white font-semibold tracking-[3px] text-center"
          style={{
            fontSize: "38px",
            animation: "titleReveal .9s ease forwards",
            textShadow: "0 0 20px rgba(0,220,255,.18)",
          }}
        >
          FUTURE FLY TECH
        </h1>

        {/* Tagline */}

        <p
          className="mt-5 text-cyan-300 text-center"
          style={{
            fontSize: "20px",
            animation: "taglineReveal .9s ease forwards",
            animationDelay: ".4s",
          }}
        >
          Turning Dreams Into Reality
        </p>

        {/* Career Journey */}

        <div className="flex items-center gap-5 mt-12">

          <div style={{ animation: "float1 2.2s ease-in-out infinite" }}>
            <Image
              src="/graduation.png"
              alt="Graduation"
              width={102}
              height={102}
            />
          </div>

          <span className="text-cyan-400 text-3xl">→</span>

          <div style={{ animation: "float2 2.2s ease-in-out infinite" }}>
            <Image
              src="/brain.png"
              alt="AI"
              width={102}
              height={102}
            />
          </div>

          <span className="text-cyan-400 text-3xl">→</span>

          <div style={{ animation: "float3 2.2s ease-in-out infinite" }}>
            <Image
              src="/airplane.png"
              alt="Aviation"
              width={102}
              height={102}
            />
          </div>

        </div>

      </div>
    </>
  );
}