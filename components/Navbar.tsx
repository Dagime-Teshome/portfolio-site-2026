/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";

const links = ["experience", "projects", "contact"];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved !== "light";
    if (!dark) document.documentElement.setAttribute("data-theme", "light");
    setIsDark(dark);
    setMounted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "clamp(.6rem, 2vw, 1rem) clamp(1rem, 4vw, 2.5rem)",
        background: isDark ? "rgba(8,8,8,0.9)" : "rgba(245,245,240,0.9)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        zIndex: 100,
        transition: "background .3s",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--accent)",
          fontSize: "clamp(.8rem, 1.4vw, .95rem)",
          letterSpacing: ".04em",
        }}
      >
        <span style={{ color: "var(--muted)" }}>~/</span>dagime
        {mounted && (
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: "1em",
              background: "var(--accent)",
              marginLeft: 3,
              verticalAlign: "middle",
              animation: "blink 1.1s step-end infinite",
            }}
          />
        )}
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(.8rem, 2.5vw, 2rem)",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "clamp(.8rem, 2.5vw, 2rem)",
            listStyle: "none",
          }}
        >
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--nav-text)",
                  fontSize: "clamp(.78rem, 1.2vw, .9rem)",
                  fontFamily: "var(--font)",
                  fontWeight: 500,
                  letterSpacing: ".04em",
                  transition: "color .2s",
                  padding: ".25rem 0",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--nav-text)")
                }
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {mounted && (
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              cursor: "pointer",
              color: "var(--nav-text)",
              padding: ".3rem .5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color .2s, color .2s",
              fontSize: "1rem",
              lineHeight: 1,
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
                "var(--nav-text)";
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        )}
      </div>
    </nav>
  );
}
