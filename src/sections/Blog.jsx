import { posts } from "../data/posts";

function PostCard({ p }) {
  const hasUrl = Boolean(p.url);

  return (
    <article className="card post-card is-hoverable" style={{ padding: 14 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <span className="chip">{p.tag}</span>
        {p.sourceLabel ? (
          <span className="muted" style={{ fontSize: 13 }}>Source: {p.sourceLabel}</span>
        ) : null}
      </div>

      <h3 style={{ margin: "10px 0 6px", fontSize: 18, lineHeight: 1.35 }}>{p.title}</h3>
      <div className="muted" style={{ fontSize: 13 }}>{p.date}</div>

      <p className="muted" style={{ marginTop: 10, lineHeight: 1.7 }}>
        {p.excerpt}
      </p>

      <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
        {hasUrl ? (
          <a className="btn" href={p.url} target="_blank" rel="noreferrer">
            Read
          </a>
        ) : (
          <button className="btn ghost is-disabled" type="button" disabled>
            Read
          </button>
        )}
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="card" style={{ padding: 18, marginTop: 16 }}>
      <h2 style={{ margin: 0 }}>Blog</h2>
      <p className="muted" style={{ marginTop: 8 }}>
        Catatan singkat seputar web, design, data, dan gaming mindset.
      </p>

      <div className="grid cols-2" style={{ marginTop: 12 }}>
        {posts.map((p) => (
          <PostCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}