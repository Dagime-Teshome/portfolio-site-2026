"use client";
import { useEffect, useRef } from "react";

const links = [
  { label: "your@email.com", href: "mailto:your@email.com" },
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Upwork", href: "https://upwork.com/freelancers/yourusername" },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="fade-in">
      <p className="section-title">contact</p>

      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "var(--muted)",
          fontSize: "clamp(.85rem, 1.4vw, 1rem)",
          maxWidth: 520,
          marginBottom: "2rem",
          lineHeight: 1.8,
        }}
      >
        Currently open to backend roles and freelance Go / AI integration
        projects. I reply within 24 hours.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(.3rem,.8vw,.5rem)",
        }}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(.8rem, 1.3vw, .95rem)",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color .2s",
              width: "fit-content",
              padding: "clamp(.25rem,.6vw,.35rem) 0",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(.6rem,.9vw,.7rem)",
                color: "var(--border)",
                letterSpacing: ".04em",
              }}
            >
              →
            </span>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
