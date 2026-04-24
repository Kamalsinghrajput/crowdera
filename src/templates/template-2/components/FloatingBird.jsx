"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingBird({ position = "left", top = "15%" }) {
  const birdRef = useRef(null);

  useEffect(() => {
    if (!birdRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(birdRef.current, {
        y: -30,
        x: position === "left" ? 15 : -15,
        rotation: position === "left" ? 5 : -5,
        duration: 3 + Math.random() * 2, // 3-5 seconds random duration for natural feel
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, birdRef);

    return () => ctx.revert();
  }, [position]);

  const style = {
    position: "absolute",
    top,
    [position]: "5%",
    zIndex: 1, // Keep behind most content, but inside the section
    opacity: 0.15, // Subtle background effect
    pointerEvents: "none",
    width: "120px",
  };

  // Flip bird based on position to face inward (assuming default faces right)
  const imgStyle = {
    width: "100%",
    height: "auto",
    transform: position === "left" ? "scaleX(1)" : "scaleX(-1)",
  };

  return (
    <div ref={birdRef} style={style}>
      <img
        src="/assets/template-2-bird.svg"
        alt="Floating Bird Decoration"
        style={imgStyle}
      />
    </div>
  );
}
