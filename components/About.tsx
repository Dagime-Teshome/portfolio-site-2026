"use client";
import { useEffect, useRef } from "react";

const stack = [
  "Go",
  "Python",
  "JavaScript",
  "REST APIs",
  "PostgreSQL",
  "Docker",
  "Git",
  "AI Integration",
  "Linux",
];

export default function About() {
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
    <section id="about" ref={ref} className="fade-in">
      <p className="section-title">about</p>

      {/* Terminal output block */}
      <div
        style={{
          background: "rgba(22,27,34,0.5)",
          border: "1px solid #00ff4120",
          borderRadius: "6px",
          padding: "clamp(1rem, 2.5vw, 1.75rem)",
          marginBottom: "1.75rem",
        }}
      >
        <p
          style={{
            color: "var(--muted)",
            fontSize: "clamp(.78rem, 1.3vw, .95rem)",
            marginBottom: ".5rem",
          }}
        >
          <span style={{ color: "var(--accent2)" }}>$ </span>cat about.txt
        </p>
        <p
          style={{
            color: "var(--text)",
            fontSize: "clamp(.8rem, 1.35vw, .98rem)",
            lineHeight: 1.85,
          }}
        >
          I&apos;m a full-stack developer with a computer science background,
          focused on building fast, maintainable backend systems. I care about
          understanding things deeply — not just making them work, but knowing{" "}
          <em style={{ color: "var(--accent)" }}>why</em> they work. I also
          enjoy teaching and breaking down complex ideas clearly.
        </p>
      </div>

      <p
        style={{
          color: "var(--muted)",
          fontSize: "clamp(.72rem, 1.1vw, .82rem)",
          marginBottom: ".85rem",
        }}
      >
        <span style={{ color: "var(--accent2)" }}>$ </span>cat stack.json
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(.35rem, 1vw, .55rem)",
        }}
      >
        {stack.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(.65rem, 1.1vw, .78rem)",
              padding: "clamp(.18rem,.5vw,.28rem) clamp(.45rem,1vw,.7rem)",
              borderRadius: "3px",
              background: "rgba(0,255,65,.06)",
              border: "1px solid rgba(0,255,65,.2)",
              color: "var(--accent)",
            }}
          >
            &quot;{s}&quot;
          </span>
        ))}
      </div>
    </section>
  );
}
