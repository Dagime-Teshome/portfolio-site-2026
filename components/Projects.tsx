"use client";
import { useEffect, useRef, useState } from "react";

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
  },
  {
    title: "Your Third Project",
    description:
      "Replace this with your real project — be specific: what does it do, what problem does it solve, and what is interesting about how you built it?",
    tags: ["Replace", "With", "Real", "Tags"],
    github: "https://github.com/yourusername/your-repo",
  },
  // --- hidden by default, shown on "Show More" ---
  {
    title: "Your Fourth Project",
    description:
      "Add your fourth project here. A short, specific description of what it does and why it matters.",
    tags: ["Tag", "Tag"],
    github: "https://github.com/yourusername/your-repo",
  },
  {
    title: "Your Fifth Project",
    description:
      "Add your fifth project here. Keep descriptions punchy — one sentence on what it does, one on how.",
    tags: ["Tag", "Tag"],
    github: "https://github.com/yourusername/your-repo",
  },
];

const INITIAL_COUNT = 3;

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.79.55C20.21 21.37 23.5 17.07 23.5 12 23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="15"
    height="15"
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
  const [expanded, setExpanded] = useState(false);
  const extraRef = useRef<HTMLDivElement>(null);

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

  const handleToggle = () => {
    if (expanded) {
      // Scroll back up to projects section before collapsing
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setExpanded(false), 400);
    } else {
      setExpanded(true);
      // Scroll extra projects into view after they render
      setTimeout(() => {
        extraRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 50);
    }
  };

  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" ref={ref} className="fade-in">
      <p className="section-title">projects</p>

      <div style={{ display: "grid", gap: "clamp(.75rem, 2vw, 1.25rem)" }}>
        {visible.map((p, idx) => {
          const isExtra = idx >= INITIAL_COUNT;
          return (
            <div
              key={p.title}
              ref={isExtra && idx === INITIAL_COUNT ? extraRef : undefined}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "clamp(1rem, 2.5vw, 1.75rem)",
                position: "relative",
                transition: "border-color .25s, transform .25s",
                animation: isExtra ? "fadeUp .4s ease forwards" : "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--accent2)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
              }}
            >
              {p.featured && (
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: ".75rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(.58rem,.9vw,.68rem)",
                    padding: ".12rem .5rem",
                    borderRadius: "3px",
                    background: "var(--surface)",
                    color: "var(--accent2)",
                    border: "1px solid var(--border)",
                    letterSpacing: ".08em",
                  }}
                >
                  featured
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: ".75rem",
                  marginBottom: ".65rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={p.live || p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font)",
                    color: "var(--accent)",
                    textDecoration: "none",
                    fontSize: "clamp(.9rem, 1.6vw, 1.1rem)",
                    fontWeight: 600,
                    letterSpacing: "-.01em",
                    transition: "opacity .2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = ".7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {p.title}
                </a>
                <div style={{ display: "flex", gap: ".45rem", flexShrink: 0 }}>
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
                  fontFamily: "var(--font)",
                  color: "var(--muted)",
                  fontSize: "clamp(.78rem, 1.25vw, .92rem)",
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
                      fontSize: "clamp(.58rem,.92vw,.7rem)",
                      padding: ".14rem .5rem",
                      borderRadius: "4px",
                      background: "var(--surface)",
                      color: "var(--accent2)",
                      border: "1px solid var(--border)",
                      letterSpacing: ".04em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Show more / less button */}
      {hasMore && (
        <div
          style={{
            marginTop: "clamp(1rem, 2.5vw, 1.5rem)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button
            onClick={handleToggle}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              color: "var(--accent2)",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(.7rem, 1.1vw, .82rem)",
              padding: "clamp(.45rem, 1vw, .6rem) clamp(.9rem, 2vw, 1.25rem)",
              cursor: "pointer",
              transition: "border-color .2s, color .2s",
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
              letterSpacing: ".04em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--accent2)";
            }}
          >
            <span
              style={{
                transition: "transform .3s",
                display: "inline-block",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ↓
            </span>
            {expanded
              ? `$ collapse projects`
              : `$ show ${projects.length - INITIAL_COUNT} more projects`}
          </button>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(.62rem, .9vw, .72rem)",
              color: "var(--muted)",
            }}
          >
            {expanded
              ? `showing all ${projects.length}`
              : `${INITIAL_COUNT} of ${projects.length}`}
          </span>
        </div>
      )}
    </section>
  );
}

const iconLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: "6px",
  background: "var(--surface)",
  border: "1px solid var(--border)",
  color: "var(--muted)",
  textDecoration: "none",
  transition: "all .2s",
};
