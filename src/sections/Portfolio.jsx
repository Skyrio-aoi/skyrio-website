import { useMemo, useState } from "react";
import { webProjects, dataProjects } from "../data/portfolio";

/** Utils */
function pickLink(p, keys) {
  for (const k of keys) {
    if (typeof p?.[k] === "string" && p[k].trim()) return p[k].trim();
  }
  return "";
}

function toBullets(text) {
  if (!text) return [];
  const raw = String(text)
    .replace(/\n+/g, "\n")
    .split(/\n|;|\.\s+/g)
    .map((s) => s.trim())
    .filter(Boolean);
  return raw.slice(0, 3);
}

function clampTags(arr, max = 6) {
  const tags = Array.isArray(arr) ? arr.filter(Boolean) : [];
  return {
    show: tags.slice(0, max),
    more: Math.max(0, tags.length - max),
  };
}

/** Project Card */
function ProjectCard({ p }) {
  const live = pickLink(p, ["live", "demo", "url"]);
  const repo = pickLink(p, ["repo", "github", "source"]);

  const tagsSource = Array.isArray(p.stack)
    ? p.stack
    : Array.isArray(p.tools)
      ? p.tools
      : [];

  const { show, more } = clampTags(tagsSource, 6);
  const bullets = toBullets(p.outcome);

  return (
    <article className="card project-card is-hoverable project-compact">
      {/* Thumb */}
      {p.image ? (
        <div className="project-thumb" aria-label={`Preview ${p.title}`}>
          <img
            className="project-thumb-img"
            src={p.image}
            alt={`Preview ${p.title}`}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="project-thumb project-thumb-fallback">
          <span className="muted">No preview</span>
        </div>
      )}

      {/* Head */}
      <div className="project-head">
        <div className="project-title">{p.title}</div>

        <div className="project-cta">
          {live && (
            <a className="btn btn-sm" href={live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {repo && (
            <a className="btn btn-sm ghost" href={repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          )}
        </div>
      </div>

      {/* Role */}
      {p.role ? (
        <div className="muted project-role">
          Role: <span className="project-role-strong">{p.role}</span>
        </div>
      ) : null}

      {/* Desc */}
      {p.desc ? <p className="muted project-desc">{p.desc}</p> : null}

      {/* Tags */}
      {show.length > 0 && (
        <div className="project-tags">
          {show.map((t) => (
            <span key={t} className="chip chip-sm">
              {t}
            </span>
          ))}
          {more > 0 && <span className="chip chip-sm chip-more">+{more}</span>}
        </div>
      )}

      {/* Outcome */}
      {bullets.length > 0 && (
        <div className="project-outcome">
          <div className="project-outcome-title">Outcome</div>
          <ul className="muted project-outcome-list">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

/** Coming Soon Card (NicePlayland Center) */
function ComingSoonCard() {
  const progress = 78; // ubah bebas

  // WA notify (ganti nomor kamu kalau beda)
  const PHONE = "6285888018846";
  const msg =
    "Halo, saya lihat portfolio kamu. Saya mau update/early access untuk NicePlayland Center (Ticketing + QR Entry + Staff Attendance).";
  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

  return (
    <article className="card project-card project-soon project-tease is-hoverable">
      <div className="project-soon-top">
        <span className="project-soon-badge">Coming Soon</span>
        <span className="muted project-soon-mini">NicePlayland Center</span>
      </div>

      <div className="project-tease-head">
        <div className="project-soon-title">NicePlay Land Center</div>
        <div className="muted project-tease-sub">
          1 app untuk{" "}
          <b style={{ color: "var(--text)" }}>Ticketing</b>,{" "}
          <b style={{ color: "var(--text)" }}>QR Entry</b>, dan{" "}
          <b style={{ color: "var(--text)" }}>Staff Attendance (Geofence)</b>.
        </div>
      </div>

      {/* Teaser preview */}
      <div className="tease-preview" aria-hidden="true">
        <div className="tease-grid" />
        <div className="tease-glow" />
        <div className="tease-label">preview blurred</div>
        <div className="tease-watermark">CENTER</div>
      </div>

      {/* Progress */}
      <div className="tease-progress">
        <div className="tease-progress-row">
          <span className="muted">Build progress</span>
          <span className="muted">{progress}%</span>
        </div>
        <div className="tease-bar">
          <div className="tease-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="project-soon-sep" />

      {/* Teaser bullets */}
      <div className="tease-block">
        <div className="tease-kicker">What’s inside</div>

        <ul className="muted project-soon-list">
          <li>
            <b style={{ color: "var(--text)" }}>Ticketing</b> → e-ticket otomatis + riwayat order
          </li>
          <li>
            <b style={{ color: "var(--text)" }}>QR Gate</b> → valid/used/expired + anti double-scan
          </li>
          <li>
            <b style={{ color: "var(--text)" }}>Attendance</b> → check-in/out hanya dalam radius (geofence)
          </li>
        </ul>

        <div className="tease-mystery muted">
          Hint: admin bisa lihat{" "}
          <b style={{ color: "var(--text)" }}>rekap scan per jam</b> +{" "}
          <b style={{ color: "var(--text)" }}>rekap absensi staff</b> dalam 1 layar.
        </div>
      </div>

      <div className="project-soon-cta">
        <a className="btn btn-sm" href={waUrl} target="_blank" rel="noreferrer">
          Notify me
        </a>
        <a className="btn btn-sm ghost" href="#contact">
          Contact
        </a>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState("web");

  const list = useMemo(() => {
    return tab === "web" ? webProjects : dataProjects;
  }, [tab]);

  const shouldShowComingSoon = tab === "web" && list.length % 2 === 1; // biar ngisi slot kosong

  return (
    <section id="portfolio" className="card section-card">
      <div className="section-head">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle muted">Pilih kategori: Web atau Data Analysis.</p>
      </div>

      {/* Segmented tabs */}
      <div className="seg-tabs" role="tablist" aria-label="Portfolio tabs">
        <button
          className={`seg-tab ${tab === "web" ? "is-active" : ""}`}
          onClick={() => setTab("web")}
          role="tab"
          aria-selected={tab === "web"}
          type="button"
        >
          Web Dev
        </button>
        <button
          className={`seg-tab ${tab === "data" ? "is-active" : ""}`}
          onClick={() => setTab("data")}
          role="tab"
          aria-selected={tab === "data"}
          type="button"
        >
          Data Analysis
        </button>
      </div>

      <div className="grid cols-2" style={{ marginTop: 12 }}>
        {list.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}

        {shouldShowComingSoon ? <ComingSoonCard /> : null}
      </div>
    </section>
  );
}