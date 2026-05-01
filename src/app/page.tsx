import Link from "next/link";

import { siteData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="page-section">
        <p className="kicker">Home</p>
        <h1 className="page-title">{siteData.profile.name}</h1>
        <p className="lede">{siteData.profile.bio}</p>
      </section>

      <hr className="rule" />

      <section className="page-section">
        <div className="meta-list">
          <div>
            <h2 className="section-title">Affiliation</h2>
            <p>{siteData.profile.affiliation}</p>
          </div>
          <div>
            <h2 className="section-title">Research Interests</h2>
            <p>{siteData.profile.interests.join(" · ")}</p>
          </div>
          <div>
            <h2 className="section-title">Contact</h2>
            <ul className="inline-list">
              {siteData.profile.contactLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {siteData.recent.length > 0 ? (
        <>
          <hr className="rule" />
          <section className="page-section">
            <div className="section-header">
              <h2 className="section-title">Recent</h2>
              <Link href="/notes" className="subtle-link">
                See notes
              </Link>
            </div>
            <ul className="stack-list">
              {siteData.recent.map((item) => (
                <li key={`${item.kind}-${item.title}`} className="stack-item">
                  <p className="item-meta">
                    {item.kind} · {item.date}
                  </p>
                  <p>
                    <strong>{item.title}</strong>
                    {item.description ? ` — ${item.description}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}
    </>
  );
}
