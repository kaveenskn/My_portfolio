"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.08, staggerDirection: 1, when: "afterChildren" },
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.95,
    filter: "blur(10px)",
    transition: { duration: 0.4, ease: "easeIn" as const }
  }
};

const letterContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
  exit: {
    opacity: 1,
    transition: { staggerChildren: 0.015, staggerDirection: 1 },
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, type: "spring" as const, stiffness: 100, damping: 12 },
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(10px)",
    scale: 0.8,
    transition: { duration: 0.4, ease: "easeIn" as const },
  },
};

const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.span
      variants={letterContainerVariants}
      className={className}
      style={{ display: "inline-block" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={letterVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && <span style={{ display: "inline-block", width: "0.25em" }}>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
};

const VideoIntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const playVideo = (ref: React.RefObject<HTMLVideoElement>) => {
        if (ref.current && ref.current.paused) {
          ref.current.play().catch((e) => console.log("Video play error:", e));
        }
      };

      const pauseVideo = (ref: React.RefObject<HTMLVideoElement>) => {
        if (ref.current && !ref.current.paused) {
          ref.current.pause();
        }
      };

      const resetVideo = (ref: React.RefObject<HTMLVideoElement>) => {
        if (ref.current && ref.current.currentTime !== 0) {
          ref.current.currentTime = 0;
        }
      };

      // Since this section is at the top, when we scroll down, rect.top becomes negative.
      // Let's start playing when we've scrolled down 50 pixels.
      if (rect.top < -50) {
        playVideo(desktopVideoRef);
        playVideo(mobileVideoRef);
        setIsPlaying(true);
      } else {
        pauseVideo(desktopVideoRef);
        pauseVideo(mobileVideoRef);
        
        // Reset to initial frame when scrolling back to the very top
        if (rect.top >= -5) {
          resetVideo(desktopVideoRef);
          resetVideo(mobileVideoRef);
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to handle initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[200vh]"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#030014]">
        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          src="/portfolioVideo.mp4"
          className="hidden md:block w-full h-full object-cover object-top"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          onEnded={() => {
            setTimeout(() => {
              if (desktopVideoRef.current) {
                desktopVideoRef.current.play().catch(e => console.log(e));
              }
            }, 1000); // 1.0 second delay before looping again
          }}
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          src="/Mobilevideo.mp4"
          className="block md:hidden w-full h-full object-cover object-top"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          onEnded={() => {
            setTimeout(() => {
              if (mobileVideoRef.current) {
                mobileVideoRef.current.play().catch(e => console.log(e));
              }
            }, 1000); // 1.0 second delay before looping again
          }}
        />

        {/* Gradient overlay to blend text and background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/40 via-[#030014]/60 to-[#030014] pointer-events-none" />

        {/* Hero Content Overlay */}
        <AnimatePresence>
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col justify-center w-full max-w-[1100px] mx-auto px-6 pointer-events-none z-10 pt-20">
              <motion.div
                key="hero-content"
                className="flex flex-col items-start text-left pointer-events-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >


                {/* Name block */}
                <div className="mb-6">
                  <h1
                    className="font-black leading-[1.0] tracking-tight text-[#f8f9fa]"
                    style={{ fontSize: "clamp(42px, 6vw, 85px)" }}
                  >
                    <AnimatedText text="Shanmugaraja" />
                  </h1>
                  <h1
                    className="font-black leading-[1.0] tracking-tight text-[#a855f7]"
                    style={{ fontSize: "clamp(42px, 6vw, 85px)" }}
                  >
                    <AnimatedText text="Kaveen" />
                    <motion.span variants={letterVariants} style={{ display: "inline-block" }} className="text-[#00e5ff]">.</motion.span>
                  </h1>
                </div>

                {/* Typewriter Effect */}
                <motion.div variants={itemVariants} className="mb-6 min-h-[40px] sm:min-h-[48px]">
                  <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold tracking-tight text-[#f8f9fa]">
                    I am a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff]">
                      <TypeAnimation
                        sequence={[
                          "Fullstack Developer",
                          2000,
                          "Mobile App Developer",
                          2000,
                          "AI Enthusiast",
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                    </span>
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-[14px] sm:text-[15px] leading-[1.8] max-w-[480px] mb-8 font-medium text-white"
                >
                  Architect of digital spaces. Crafting interfaces with{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#00e5ff]">clarity</span>, function, and
                  lasting design —{" "}
                  <br className="hidden lg:block" />
                  built one considered detail at a time.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 sm:gap-6 mb-10">
                  <a
                    href="#projects"
                    className="flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-[#a855f7] to-[#00e5ff] text-[#030014] text-[12px] sm:text-[13px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,229,255,0.4),0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6),0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300"
                  >
                    VIEW WORK →
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center px-7 py-3 rounded-full border border-white/20 text-white text-[12px] sm:text-[13px] font-bold tracking-[0.1em] uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    CONTACT
                  </a>
                </motion.div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoIntroSection;
