import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useHeadingAnimation() {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    // Initial state: hidden and slightly pushed down
    gsap.set(el, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate in when scrolled into view
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return headingRef;
}
