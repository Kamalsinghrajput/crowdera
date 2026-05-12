"use client";

export default function BrushBadge({ date, color }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        viewBox="0 0 160 60"
        style={{ width: "126px", height: "48px", display: "block" }}
        preserveAspectRatio="none"
      >
        <path
          d="M8 10 Q20 2 40 5 Q80 0 120 4 Q148 2 158 10 Q165 22 158 35 Q148 50 120 52 Q80 56 40 52 Q18 54 6 44 Q-2 34 8 10Z"
          fill={color}
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        {date}
      </span>
    </div>
  );
}
