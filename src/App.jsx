import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { profile } from "./data/profile";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("skyrio_loader_seen");
    if (seen) setLoading(false);
  }, []);

  const finish = () => {
    sessionStorage.setItem("skyrio_loader_seen", "1");
    setLoading(false);
  };

  if (loading) return <Loader onDone={finish} />;

  return (
    <div>
      <Navbar
        brand={profile.brand}
        items={[
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Blog", href: "#blog" },
        ]}
      />

      <main className="container">
        <Hero profile={profile} />
        <About />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
      </main>

      <footer
        className="muted"
        style={{
          padding: "26px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(139,189,203,0.12)",
          marginTop: 24,
        }}
      >
        © {new Date().getFullYear()} {profile.brand} — Gaming x Professional Portfolio
      </footer>
    </div>
  );
}
