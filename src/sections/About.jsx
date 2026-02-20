export default function About() {
  return (
    <section id="about" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>About</h2>
      <p className="muted" style={{ marginTop: 8, lineHeight: 1.7 }}>
        Saya fokus membangun web app end-to-end: UI yang clean → REST API yang rapi → database yang terstruktur.
        Saya juga mengerjakan analisis data (funnel/cohort & churn scoring) untuk menghasilkan insight yang bisa langsung dipakai.
      </p>

      <div className="grid cols-3 about-grid" style={{ marginTop: 12 }}>
        <div className="card about-mini" style={{ padding: 14 }}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>What I build</div>
          <div className="muted" style={{ lineHeight: 1.7 }}>
            Fullstack apps (React + Express + MySQL) dengan auth, dashboard admin, dan flow yang jelas.
          </div>
          <div style={{ marginTop: 10 }}>
            <span className="chip">UI → API → DB</span>
            <span className="chip">REST</span>
            <span className="chip">Auth</span>
          </div>
        </div>

        <div className="card about-mini" style={{ padding: 14 }}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>How I work</div>
          <div className="muted" style={{ lineHeight: 1.7 }}>
            Saya bikin struktur komponen konsisten, validasi input, dan endpoint yang mudah di-maintain.
          </div>
          <div style={{ marginTop: 10 }}>
            <span className="chip">Reusable UI</span>
            <span className="chip">Clean API</span>
            <span className="chip">Deploy-ready</span>
          </div>
        </div>

        <div className="card about-mini" style={{ padding: 14 }}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>What I’m improving</div>
          <div className="muted" style={{ lineHeight: 1.7 }}>
            Memperkuat data pipeline yang reproducible dan praktik backend yang lebih production-like.
          </div>
          <div style={{ marginTop: 10 }}>
            <span className="chip">ETL</span>
            <span className="chip">Testing</span>
            <span className="chip">Docs</span>
          </div>
        </div>
      </div>
    </section>
  );
}