"use client";
import { useState } from "react";

const TABS = [
  "View All",
  "Education",
  "Health & Food",
  "Hunger & Nutrition",
  "Treatment",
];

const COURSES = [
  {
    id: 1,
    title: "Providing Lifesaving Medical Support and Care.",
    tag: "Medical",
    text: "Emergency field clinics and free consultations for rural populations who lack access to basic healthcare.",
    raised: "$38,500",
    goal: "$50,000",
    percent: 77,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Treatment"],
  },
  {
    id: 2,
    title: "Transforming Futures Through Education.",
    tag: "Education",
    text: "Scholarship programs and digital classrooms bridging the learning gap for thousands of underprivileged children.",
    raised: "$52,200",
    goal: "$75,000",
    percent: 70,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Education"],
  },
  {
    id: 3,
    title: "Clean Water for Underserved Communities.",
    tag: "Health",
    text: "Installing water purification systems and sanitation facilities in villages facing clean water scarcity.",
    raised: "$29,800",
    goal: "$45,000",
    percent: 66,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Health & Food"],
  },
  {
    id: 4,
    title: "Ending Child Hunger One Meal at a Time.",
    tag: "Nutrition",
    text: "Daily feeding programs delivering balanced meals to children in food-insecure households across three continents.",
    raised: "$41,600",
    goal: "$60,000",
    percent: 69,
    img: "https://images.unsplash.com/photo-1593113565214-8cb303387870?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Hunger & Nutrition"],
  },
  {
    id: 5,
    title: "Mental Health Outreach and Counseling.",
    tag: "Medical",
    text: "Free therapy sessions and community wellness workshops addressing trauma and mental health in vulnerable populations.",
    raised: "$18,900",
    goal: "$30,000",
    percent: 63,
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Health & Food"],
  },
];

function CourseCard({ course }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 10px 40px rgba(0,0,0,0.12)"
          : "0 2px 16px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* Image + tag */}
      <div style={{ position: "relative", overflow: "hidden", height: 230 }}>
        <img
          src={course.img}
          alt={course.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            background: "#FFA415",
            padding: "6px 18px",
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            color: "#fff",
            textTransform: "capitalize",
          }}
        >
          {course.tag}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 26px 26px" }}>
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#121D18",
            marginBottom: 12,
            lineHeight: 1.4,
          }}
        >
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            {course.title}
          </a>
        </h3>
        <p
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: 15,
            color: "#6C6E76",
            lineHeight: 1.6,
            marginBottom: 20,
          }}
        >
          {course.text}
        </p>

        {/* Raised + Goal */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#121D18",
            }}
          >
            {course.raised}{" "}
            <span
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "#6C6E76",
              }}
            >
              Raised
            </span>
          </span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#121D18",
            }}
          >
            {course.goal}{" "}
            <span
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "#6C6E76",
              }}
            >
              Goal
            </span>
          </span>
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: "relative",
            height: 8,
            background: "#F0F0F0",
            borderRadius: 4,
            overflow: "visible",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: `${course.percent}%`,
              height: "100%",
              background: "linear-gradient(to right, #007B39, #FFA415)",
              borderRadius: 4,
              position: "relative",
            }}
          >
            {/* Percent indicator */}
            <div
              style={{
                position: "absolute",
                right: -1,
                top: "50%",
                transform: "translateY(-50%)",
                background: "#121D18",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                padding: "2px 6px",
                borderRadius: 3,
                whiteSpace: "nowrap",
              }}
            >
              {course.percent}%
            </div>
          </div>
        </div>

        {/* Donate button */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: 30,
            overflow: "hidden",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              padding: "10px 20px",
              background: "#121D18",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              transition: "background 0.3s",
            }}
          >
            Donate Now
          </span>
          <span
            style={{
              width: 44,
              height: 44,
              background: "#121D18",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default function CoursesOne() {
  const [activeTab, setActiveTab] = useState("View All");

  const filtered =
    activeTab === "View All"
      ? COURSES
      : COURSES.filter((c) => c.tabs.includes(activeTab));

  // Show max 2
  const displayed = filtered.slice(0, 2);

  return (
    <section
      style={{
        position: "relative",
        background: "#F9F9F9",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-3">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* Left: Title + Tabs */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
                justifyContent: "flex-end",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#121D18",
                  fontStyle: "italic",
                }}
              >
                Recent Causes
              </span>
              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#FFA415",
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 3.5vw, 46px)",
                lineHeight: 1.2,
                color: "#121D18",
                textAlign: "right",
                marginBottom: 40,
              }}
            >
              Strengthening
              <br /> Communities
            </h2>

            {/* Tab buttons */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {TABS.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 20px",
                      borderRadius: 6,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      background: activeTab === tab ? "#121D18" : "#fff",
                      color: activeTab === tab ? "#fff" : "#6C6E76",
                      transition: "all 0.3s",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span>{tab}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Course cards */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}
          >
            {displayed.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
