import { useEffect, useState } from "react";

export default function Navbar({ brand = "SKYRIO", items = [] }) {
  const [open, setOpen] = useState(false);

  // lock scroll saat drawer open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev;

    return () => (document.body.style.overflow = prev);
  }, [open]);

  // close ESC + close saat pindah ke desktop
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 860) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // close kalau klik link
  function onNavClick() {
    setOpen(false);
  }

  return (
    <>
      <header style={styles.wrap}>
        <a href="#home" style={styles.brandWrap} aria-label={`${brand} home`} onClick={onNavClick}>
          <span style={styles.logoMark} aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <defs>
                <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#8BBDCB" stopOpacity="0.95" />
                  <stop offset="1" stopColor="#8BBDCB" stopOpacity="0.55" />
                </linearGradient>
                <pattern id="scan" width="6" height="6" patternUnits="userSpaceOnUse">
                  <rect width="6" height="6" fill="transparent" />
                  <rect y="0" width="6" height="1" fill="#8BBDCB" opacity="0.08" />
                </pattern>
                <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="1.6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="64" height="64" rx="16" fill="#0B0F14" />
              <rect
                x="1.5"
                y="1.5"
                width="61"
                height="61"
                rx="14.5"
                fill="none"
                stroke="#8BBDCB"
                strokeOpacity="0.30"
                strokeWidth="3"
              />
              <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#scan)" />

              <g filter="url(#glow)" fill="url(#a)">
                <rect x="16" y="16" width="32" height="6" rx="2" />
                <rect x="16" y="22" width="8" height="6" rx="2" />
                <rect x="16" y="28" width="26" height="6" rx="2" />
                <rect x="40" y="34" width="8" height="6" rx="2" />
                <rect x="16" y="40" width="32" height="6" rx="2" />
              </g>

              <g fill="#8BBDCB" opacity="0.35">
                <rect x="10" y="12" width="3" height="3" rx="1" />
                <rect x="51" y="12" width="3" height="3" rx="1" />
                <rect x="10" y="49" width="3" height="3" rx="1" />
                <rect x="51" y="49" width="3" height="3" rx="1" />
              </g>
            </svg>
          </span>

          <span style={styles.brandText}>
            <span style={styles.brandTop}>{String(brand).toUpperCase()}</span>
            <span style={styles.brandSub}>Website</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" style={styles.nav} aria-label="Primary">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="nav-link">
              {it.label}
            </a>
          ))}
          <a href="#contact" className="btn" style={{ textDecoration: "none" }}>
            Contact
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="mobile-btn"
          style={styles.mobileBtnInline}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      {/* Overlay (always render for transition) */}
      <div
        className={`mobile-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer (always render for transition) */}
      <div
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div style={styles.drawerTop}>
          <div style={{ fontWeight: 950, letterSpacing: "0.12em", color: "var(--accent)" }}>
            {String(brand).toUpperCase()}
          </div>
          <button className="mobile-btn" onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.map((it) => (
          <a key={it.href} href={it.href} onClick={onNavClick} className="mobile-link">
            {it.label}
          </a>
        ))}
        <a href="#contact" onClick={onNavClick} className="mobile-link mobile-cta">
          Contact
        </a>
      </div>

      {/* Switch desktop/mobile */}
      <style>{`
        .nav-desktop{ display:none; }
        @media (min-width: 860px){
          .nav-desktop{ display:flex; }
          .mobile-btn{ display:none; }
          .mobile-overlay{ display:none; }
          .mobile-drawer{ display:none; }
        }
      `}</style>
    </>
  );
}

const styles = {
  wrap: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(12px)",
    background: "rgba(11,15,20,0.68)",
    borderBottom: "1px solid rgba(139,189,203,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 18px",
    height: "var(--nav-h)",
  },

  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "inherit",
    minWidth: 160,
  },

  logoMark: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "rgba(139,189,203,0.10)",
    border: "1px solid rgba(139,189,203,0.22)",
    boxShadow: "0 10px 26px rgba(0,0,0,0.35)",
    overflow: "hidden",
  },

  brandText: { display: "grid", lineHeight: 1.05 },

  brandTop: {
    fontWeight: 950,
    letterSpacing: "0.18em",
    color: "var(--accent)",
    textTransform: "uppercase",
    fontSize: 14,
    textShadow: "0 0 18px rgba(139,189,203,0.22)",
  },

  brandSub: {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.10em",
    color: "rgba(255,255,255,0.55)",
    marginTop: 2,
    textTransform: "uppercase",
  },

  nav: { display: "flex", gap: 14, alignItems: "center" },

  mobileBtnInline: { color: "var(--text)" },

  drawerTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
};