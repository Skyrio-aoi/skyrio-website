import { profile } from "../data/profile";

function cleanEntries(obj) {
  return Object.entries(obj || {}).filter(
    ([, v]) => typeof v === "string" && v.trim().length > 0
  );
}

function prettyLabel(key) {
  if (!key) return "";
  const map = {
    github: "GitHub",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    email: "Email",
  };
  return map[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

export default function Hero() {
  const socials = cleanEntries(profile.socials);

  // ✅ CV path (public/docs/...)
  const CV_URL = "/docs/CV-Ahmad-Rio-Prawiro.pdf";

  return (
    <section id="home" style={{ padding: "64px 0 18px" }}>
      <div className="grid cols-2" style={{ alignItems: "center", gap: 18 }}>
        {/* Left */}
        <div>
          <div className="chip">Fullstack • UI/UX • Data</div>

          <h1 style={{ fontSize: "clamp(34px,5vw,58px)", margin: "14px 0 10px" }}>
            {profile.name} <span className="accent">/ {profile.brand}</span>
          </h1>

          <div className="muted" style={{ fontWeight: 900, letterSpacing: "0.04em" }}>
            {profile.role}
          </div>

          <p className="muted" style={{ marginTop: 14, lineHeight: 1.7 }}>
            {profile.tagline}
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
            <a className="btn" href="#portfolio">See Portfolio</a>
            <a className="btn ghost" href="#contact">Contact</a>

            {/* ✅ Download CV */}
            {!!CV_URL && (
              <a
                className="btn ghost"
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                download
                title="Download CV (PDF)"
              >
                Download CV
              </a>
            )}
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            {(profile.stats || []).map((s) => (
              <div key={s.label} className="card" style={{ padding: "10px 12px" }}>
                <div style={{ fontWeight: 900 }}>{s.value}</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="card" style={{ padding: 16 }}>
          <div style={{ fontWeight: 900, marginBottom: 10 }}>Profile Snapshot</div>

          <div className="muted" style={{ display: "grid", gap: 8 }}>
            <div>📍 {profile.location}</div>
            <div>✉️ {profile.email}</div>
          </div>

          {/* Socials (auto hide if empty) */}
          {socials.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div className="muted" style={{ fontWeight: 800, marginBottom: 8 }}>
                Social
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {socials.map(([key, url]) => (
                  <a
                    key={key}
                    className="chip"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {prettyLabel(key)}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div style={{ marginTop: 14 }}>
            <div style={{ fontWeight: 900, marginBottom: 8 }}>Highlights</div>
            <ul className="muted" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
              {(profile.highlights || []).map((h) => (
                <li key={h} style={{ marginBottom: 8 }}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}