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
          border: "1px solid #00ff4133",
          borderRadius: "8px 8px 0 0",
          padding: ".4rem 1rem",
          background: "#161b22",
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          marginBottom: 0,
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
          border: "1px solid #00ff4133",
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
          padding: "clamp(1.25rem, 3vw, 2rem)",
          background: "rgba(22,27,34,0.6)",
          width: "100%",
        }}
      >
        <p
          style={{
            color: "var(--muted)",
            fontSize: "clamp(.75rem, 1.3vw, .9rem)",
            marginBottom: ".5rem",
          }}
        >
          <span style={{ color: "var(--accent2)" }}>dagime@portfolio</span>
          <span style={{ color: "var(--text)" }}>:</span>
          <span style={{ color: "var(--accent-blue)" }}>~</span>
          <span style={{ color: "var(--text)" }}> $ </span>
          <span style={{ color: "var(--text)" }}>./intro.sh</span>
        </p>

        <h1
          style={{
            fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "var(--accent)",
            marginBottom: ".75rem",
            fontFamily: "var(--font-mono)",
            textShadow: "0 0 20px rgba(0,255,65,.25)",
          }}
        >
          Dagime
          <br />
          <span
            style={{
              color: "var(--text)",
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
            }}
          >
            Full-Stack Developer
          </span>
        </h1>

        {/* Status */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".5rem",
            fontSize: "clamp(.68rem, 1.1vw, .8rem)",
            color: "var(--accent2)",
            background: "rgba(0,255,65,.06)",
            border: "1px solid rgba(0,255,65,.18)",
            padding: ".28rem .75rem",
            borderRadius: "4px",
            marginBottom: "1.25rem",
            width: "fit-content",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent2)",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          STATUS: Open to backend roles &amp; freelance Go / AI projects
        </div>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "clamp(.8rem, 1.4vw, 1rem)",
            maxWidth: 560,
            marginBottom: "1.75rem",
            lineHeight: 1.75,
          }}
        >
          <span style={{ color: "var(--accent2)" }}># </span>
          Building reliable backend systems and clean web experiences —
          specializing in Go, REST APIs, and AI integration.
        </p>

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
              background: "transparent",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              boxShadow: "0 0 10px rgba(0,255,65,.15)",
              fontSize: "clamp(.75rem, 1.2vw, .9rem)",
            }}
          >
            $ ls ./projects
          </button>
          <a
            href="/resume.pdf"
            download
            style={{
              ...btnBase,
              background: "rgba(0,255,65,.08)",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              fontSize: "clamp(.75rem, 1.2vw, .9rem)",
            }}
          >
            $ curl resume.pdf
          </a>
        </div>

        {/* Blinking cursor */}
        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "clamp(.75rem, 1.2vw, .88rem)",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "var(--accent2)" }}>dagime@portfolio:~$ </span>
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: "1em",
              background: "var(--accent)",
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
  padding: "clamp(.45rem, 1.2vw, .65rem) clamp(.8rem, 2vw, 1.3rem)",
  borderRadius: "4px",
  fontFamily: "var(--font-mono)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "all .2s",
  border: "1px solid transparent",
  letterSpacing: ".03em",
};
