export default function About() {
  return (
    <section id="about" className="card section-card">
      <div className="section-head">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          Saya fokus membangun web app end-to-end: UI clean → REST API rapi → database terstruktur.
          Saya juga mengerjakan analisis data (funnel/cohort & churn scoring) untuk insight yang bisa langsung dipakai.
        </p>
      </div>

      <div className="grid cols-3 about-grid">
        <div className="card about-mini is-hoverable">
          <div className="about-mini-title">What I build</div>
          <div className="muted about-mini-text">
            Fullstack apps (React + Express + MySQL) dengan auth, dashboard admin, dan flow yang jelas.
          </div>
          <div className="about-mini-chips">
            <span className="chip">UI → API → DB</span>
            <span className="chip">REST</span>
            <span className="chip">Auth</span>
          </div>
        </div>

        <div className="card about-mini is-hoverable">
          <div className="about-mini-title">How I work</div>
          <div className="muted about-mini-text">
            Struktur komponen konsisten, validasi input, dan endpoint yang mudah di-maintain.
          </div>
          <div className="about-mini-chips">
            <span className="chip">Reusable UI</span>
            <span className="chip">Clean API</span>
            <span className="chip">Deploy-ready</span>
          </div>
        </div>

        <div className="card about-mini is-hoverable">
          <div className="about-mini-title">What I’m improving</div>
          <div className="muted about-mini-text">
            Memperkuat data pipeline yang reproducible dan praktik backend yang lebih production-like.
          </div>
          <div className="about-mini-chips">
            <span className="chip">ETL</span>
            <span className="chip">Testing</span>
            <span className="chip">Docs</span>
          </div>
        </div>
      </div>
    </section>
  );
} 