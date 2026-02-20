import { profile } from "../data/profile";

function cleanEntries(obj) {
  return Object.entries(obj || {}).filter(([, v]) => typeof v === "string" && v.trim().length > 0);
}

function prettyLabel(key) {
  if (!key) return "";
  const map = { github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram", email: "Email" };
  return map[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

export default function Hero() {
  const socials = cleanEntries(profile.socials);
  const CV_URL = "/docs/CV-Ahmad-Rio-Prawiro.pdf";

  // Split tagline biar gak jadi 1 blok berat (optional, fallback aman)
  const tagline = String(profile.tagline || "").trim();
  const lines =
    tagline.includes(".")
      ? tagline.split(".").map((s) => s.trim()).filter(Boolean).slice(0, 2)
      : [tagline];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left */}
          <div className="hero-left">
            <div className="chip">Fullstack • UI/UX • Data</div>

            <h1 className="hero-title">
              {profile.name} <span className="accent">/ {profile.brand}</span>
            </h1>

            <div className="hero-role">{profile.role}</div>

            {lines[0] && <p className="hero-lead">{lines[0]}.</p>}
            {lines[1] && <p className="hero-lead hero-lead2">{lines[1]}.</p>}

            {/* CTA */}
            <div className="hero-cta">
              <a className="btn" href="#portfolio">See Portfolio</a>
              <a className="btn ghost" href="#contact">Contact</a>

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
            <div className="hero-stats">
              {(profile.stats || []).map((s) => (
                <div key={s.label} className="stat-pill">
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hero-right">
            <div className="card profile-snapshot">
              <div className="snapshot-head">
                <div className="snapshot-title">Profile Snapshot</div>
              </div>

              <div className="snapshot-meta">
                <div>📍 {profile.location}</div>
                <div>✉️ {profile.email}</div>
              </div>

              {socials.length > 0 && (
                <>
                  <div className="snapshot-divider" />
                  <div className="snapshot-subtitle">Social</div>
                  <div className="snapshot-chips">
                    {socials.map(([key, url]) => (
                      <a key={key} className="chip" href={url} target="_blank" rel="noreferrer">
                        {prettyLabel(key)}
                      </a>
                    ))}
                  </div>
                </>
              )}

              <div className="snapshot-divider" />

              <div className="snapshot-title">Highlights</div>
              <ul className="snapshot-list">
                {(profile.highlights || []).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section break biar gak terasa panjang */}
        <hr />
      </div>
    </section>
  );
}