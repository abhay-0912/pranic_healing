"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, suffix = "", duration = 1200 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!started && entry.isIntersecting) {
        started = true;
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setValue(Math.round(end * progress));
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
