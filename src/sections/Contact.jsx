export default function Contact() {
  return (
    <section id="contact" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>Contact</h2>
      <p className="muted">Kalau mau kolaborasi atau tanya-tanya, kirim pesan.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent (demo) ✅");
        }}
        style={{ display: "grid", gap: 10, marginTop: 10 }}
      >
        <input placeholder="Nama" style={inputStyle} />
        <input placeholder="Email" style={inputStyle} />
        <textarea placeholder="Pesan" rows={4} style={inputStyle} />
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid rgba(139,189,203,0.25)",
  background: "rgba(255,255,255,0.04)",
  color: "var(--text)",
  outline: "none",
};
