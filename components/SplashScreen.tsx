"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#06142b] z-50">
      <div className="animate-pulse">
        <Image
          src="/icon-512.png"
          alt="Future Fly Tech"
          width={180}
          height={180}
          priority
        />
      </div>

      <h1 className="text-white text-3xl font-bold mt-6">
        Future Fly Tech
      </h1>

      <p className="text-cyan-300 mt-2 text-lg">
        Turning Dreams Into Reality
      </p>

      <div className="mt-8 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"></div>
        <div
          className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-cyan-400 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}