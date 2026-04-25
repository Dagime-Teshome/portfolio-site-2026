"use client";
import { useEffect, useRef } from "react";

const timeline = [
  {
    year: "2024–present",
    title: "Freelance Backend Developer",
    desc: "Go backend development and AI integration. Building REST APIs, exploring systems programming, and pursuing Go specialization.",
  },
  {
    year: "2023–2024",
    title: "Science & Health Teacher",
    desc: "Developed curriculum and instructional materials for Grade 7 students covering STEM topics, structural engineering, and simple machines.",
  },
  {
    year: "earlier",
    title: "B.Sc. Computer Science",
    desc: "Strong foundation in algorithms, data structures, systems programming, and software engineering principles.",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="fade-in">
      <p className="section-title">experience</p>
      <p
        style={{
          color: "var(--muted)",
          fontSize: "clamp(.72rem, 1.1vw, .82rem)",
          marginBottom: "1.5rem",
        }}
      >
        <span style={{ color: "var(--accent2)" }}>$ </span>cat history.log
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1rem, 2.5vw, 1.75rem)",
        }}
      >
        {timeline.map((t, i) => (
          <div
            key={t.title}
            className="tl-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(90px, 15vw, 130px) 1fr",
              gap: "clamp(.5rem, 2vw, 1.25rem)",
              paddingLeft: "clamp(.5rem, 1.5vw, 1rem)",
              borderLeft: "1px solid rgba(0,255,65,.2)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(.65rem, 1vw, .78rem)",
                color: "var(--accent2)",
                paddingTop: ".2rem",
              }}
            >
              [{t.year}]
            </span>
            <div>
              <h4
                style={{
                  fontSize: "clamp(.82rem, 1.4vw, .98rem)",
                  fontWeight: 600,
                  marginBottom: ".3rem",
                  color: "var(--text)",
                }}
              >
                <span style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}.{" "}
                </span>
                {t.title}
              </h4>
              <p
                style={{
                  fontSize: "clamp(.75rem, 1.2vw, .88rem)",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
