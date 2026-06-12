"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger exactly once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function GsapSection({ children, className = "", id }: GsapSectionProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const leftElements = container.current.querySelectorAll('.gsap-reveal-left');
      const rightElements = container.current.querySelectorAll('.gsap-reveal-right');
      const upElements = container.current.querySelectorAll('.gsap-reveal');

      const allElements = container.current.querySelectorAll('.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right');

      if (allElements.length > 0) {
        if (leftElements.length) gsap.set(leftElements, { opacity: 0, x: -60 });
        if (rightElements.length) gsap.set(rightElements, { opacity: 0, x: 60 });
        if (upElements.length) gsap.set(upElements, { opacity: 0, y: 50 });

        allElements.forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: el,
              start: "top bottom-=20",
              toggleActions: "play reverse play reverse",
            },
          });
        });
      } else {
        // Fallback if no .gsap-reveal class found
        gsap.fromTo(
          container.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: container.current,
              start: "top bottom-=20",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} id={id} className={className}>
      {children}
    </div>
  );
}
