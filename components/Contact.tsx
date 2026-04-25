"use client";
import { useEffect, useRef } from "react";

const links = [
  { label: "your@email.com", href: "mailto:your@email.com", cmd: "mailto" },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    cmd: "open github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    cmd: "open linkedin",
  },
  {
    label: "Upwork",
    href: "https://upwork.com/freelancers/yourusername",
    cmd: "open upwork",
  },
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
            fontSize: "clamp(.72rem, 1.1vw, .82rem)",
            marginBottom: ".75rem",
          }}
        >
          <span style={{ color: "var(--accent2)" }}>$ </span>whoami --contact
        </p>
        <p
          style={{
            color: "var(--text)",
            fontSize: "clamp(.78rem, 1.3vw, .95rem)",
            lineHeight: 1.8,
          }}
        >
          Currently open to backend roles and freelance Go / AI integration
          projects. I reply within 24 hours.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(.4rem, 1vw, .6rem)",
        }}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".6rem",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(.75rem, 1.2vw, .9rem)",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color .2s",
              padding: "clamp(.3rem,.8vw,.45rem) 0",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <span
              style={{
                color: "var(--accent2)",
                minWidth: "clamp(90px,12vw,130px)",
                fontSize: "clamp(.68rem,1vw,.78rem)",
              }}
            >
              $ {l.cmd}
            </span>
            <span style={{ color: "inherit" }}>→ {l.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
