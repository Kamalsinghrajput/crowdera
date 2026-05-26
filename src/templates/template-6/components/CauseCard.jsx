"use client";
import React from "react";
import Link from "next/link";
import ButtonLetterRoll from "./ButtonLetterRoll";

export default function CauseCard({ course }) {
  return (
    <div
      className="flex flex-col bg-white overflow-hidden h-full"
      style={{ borderRadius: "16px", boxShadow: "0 2px 18px rgba(80,40,140,0.07)" }}
    >
      {/* ── Image ── */}
      <img
        src={course.img}
        alt={course.title}
        className="w-full object-cover"
        style={{ height: "220px" }}
      />

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-extrabold leading-snug mb-2"
          style={{ fontSize: "17px", color: "#211823" }}
        >
          {course.title}
        </h3>

        <p
          className="flex-1 mb-5 leading-relaxed"
          style={{ fontSize: "13px", color: "#8A7A9B" }}
        >
          {course.desc}
        </p>

        {/* ── Stats box ── */}
        <div
          className="flex items-center justify-between mb-4 px-4 py-3 rounded-xl"
          style={{ background: "rgba(142, 111, 159, 0.05)" }}
        >
          <div style={{ fontSize: "12px", color: "#6B7A99", fontWeight: 600, lineHeight: 1.8 }}>
            <span className="block">Raised: &nbsp;{course.raised}</span>
            <span className="block">Goal: &nbsp;&nbsp;&nbsp;{course.goal}</span>
          </div>
          <span
            className="font-black"
            style={{ fontSize: "30px", color: "#211823" }}
          >
            {course.percent}%
          </span>
        </div>

        {/* ── Donate button ── */}
        <ButtonLetterRoll
          text="Donation Now"
          href="/templates/template-6/initiatives?tab=donate"
          bgColor="var(--primary)"
          textColor="#ffffff"
          borderColor="var(--primary)"
          hoverBgColor="var(--secondary)"
          hoverTextColor="#211823"
          hoverBorderColor="var(--secondary)"
          fullWidth={true}
        />
      </div>
    </div>
  );
}
