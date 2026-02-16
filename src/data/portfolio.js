export const webProjects = [
  {
    title: "EventEase",
    desc: "Sistem manajemen event berbasis web yang dirancang untuk menyederhanakan proses perencanaan dan koordinasi acara. Dibangun dengan arsitektur RESTful, sistem autentikasi aman, serta dashboard interaktif untuk meningkatkan efisiensi dan pengalaman pengguna.",
    role: "Fullstack Developer",
    stack: ["React", "Node.js", "Express", "MySQL", "JWT Authentication"],
    image: "/portfolio/eventease.png",
  },
  {
    title: "Cicak Store",
    desc: "Platform top-up game berbasis web yang menyediakan layanan pembelian diamond dan voucher game secara instan, aman, dan terpercaya. Dilengkapi sistem validasi pesanan, pelacakan transaksi, serta antarmuka modern dengan desain responsif.",
    role: "Fullstack Developer",
    stack: ["React", "Node.js", "Express", "MySQL", "REST API"],
    image: "/portfolio/cicakstore.png",
  },
  {
    title: "Legalisir PNI",
    desc: "Platform digitalisasi layanan akademik untuk pengajuan legalisir ijazah secara online. Sistem ini meningkatkan efisiensi administrasi, transparansi proses, serta meminimalisir antrean manual melalui fitur tracking permohonan dan dashboard manajemen.",
    role: "Fullstack Developer (System Designer)",
    stack: ["React", "Node.js", "Express", "MySQL", "Authentication System"],
    image: "/portfolio/legalisir-pni.png",
  },
];

export const dataProjects = [
  {
    title: "E-commerce Conversion Funnel & Retention Cohorts (End-to-End Analytics)",
    desc: "Membangun pipeline analitik yang reproducible untuk mengukur konversi per tahap (created → paid → shipped → delivered) dan cohort retention mingguan, serta menyoroti titik drop-off dan segmen berdampak tinggi untuk diprioritaskan.",
    tools: ["Python", "pandas", "NumPy", "Plotly", "Streamlit", "Parquet (pyarrow)"],
    outcome:
      "Menghasilkan tabel funnel harian berisi conversion rate, heatmap cohort retention (minggu 0..N), dan bagian rekomendasi yang siap untuk eksperimen (perbaikan drop-off utama + strategi winback). Alur sepenuhnya reproducible: raw CSV → data mart (Parquet) → dashboard.",
    image: "/portfolio/funnel-retention.png",
  },
  {
    title: "Churn Risk Scoring & Retention Playbook (Cost-Sensitive Thresholding)",
    desc: "Melatih model baseline churn, menghasilkan risk score per pelanggan, dan menerjemahkan prediksi menjadi playbook operasional (HIGH/MEDIUM/LOW) beserta daftar prioritas outreach menggunakan threshold keputusan berbasis biaya.",
    tools: ["Python", "pandas", "scikit-learn", "Plotly", "Streamlit", "joblib", "Parquet (pyarrow)"],
    outcome:
      "Menghasilkan churn risk scoring, panduan tindakan berbasis segmen, dan daftar prioritas untuk outreach retensi. Disertai success metric dan guardrail untuk mendukung pengambilan keputusan di dunia nyata. Pipeline reproducible: train → score → dashboard.",
    image: "/portfolio/churn-playbook.png",
  },
];
