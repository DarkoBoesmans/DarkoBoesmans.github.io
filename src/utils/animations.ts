import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initHomeAnimations() {
  if (typeof window === "undefined" || prefersReducedMotion()) {
    return;
  }

  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

  if (targets.length === 0) {
    return;
  }

  gsap.from(targets, {
    autoAlpha: 0,
    y: 24,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: {
      trigger: targets[0],
      start: "top 85%",
    },
  });
}