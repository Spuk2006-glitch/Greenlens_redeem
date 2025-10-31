import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        smooth: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time) => {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }

    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
