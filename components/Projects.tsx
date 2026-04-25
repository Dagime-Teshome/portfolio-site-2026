"use client";
import { useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Go REST API + AI Integration",
    description:
      "A production-ready HTTP backend in Go that integrates the OpenAI API for intelligent query routing. Features JWT auth, structured logging, middleware chaining, and clean JSON error responses.",
    tags: ["Go", "REST API", "OpenAI", "JWT"],
    github: "https://github.com/yourusername/your-repo",
    live: "https://your-live-demo.com",
    featured: true,
  },
  {
    title: "Key-Value Store",
    description:
      "A lightweight in-memory key-value store built from scratch in Go. Supports CRUD over TCP, concurrent access with mutex locking, and a simple CLI client.",
    tags: ["Go", "Systems", "TCP", "Concurrency"],
    github: "https://github.com/yourusername/your-repo",
    live: "",
  },
  {
    title: "Your Third Project",
    description:
      "Replace this with your real project — be specific: what does it do, what problem does it solve, and what is interesting about how you built it?",
    tags: ["Replace", "With", "Real", "Tags"],
    github: "https://github.com/yourusername/your-repo",
    live: "",
  },
];

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.21 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.06 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="fade-in">
      <p className="section-title">projects</p>
      <p
        style={{
          color: "var(--muted)",
          fontSize: "clamp(.72rem, 1.1vw, .82rem)",
          marginBottom: "1.25rem",
        }}
      >
        <span style={{ color: "var(--accent2)" }}>$ </span>ls -la ./projects/
      </p>

      <div style={{ display: "grid", gap: "clamp(.75rem, 2vw, 1.25rem)" }}>
        {projects.map((p, pi) => (
          <div
            key={p.title}
            style={{
              background: "rgba(22,27,34,0.6)",
              border: `1px solid ${p.featured ? "rgba(0,255,65,.35)" : "#30363d"}`,
              borderRadius: "6px",
              padding: "clamp(1rem, 2.5vw, 1.5rem)",
              position: "relative",
              transition: "border-color .25s, transform .25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(0,255,65,.55)";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = p.featured
                ? "rgba(0,255,65,.35)"
                : "#30363d";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
            }}
          >
            {p.featured && (
              <span
                style={{
                  position: "absolute",
                  top: "clamp(.6rem,1.5vw,1rem)",
                  right: "clamp(.6rem,1.5vw,1rem)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(.6rem,.9vw,.7rem)",
                  padding: ".12rem .45rem",
                  borderRadius: "3px",
                  background: "rgba(0,255,65,.1)",
                  color: "var(--accent)",
                  border: "1px solid rgba(0,255,65,.3)",
                }}
              >
                ★ featured
              </span>
            )}

            {/* File header */}
            <p
              style={{
                color: "var(--muted)",
                fontSize: "clamp(.68rem, 1vw, .78rem)",
                marginBottom: ".6rem",
              }}
            >
              <span style={{ color: "var(--accent2)" }}>drwxr-xr-x</span>
              {"  "}
              <span style={{ color: "var(--accent)" }}>0{pi + 1}_</span>
              {p.title.toLowerCase().replace(/\s+/g, "_")}/
            </p>

            {/* Title row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: ".75rem",
                marginBottom: ".6rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={p.live || p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "clamp(.85rem, 1.6vw, 1.05rem)",
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
              >
                {p.title}
              </a>
              <div style={{ display: "flex", gap: ".5rem", flexShrink: 0 }}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source"
                  style={iconLink}
                >
                  <GithubIcon />
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live demo"
                    style={iconLink}
                  >
                    <GlobeIcon />
                  </a>
                )}
              </div>
            </div>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "clamp(.76rem, 1.25vw, .9rem)",
                marginBottom: "1rem",
                lineHeight: 1.75,
              }}
            >
              {p.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "clamp(.3rem,.8vw,.45rem)",
              }}
            >
              {p.tags.map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(.62rem,.95vw,.72rem)",
                    padding: ".12rem .45rem",
                    borderRadius: "3px",
                    background: "rgba(0,255,65,.05)",
                    color: "var(--accent2)",
                    border: "1px solid rgba(0,255,65,.15)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const iconLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 30,
  height: 30,
  borderRadius: "4px",
  background: "rgba(0,255,65,.05)",
  border: "1px solid rgba(0,255,65,.15)",
  color: "var(--muted)",
  textDecoration: "none",
  transition: "all .2s",
};
