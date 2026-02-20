const skills = [
  {
    title: "Frontend",
    subtitle: "Core stack untuk UI dan interaksi",
    items: [
      { name: "React", level: 3, note: "Dipakai di EventEase, Cicak Store, Legalisir PNI" },
      { name: "JavaScript", level: 3, note: "Komponen, state, fetch API" },
      { name: "HTML", level: 3, note: "Layout & semantics" },
      { name: "CSS", level: 2, note: "Theme system + responsive layout" },
      { name: "Vite", level: 2, note: "Build tooling untuk React" },
    ],
  },
  {
    title: "Backend",
    subtitle: "API, auth, dan database",
    items: [
      { name: "Node.js", level: 2, note: "API server + integration" },
      { name: "Express", level: 2, note: "Routing, middleware, auth" },
      { name: "MySQL", level: 2, note: "Schema + query dasar" },
      { name: "REST API", level: 2, note: "Endpoint design + response shape" },
      { name: "JWT Auth", level: 2, note: "Login + protect routes" },
    ],
  },
  {
    title: "Data Analytics",
    subtitle: "Analisis & dashboarding",
    items: [
      { name: "Python", level: 2, note: "Cleaning + pipeline" },
      { name: "pandas", level: 2, note: "Transformasi data" },
      { name: "SQL", level: 2, note: "Query KPI dasar" },
      { name: "Plotly", level: 1, note: "Visualisasi interaktif" },
      { name: "Streamlit", level: 1, note: "Dashboard sederhana" },
    ],
  },
  {
    title: "UI/UX",
    subtitle: "Desain sistematis biar UI nggak asal",
    items: [
      { name: "Figma", level: 2, note: "Layout & component thinking" },
      { name: "Wireframing", level: 2, note: "Flow & struktur halaman" },
      { name: "Design System", level: 1, note: "Token warna, spacing, komponen" },
      { name: "Prototyping", level: 1, note: "Interaksi dasar" },
    ],
  },
  {
    title: "Tools",
    subtitle: "Workflow dan kolaborasi",
    items: [
      { name: "Git", level: 2, note: "Commit/push, branch dasar" },
      { name: "GitHub", level: 2, note: "Repo + deploy flow" },
      { name: "VS Code", level: 3, note: "Daily driver" },
      { name: "Postman", level: 2, note: "Test endpoint & payload" },
    ],
  },
];

function levelLabel(level) {
  if (level === 3) return "Core";
  if (level === 2) return "Comfortable";
  return "Learning";
}

export default function Skills() {
  return (
    <section id="skills" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>Skills</h2>
      <p className="muted" style={{ marginTop: 8 }}>
        Bukan sekadar daftar—ini saya kelompokkan berdasarkan level dan pemakaian di project.
      </p>

      <div className="skills-grid" style={{ marginTop: 12 }}>
        {skills.map((group) => (
          <div key={group.title} className="card skill-card" style={{ padding: 14 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
              <div>
                <div style={{ fontWeight: 900 }}>{group.title}</div>
                <div className="muted" style={{ marginTop: 4, fontSize: 13, lineHeight: 1.5 }}>
                  {group.subtitle}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              {group.items.map((it) => (
                <div key={it.name} className="skill-item">
                  <div className="skill-row">
                    <div style={{ fontWeight: 800 }}>{it.name}</div>
                    <span className={`skill-pill lvl-${it.level}`}>{levelLabel(it.level)}</span>
                  </div>

                  <div className="skill-bar">
                    <div className={`skill-bar-fill lvl-${it.level}`} />
                  </div>

                  {it.note && (
                    <div className="muted" style={{ fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>
                      {it.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}