const skills = {
  Frontend: ["React", "HTML", "CSS", "JavaScript", "Vite"],
  Backend: ["Node.js", "Express", "REST API", "MySQL"],
  "UI/UX": ["Figma", "Wireframe", "Design System", "Prototyping"],
  "Data Analytics": ["SQL", "Python", "Pandas", "Visualization"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
};

export default function Skills() {
  return (
    <section id="skills" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>Skills</h2>
      <p className="muted">Stack yang saya pakai untuk membangun web dan mengolah data.</p>

      <div className="grid cols-2" style={{ marginTop: 10 }}>
        {Object.entries(skills).map(([title, items]) => (
          <div key={title} className="card" style={{ padding: 14 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>{title}</div>
            <div>
              {items.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
