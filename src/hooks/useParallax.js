import { useEffect } from "react";

const SECTIONS = ".section--bg, .cta-band--bg";
const MAX_SHIFT = 36;

export default function useParallax() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    let targets = Array.from(document.querySelectorAll(SECTIONS));
    if (!targets.length) return;

    const visible = new Set();
    let frame = 0;

    const paint = () => {
      frame = 0;
      const vh = window.innerHeight;
      const mid = vh / 2;
      visible.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const delta = (rect.top + rect.height / 2 - mid) / vh;
        const shift = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, delta * -60));
        el.style.setProperty("--bg-shift", `${shift.toFixed(1)}px`);
      });
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
            entry.target.style.setProperty("--bg-shift", "0px");
          }
        });
        schedule();
      },
      { rootMargin: "25% 0px 25% 0px", threshold: 0 }
    );

    targets.forEach((el) => io.observe(el));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    paint();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      targets.forEach((el) => el.style.removeProperty("--bg-shift"));
      targets = [];
    };
  }, []);
}
