"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let frame;

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (dot) {
        dot.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const animate = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ring) {
        ring.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <div ref={ringRef} className="absolute left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-200/40 transition-transform duration-100" />
      <div ref={dotRef} className="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-200 shadow-[0_0_20px_rgba(232,212,168,0.8)]" />
    </div>
  );
}
