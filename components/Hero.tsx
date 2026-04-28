"use client";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        paddingTop: "clamp(6rem, 14vw, 11rem)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Terminal window chrome */}
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "8px 8px 0 0",
          padding: ".4rem 1rem",
          background: "var(--surface)",
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          width: "100%",
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ff5f57",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#febc2e",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#28c840",
            display: "inline-block",
          }}
        />
        <span
          style={{
            marginLeft: ".75rem",
            fontSize: "clamp(.65rem, 1.1vw, .78rem)",
            color: "var(--muted)",
          }}
        >
          bash — dagime@portfolio:~
        </span>
      </div>

      {/* Terminal body */}
      <div
        style={{
          border: "1px solid var(--border)",
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
          padding: "clamp(1.25rem, 3vw, 2rem)",
          background: "var(--surface)",
          width: "100%",
        }}
      >
        <p
          style={{
            color: "var(--muted)",
            fontSize: "clamp(.75rem, 1.3vw, .9rem)",
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ color: "var(--accent2)" }}>dagime@portfolio</span>
          <span style={{ color: "var(--text)" }}>:~$ ./intro.sh</span>
        </p>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font)",
            fontSize: "clamp(2.4rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-.02em",
            color: "var(--accent)",
            marginBottom: ".5rem",
          }}
        >
          Dagime
        </h1>

        {/* Role */}
        <p
          style={{
            fontFamily: "var(--font)",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            fontWeight: 300,
            color: "var(--accent2)",
            letterSpacing: ".01em",
            marginBottom: "1.5rem",
          }}
        >
          Full-Stack Developer — Go · REST APIs · AI
        </p>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "clamp(.82rem, 1.4vw, 1rem)",
            maxWidth: 560,
            marginBottom: "1.5rem",
            lineHeight: 1.9,
            fontFamily: "var(--font)",
          }}
        >
          I&apos;m a full-stack developer with a computer science background,
          focused on building fast, maintainable backend systems. I care about
          understanding things deeply — not just making them work, but knowing{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>why</span>{" "}
          they work.
        </p>

        {/* Stack tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(.3rem,.8vw,.45rem)",
            marginBottom: "2rem",
          }}
        >
          {[
            "Go",
            "Python",
            "JavaScript",
            "REST APIs",
            "PostgreSQL",
            "Docker",
            "Git",
            "AI Integration",
            "Linux",
          ].map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(.6rem, .95vw, .72rem)",
                padding: "clamp(.18rem,.5vw,.28rem) clamp(.45rem,1vw,.7rem)",
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

        <div
          style={{
            display: "flex",
            gap: "clamp(.5rem, 2vw, 1rem)",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            style={{
              ...btnBase,
              background: "var(--accent)",
              color: "var(--bg)",
              border: "1px solid var(--accent)",
              fontWeight: 600,
            }}
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            style={{
              ...btnBase,
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Blinking cursor */}
        <p
          style={{
            marginTop: "1.75rem",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(.65rem, 1vw, .76rem)",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "var(--accent2)" }}>dagime@portfolio:~$</span>{" "}
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: "1em",
              background: "var(--muted)",
              verticalAlign: "middle",
              animation: "blink 1.1s step-end infinite",
            }}
          />
        </p>
      </div>
    </section>
  );
}

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "clamp(.5rem, 1.2vw, .7rem) clamp(.9rem, 2vw, 1.4rem)",
  borderRadius: "6px",
  fontFamily: "var(--font)",
  fontSize: "clamp(.78rem, 1.2vw, .9rem)",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all .2s",
  border: "1px solid transparent",
  letterSpacing: ".02em",
};
