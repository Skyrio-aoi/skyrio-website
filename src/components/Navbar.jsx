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