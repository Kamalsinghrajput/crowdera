"use client";
import { useState } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    text: "I've Had The Privilege Of Volunteering With Chioary And I'm Continually Inspired By The Dedication And Passion Of The Team.",
    name: "Adam Smith",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I've Had The Privilege Of Volunteering With Chioary And I'm Continually Inspired By The Dedication And Passion Of The Team.",
    name: "Leslie Alexander",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "Working alongside such driven individuals has been an eye-opening experience. The impact we make together is truly rewarding.",
    name: "Courtney Henry",
    role: "Project Lead",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Every project feels like a step towards a better future. The level of commitment here is nothing short of extraordinary.",
    name: "Mate Henry",
    role: "Volunteer",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 2 >= TESTIMONIALS.length ? 0 : prev + 2));
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev - 2 < 0 ? Math.max(0, TESTIMONIALS.length - 2) : prev - 2,
    );
  };

  const currentTestimonials = TESTIMONIALS.slice(activeIndex, activeIndex + 2);

  return (
    <section
      style={{ backgroundColor: "#F9F9F9", padding: "120px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#007B39",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: 700,
                color: "#121d18",
              }}
            >
              Our Testimonial
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#121d18",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Our Impact in Their Words
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {currentTestimonials.map((t, idx) => (
            <div key={idx} style={{ padding: "10px" }}>
              <div style={{ marginBottom: "24px" }}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#121d18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p
                style={{
                  fontSize: "22px",
                  color: "#6c6e76",
                  lineHeight: 1.6,
                  marginBottom: "30px",
                  fontWeight: 400,
                }}
              >
                {t.text}
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#121d18",
                      marginBottom: "4px",
                    }}
                  >
                    {t.name}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#6c6e76", margin: 0 }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <button
            onClick={prev}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#121d18",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFA415")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#121d18")
            }
            aria-label="Previous Testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#121d18",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFA415")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#121d18")
            }
            aria-label="Next Testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: "rotate(45deg)" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
