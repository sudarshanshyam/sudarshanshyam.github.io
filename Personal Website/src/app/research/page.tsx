import { siteData } from "@/lib/data";

export default function ResearchPage() {
  return (
    <>
      <section className="page-section">
        <p className="kicker">Research</p>
        <h1 className="page-title">Research</h1>
        <p className="intro">{siteData.research.intro}</p>
      </section>

      <hr className="rule" />

      <section className="page-section">
        <ul className="stack-list">
          {siteData.research.publications.map((paper) => (
            <li key={`${paper.title}-${paper.year}`} className="stack-item">
              <h2 className="entry-title">{paper.title}</h2>
              <p>{paper.authors}</p>
              <p className="item-meta">
                {paper.venue} · {paper.year}
              </p>
              {paper.summary ? <p className="entry-summary">{paper.summary}</p> : null}
              <ul className="entry-links">
                {paper.links.map((link) => (
                  <li key={`${paper.title}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
