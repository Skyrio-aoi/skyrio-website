import { useState } from "react";
import { webProjects, dataProjects } from "../data/portfolio";

function ProjectCard({ p }) {
  return (
    <div className="card" style={{ padding: 14 }}>
      <div style={{ fontWeight: 900 }}>{p.title}</div>
      <div className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>{p.desc}</div>

      {"role" in p && (
        <div className="muted" style={{ marginTop: 8 }}>
          <b style={{ color: "var(--text)" }}>Role:</b> {p.role}
        </div>
      )}

      {"stack" in p && (
        <div style={{ marginTop: 10 }}>
          {p.stack.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      )}

      {"tools" in p && (
        <div style={{ marginTop: 10 }}>
          {p.tools.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      )}

      {"outcome" in p && (
        <div className="muted" style={{ marginTop: 10 }}>
          <b style={{ color: "var(--text)" }}>Outcome:</b> {p.outcome}
        </div>
      )}

      <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
        <a className="btn ghost" href="#" style={{ textDecoration: "none" }}>Detail</a>
        <a className="btn" href="#" style={{ textDecoration: "none" }}>Open</a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState("web");
  const list = tab === "web" ? webProjects : dataProjects;

  return (
    <section id="portfolio" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>Portfolio</h2>
      <p className="muted">Pilih kategori: Web atau Data Analysis.</p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
        <button className={`btn ${tab === "web" ? "" : "ghost"}`} onClick={() => setTab("web")}>
          Web Design / Web Dev
        </button>
        <button className={`btn ${tab === "data" ? "" : "ghost"}`} onClick={() => setTab("data")}>
          Data Analysis
        </button>
      </div>

      <div className="grid cols-2" style={{ marginTop: 12 }}>
        {list.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
