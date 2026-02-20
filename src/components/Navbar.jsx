import { useEffect, useState } from "react";

export default function Navbar({ brand = "SKYRIO", items = [] }) {
  const [open, setOpen] = useState(false);

  // lock scroll saat drawer open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => (document.body.style.overflow = prev);
  }, [open]);

  // close ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function onNavClick() {
    setOpen(false);
  }

  return (
    <>
      <header className="navwrap">
        <a href="#home" className="navbrand" aria-label={`${brand} home`} onClick={onNavClick}>
          <span className="navlogo" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="S icon">
  <defs>
    <radialGradient id="bg" cx="28%" cy="18%" r="95%">
      <stop offset="0%" stop-color="#A855F7" stop-opacity="0.55"/>
      <stop offset="40%" stop-color="#0B0F14" stop-opacity="1"/>
      <stop offset="100%" stop-color="#070A12" stop-opacity="1"/>
    </radialGradient>

    <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E879F9" stop-opacity="0.95"/>
      <stop offset="0.55" stop-color="#7C3AED" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#8BBDCB" stop-opacity="0.90"/>
    </linearGradient>

    <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#C084FC" stop-opacity="0.85"/>
      <stop offset="0.6" stop-color="#7C3AED" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#8BBDCB" stop-opacity="0.70"/>
    </linearGradient>

    <pattern id="scan" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="transparent"/>
      <rect y="0" width="6" height="1" fill="#A855F7" opacity="0.10"/>
    </pattern>

    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="1.8" result="b"/>
      <feColorMatrix in="b" type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.85 0" result="g"/>
      <feMerge>
        <feMergeNode in="g"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="inner" x="-30%" y="-30%" width="160%" height="160%">
      <feOffset dx="0" dy="1"/>
      <feGaussianBlur stdDeviation="1.1" result="o"/>
      <feComposite in="o" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="i"/>
      <feColorMatrix in="i" type="matrix"
        values="0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0.45 0"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="64" height="64" rx="16" fill="url(#bg)"/>

  <rect x="1.5" y="1.5" width="61" height="61" rx="14.5"
        fill="none" stroke="url(#frame)" stroke-opacity="0.55" stroke-width="3"/>

  <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#scan)" opacity="0.8"/>

  <g filter="url(#inner)">
    <g filter="url(#glow)" fill="url(#a)">
      <rect x="16" y="16" width="32" height="6" rx="2"/>
      <rect x="16" y="22" width="10" height="6" rx="2"/>
      <rect x="16" y="28" width="26" height="6" rx="2"/>
      <rect x="38" y="34" width="10" height="6" rx="2"/>
      <rect x="16" y="40" width="32" height="6" rx="2"/>
    </g>
  </g>

  <g fill="#8BBDCB" opacity="0.25">
    <rect x="10" y="12" width="3" height="3" rx="1"/>
    <rect x="51" y="12" width="3" height="3" rx="1"/>
    <rect x="10" y="49" width="3" height="3" rx="1"/>
    <rect x="51" y="49" width="3" height="3" rx="1"/>
  </g>
</svg>
          </span>

          <span className="navbrandtext">
            <span className="navbrandtop">{String(brand).toUpperCase()}</span>
            <span className="navbrandsub">Website</span>
          </span>
        </a>

        <button
          className="navburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* overlay */}
      <div className={`navoverlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />

      {/* right drawer */}
      <aside
        className={`navdrawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div className="navdrawerhead">
          <div className="navdrawertitle">{String(brand).toUpperCase()}</div>
          <button className="navclose" onClick={() => setOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="navdrawerlinks">
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={onNavClick} className="navmLink">
              {it.label}
            </a>
          ))}
          <a href="#contact" onClick={onNavClick} className="navmLink navmCta">
            Contact
          </a>
        </nav>
      </aside>
    </>
  );
}