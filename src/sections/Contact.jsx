import React, { useMemo, useState } from "react";

export default function Contact() {
  // 085888018846 -> 6285888018846
  const PHONE = "6285888018846";

  const [status, setStatus] = useState({ type: "", msg: "" });

  const baseMessage = useMemo(() => {
    return [
      "Halo, saya [Nama].",
      "Email: [email]",
      "Topik: [kolaborasi/tanya]",
      "Pesan: [isi pesan]",
    ].join("\n");
  }, []);

  function buildWAUrl({ nama, email, pesan }) {
    const text =
      `Halo, saya ${nama || "(tanpa nama)"}.\n` +
      `Email: ${email || "-"}\n` +
      `Pesan: ${pesan}`;
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
  }

  function openWA(url) {
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const fd = new FormData(e.currentTarget);
    const nama = (fd.get("nama") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const pesan = (fd.get("pesan") || "").toString().trim();

    if (!pesan) {
      setStatus({ type: "error", msg: "Pesan jangan kosong." });
      return;
    }

    // Email basic check (optional, ga maksa)
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", msg: "Format email kelihatan salah." });
      return;
    }

    const url = buildWAUrl({ nama, email, pesan });
    openWA(url);
    e.currentTarget.reset();
    setStatus({ type: "ok", msg: "Membuka WhatsApp…" });
  };

  const quickWA = () => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(baseMessage)}`;
    openWA(url);
  };

  return (
    <section id="contact" className="card section-card">
      <div className="section-head">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle muted">
          Kolaborasi, project, atau tanya cepat — paling cepat via WhatsApp.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: info */}
        <div className="contact-side">
          <div className="contact-box">
            <div className="contact-kicker">Fast response</div>
            <div className="contact-title">WhatsApp</div>
            <div className="muted contact-desc">
              Klik tombol di bawah untuk buka template pesan. Atau isi form supaya otomatis rapi.
            </div>

            <div className="contact-actions">
              <button className="btn" type="button" onClick={quickWA}>
                Message on WhatsApp
              </button>
              <a className="btn ghost" href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">
                Open Chat
              </a>
            </div>

            <div className="contact-hint muted">
              Jam respon: 09.00–22.00 WIB (kalau urgent, tulis “URGENT” di awal pesan).
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-form card">
          <form onSubmit={handleSubmit} className="contact-form-inner">
            <div className="contact-row">
              <div className="field">
                <label className="field-label muted" htmlFor="nama">Nama</label>
                <input id="nama" name="nama" placeholder="Nama kamu" />
              </div>

              <div className="field">
                <label className="field-label muted" htmlFor="email">Email (opsional)</label>
                <input id="email" name="email" placeholder="email@domain.com" />
              </div>
            </div>

            <div className="field">
              <label className="field-label muted" htmlFor="pesan">Pesan</label>
              <textarea id="pesan" name="pesan" placeholder="Tulis kebutuhan kamu singkat + jelas…" rows={5} />
            </div>

            {status.msg ? (
              <div className={`contact-status ${status.type === "error" ? "is-error" : "is-ok"}`}>
                {status.msg}
              </div>
            ) : null}

            <div className="contact-submit">
              <button className="btn" type="submit">
                Send to WhatsApp
              </button>
              <span className="muted contact-note">
                (Tidak mengirim email. Ini hanya membuka WhatsApp dengan template.)
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}