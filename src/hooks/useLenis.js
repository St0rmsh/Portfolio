"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // skip Lenis entirely — let native scroll behave normally
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: false, // we drive it manually via gsap.ticker below
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // wait for layout (images, fonts) to settle before measuring trigger positions
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;

    };
  }, []);

  return lenisRef;
}