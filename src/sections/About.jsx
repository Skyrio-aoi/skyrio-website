export default function About() {
  return (
    <section id="about" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>About</h2>
      <p className="muted" style={{ lineHeight: 1.8 }}>
        Saya membangun website dengan fokus ke experience pengguna: navigasi jelas, tampilan clean, dan performa
        stabil. Di sisi data, saya terbiasa dengan SQL dan Python untuk cleaning, analisis, dan visualisasi.
      </p>
      <div className="grid cols-3" style={{ marginTop: 10 }}>
        <div className="card" style={{ padding: 14 }}>
          <div style={{ fontWeight: 900 }}>Web Design</div>
          <div className="muted">Wireframe, UI kit, responsive layout, component thinking.</div>
        </div>
        <div className="card" style={{ padding: 14 }}>
          <div style={{ fontWeight: 900 }}>Web Development</div>
          <div className="muted">Frontend React, API integration, auth basic, deployment.</div>
        </div>
        <div className="card" style={{ padding: 14 }}>
          <div style={{ fontWeight: 900 }}>Data Analysis</div>
          <div className="muted">SQL, Python, dashboard KPI, insight & rekomendasi.</div>
        </div>
      </div>
    </section>
  );
}
