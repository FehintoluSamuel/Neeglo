import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "is-revealed",
            entry.isIntersecting
          );
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 }
    );

    const seen = new WeakSet();
    const register = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-revealed)")
        .forEach((el) => {
          if (seen.has(el)) return;
          seen.add(el);
          io.observe(el);
        });
    };

    register();

    const mo = new MutationObserver(register);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
