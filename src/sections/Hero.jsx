export default function Hero({ profile }) {
  return (
    <section style={{ padding: "64px 0 18px" }}>
      <div className="grid cols-2" style={{ alignItems: "center" }}>
        <div>
          <div className="chip">Theme: Gaming • Professional</div>
          <h1 style={{ fontSize: "clamp(34px,5vw,58px)", margin: "14px 0 10px" }}>
            {profile.name} <span className="accent">/ {profile.brand}</span>
          </h1>
          <div className="muted" style={{ fontWeight: 900, letterSpacing: "0.04em" }}>
            {profile.role}
          </div>
          <p className="muted" style={{ marginTop: 14, lineHeight: 1.7 }}>
            {profile.tagline}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <a className="btn" href="#portfolio" style={{ textDecoration: "none" }}>
              See Portfolio
            </a>
            <a className="btn ghost" href="#contact" style={{ textDecoration: "none" }}>
              Contact
            </a>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            {profile.stats.map((s) => (
              <div key={s.label} className="card" style={{ padding: 12, borderRadius: 14 }}>
                <div style={{ fontWeight: 900, color: "var(--accent)" }}>{s.value}</div>
                <div className="muted" style={{ fontSize: 13, fontWeight: 800 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <div style={{ fontWeight: 900, marginBottom: 8 }}>Profile Snapshot</div>
          <div className="muted" style={{ lineHeight: 1.8 }}>
            📍 {profile.location}
            <br />
            ✉️ {profile.email}
          </div>

          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Highlights</div>
            <ul className="muted" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              {profile.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
