export default function Navbar({ brand, items }) {
  return (
    <header style={styles.wrap}>
      <div style={styles.brand}>{brand}</div>
      <nav style={styles.nav}>
        {items.map((it) => (
          <a key={it.href} href={it.href} style={styles.link}>
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
    backdropFilter: "blur(10px)",
    background: "rgba(11,15,20,0.65)",
    borderBottom: "1px solid rgba(139,189,203,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 24px",
  },
  brand: {
    fontWeight: 900,
    letterSpacing: "0.22em",
    color: "var(--accent)",
  },
  nav: { display: "flex", gap: 14, alignItems: "center" },
  link: {
    color: "var(--muted)",
    fontWeight: 800,
    textDecoration: "none",
  },
};
