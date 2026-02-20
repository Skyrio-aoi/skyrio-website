export const webProjects = [
  {
    title: "EventEase",
    desc: "Sistem manajemen event untuk membuat, mengelola, dan melacak acara lewat dashboard terpusat. Fokus pada alur yang cepat dan UI responsif.",
    role: "Fullstack Developer",
    stack: ["React", "Node.js", "Express", "MySQL", "JWT Auth", "Admin Dashboard"],
    outcome:
      "Auth JWT + proteksi route, CRUD event & peserta, pencarian/filter, serta struktur API REST yang rapi untuk pengembangan lanjut.",
    image: "/portfolio/eventease.png",
    // live: "https://...",
    // repo: "https://github.com/..."
  },
  {
    title: "Cicak Store",
    desc: "Platform top-up game dengan proses order yang instan dan aman. Dilengkapi validasi transaksi dan riwayat pesanan.",
    role: "Fullstack Developer",
    stack: ["React", "Node.js", "Express", "MySQL", "Order Tracking", "REST API"],
    outcome:
      "Validasi order, status transaksi, histori pembelian, dan UI responsif untuk flow checkout yang jelas.",
    image: "/portfolio/cicakstore.png",
  },
  {
    title: "Legalisir PNI",
    desc: "Digitalisasi pengajuan legalisir ijazah secara online untuk mengurangi antrean manual. Ada tracking permohonan dan dashboard admin.",
    role: "Fullstack Developer (System Designer)",
    stack: ["React", "Node.js", "Express", "MySQL", "Auth + Roles", "Tracking Status"],
    outcome:
      "Tracking status permohonan, dashboard admin untuk verifikasi, dan alur pengajuan yang transparan bagi pengguna.",
    image: "/portfolio/legalisir-pni.png",
  },
];

export const dataProjects = [
  {
    title: "Funnel & Retention Dashboard",
    desc: "Pipeline analitik reproducible untuk mengukur conversion funnel dan weekly cohort retention, lalu menyorot drop-off utama untuk prioritas perbaikan.",
    tools: ["Python", "pandas", "NumPy", "Plotly", "Streamlit", "Parquet (pyarrow)"],
    outcome:
      "Tabel funnel harian (conversion rate), heatmap cohort retention (week 0..N), dan rekomendasi eksperimen. Flow: raw CSV → data mart (Parquet) → dashboard.",
    image: "/portfolio/funnel-retention.png",
  },
  {
    title: "Churn Scoring & Retention Playbook",
    desc: "Baseline churn model + risk scoring per customer, diterjemahkan menjadi playbook operasional (HIGH/MEDIUM/LOW) dengan threshold berbasis biaya.",
    tools: ["Python", "pandas", "scikit-learn", "Plotly", "Streamlit", "joblib", "Parquet (pyarrow)"],
    outcome:
      "Risk scoring, guidance aksi per segmen, dan prioritas outreach. Disertai metrik sukses & guardrail. Pipeline: train → score → dashboard.",
    image: "/portfolio/churn-playbook.png",
  },
];