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

  // Navigatiebalk animatie zodra je voorbij de header scrollt
  const navbar = document.querySelector<HTMLElement>("#navbar");
  if (navbar) {
    gsap.to(navbar, {
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }

  // Bestaande reveal animatie voor elementen met data-reveal
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );

  if (targets.length > 0) {
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
}
