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

      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "var(--text)",
          fontSize: "clamp(.88rem, 1.5vw, 1.05rem)",
          lineHeight: 1.9,
          marginBottom: "2rem",
          maxWidth: 640,
        }}
      >
        I&apos;m a full-stack developer with a computer science background,
        focused on building fast, maintainable backend systems. I care about
        understanding things deeply — not just making them work, but knowing{" "}
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>why</span>{" "}
        they work. I also enjoy teaching and breaking down complex ideas
        clearly.
      </p>

      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(.65rem, 1vw, .75rem)",
          color: "var(--muted)",
          marginBottom: ".85rem",
          letterSpacing: ".06em",
        }}
      >
        $ cat stack.json
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
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(.62rem, 1vw, .74rem)",
              padding: "clamp(.2rem,.5vw,.3rem) clamp(.5rem,1vw,.8rem)",
              borderRadius: "4px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--accent2)",
              letterSpacing: ".04em",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
