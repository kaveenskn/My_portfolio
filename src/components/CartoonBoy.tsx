"use client";

import Image from "next/image";

export default function CartoonBoy() {
  return (
    <div
      className="relative w-full flex justify-center items-center select-none group h-[500px] lg:h-[550px]"
    >
      <div className="relative w-[300px] md:w-[380px] lg:w-[480px] h-full flex items-center -translate-y-8 md:-translate-y-12">
        {/* Main Character Image */}
        <div className="relative z-10 w-full animate-float">
          <Image
            src="/aboutimage.png"
            alt="Developer character"
            width={600}
            height={600}
            className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(6,182,212,0.15)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
