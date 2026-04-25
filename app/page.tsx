import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Experience />
        <hr className="divider" />
        <Contact />
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "clamp(1.25rem, 3vw, 2rem)",
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(.65rem, 1vw, .75rem)",
          color: "var(--muted)",
          borderTop: "1px solid #00ff4120",
        }}
      >
        <span style={{ color: "var(--accent2)" }}>$ </span>
        echo &quot;Built by Dagime · {new Date().getFullYear()}&quot;
        <span style={{ color: "var(--accent)" }}> ✓</span>
      </footer>
    </>
  );
}
