import React from "react";

export default function Contact() {
  // 085888018846 -> 6285888018846 (hapus 0 depan, ganti 62)
  const PHONE = "6285888018846";

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const nama = (fd.get("nama") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const pesan = (fd.get("pesan") || "").toString().trim();

    // Minimal guardrail: jangan arahkan kalau pesan kosong
    if (!pesan) {
      alert("Pesan jangan kosong.");
      return;
    }

    const text =
      `Halo, saya ${nama || "(tanpa nama)"}.\n` +
      `Email: ${email || "-"}\n` +
      `Pesan: ${pesan}`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

    // Buka WhatsApp (mobile app / WhatsApp Web)
    const opened = window.open(url, "_blank", "noopener,noreferrer");

    // Fallback kalau popup diblok
    if (!opened) window.location.href = url;

    // Optional: reset form setelah membuka WA
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>Contact</h2>
      <p className="muted">Kalau mau kolaborasi atau tanya-tanya, kirim pesan.</p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, marginTop: 10 }}>
        <input name="nama" placeholder="Nama" style={inputStyle} />
        <input name="email" placeholder="Email" style={inputStyle} />
        <textarea name="pesan" placeholder="Pesan" rows={4} style={inputStyle} />
        <button className="btn" type="submit">
          Send
        </button>
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
