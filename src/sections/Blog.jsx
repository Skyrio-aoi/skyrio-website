import { posts } from "../data/posts";

function PostCard({ p }) {
  const url = typeof p.url === "string" ? p.url.trim() : "";
  const hasUrl = Boolean(url);

  const CardEl = hasUrl ? "a" : "article";
  const cardProps = hasUrl
    ? {
        href: url,
        target: "_blank",
        rel: "noreferrer",
        "aria-label": `Read: ${p.title}`,
      }
    : {};

  return (
    <CardEl className={`card post-card is-hoverable post-compact ${hasUrl ? "is-link" : ""}`} {...cardProps}>
      <div className="post-meta">
        <div className="post-meta-left">
          {p.tag ? <span className="chip chip-sm">{p.tag}</span> : null}
          {p.sourceLabel ? <span className="post-source muted">Source: {p.sourceLabel}</span> : null}
        </div>
        {p.date ? <time className="post-date muted">{p.date}</time> : null}
      </div>

      <h3 className="post-title">{p.title}</h3>

      {p.excerpt ? <p className="post-excerpt muted">{p.excerpt}</p> : null}

      <div className="post-actions">
        {hasUrl ? (
          <span className="btn btn-sm">Read</span>
        ) : (
          <button className="btn btn-sm ghost is-disabled" type="button" disabled>
            Read
          </button>
        )}
      </div>
    </CardEl>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="card section-card">
      <div className="section-head">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle muted">
          Catatan singkat seputar web, design, data, dan gaming mindset.
        </p>
      </div>

      <div className="grid cols-2" style={{ marginTop: 12 }}>
        {posts.map((p) => (
          <PostCard key={p.id ?? p.title} p={p} />
        ))}
      </div>
    </section>
  );
}