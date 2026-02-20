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
      { name: "Figma", level: 3, note: "Layout & component thinking" },
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
    <section id="skills" className="card section-card">
      <div className="section-head">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Saya kelompokkan berdasarkan level dan pemakaian di project.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.title} className="card skill-card compact">
            <div className="skill-card-head">
              <div className="skill-card-title">{group.title}</div>
              <div className="muted skill-card-sub">{group.subtitle}</div>
            </div>

            {/* items dibuat 2 kolom di desktop biar pendek */}
            <div className="skill-items compact">
              {group.items.map((it) => (
                <div key={it.name} className="skill-item compact">
                  <div className="skill-row compact">
                    <div className="skill-name">{it.name}</div>

                    <div className="skill-right">
                      <span className={`skill-pill lvl-${it.level}`}>{levelLabel(it.level)}</span>
                      <span className={`dot lvl-${it.level}`} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="skill-bar compact">
                    <div className={`skill-bar-fill lvl-${it.level}`} />
                  </div>

                  {it.note && <div className="muted skill-note compact">{it.note}</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}