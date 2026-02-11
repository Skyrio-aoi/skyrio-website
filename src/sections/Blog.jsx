import { posts } from "../data/posts";

export default function Blog() {
  return (
    <section id="blog" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>Blog</h2>
      <p className="muted">Catatan singkat seputar web, design, data, dan gaming mindset.</p>

      <div className="grid cols-2" style={{ marginTop: 10 }}>
        {posts.map((p) => (
          <div key={p.slug} className="card" style={{ padding: 14 }}>
            <div className="chip">{p.category}</div>
            <div style={{ fontWeight: 900, marginTop: 10 }}>{p.title}</div>
            <div className="muted" style={{ marginTop: 8 }}>
              {p.date}
            </div>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              {p.content.slice(0, 120)}...
            </p>
            <a className="btn ghost" href="#" style={{ textDecoration: "none" }}>
              Read (mock)
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
