export default function Navbar({ brand = "SKYRIO", items = [] }) {
  return (
    <header style={styles.wrap}>
      <a href="#home" style={styles.brandWrap} aria-label={`${brand} home`}>
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

      <nav style={styles.nav}>
        {items.map((it) => (
          <a key={it.href} href={it.href} className="nav-link">
            {it.label}
          </a>
        ))}

        <a href="#contact" className="btn" style={{ textDecoration: "none" }}>
          Contact
        </a>
      </nav>
    </header>
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
    padding: "12px 24px",
  },

  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "inherit",
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

  brandText: {
    display: "grid",
    lineHeight: 1.05,
  },

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
};